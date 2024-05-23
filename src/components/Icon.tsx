/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @author Original Aleksej Komarov
 * @author Changes ThePotato97
 * @license MIT
 */

import { type ReactNode } from "react";

import { type BooleanLike, classes } from "../common/react";
import { type BoxProps, computeBoxClassName, computeBoxProps } from "./Box";

const FA_OUTLINE_REGEX = /-o$/;

type IconPropsUnique = { name: string } & Partial<{
  className: string;
  rotation: number;
  size: number;
  spin: BooleanLike;
  style: Partial<HTMLDivElement["style"]>;
}>;

export type IconProps = IconPropsUnique & BoxProps;

export function Icon(props: IconProps) {
  const { className, name, rotation, size, spin, ...rest } = props;

  const customStyle = rest.style ?? {};
  if (size) {
    customStyle.fontSize = size * 100 + "%";
  }
  if (rotation) {
    customStyle.transform = `rotate(${rotation}deg)`;
  }
  rest.style = customStyle;

  const boxProps = computeBoxProps(rest);

  let iconClass = "";
  if (name.startsWith("tg-")) {
    // tgfont icon
    iconClass = name;
  } else {
    // font awesome icon
    const faRegular = name.endsWith("-o");
    const faName = name.replace(FA_OUTLINE_REGEX, "");
    const preprendFa = !faName.startsWith("fa-");

    iconClass = faRegular ? "far " : "fas ";
    if (preprendFa) {
      iconClass += "fa-";
    }
    iconClass += faName;
    if (spin) {
      iconClass += " fa-spin";
    }
  }
  return (
    <i
      className={classes([
        "Icon",
        iconClass,
        className,
        computeBoxClassName(rest),
      ])}
      {...boxProps}
    />
  );
}

type IconStackUnique = {
  children: ReactNode;
  className?: string;
};

export type IconStackProps = IconStackUnique & BoxProps;

export function IconStack(props: IconStackProps) {
  const { children, className, ...rest } = props;

  return (
    <span
      className={classes(["IconStack", className, computeBoxClassName(rest)])}
      {...computeBoxProps(rest)}
    >
      {children}
    </span>
  );
}

Icon.Stack = IconStack;
