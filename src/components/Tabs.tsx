/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { type PropsWithChildren, type ReactNode } from "react";

import { canRender, classes } from "../common/react";
import { type BoxProps, computeBoxClassName, computeBoxProps } from "./Box";
import { Icon } from "./Icon";

type Props = Partial<{
  className: string;
  fill: boolean;
  fluid: boolean;
  vertical: boolean;
}> &
  BoxProps &
  PropsWithChildren;

type TabProps = Partial<{
  className: string;
  color: string;
  icon: string;
  leftSlot: ReactNode;
  onClick: (e?) => void;
  rightSlot: ReactNode;
  selected: boolean;
}> &
  BoxProps &
  PropsWithChildren;

export function Tabs(props: Props) {
  const { children, className, fill, fluid, vertical, ...rest } = props;

  return (
    <div
      className={classes([
        "Tabs",
        vertical ? "Tabs--vertical" : "Tabs--horizontal",
        fill && "Tabs--fill",
        fluid && "Tabs--fluid",
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {children}
    </div>
  );
}

function Tab(props: TabProps) {
  const {
    children,
    className,
    color,
    icon,
    leftSlot,
    rightSlot,
    selected,
    ...rest
  } = props;

  return (
    <div
      className={classes([
        "Tab",
        "Tabs__Tab",
        "Tab--color--" + color,
        selected && "Tab--selected",
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {(canRender(leftSlot) && <div className="Tab__left">{leftSlot}</div>) ||
        (!!icon && (
          <div className="Tab__left">
            <Icon name={icon} />
          </div>
        ))}
      <div className="Tab__text">{children}</div>
      {canRender(rightSlot) && <div className="Tab__right">{rightSlot}</div>}
    </div>
  );
}

Tabs.Tab = Tab;
