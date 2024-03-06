import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../mocks/resCardMock";

test("Should render RestaurantCard component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard item={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Tossin Pizza");

  expect(name).toBeInTheDocument();
});

test("Should render PromotedRestaurantCard component with props data", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(
    <BrowserRouter>
      <PromotedRestaurantCard item={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Tossin Pizza");

  expect(name).toBeInTheDocument();
});
