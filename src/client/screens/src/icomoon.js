import iconFont from '../android/app/src/main/assets/fonts/icomoon.ttf';

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-weight: normal;
  font-variant: normal;
}`;

// eslint-disable-next-line no-undef
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  // eslint-disable-next-line no-undef
  style.appendChild(document.createTextNode(iconFontStyles));
}

// eslint-disable-next-line no-undef
document.head.appendChild(style);
