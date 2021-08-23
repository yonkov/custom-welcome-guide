/**
 * Webpack config that extends defaults allows to compile more js and css files 
 * @see https://wholesomecode.ltd/guides/entry-points-wordpress-create-block-script/
 * @package Admin Welcome Guide
 * @since 0.0.1
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry,
        admin: path.resolve( process.cwd(), 'src/templates', 'admin.js' ),
    }
};