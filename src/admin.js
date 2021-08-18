import {Fragment, render, Component} from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './admin.scss';

/**
 * 
 * Generate Plugin's Settings page using React Components
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://wholesomecode.ltd/wordpress/create-settings-page-wordpress-gutenberg-components/
 */
class App extends Component {
    constructor() {
		super( ...arguments );
	}

	render() {
		return (
            <Fragment>
                <div className="admin-welcome-guide__header">
                    <div className="admin-welcome-guide__container">
                        <div className="admin-welcome-guide__title">
                            <h2>{ __( 'Admin Welcome Guide Options', 'admin-welcome-guide' ) } <Icon icon="admin-plugins" /></h2>
                        </div>
                    </div>
                </div>
            	<div className="admin-welcome-guide__main"></div>
            </Fragment>
		)
	}
}

document.addEventListener( 'DOMContentLoaded', () => {
    const htmlOutput = document.getElementById( 'admin-welcome-guide-wrapper' );

    if ( htmlOutput ) {
        render(
            <App />,
            htmlOutput
        );
    }
});