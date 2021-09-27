/**
 * Template for Displaying the Plugin's Settings page using React Components
 * @package Custom Welcome Guide
 * @since 1.0.0
 * @see https://wholesomecode.ltd/wordpress/create-settings-page-wordpress-gutenberg-components/
 */

import { Fragment, render, Component } from '@wordpress/element';
import { Icon, Button, PanelBody, PanelRow, ToggleControl, SnackbarList, Spinner, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import api from '@wordpress/api';
import { dispatch, withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { store as noticesStore } from '@wordpress/notices';
import { pluginOptions } from './../data'
import FeaturedGuide from './featured-guide';
import './admin.scss';

const Notices = ({ notices, removeNotice }) => {

    const snackbarNotices = notices ? notices.filter((notice) => notice.type === 'snackbar') : [];
    return (
        <>
            <SnackbarList
                className="custom-welcome-guide-admin-notices"
                notices={snackbarNotices}
                onRemove={removeNotice}
            />
        </>
    );
}

const AppNotices = compose(
    withSelect((select) => ({
        notices: select('core/notices').getNotices(),
    })),
    withDispatch((dispatch) => ({
        removeNotice: dispatch('core/notices').removeNotice,
    })),
)(Notices);

/** 
* Determine whether to show the featured guide in the whole WordPress Admin
* Based on plugin options 
* @since 1.0.1
*/
const FeaturedGuideinWholeAdmin = () => {
    const isBlockEditor = document.body.className.indexOf('block-editor-page') > -1;

    if (isBlockEditor) return null

    const { isShowAdmin } = pluginOptions();

    if (isShowAdmin) {
        return (
            <FeaturedGuide />
        )
    }
    else {
        return null
    }
}

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isAPILoaded: false,
            isShowPost: true,
            isShowPage: true,
            isShowCPT: false,
            isShowAdmin: false,
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
                        isShowAdmin: response['cwg_options']['is_show_admin'] ? response['cwg_options']['is_show_admin'] : '',
                        featuredPostId: response['cwg_options']['featured_post_id'] ? response['cwg_options']['featured_post_id'] : '',
                        isAPILoaded: true
                    });
                });
            }
        });
        // fetch all posts
        fetch(custom_welcome_guide_script_params.rest_url + 'wp/v2/guides')
            .then((response) => response.json())
            .then(posts => {
                this.setState({ posts: posts });
            }
            )
    }

    toggleCheckbox(name) {
        this.setState({ [name]: !this.state[name] });
    }

    // Dynamically create select dropdown with a default option and a list with all parent guides
    dropdownWithOptions(posts) {
        const options = [
            {
                label: __('None', 'custom-welcome-guide'),
                value: ''
            }
        ];
        posts.forEach(post => {
            if (post.parent == 0) {
                options.push({
                    label: post.title.rendered,
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
                            help={__("Show a list of all the admin guides in the post editor's sidebar.", 'custom-welcome-guide')}
                            checked={this.state.isShowPost}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPost')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in the Page editor', 'custom-welcome-guide')}
                            help={__("Display the admin guides in the page editor's sidebar.", 'custom-welcome-guide')}
                            checked={this.state.isShowPage}
                            onChange={this.toggleCheckbox.bind(this, 'isShowPage')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show guides in Custom Post Types', 'custom-welcome-guide')}
                            help={__("Enable the welcome guides for custom post types. Note that they need to use the Block editor for this option to work.", 'custom-welcome-guide')}
                            checked={this.state.isShowCPT}
                            onChange={this.toggleCheckbox.bind(this, 'isShowCPT')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            help={__("Choose a Featured Guide if you want to replace the Block Editor's default Welcome Guide Modal that pops up when you open the Block Editor for the first time.", 'custom-welcome-guide')}
                            label={__('Featured Guide', 'custom-welcome-guide')}
                            onChange={(featuredPostId) => this.setState({ featuredPostId })}
                            options={
                                posts && this.dropdownWithOptions(posts)
                            }
                            value={featuredPostId}

                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={__('Show the featured guide in the whole WordPress Admin', 'custom-welcome-guide')}
                            help={__("By default the featured guide pops up in the Block Editor only. Enable this option to load the featured guide on all admin pages.", 'custom-welcome-guide')}
                            checked={this.state.isShowAdmin}
                            onChange={this.toggleCheckbox.bind(this, 'isShowAdmin')}
                        />
                    </PanelRow>
                </PanelBody>
                <Button
                    isPrimary
                    onClick={() => {
                        localStorage.removeItem('custom-welcome-guide');
                        const { isShowPost, isShowPage, isShowCPT, isShowAdmin } = this.state;

                        const settings = new api.models.Settings({
                            cwg_options: {
                                ['is_show_post']: isShowPost ? 'true' : '',
                                ['is_show_page']: isShowPage ? 'true' : '',
                                ['is_show_cpt']: isShowCPT ? 'true' : '',
                                ['is_show_admin']: isShowAdmin ? 'true' : '',
                                ['featured_post_id']: featuredPostId
                            }
                        });

                        settings.save();
                        dispatch('core/notices')
                            .createNotice(
                                'success',
                                __('Settings Saved', 'custom-welcome-guide'),
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
                <AppNotices />
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

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    const body = document.body.appendChild(popup);
    if (body) {
        render(
            <FeaturedGuideinWholeAdmin />,
            body
        );
    }

});