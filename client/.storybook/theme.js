import { create } from '@storybook/theming/create'

import logo from '../public/images/logo.svg'

export default create({
  base: 'light',

  colorPrimary: '#FF5A30',
  colorSecondary: '#1E212C',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#787A80',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Ubuntu, helvetica, arial, sans-serif',
  fontCode: 'Ubuntu',

  // Text colors
  textColor: '#1E212C',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#FF5A30',
  barBg: '#1E212C',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#787A80',
  inputTextColor: '#1E212C',
  inputBorderRadius: 4,

  brandTitle: 'CreateX Design System',
  brandImage: logo,
})
