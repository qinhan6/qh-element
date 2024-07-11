import { makeInstaller } from '@my-element/utils';
import components from './components';
import '@my-element/theme/index.css'

const installer = makeInstaller(components);

export * from './components';
export default installer;