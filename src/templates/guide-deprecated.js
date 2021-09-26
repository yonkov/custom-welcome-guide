/**
 * Component for displaying the Deprecated Guide
 * @package Admin Welcome Guide
 * @since 1.0.2
 * @since wp 5.4
 * @deprecated in WP core since v. 5.5
 * @see https://github.com/WordPress/gutenberg/blob/7b63e877336bb8f156bcd25191066bad38ba6635/packages/edit-post/src/components/welcome-guide/index.js
 */

import { __ } from '@wordpress/i18n';
import { Guide, GuidePage } from '@wordpress/components';
import { getPosts } from './../data'
const WelcomeGuide = (props) => {

  const posts = getPosts();
  const { parentPostId } = props;

  /**
 * Strip potentially dangerous html tags to secure post output
 * @param {string} content 
 * @returns escaped html
 */

  function escapeHtml(content) {
    let div = document.createElement('div');
    div.innerHTML = content;

    let scripts = div.querySelectorAll('style, script');
    let i = scripts.length;

    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }

    return div.innerHTML;
  }

  return (posts.length > 0 &&
    <Guide className="custom-deprecated-guide" {...props} >
      {posts.filter(post => post.parent == parentPostId || post.id == parentPostId).map((post, index) => (
        <GuidePage key={index} className="edit-post-welcome-guide__page">
          <div className="post-thumbnail">
            <img className="edit-post-welcome-guide__image" src={post.featured_image} />
          </div>
          <h1 className="edit-post-welcome-guide__heading">
            {post.title.rendered}
          </h1>
          <div className="edit-post-welcome-guide__text"
            dangerouslySetInnerHTML={{ __html: escapeHtml(post.content.rendered) }}>
          </div>
        </GuidePage>
      ))}
    </Guide>
  )
}
export default WelcomeGuide;