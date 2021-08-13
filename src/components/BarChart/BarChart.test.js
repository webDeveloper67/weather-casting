import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

import BarChart from "./BarChart";

const mockStore = configureStore([]);

describe("Displaying Barchart", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});

    component = shallow(
      <Provider store={store}>
        <BarChart />
      </Provider>
    );
  });

  it("BarChart renders", () => {
    expect(component.exists()).toEqual(true);
  });
});
