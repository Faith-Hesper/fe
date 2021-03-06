import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
// Element Plus自动按需引入配置，先执行 npm install -D unplugin-vue-components unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  define: {
    'process.env': {},
  },
  // resolve: {
  //   extensions: ['.js', '.vue', '.json', ".scss"],
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // },
  server: {
    proxy: {
      '/gaode': {
        target: 'https://restapi.amap.com',
        ws: true,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gaode/, '')
    }
    }
  }
})
