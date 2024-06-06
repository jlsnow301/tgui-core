/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import style from '../styles/components/BlockQuote.module.scss';

import { classes } from '../common/react';

import { Box, BoxProps } from './Box';

export function BlockQuote(props: BoxProps) {
  const { className, ...rest } = props;

  return <Box className={classes([style.blockQuote, className])} {...rest} />;
}
