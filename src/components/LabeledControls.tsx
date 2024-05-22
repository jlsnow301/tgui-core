/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { Flex, type FlexProps } from "./Flex";

export function LabeledControls(props: FlexProps) {
  const { children, wrap, ...rest } = props;

  return (
    <Flex
      align="stretch"
      justify="space-between"
      mx={-0.5}
      wrap={wrap}
      {...rest}
    >
      {children}
    </Flex>
  );
}

type ItemProps = {
  label: string;
} & FlexProps;

function LabeledControlsItem(props: ItemProps) {
  const { children, label, mx = 1, ...rest } = props;

  return (
    <Flex.Item mx={mx}>
      <Flex
        align="center"
        direction="column"
        height="100%"
        justify="space-between"
        textAlign="center"
        {...rest}
      >
        <Flex.Item />
        <Flex.Item>{children}</Flex.Item>
        <Flex.Item color="label">{label}</Flex.Item>
      </Flex>
    </Flex.Item>
  );
}

LabeledControls.Item = LabeledControlsItem;
