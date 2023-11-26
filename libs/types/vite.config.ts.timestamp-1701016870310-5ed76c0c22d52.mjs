// libs/types/vite.config.ts
import { defineConfig } from "file:///Users/I347305/Src/gigya/gigya-nx/node_modules/.pnpm/vite@5.0.2_@types+node@20.10.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/I347305/Src/gigya/gigya-nx/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@20.10.0_vite@5.0.2/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
import { nxViteTsPaths } from "file:///Users/I347305/Src/gigya/gigya-nx/node_modules/.pnpm/@nx+vite@17.1.3_@swc-node+register@1.6.8_@swc+core@1.3.99_@types+node@20.10.0_nx@17.1.3_types_lmqh4umfwmros7ayj5szeoga3u/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import { vitePluginTypescriptTransform } from "file:///Users/I347305/Src/gigya/gigya-nx/libs/types/node_modules/.pnpm/vite-plugin-typescript-transform@1.2.2_typescript@5.3.2_vite@5.0.2/node_modules/vite-plugin-typescript-transform/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/I347305/Src/gigya/gigya-nx/libs/types";
var vite_config_default = defineConfig({
  cacheDir: "../../node_modules/.vite/types",
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: "src",
      tsConfigFilePath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json"),
      skipDiagnostics: true
    }),
    vitePluginTypescriptTransform({
      enforce: "pre",
      filter: {
        files: {
          include: /\.ts$/
        }
      },
      tsconfig: {
        location: path.join(__vite_injected_original_dirname, "tsconfig.lib.json")
      }
    })
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
      entry: "src/index.ts",
      name: "types",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGlicy90eXBlcy92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9JMzQ3MzA1L1NyYy9naWd5YS9naWd5YS1ueC9saWJzL3R5cGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvSTM0NzMwNS9TcmMvZ2lneWEvZ2lneWEtbngvbGlicy90eXBlcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvSTM0NzMwNS9TcmMvZ2lneWEvZ2lneWEtbngvbGlicy90eXBlcy92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPSd2aXRlc3QnIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuaW1wb3J0IHt2aXRlUGx1Z2luVHlwZXNjcmlwdFRyYW5zZm9ybX0gZnJvbSBcInZpdGUtcGx1Z2luLXR5cGVzY3JpcHQtdHJhbnNmb3JtXCI7XG4gIFxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjYWNoZURpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS90eXBlcycsXG5cbiAgcGx1Z2luczogW1xuICAgIG54Vml0ZVRzUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgICAgc2tpcERpYWdub3N0aWNzOiB0cnVlLFxuICAgIH0pLFxuICAgIHZpdGVQbHVnaW5UeXBlc2NyaXB0VHJhbnNmb3JtKHtcbiAgICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgICAgXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICBpbmNsdWRlOiAvXFwudHMkLyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0c2NvbmZpZzoge1xuICAgICAgICBcbiAgICAgICAgbG9jYXRpb246IHBhdGguam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuXG4gICAgICB9XG4gICAgfSlcbiAgXSxcblxuICAvLyBVbmNvbW1lbnQgdGhpcyBpZiB5b3UgYXJlIHVzaW5nIHdvcmtlcnMuXG4gIC8vIHdvcmtlcjoge1xuICAvLyAgcGx1Z2luczogWyBueFZpdGVUc1BhdGhzKCkgXSxcbiAgLy8gfSxcblxuICAvLyBDb25maWd1cmF0aW9uIGZvciBidWlsZGluZyB5b3VyIGxpYnJhcnkuXG4gIC8vIFNlZTogaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHMuXG4gICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXG4gICAgICBuYW1lOiAndHlwZXMnLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICAvLyBDaGFuZ2UgdGhpcyB0byB0aGUgZm9ybWF0cyB5b3Ugd2FudCB0byBzdXBwb3J0LlxuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSB5b3VyIHBhY2thZ2UuanNvbiBhcyB3ZWxsLlxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEV4dGVybmFsIHBhY2thZ2VzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkIGludG8geW91ciBsaWJyYXJ5LlxuICAgICAgZXh0ZXJuYWw6IFtdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsWUFBWSxVQUFVO0FBQ3RCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVEscUNBQW9DO0FBTDVDLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUVWLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLGtCQUF1QixVQUFLLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzFELGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUNELDhCQUE4QjtBQUFBLE1BQzVCLFNBQVM7QUFBQSxNQUVULFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBRVIsVUFBZSxVQUFLLGtDQUFXLG1CQUFtQjtBQUFBLE1BRXBEO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
