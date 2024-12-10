import { defineConfig } from 'rollup';


export default defineConfig({
    input: 'main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
    },
    treeshake: true,
});