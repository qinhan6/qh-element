import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "info" | "warning" | "danger";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  block?: boolean;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// 导入报错？
export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | undefined>;
}