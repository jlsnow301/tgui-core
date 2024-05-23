/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { type PropsWithChildren, type ReactNode } from "react";

import { type BooleanLike, classes } from "../common/react";
import { Box, unit } from "./Box";
import { Divider } from "./Divider";
import { Tooltip } from "./Tooltip";

export function LabeledList(props: PropsWithChildren) {
  const { children } = props;
  return <table className="LabeledList">{children}</table>;
}

type LabeledListItemProps = Partial<{
  buttons: ReactNode;
  children: ReactNode;
  className: string | BooleanLike;
  color: string;
  /** @deprecated */
  content: any;
  key: string | number;
  label: string | ReactNode | BooleanLike;
  labelColor: string;
  labelWrap: boolean;
  textAlign: string;
  tooltip: string;
  verticalAlign: string;
}>;

function LabeledListItem(props: LabeledListItemProps) {
  const {
    buttons,
    children,
    className,
    color,
    content,
    label,
    labelColor = "label",
    labelWrap,
    textAlign,
    tooltip,
    verticalAlign = "baseline",
  } = props;

  let innerLabel;
  if (label) {
    innerLabel = label;
    if (typeof label === "string") innerLabel += ":";
  }

  if (tooltip !== undefined) {
    innerLabel = (
      <Tooltip content={tooltip}>
        <Box
          as="span"
          style={{
            borderBottom: "2px dotted rgba(255, 255, 255, 0.8)",
          }}
        >
          {innerLabel}
        </Box>
      </Tooltip>
    );
  }

  const labelChild = (
    <Box
      as="td"
      className={classes([
        "LabeledList__cell",
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !labelWrap && "LabeledList__label--nowrap",
      ])}
      color={labelColor}
      verticalAlign={verticalAlign}
    >
      {innerLabel}
    </Box>
  );

  return (
    <tr className={classes(["LabeledList__row", className])}>
      {labelChild}
      <Box
        as="td"
        className={classes(["LabeledList__cell", "LabeledList__content"])}
        color={color}
        // I really don't feel like making a union type for td's, spans, etc.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        colSpan={buttons ? undefined : 2}
        textAlign={textAlign}
        verticalAlign={verticalAlign}
      >
        {content}
        {children}
      </Box>
      {buttons && (
        <td className="LabeledList__cell LabeledList__buttons">{buttons}</td>
      )}
    </tr>
  );
}

LabeledList.Item = LabeledListItem;

type LabeledListDividerProps = {
  size?: number;
};

function LabeledListDivider(props: LabeledListDividerProps) {
  const padding = props.size ? unit(Math.max(0, props.size - 1)) : 0;
  return (
    <tr className="LabeledList__row">
      <td
        colSpan={3}
        style={{
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        <Divider />
      </td>
    </tr>
  );
}

LabeledList.Divider = LabeledListDivider;
