/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import styles from '../styles/components/Dimmer.module.scss';

import { classes } from '../common/react';

import { Box, BoxProps } from './Box';

export function Dimmer(props: BoxProps) {
  const { className, children, ...rest } = props;

  return (
    <Box className={classes([styles.dimmer, className])} {...rest}>
      <div className="Dimmer__inner">{children}</div>
    </Box>
  );
}
