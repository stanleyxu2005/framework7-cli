const indent = require('../utils/indent');

module.exports = (options) => {
  const { template, type } = options;

  let styles = '';

  if (type.indexOf('cordova') >= 0) {
    styles += indent(
      0,
      `
      /* iOS Cordova Tweak */
      .device-cordova.device-ios {
        height: 100vh;
      }
    `,
    );
  }

  if (template === 'split-view') {
    styles += indent(
      0,
      `
      /* Left Panel right border when it is visible by breakpoint */
      .panel-left.panel-in-breakpoint:before {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background: rgba(0,0,0,0.1);
        content: '';
        z-index: 6000;
      }

      /* Hide navbar link which opens left panel when it is visible by breakpoint */
      .panel-left.panel-in-breakpoint ~ .view .navbar .panel-open[data-panel="left"] {
        display: none;
      }

      /*
        Extra borders for main view and left panel for iOS theme when it behaves as panel (before breakpoint size)
      */
      .ios .panel-left:not(.panel-in-breakpoint).panel-in ~ .view-main:before,
      .ios .panel-left:not(.panel-in-breakpoint).panel-closing ~ .view-main:before {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background: rgba(0,0,0,0.1);
        content: '';
        z-index: 6000;
      }
    `,
    );
  } else {
    styles += indent(
      0,
      `
      /* Your app custom styles here */
    `,
    );
  }

  return styles.trim();
};
