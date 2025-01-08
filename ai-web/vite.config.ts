import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
  },
  // server: {
  //   host: "192.168.0.102",
  //   port: 5100
  // },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        VantResolve(), // Vant 按需加载插件
      ],
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `../es/${name}/style`
        },
      ]
    }),
  ],
});
