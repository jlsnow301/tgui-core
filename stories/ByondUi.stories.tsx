/**
 * @file
 * @copyright 2021 Aleksej Komarov
 * @license MIT
 */

import { useState } from 'react';

import { Button, ByondUi, Section, TextArea } from '../components';

export const meta = {
  title: 'ByondUi',
  render: () => <Story />,
};

const Story = (props) => {
  const [code, setCode] = useState(
    `Byond.winset('${Byond.windowId}', {\n  'is-visible': true,\n})`
  );
  return (
    <>
      <Section title="Button">
        <ByondUi
          params={{
            type: 'button',
            text: 'Button',
          }}
        />
      </Section>
      <Section
        title="Make BYOND calls"
        buttons={<Button icon="chevron-right">Evaluate</Button>}
      >
        <TextArea
          as="textarea"
          width="100%"
          height="10em"
          onChange={(e, value) => setCode(value)}
        >
          {code}
        </TextArea>
      </Section>
    </>
  );
};
