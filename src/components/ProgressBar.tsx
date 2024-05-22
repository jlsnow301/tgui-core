/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { type PropsWithChildren } from "react";

import { clamp01, keyOfMatchingRange, scale, toFixed } from "../common/math";
import { classes } from "../common/react";
import { CSS_COLORS } from "../constants";
import { type BoxProps, computeBoxClassName, computeBoxProps } from "./Box";

type Props = {
  value: number;
} & Partial<{
  backgroundColor: string;
  className: string;
  color: string;
  height: string | number;
  maxValue: number;
  minValue: number;
  ranges: Record<string, [number, number]>;
  style: Partial<HTMLDivElement["style"]>;
  title: string;
  width: string | number;
}> &
  Partial<BoxProps> &
  PropsWithChildren;

export const ProgressBar = (props: Props) => {
  const {
    children,
    className,
    color,
    maxValue = 1,
    minValue = 0,
    ranges = {},
    value,
    ...rest
  } = props;
  const scaledValue = scale(value, minValue, maxValue);
  const hasContent = children !== undefined;

  const effectiveColor =
    color ?? keyOfMatchingRange(value, ranges) ?? "default";

  // We permit colors to be in hex format, rgb()/rgba() format,
  // a name for a color-<name> class, or a base CSS class.
  const outerProps = computeBoxProps(rest);

  const outerClasses = ["ProgressBar", className, computeBoxClassName(rest)];
  const fillStyles = {
    width: clamp01(scaledValue) * 100 + "%",
  } as any;
  if (
    CSS_COLORS.includes(effectiveColor as any) ||
    effectiveColor === "default"
  ) {
    // If the color is a color-<name> class, just use that.
    outerClasses.push("ProgressBar--color--" + effectiveColor);
  } else {
    // Otherwise, set styles directly.
    outerProps.style = { ...outerProps.style, borderColor: effectiveColor };
    fillStyles.backgroundColor = effectiveColor;
  }

  return (
    <div className={classes(outerClasses)} {...outerProps}>
      <div
        className="ProgressBar__fill ProgressBar__fill--animated"
        style={fillStyles}
      />
      <div className="ProgressBar__content">
        {hasContent ? children : toFixed(scaledValue * 100) + "%"}
      </div>
    </div>
  );
};
