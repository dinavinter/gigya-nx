/// <reference types='vitest' />
import {defineConfig, loadEnv} from 'vite';

import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {viteTypescript} from "../../vite.config";
import path from "path";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');
    console.log('env', env);
    return {
        envPrefix: ['GIGYA_', 'PUBLIC_', 'VITE_'],
        cacheDir: '../../node_modules/.vite/demo',
        envDir: '../..', 
        server: {
            port: 4200,
            host: 'localhost',
        },

        preview: {
            port: 4300,
            host: 'localhost',
        },

        plugins: [nxViteTsPaths(), viteTypescript({
            tsconfig: {

                location: path.join(__dirname, 'tsconfig.app.json'),


            }})],

        // Uncomment this if you are using workers.
        // worker: {
        //  plugins: [ nxViteTsPaths() ],
        // },

        test: {
            globals: true,
            cache: {
                dir: '../../node_modules/.vitest',
            },
            environment: 'jsdom',
            include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        },
    }
});
