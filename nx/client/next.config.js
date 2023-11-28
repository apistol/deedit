//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withTM = require('next-transpile-modules')(['react-native-web']);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    // Return the modified config
    return config;
  },
};

const plugins = [
  withNx,
  // Add the transpile-modules plugin
  withTM,
];

module.exports = composePlugins(...plugins)(nextConfig);
