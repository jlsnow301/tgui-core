/**
 * @file
 * @copyright 2021 Aleksej Komarov
 * @license MIT
 */

import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  LabeledList,
  ProgressBar,
  Section,
} from '../components';

export const meta = {
  title: 'ProgressBar',
  render: () => <Story />,
};

const Story = (props) => {
  const [progress, setProgress] = useState(0.5);
  const [color, setColor] = useState('');

  return (
    <Section>
      <ProgressBar
        value={progress}
        color={color}
        ranges={{
          good: [0.5, Infinity],
          bad: [-Infinity, 0.1],
          average: [0, 0.5],
        }}
      >
        Value: {Number(progress).toFixed(1)}
      </ProgressBar>
      <Box mt={1}>
        <LabeledList>
          <LabeledList.Item label="Adjust value">
            <Button
              content="-0.1"
              onClick={() => setProgress(progress - 0.1)}
            />
            <Button
              content="+0.1"
              onClick={() => setProgress(progress + 0.1)}
            />
          </LabeledList.Item>
          <LabeledList.Item label="Override color">
            <Input value={color} onChange={(e, value) => setColor(value)} />
          </LabeledList.Item>
        </LabeledList>
      </Box>
    </Section>
  );
};
