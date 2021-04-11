const copy = require('rollup-plugin-copy');

module.exports = {
  stories: ['../packages/**/stories/*.stories.{js,md,mdx}'],
  rollupConfig(config) {
    config.plugins.push(copy({
      targets: [
        {
          src: './packages/**/stories/**/*',
          dest: './dist'
        }
      ]
    }));

    console.log(config);

    return config;
  },
};
