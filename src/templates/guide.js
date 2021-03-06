/**
 * Template for displaying the Welcome Guide
 * @package Custom Welcome Guide
 * @since 1.0.0
 * @since wp 5.5
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */

import { __ } from '@wordpress/i18n';
import { Guide } from '@wordpress/components';
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

  return (
    posts.length > 0 &&

    <Guide {...props} className="edit-post-welcome-guide custom-welcome-guide"
      pages={posts.filter(post => post.parent == parentPostId || post.id == parentPostId).map((post) => (

        {
          image: post.featured_image ? <div className="post-thumbnail"><img src={post.featured_image} /></div> : '',
          content: (
            <div>
              <h2 className="edit-post-welcome-guide__heading">{post.title.rendered}</h2>
              <div className="edit-post-welcome-guide__text" dangerouslySetInnerHTML={{ __html: escapeHtml(post.content.rendered) }} />
            </div>
          )
        }

      ))

      }

    >

    </Guide>
  )
}

export default WelcomeGuide;