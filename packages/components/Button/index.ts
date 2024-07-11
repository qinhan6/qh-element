import QhButton from "./Button.vue";
import type { App } from 'vue';

QhButton.install = (app: App) => {
  app.component(QhButton.name!, QhButton);
};

export { QhButton }

export * from './type';