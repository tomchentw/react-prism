import {
  default as expect,
} from "expect";

import {
  PrismCode,
} from "../index";

describe(`index`, () => {
  it(`should export components`, () => {
    expect(PrismCode).toExist();
  });
});
