/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { Component, createRef, type RefObject } from "react";

import { Box, type BoxProps } from "./Box";

type Props = {
  data: number[][];
} & Partial<{
  fillColor: string;
  rangeX: Range;
  rangeY: Range;
  strokeColor: string;
  strokeWidth: number;
}> &
  BoxProps;

type State = {
  viewBox: Range;
};

type Point = number[];
type Range = [number, number];

function normalizeData(
  data: Point[],
  scale: number[],
  rangeX?: Range,
  rangeY?: Range,
) {
  if (data.length === 0) {
    return [];
  }

  const min: Point = [];
  const max: Point = [];

  for (const point of data) {
    min.push(Math.min(...point));
    max.push(Math.max(...point));
  }

  if (rangeX !== undefined) {
    const [minX, maxX] = rangeX;
    min[0] = minX;
    max[0] = maxX;
  }

  if (rangeY !== undefined) {
    const [minY, maxY] = rangeY;
    min[1] = minY;
    max[1] = maxY;
  }

  const normalized: Point[] = [];

  for (const point of data) {
    const normalizedPoint: Point = [];

    for (let i = 0; i < point.length; i++) {
      const value = point[i];
      const minValue = min[i];
      const maxValue = max[i];
      const scaleValue = scale[i];
      normalizedPoint.push(
        ((value - minValue) / (maxValue - minValue)) * scaleValue,
      );
    }
    normalized.push(normalizedPoint);
  }

  return normalized;
}

function dataToPolylinePoints(data: Point[]) {
  let points = "";
  for (const point of data) {
    points += point[0] + "," + point[1] + " ";
  }
  return points;
}

class LineChart extends Component<Props> {
  ref: RefObject<HTMLDivElement>;
  state: State;

  constructor(props: Props) {
    super(props);
    this.ref = createRef();
    this.state = {
      // Initial guess
      viewBox: [600, 200],
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const element = this.ref.current;
    if (!element) {
      return;
    }
    this.setState({
      viewBox: [element.offsetWidth, element.offsetHeight],
    });
  };

  render() {
    const {
      data = [],
      fillColor = "none",
      rangeX,
      rangeY,
      strokeColor = "#ffffff",
      strokeWidth = 2,
      ...rest
    } = this.props;
    const { viewBox } = this.state;
    const normalized = normalizeData(data, viewBox, rangeX, rangeY);
    // Push data outside viewBox and form a fillable polygon
    if (normalized.length > 0) {
      const [first] = normalized;
      const last = normalized[normalized.length - 1];
      normalized.push([viewBox[0] + strokeWidth, last[1]]);
      normalized.push([viewBox[0] + strokeWidth, -strokeWidth]);
      normalized.push([-strokeWidth, -strokeWidth]);
      normalized.push([-strokeWidth, first[1]]);
    }
    const points = dataToPolylinePoints(normalized);
    const divProps = { ...rest, className: "", ref: this.ref };

    return (
      <Box position="relative" {...rest}>
        <Box {...divProps}>
          <svg
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            }}
            viewBox={`0 0 ${viewBox[0]} ${viewBox[1]}`}
          >
            <polyline
              fill={fillColor}
              points={points}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              transform={`scale(1, -1) translate(0, -${viewBox[1]})`}
            />
          </svg>
        </Box>
      </Box>
    );
  }
}

export const Chart = {
  Line: LineChart,
};
