import Login from "./Login";
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

describe("Login Snapshot Tests", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });

  it("matching the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("firing Events - check that error message is not present initially", async () => {
    expect(component.queryByTestId("errorMessage")).not.toBeInTheDocument();
  });

  it("firing Events - check for invalid username/password", async () => {
    var userNameInput = component.getByTestId("username");
    fireEvent.change(userNameInput, { target: { value: "Mike" } });

    var passwordInput = component.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(component.getByTestId("errorMessage")).toBeInTheDocument();
    });
  });
});
