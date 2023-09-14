import Header from "@/app/components/Header"
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react';



afterEach(cleanup);


test('Header renders correctly', () => {
  const { getByText } = render(<Header />);
  
  const headerElement = getByText('FPL TRACKER');
  
  // Perform assertions
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveStyle('backgroundImage: url(/tacticsboardsmall.png)');
  expect(headerElement).toHaveStyle('backgroundRepeat: no-repeat');
});