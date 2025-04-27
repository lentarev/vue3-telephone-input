import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import UiCountryCode from "../../ui/UiCountryCode.vue";

describe("UiCountryCode", () => {
  it("renders properly", () => {
    const wrapper = mount(UiCountryCode, { props: { countryCode: "RU" } });
    expect(wrapper.text()).toContain("RU");
  });
});
