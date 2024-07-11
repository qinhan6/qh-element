<script lang="ts" setup>
/**
 * Button.vue
 * Button.test.tsx
 * types.ts
 * style.css
 * constants.ts
 */

import { ref } from 'vue';
import type { ButtonProps, ButtonInstance } from './type';
import { throttle } from 'lodash-es';

defineOptions({
  name: 'QhButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
});

interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e: MouseEvent) => {
  emits('click', e);
}

const handleBtnClickThrottle = throttle(
  handleBtnClick, props.throttleDuration
);

defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <component 
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    class="qh-button"
    :class="{
      [`qh-button--${type}`]: type,
      [`qh-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading ? true : void 0"
    @click="
      (e: MouseEvent) => useThrottle 
      ? handleBtnClickThrottle(e) 
      : handleBtnClick(e)
    "
  >
    <slot  />
  </component>
</template>

<style scoped>
@import "./style.css";
</style>