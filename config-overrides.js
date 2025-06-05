module.exports = function override(config, env) {
  // Add fallbacks for Node.js modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false, // Ignore 'fs' since it's not needed in the renderer
    path: require.resolve('path-browserify'),
  };

  return config;
};