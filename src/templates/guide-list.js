/**
 * Template for displaying a List of Guides in the Gutenberg Post Sidebar
 * @package Custom Welcome Guide
 * @since 1.0.0
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */
import React from 'react';
import { useState, Fragment } from '@wordpress/element';
import { Button, Spinner } from '@wordpress/components';
import { getPosts } from './../data';
import Guide from './guide';
import DeprecatedGuide from './guide-deprecated';

const WelcomeGuideList = (props) => {
    const show_deprecated_guide = custom_welcome_guide_script_params.show_deprecated_guide;
    const { __ } = wp.i18n;
    const siteUrl = custom_welcome_guide_script_params.site_url;
    const [isOpen, setOpen] = useState(false);
    const posts = getPosts();
    const [postId, setPostId] = useState();
    // loading state..
    if (!posts) return <div className="guide-list"><Spinner /></div>;

    const parentPosts = posts.filter(post => post.parent == 0);

    // loaded state
    return (
        <Fragment>
            {posts.length == 0 &&
                <span>{__('No guides found. Get started by ', 'custom-welcome-guide')}
                    <a href={`${siteUrl + "/wp-admin/edit.php?post_type=guides"}`}>{`${__('adding a guide', 'custom-welcome-guide')}`}</a>
                </span>}
            {posts.length > 0 &&
                parentPosts.map((post, index) => (
                    <div key={index }className="guide-list">
                        {index == 0 && parentPosts.length == 1 ? '' : <span>{index + 1 + '.'}</span>}
                        <Button className="guide-btn" key={index} onClick={() => {
                            setOpen(true);
                            setPostId(post.id)
                        }}>
                            {post.title.rendered}
                        </Button>
                    </div>
                ))
            }
            {isOpen && ( !show_deprecated_guide ? 
                <Guide
                    {...props}
                    onFinish={() => setOpen(false)}
                    parentPostId={postId}
                    
                /> : <DeprecatedGuide 
                    {...props}
                    onFinish={() => setOpen(false)}
                    parentPostId={postId}                
                />
            )}
        </Fragment>
    )
};

export default WelcomeGuideList;