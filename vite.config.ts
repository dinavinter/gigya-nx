/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {Options, vitePluginTypescriptTransform} from "vite-plugin-typescript-transform";

export function viteTypescript(options?: Options) {
  return vitePluginTypescriptTransform({
    enforce: 'pre',

    filter: {
      files: {
        include: /\.ts$/,
      },
    },
    tsconfig: {

      location: path.join(__dirname, 'tsconfig.json'),

    } ,
    ...(options || {}),

  })
}

export default defineConfig({
  cacheDir: '../../node_modules/.vite/gigya-nx',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
      viteTypescript()
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

   
  
  
});


