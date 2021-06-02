import React from 'react';
import Button  from '.';
import { action } from '@storybook/addon-actions';

export default {
    component: Button,
    title: 'Atoms/Button',
    decorators: [story => <div style={{ padding: '3rem', backgroundColor: 'white' }}>{story()}</div>],
    excludeStories: /.*Data$/,
  };

  export const actionsData = {
    onClick: action('onClick')
}

  export const Default = () => <Button text="Default" {...actionsData}  />;

  export const Disabled = () => <Button text="Default" disabled={true}  />;
