import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: './src/index.js',
    output: [{
      name: 'videojs-xhr-wrapper',
      file: 'dist/videojs-xhr-wrapper.js',
      format: 'umd',
    },{
      file: 'es/index.js',
      format: 'es'
    }, {
      file: 'cjs/index.js',
      format: 'cjs'
    }],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
]