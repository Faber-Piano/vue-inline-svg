import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';


export default [
    {
        input: 'src/index.js',
        external: ['vue'],
        plugins: [
            babel(),
        ],
        output: [
            {
                format: 'umd',
                file: 'dist/fpa-vue-inline-svg.js',
                name: 'FpaVueInlineSvg',
            },
            // {
            //     format: 'cjs',
            //     file: 'dist/vue-inline-svg.cjs',
            // },
            {
                format: 'umd',
                file: 'dist/fpa-vue-inline-svg.min.js',
                name: 'FpaVueInlineSvg',
                globals: {vue: 'Vue'},
                plugins: [
                    terser(),
                ],
            },
        ],
    },
]
