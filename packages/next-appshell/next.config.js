const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withTM = require('next-transpile-modules')([]);

module.exports = (phase, { defaultConfig }) => {
  let config = {};
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    config = {
      /* development only config options here */
      env: {
        mode: 'development',
      },
    };
  } else {
    config = {
      /* config options for all phases except development here */
    };
  }

  config.redirects = [];

  return withTM({ ...config });
};
