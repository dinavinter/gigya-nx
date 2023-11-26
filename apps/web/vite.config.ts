/// <reference types='vitest' />
import {defineConfig, loadEnv} from 'vite';

// import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import {viteTypescript} from "../../vite.config";
 
export default defineConfig(({mode}) => {
      return {
        envPrefix: ['GIGYA_', 'PUBLIC_', 'VITE_'],
        cacheDir: '../../node_modules/.vite/web',
        envDir: '../..', 
        server:{
            "host": "local.pyzlo.in",
            "hmr": true,
            "open": true,
            "cors": true,
            "logLevel": "info",
            "clearScreen": true,
            "force": true,
            "port": 443,
            "https": {
                "key": "./cert/local.pyzlo.in/privkey1.pem",
                "cert": "./cert/local.pyzlo.in/fullchain1.pem"
            }
        },

        preview: {
            port: 4300,
            host: 'localhost',
        },

        

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
        }
    }
});