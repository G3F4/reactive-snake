import React from 'react';
import { render } from '@testing-library/react';
import Fruit from '../Fruit';

it('renders without crashing', () => {
  const { container } = render(
    <Fruit />,
  );

  // @ts-ignore
  expect(container.firstChild.classList.contains('Fruit')).toBeTruthy();
});
