import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("Should render login button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logButton = screen.getByRole("button");
  expect(logButton).toBeInTheDocument();
});

test("Should chnage login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { name: "Login" });
  fireEvent.click(button);
  const LogOutButton = screen.getByRole("button", { name: "Logout" });
  expect(LogOutButton).toBeInTheDocument();
});
