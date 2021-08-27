/**
 * Template for Displaying the Plugin's Settings page using React Components
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://wholesomecode.ltd/wordpress/create-settings-page-wordpress-gutenberg-components/
 */

import { Fragment, render, Component } from '@wordpress/element';
import { Icon, Button, PanelBody, PanelRow, ToggleControl, SnackbarList, Spinner, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import api from '@wordpress/api';
import {dispatch, useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import './admin.scss';
import { getPosts } from './../data'

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
            isShowCPT: false,
            featuredPostId: '',
            posts: ''
        };
    }

    componentDidMount() {
        // fetch all plugin options
        api.loadPromise.then(() => {
            this.settings = new api.models.Settings();
            const { isAPILoaded } = this.state;

            if (!isAPILoaded) {
                this.settings.fetch().then((response) => {
                    this.setState({
                        isShowPost: response['awg_options']['is_show_post'] ? response['awg_options']['is_show_post'] : '',
                        isShowPage: response['awg_options']['is_show_page'] ? response['awg_options']['is_show_page'] : '',
                        isShowCPT: response['awg_options']['is_show_cpt'] ? response['awg_options']['is_show_cpt'] : '',
                        featuredPostId: response['awg_options'][ 'featured_post_id' ] ? response['awg_options'][ 'featured_post_id' ] : '',
                        isAPILoaded: true
                    });
                });
            }
        });
        // fetch all posts
        fetch('/wp-json/wp/v2/guides')
            .then((response) => response.json())
            .then(posts => {
                this.setState({posts: posts }); 
            })
        }

    toggleCheckbox(name) {
        this.setState({ [name]: !this.state[name] });
    }

    render() {
        const { isAPILoaded, posts, featuredPostId } = this.state;
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
                            help={"Enable the welcome guides for custom post types. Note that they need to use the Block editor for this option to work."}
                            checked={this.state.isShowCPT}
                            onChange={this.toggleCheckbox.bind(this, 'isShowCPT')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            help={ __( "Choose a Featured Guide if you want to replace the Block Editor's Welcome Guide Modal that pops up when you open the Block Editor for the first time.", 'admin-welcome-guide' ) }
                            label={ __( 'Featured Guide', 'admin-welcome-guide' ) }
                            onChange={ ( featuredPostId ) => this.setState( { featuredPostId } ) }
                            options={ posts && posts.map ( (post, index) => (
                                (index==0) ? 
                                    {
                                        label: __( 'None', 'admin-welcome-guide' ),
                                        value: ''
                                    }
                                :
                                    {
                                        label: __( post.title.rendered, 'admin-welcome-guide' ),
                                        value: post.id 
                                    }
                            ) )
                            }
                            value={ featuredPostId }

                        />
                    </PanelRow>
                </PanelBody>
                <Button
                    isPrimary
                    onClick={() => {
                        const { isShowPost, isShowPage, isShowCPT } = this.state;

                        const settings = new api.models.Settings({
                            awg_options: {
                                ['is_show_post']: isShowPost ? 'true' : '',
                                ['is_show_page']: isShowPage ? 'true' : '',
                                ['is_show_cpt']: isShowCPT ? 'true' : '',
                                ['featured_post_id']: featuredPostId
                            }
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