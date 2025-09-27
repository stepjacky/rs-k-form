import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginVue2Jsx } from "@rsbuild/plugin-vue2-jsx";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginUmd } from "@rsbuild/plugin-umd";
import less from "less";
export default defineConfig({
  source: {
    entry: {
      //index: "./src/index.js",
      "k-form-design": "./src/lib/index.js",
      // "k-form-design-min": "./src/lib/mini.js",
    },
    include: [
      /node_modules[\\/]zod[\\/]/,
      /node_modules[\\/]ant-design-vue[\\/]/,
    ],
  },
  output: {
    filename: "k-form-design",
    cleanDistPath: true,
    assetPrefix: "/assets/",
    copy: [
      // { from: './public/assets' },
      /// { form: "./public/favicon.ico" }
    ],
  },
  html: {
    crossorigin: true,
    title: "K表单设计器",
  },
  server: {
    host: "127.0.0.1",
    port: 3000,
    publicDir: {
      copyOnBuild: true,
    },
  },
  dev: {
    assetPrefix: "/assets/",
    progressBar: true,
  },
  plugins: [
    pluginVue2(),
    pluginVue2Jsx(),
    pluginLess({
      lessLoaderOptions: {
        implementation: less,
        lessOptions: {
          modifyVars: {
            "primary-color": "#13c2c2",
            // "primary-color": "#9867f7",
            "layout-color": "#9867f7",
            // "layout-color": "#ee88aa"
          },
          javascriptEnabled: true,
        },
      },
    }),
    pluginSass(),
    pluginUmd({
      name: "Kform",

      // export: "default",
    }),
  ],
  performance: {
    chunkSplit: {
      strategy: "all-in-one",
    },

    removeConsole: true,
  },
  tools: {
    rspack: {
      output: {
        asyncChunks: false,
      },
    },
  },
});
