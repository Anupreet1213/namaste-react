import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import resList from "../../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

// test("Should render the body componenet", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });
//   const button = screen.getByRole("button", { name: "Click to Filter" });
//   const inputBox = screen.getByPlaceholderText("Search by Name");
//   const resCard = screen.getAllByTestId("resCard");

//   fireEvent.change(inputBox, { target: { value: "burger" } });
//   expect(resCard.length).toBe(1);

//   fireEvent.click(button);
// });
