import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel({
        babelrc: false,
        presets: [['env', { modules: false }]],
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'SumFloat',
      },
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
      },
    ],
  },
]
