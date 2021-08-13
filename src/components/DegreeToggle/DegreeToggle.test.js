import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
import DegreeToggle from "./DegreeToggle";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const wrapper = shallow(<DegreeToggle />);

describe("DegreeToggle", () => {
  test("should activate `Celsius` button on click", (done) => {
    expect(
      wrapper.find('[data-testid="fahrenheit-button"]').prop("variant")
    ).toEqual("outlined");
    expect(
      wrapper.find('[data-testid="celsius-button"]').prop("variant")
    ).toEqual("outlined");

    wrapper.find('[data-testid="celsius-button"]').simulate("click");

    expect(
      wrapper.find('[data-testid="fahrenheit-button"]').prop("variant")
    ).toEqual("outlined");
    expect(
      wrapper.find('[data-testid="celsius-button"]').prop("variant")
    ).toEqual("contained");

    done();
  });

  test("should activate `Fahrenheit` button on click", (done) => {
    wrapper.find('[data-testid="fahrenheit-button"]').simulate("click");

    expect(
      wrapper.find('[data-testid="fahrenheit-button"]').prop("variant")
    ).toEqual("contained");
    expect(
      wrapper.find('[data-testid="celsius-button"]').prop("variant")
    ).toEqual("outlined");

    done();
  });
});
