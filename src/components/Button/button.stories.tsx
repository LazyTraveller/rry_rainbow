import React from 'react';
import { Button } from './Button';

export const ComButton = () => (
  <div>
   <Button primary  label='Button' />
   <Button size='large'  label='Button' />
   <Button size='small'  label='Button' />
  </div>
)

export default {
  title: '布局/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};