import swPrecache from 'sw-precache';
import { getAbsolutePath } from 'roc';

export default ({
    context: { config: { settings: { build: buildSettings }}}
}) => {
    if(buildSettings.noSW){
        return undefined;
    } else {
        let clientOutput = buildSettings.output.web,
            absClientOutput = getAbsolutePath(clientOutput);
        console.log(absClientOutput);
        return () => {
            // TODO: This is pretty bad, but figure out how to make this happen on build end, haven't found any such hooks so far.
            setTimeout( () => {
            swPrecache.write(`${absClientOutput}/service-worker.js`, {
                staticFileGlobs: [absClientOutput + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
                stripPrefix: absClientOutput
            }, () => { console.log('SW precache generated.'); });
            }, 10000)
        }
    }
};
