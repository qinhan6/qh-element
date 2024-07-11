import { QhButton } from "@my-element/components";
import { makeInstaller } from "@my-element/utils";

import "@my-element/theme/index.css";

const components = [QhButton] as any[];

export { QhButton }

export default makeInstaller(components);