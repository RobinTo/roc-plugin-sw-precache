import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';
import { lazyFunctionRequire } from 'roc';

const lazyRequire = lazyFunctionRequire(require);
export default {
    config,
    meta,
    actions: [
        {
            hook: 'build-webpack',
            action: lazyRequire('../sw-precache'),
        },
    ],
};
