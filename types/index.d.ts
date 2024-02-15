/*
Based on:
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chenfengyuan__vue-qrcode/index.d.ts
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/aa5c66c087896ff55568b76ae49f77321ba0123a/types/vue-datetime/index.d.ts
*/


import { VueConstructor, PluginFunction } from 'vue';

interface FpaInlineSvgProps {
    src: string;
    title?: string;
    transformSource?: (svg: SVGElement) => SVGElement;
    keepDuringLoading?: boolean;
}

interface FpaInlineSvgPlugin {
    install: PluginFunction<never>
}

export declare const FpaInlineSvgPlugin: FpaInlineSvgPlugin;

interface FpaInlineSvgConstructor extends VueConstructor {
    props: FpaInlineSvgProps;
}

export declare const FpaInlineSvgComponent: FpaInlineSvgConstructor;

export default FpaInlineSvgComponent;
