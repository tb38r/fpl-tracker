import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import OuterShell from '@/app/components/OuterShell';



test('renders the component with correct image and props', () => {
  const teamName = 'arsenal';
  const name = 'Saka';
  const score = 42;

  const { getByTestId, getByText } = render(
    <OuterShell teamname={teamName} name={name} score={score} />
  );


  // Check if the name and score are displayed correctly
  expect(getByText(name)).toBeInTheDocument();
  expect(getByText(score.toString())).toBeInTheDocument();

});
