export default [
  {
    input: 'src/index.js',
    plugins: [],
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
