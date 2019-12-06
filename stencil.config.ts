import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'intro-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        // 'src/globals/variables.scss',
        // 'src/globals/mixins.scss'
      ]
    }),
    postcss({
      plugins: [
        require('postcss-inline-svg')({
          paths: ['src/assets']
        }),
        require('autoprefixer')({
          grid: false
        })
      ]
    })
  ]
};
