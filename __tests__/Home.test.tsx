import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it('this has this', () => {
  render(<Home />)// Arrange

  const myElem = screen.getByText('this')//act

  expect(myElem).toBeInTheDocument();//assert
})