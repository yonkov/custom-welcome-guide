/**
 * Template for displaying a List of Guides in the Gutenberg Post Sidebar
 * @package Custom Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */
import { useState, Fragment } from '@wordpress/element';
import { Button} from '@wordpress/components';
import WelcomeGuide from './guide';
import { getPosts } from './../data';
const { __ } = wp.i18n;

const WelcomeGuideList = (props) => {
    const [isOpen, setOpen] = useState(false);
    const posts = getPosts();
    const [postId, setPostId] = useState();

    return (
        <Fragment>
        { posts.length > 0 &&
            posts.filter(post =>post.parent==0).map ((post, index) => (
                <div class="guide-list">
                {index==0 && posts.length == 1 ? '' : <span>{index+1 + '.'}</span>}
                <Button className="guide-btn" key={index} onClick={() => {
                    setOpen(true);
                    setPostId(post.id)
                } }>          
                    { post.title.rendered }
                </Button>
                </div>
             ) )
            }
            {isOpen && (
                <WelcomeGuide
                    {...props}
                    onFinish={() => setOpen(false)}
                    parentPostId = {postId}
                />
            ) }
        </Fragment>
    )
};

export default WelcomeGuideList;