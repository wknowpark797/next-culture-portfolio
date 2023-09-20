/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePath: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss";`,
	},
	compiler: { styledComponents: true },
};

module.exports = nextConfig;
