/**
 * Template for Displaying the Plugin's Settings page using React Components
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://wholesomecode.ltd/wordpress/create-settings-page-wordpress-gutenberg-components/
 */

import { Fragment, render, Component } from '@wordpress/element';
import { Icon, Button, PanelBody, PanelRow, ToggleControl, SnackbarList, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import api from '@wordpress/api';
import {dispatch, useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import './admin.scss';

const Notices = () => {
	const notices = useSelect(
		( select ) =>
			select( noticesStore )
				.getNotices()
				.filter( ( notice ) => notice.type === 'snackbar' ),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );

	return (
		<SnackbarList
			className="welcome-guide-admin-notices"
			notices={ notices }
			onRemove={ removeNotice }
		/>
	);
};

class App extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            isAPILoaded: false,
            isShowPost: true,
            isShowPage: true,
            isShowCPT: false
        };
    }

    componentDidMount() {

        api.loadPromise.then(() => {
            this.settings = new api.models.Settings();
            const { isAPILoaded } = this.state;

            if (!isAPILoaded) {
                this.settings.fetch().then((response) => {
                    this.setState({
                        isShowPost: response['admin_welcome_guide_is_show_post'] ? response['admin_welcome_guide_is_show_post'] : '',
                        isShowPage: response['admin_welcome_guide_is_show_page'] ? response['admin_welcome_guide_is_show_post'] : '',
                        isShowCPT: response['admin_welcome_guide_is_show_cpt'] ? response['admin_welcome_guide_is_show_cpt'] : '',
                        isAPILoaded: true,
                    });
                });
            }
        });
    }

    toggleCheckbox(name) {
        this.setState({ [name]: !this.state[name] });
    }

    render() {
        const { isAPILoaded } = this.state;
        if (!isAPILoaded) {
            return (
                <Fragment>
                    <h2><Icon icon="admin-plugins" /> {__('Welcome Guide Options', 'admin-welcome-guide')}</h2>
                    <PanelBody>
                        <PanelRow>
                            <Spinner />
                        </PanelRow>
                    </PanelBody>
                </Fragment>
            );
        }
        return (
            <Fragment>
                <h2><Icon icon="admin-plugins" /> {__('Welcome Guide Options', 'admin-welcome-guide')}</h2>
                <PanelBody>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in the Post editor', 'admin-welcome-guide')}
                            help={"Show a list of all the admin guides in the post editor's sidebar."}
                            checked={this.state.isShowPost}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPost')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in the Page editor', 'admin-welcome-guide')}
                            help={"Display the admin guides in the page editor's sidebar."}
                            checked={this.state.isShowPage}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPage')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in Custom Post Types', 'admin-welcome-guide')}
                            help={"Enable the welcome guides for custom post types. Note that they need to support the Gutenberg editor for this option to work."}
                            checked={this.state.isShowCPT}
                            onChange={this.toggleCheckbox.bind(this, 'isShowCPT')}
                        />
                    </PanelRow>
                </PanelBody>
                <Button
                    isPrimary
                    onClick={() => {
                        const { isShowPost, isShowPage, isShowCPT } = this.state;
                        const settings = new api.models.Settings({
                            ['admin_welcome_guide_is_show_post']: isShowPost ? 'true' : '',
                            ['admin_welcome_guide_is_show_page']: isShowPage ? 'true' : '',
                            ['admin_welcome_guide_is_show_cpt']: isShowCPT ? 'true' : ''
                        });
                        settings.save();
                        dispatch('core/notices')
                            .createNotice(
                                'success',
                                 __( 'Settings Saved', 'admin-welcome-guide' ),
                                {
                                    type: 'snackbar',
                                    isDismissible: true,
                                    icon: <Icon icon="smiley" />
                                }
                            
                        );
                    }}
                >
                    {__('Save', 'admin-welcome-guide')}
                </Button>
                <Notices />
            </Fragment>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const htmlOutput = document.getElementById('admin-welcome-guide-wrapper');

    if (htmlOutput) {
        render(
            <App />,
            htmlOutput
        );
    }
});