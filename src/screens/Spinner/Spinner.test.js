import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("Spinner renders", () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.exists()).toEqual(true);
  });
});
