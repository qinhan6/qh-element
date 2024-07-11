# 需求分析 [XQFX]

## 用户调研摘要
- 用户群体：主要面向Web开发者，需要一个易用、灵活、样式丰富的按钮组件。
- 用户需求：对按钮组件有多样化的需求，包括不同的尺寸、类型、图标、加载状态等。

## 竞品对比报告
- 竞品分析：市面上存在多个成熟的组件库，例如Bootstrap、Ant Design等。
- 竞品优势：Bootstrap以其广泛的社区支持和丰富的组件库著称；Ant Design则以其企业级解决方案和定制化选项受到欢迎。

## 市场趋势分析
- 目前市场对于组件库的需求趋向于模块化、可定制化，同时注重响应式设计和移动端适配。

## 用户痛点
- 用户在使用现有组件库时可能会遇到样式不一致、难以实现特定功能的问题。

## 期望功能
- 用户期望按钮组件能够支持更多的自定义选项，如自定义图标、颜色、形状等。

## 安全性需求
- 组件库需要保证无安全漏洞，避免潜在的XSS攻击等问题。

# 功能点设计 [GNSJ]

## 功能描述
- 设计一个高度可定制的按钮组件，支持多种尺寸、类型、图标和状态。

## API 设计
- 按钮组件将接受以下属性：
  - `size`: 尺寸，可选值包括`large`、`default`、`small`。
  - `type`: 类型，可选值包括`primary`、`success`、`warning`、`danger`、`info`。
  - `icon`: 图标，支持自定义图标名称。
  - `loading`: 是否显示加载状态。
  - `disabled`: 是否禁用按钮。

## 交互关系
- 用户与按钮的交互将根据按钮的状态（如加载中、禁用）有不同的视觉和操作反馈。

## 功能实现细节
- 按钮组件将根据传入的属性动态渲染样式和行为。

## 用户操作流程
1. 用户通过配置按钮组件的属性来创建按钮。
2. 用户点击按钮，触发相应的事件处理函数。
3. 如果按钮处于加载或禁用状态，将显示相应的视觉反馈，并阻止进一步的操作。

## 异常处理
- 对于用户的不当操作或配置错误，组件将提供清晰的错误提示，并保持界面的稳定性。

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // Props: type
  it("should has the correct type class when type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // Props: size
  it("should has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${size}`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])(
    "should has the correct class when prop %s is set to true",
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
        global: {
          stubs: ["ErIcon"],
        },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });

  // Props: tag
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // Events: click
  it("should emits a click event when the button is clicked", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});