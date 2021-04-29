import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(),styleImport({
		libs:[
			{
				// antd 按需导入
				libraryName: 'antd',
				esModule: true,
				resolveStyle: (name) => {
					return `antd/es/${name}/style/index`;
				},
			},
		]
	})],
	css:{
		preprocessorOptions:{
			less:{
				javascriptEnabled: true
			}
		}
	},
	server:{
		proxy:{
			'v1/api/': {
				target: 'http://localhost:3000'
			},
		}
	},
	esbuild: {
		jsxInject: 'import React from \'react\''
	},
	resolve:{
		alias:[
			{
				find:'@',replacement:path.resolve(__dirname,'src')
			},
			{ find: /^~/, replacement: '' },
		]
	}
});
