import {
  Component,
  createRef,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type RefObject,
} from "react";

import { KEY } from "../common/keys";
import { clamp } from "../common/math";
import { type BooleanLike, classes } from "../common/react";
import { AnimatedNumber } from "./AnimatedNumber";
import { Box } from "./Box";

type Props = Required<{
  maxValue: number;
  minValue: number;
  step: number;
  value: number | string;
}> &
  Partial<{
    animated: BooleanLike;
    className: string;

    disabled: BooleanLike;
    fluid: BooleanLike;
    fontSize: string;
    format: (value: number) => string;
    height: string;
    lineHeight: string;
    onChange: (value: number) => void;
    onDrag: (value: number) => void;
    stepPixelSize: number;
    unit: string;
    width: string;
  }>;

type State = {
  currentValue: number;
  dragging: BooleanLike;
  editing: BooleanLike;
  origin: number;
  previousValue: number;
};

export class NumberInput extends Component<Props, State> {
  // Ref to the input field to set focus & highlight
  inputRef: RefObject<HTMLInputElement> = createRef();

  // After this time has elapsed we are in drag mode so no editing when dragging ends
  dragTimeout: NodeJS.Timeout;

  // Call onDrag at this interval
  dragInterval: NodeJS.Timeout;

  // default values for the number input state
  state: State = {
    editing: false,
    dragging: false,
    currentValue: 0,
    previousValue: 0,
    origin: 0,
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount(): void {
    const displayValue = parseFloat(this.props.value.toString());

    this.setState({
      currentValue: displayValue,
      previousValue: displayValue,
    });
  }

  handleDragStart: MouseEventHandler<HTMLDivElement> = (event) => {
    const { disabled, value } = this.props;
    const { editing } = this.state;
    if (disabled ?? editing) {
      return;
    }
    document.body.style["pointer-events"] = "none";

    const parsedValue = parseFloat(value.toString());
    this.setState({
      dragging: false,
      origin: event.screenY,
      currentValue: parsedValue,
      previousValue: parsedValue,
    });

    this.dragTimeout = setTimeout(() => {
      this.setState({
        dragging: true,
      });
    }, 250);
    this.dragInterval = setInterval(() => {
      const { currentValue, dragging, previousValue } = this.state;
      const { onDrag } = this.props;
      if (dragging && currentValue !== previousValue) {
        this.setState({
          previousValue: currentValue,
        });
        onDrag?.(currentValue);
      }
    }, 400);

    document.addEventListener("mousemove", this.handleDragMove);
    document.addEventListener("mouseup", this.handleDragEnd);
  };

  handleDragMove = (event: MouseEvent) => {
    const { disabled, maxValue, minValue, step, stepPixelSize } = this.props;
    if (disabled) {
      return;
    }

    this.setState((prevState) => {
      const state = { ...prevState };

      const offset = state.origin - event.screenY;
      if (prevState.dragging) {
        const stepOffset = isFinite(minValue) ? minValue % step : 0;
        // Translate mouse movement to value
        // Give it some headroom (by increasing clamp range by 1 step)
        state.currentValue = clamp(
          state.currentValue + (offset * step) / (stepPixelSize ?? 1),
          minValue - step,
          maxValue + step,
        );
        // Clamp the final value
        state.currentValue = clamp(
          state.currentValue - (state.currentValue % step) + stepOffset,
          minValue,
          maxValue,
        );
        // Set the new origin
        state.origin = event.screenY;
      } else if (Math.abs(offset) > 4) {
        state.dragging = true;
      }
      return state;
    });
  };

  handleDragEnd = () => {
    const { currentValue, dragging } = this.state;
    const { disabled, onChange, onDrag } = this.props;
    if (disabled) {
      return;
    }
    document.body.style["pointer-events"] = "auto";

    clearInterval(this.dragInterval);
    clearTimeout(this.dragTimeout);

    this.setState({
      dragging: false,
      editing: !dragging,
      previousValue: currentValue,
    });
    if (dragging) {
      onChange?.(currentValue);
      onDrag?.(currentValue);
    } else if (this.inputRef) {
      const input = this.inputRef.current;
      if (input) {
        input.value = `${currentValue}`;
        setTimeout(() => {
          input.focus();
          input.select();
        }, 1);
      }
    }

    document.removeEventListener("mousemove", this.handleDragMove);
    document.removeEventListener("mouseup", this.handleDragEnd);
  };

  handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { editing, previousValue } = this.state;
    const { disabled, maxValue, minValue, onChange, onDrag } = this.props;
    if (disabled ?? !editing) {
      return;
    }

    const targetValue = clamp(
      parseFloat(event.target.value),
      minValue,
      maxValue,
    );
    if (isNaN(targetValue)) {
      this.setState({
        editing: false,
      });
      return;
    }

    this.setState({
      editing: false,
      currentValue: targetValue,
      previousValue: targetValue,
    });
    if (previousValue !== targetValue) {
      onChange?.(targetValue);
      onDrag?.(targetValue);
    }
  };

  handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { disabled, maxValue, minValue, onChange, onDrag } = this.props;
    if (disabled) {
      return;
    }
    const { previousValue } = this.state;

    if (event.key === KEY.Enter) {
      const targetValue = clamp(
        parseFloat(event.currentTarget.value),
        minValue,
        maxValue,
      );
      if (isNaN(targetValue)) {
        this.setState({
          editing: false,
        });
        return;
      }

      this.setState({
        editing: false,
        currentValue: targetValue,
        previousValue: targetValue,
      });
      if (previousValue !== targetValue) {
        onChange?.(targetValue);
        onDrag?.(targetValue);
      }
    } else if (event.key === KEY.Escape) {
      this.setState({
        editing: false,
      });
    }
  };

  render() {
    const { currentValue, dragging, editing } = this.state;

    const {
      animated,
      className,
      fluid,
      fontSize,
      format,
      height,
      lineHeight,
      maxValue,
      minValue,
      unit,
      value,
      width,
    } = this.props;

    let displayValue = parseFloat(value.toString());
    if (dragging) {
      displayValue = currentValue;
    }

    const contentElement = (
      <div className="NumberInput__content">
        {animated && !dragging ? (
          <AnimatedNumber format={format} value={displayValue} />
        ) : format ? (
          format(displayValue)
        ) : (
          displayValue
        )}

        {unit ? " " + unit : ""}
      </div>
    );

    return (
      <Box
        className={classes([
          "NumberInput",
          fluid && "NumberInput--fluid",
          className,
        ])}
        fontSize={fontSize}
        lineHeight={lineHeight}
        minHeight={height}
        minWidth={width}
        onMouseDown={this.handleDragStart}
      >
        <div className="NumberInput__barContainer">
          <div
            className="NumberInput__bar"
            style={{
              height:
                clamp(
                  ((displayValue - minValue) / (maxValue - minValue)) * 100,
                  0,
                  100,
                ) + "%",
            }}
          />
        </div>
        {contentElement}
        <input
          className="NumberInput__input"
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          ref={this.inputRef}
          style={{
            display: !editing ? "none" : "inline",
            height: height,
            lineHeight: lineHeight,
            fontSize: fontSize,
          }}
        />
      </Box>
    );
  }
}
