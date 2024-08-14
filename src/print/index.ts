import vPrint from "./packages/vPrint.ts";
import VuePrintLast from "./packages/VuePrintLast.ts";
import type { App } from "vue";

/**
 * 用于 vue.use 安装指令插件
 */
const printPlugin = {
  install(Vue: App) {
    Vue.directive(vPrint.directiveName, vPrint);
  }
};

export { vPrint, printPlugin, VuePrintLast };
