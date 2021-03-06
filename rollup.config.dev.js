// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/index.js',
  targets: [
    {
      dest: 'playground/js.performance.es.js', // equivalent to --output
      format: 'es',
      sourcemapFile: true
    },
    {
      dest: 'playground/js.performance.umd.js',
      format: 'umd',
      name: 'JSPerf',
      sourcemapFile: true
    },
    {
      dest: 'playground/js.performance.cjs.js', // equivalent to --output
      format: 'cjs',
      sourcemapFile: true
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
