
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/store',
  envPrefix: ['GIGYA_', 'PUBLIC_', 'VITE_'],
  
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/my-element.ts',
      name: 'gigya-wc',
      fileName: 'my-element',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs', "umd"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  },
  server:{
    "host": "local.pyzlo.in",
    "hmr": true,
    "open": true,
    "cors": true,
     "port": 443,
    "https": {
      "key": "./cert/local.pyzlo.in/privkey1.pem",
      "cert": "./cert/local.pyzlo.in/fullchain1.pem"
    }
  }
});
