/**
 * Template for Displaying the Plugin's Settings page using React Components
 * @package Custom Welcome Guide
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
			className="custom-welcome-guide-admin-notices"
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
                        isShowPost: response['cwg_options']['is_show_post'] ? response['cwg_options']['is_show_post'] : '',
                        isShowPage: response['cwg_options']['is_show_page'] ? response['cwg_options']['is_show_page'] : '',
                        isShowCPT: response['cwg_options']['is_show_cpt'] ? response['cwg_options']['is_show_cpt'] : '',
                        featuredPostId: response['cwg_options'][ 'featured_post_id' ] ? response['cwg_options'][ 'featured_post_id' ] : '',
                        isAPILoaded: true
                    });
                });
            }
        });
        // fetch all posts
        fetch(custom_welcome_guide_script_params.rest_url + 'wp/v2/guides')
            .then((response) => response.json())
            .then(posts => {
                this.setState({posts: posts }); 
            }
        )
    }

    toggleCheckbox(name) {
        this.setState({ [name]: !this.state[name] });
    }

    // Dynamically create select dropdown with a default option and a list with all parent guides
    dropdownWithOptions(posts){
        const options = [
            {   
                label: __( 'None', 'custom-welcome-guide' ),
                value: ''
            }
        ];
        posts.forEach(post =>{
            if (post.parent == 0 ){
              options.push({
                label: __( post.title.rendered, 'custom-welcome-guide' ),
                value: post.id 
              })
            }
        });

        return options
    }
    

    render() {
        const { isAPILoaded, posts, featuredPostId } = this.state;
        if (!isAPILoaded) {
            return (
                <Fragment>
                    <h2><Icon icon="admin-plugins" /> {__('Welcome Guide Options', 'custom-welcome-guide')}</h2>
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
                <h2><Icon icon="admin-plugins" /> {__('Welcome Guide Options', 'custom-welcome-guide')}</h2>
                <PanelBody>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in the Post editor', 'custom-welcome-guide')}
                            help={"Show a list of all the admin guides in the post editor's sidebar."}
                            checked={this.state.isShowPost}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPost')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in the Page editor', 'custom-welcome-guide')}
                            help={"Display the admin guides in the page editor's sidebar."}
                            checked={this.state.isShowPage}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPage')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in Custom Post Types', 'custom-welcome-guide')}
                            help={"Enable the welcome guides for custom post types. Note that they need to use the Block editor for this option to work."}
                            checked={this.state.isShowCPT}
                            onChange={this.toggleCheckbox.bind(this, 'isShowCPT')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            help={ __( "Choose a Featured Guide if you want to replace the Block Editor's default Welcome Guide Modal that pops up when you open the Block Editor for the first time.", 'custom-welcome-guide' ) }
                            label={ __( 'Featured Guide', 'custom-welcome-guide' ) }
                            onChange={ ( featuredPostId ) => this.setState( { featuredPostId } ) }
                            options= {
                                 posts && this.dropdownWithOptions(posts)
                            }
                            value={ featuredPostId }

                        />
                    </PanelRow>
                </PanelBody>
                <Button
                    isPrimary
                    onClick={() => {
                        localStorage.removeItem('custom-welcome-guide');
                        const { isShowPost, isShowPage, isShowCPT } = this.state;

                        const settings = new api.models.Settings({
                            cwg_options: {
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
                                 __( 'Settings Saved', 'custom-welcome-guide' ),
                                {
                                    type: 'snackbar',
                                    isDismissible: true,
                                    icon: <Icon icon="smiley" />
                                }
                            
                        );
                    }}
                >
                    {__('Save', 'custom-welcome-guide')}
                </Button>
                <Notices />
            </Fragment>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const htmlOutput = document.getElementById('custom-welcome-guide-wrapper');

    if (htmlOutput) {
        render(
            <App />,
            htmlOutput
        );
    }
});