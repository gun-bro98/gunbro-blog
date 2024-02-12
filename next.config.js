// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
};

module.exports = withContentlayer((phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    const sourceDir = path.join(__dirname, 'content', 'posts');
    const destDir = path.join(__dirname, '.next', 'static', 'content', 'posts');

    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }

    readdirSync(sourceDir).forEach((file) => {
      const srcFile = path.join(sourceDir, file);
      const destFile = path.join(destDir, file);
      copyFileSync(srcFile, destFile);
    });
  }

  return nextConfig
});
