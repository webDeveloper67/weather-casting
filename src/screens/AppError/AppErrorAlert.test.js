import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

import AppErrorAlert from "./AppErrorAlert";

const mockStore = configureStore([]);

describe("Displaying error", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      error: "Error message",
    });

    component = shallow(
      <Provider store={store}>
        <AppErrorAlert />
      </Provider>
    );
  });

  it("AppErrorAlert renders", () => {
    expect(component.exists()).toEqual(true);
  });
});
