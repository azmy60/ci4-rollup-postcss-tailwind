import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'public/scripts/main.js',
    format: 'iife',
    sourcemap: (process.env.NODE_ENV === 'production' ? false : 'inline')
  },
  plugins: [
    resolve(),
    eslint({
      fix: true,
      exclude: ['node_modules/**', 'src/styles/']
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled' 
    }),
    replace({
      preventAssignment: true,
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    (process.env.NODE_ENV === 'production' && terser())]
};