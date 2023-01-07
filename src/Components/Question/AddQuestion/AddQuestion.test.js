import * as React from "react";
import AddQuestion from "./AddQuestion";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../../reducers";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const store = createStore(reducer);

describe("Add Question Snapshot Tests", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddQuestion />
        </BrowserRouter>
      </Provider>
    );
  });

  it("matching the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("check that Option1 and Option2 are present", () => {
    let firstOption = component.getByText("First Option");
    expect(firstOption).toBeInTheDocument();

    let secondOption = component.getByText("Second Option");
    expect(secondOption).toBeInTheDocument();

    let submitButton = component.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });
});
