import swPrecache from 'sw-precache';
import { getAbsolutePath, getSettings } from 'roc';
import WebpackOnBuildPlugin from 'on-build-webpack';

export default ({ previousValue: webpackConfig }) => (target) => {
    if (target === 'web'){
        return () => {
            const newWebpackConfig = { ...webpackConfig };
            const buildSettings = getSettings('build');

            const DIST = (buildSettings.mode === 'dist');

            if(DIST){
                let clientOutput = buildSettings.output.web,
                    absClientOutput = getAbsolutePath(clientOutput),
                    winClientOutput = absClientOutput.replace(/\\/g, '/');

                let multiStrip = {};
                multiStrip[absClientOutput] = '';
                multiStrip[winClientOutput] = '';

                newWebpackConfig.plugins.push(
                    new WebpackOnBuildPlugin(function(stats){
                        swPrecache.write(`${absClientOutput}/service-worker.js`, {
                            staticFileGlobs: [absClientOutput + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
                            stripPrefixMulti: multiStrip
                        }, () => { console.log('service-worker.js generated.'); });
                    })
                )
            }
            return newWebpackConfig;
        }
    } else {
        return () => {
            return webpackConfig;
        };
    }
};

