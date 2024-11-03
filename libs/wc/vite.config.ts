/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {ModuleFormat} from "rollup";

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/wc',
  optimizeDeps:{
      include :[ 'lit', '@atomico/hooks', 'lit-element', '@lit/reactive-element', '@xstate/fsm', 'atomico']
  },
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],


  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/wc',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true


    },
    ssrManifest: true,



    lib: {

      // Could also be a dictionary or array of multiple entry points.
      entry: {
        index: 'src/index.ts',
        'lib/store': 'src/store/index.ts',
        'lib/screen-set': 'src/screen-set/index.ts',
        'lib/loader': 'src/loader/index.ts',
        'lib/loader/observer': 'src/loader/observer.ts',
        'lib/loader/directive': 'src/loader/directive.ts',
        'lib/store/auth': 'src/store/auth.ts',
        'lib/auth': 'src/auth/index.ts',
        'lib/auth/service': 'src/auth/service.ts',
        // 'lib/auth': 'src/auth/index.ts',
        // 'lib/auth/guard': 'src/auth/guard.ts'
        // 'vendors/@atomico/hooks': '../../node_modules/@atomico/hooks',
        // 'vendors/@atomico/hooks/use-child-nodes': '../../node_modules/@atomico/use-child-nodes',
        // "vendors/atomico/html": "../../node_modules/atomico/html",
        // 'vendors/atomico/use-suspense': '../../node_modules/.pnpm/@atomico+use-attributes@2.0.1_atomico@1.79.2/node_modules/atomico/src/hooks/custom-hooks/use-suspense.js',
        // "vendors/lit/directive": "../../node_modules/lit/directive.js",
        // "vendors/lit/html": "../../node_modules/lit/html.js",
        // "vendors/lit/decorators": "../../node_modules/lit/decorators.js",
        // "vendors/@xstate/fsm": "../../node_modules/@xstate/fsm",
        // "vendors/lit-element": "../../node_modules/lit-element",
        // "vendors/@lit/reactive-element": "../../node_modules/@lit/reactive-element",


      },
      name: 'wc',

      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' , "cjs" ],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
      // preserveSymlinks: true,
      treeshake:"recommended",
      preserveSymlinks: true

    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/js',
      provider: 'v8',
    },
  },
});
