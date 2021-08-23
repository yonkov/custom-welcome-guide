/**
 * Template for displaying the Welcome Guide
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */

 import { __ } from '@wordpress/i18n';
 import { Guide} from '@wordpress/components';
 import { Fragment } from '@wordpress/element';
 import { getPosts }  from './../data'

 const WelcomeGuide = ( props ) => {

  const posts = getPosts();
  
   return (
    posts.length > 0 && 
      
      <Guide { ...props } className="admin-welcome-guide" pages={ posts.map((post) => (
        
        {
          image: post.featured_image ? <img src={post.featured_image} /> : '',
          content: (
            <div>
              <h2 className="edit-post-welcome-guide__heading">{post.title.rendered}</h2>
              <div className="edit-post-welcome-guide__text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          )
        }

      ))
      
      } >

      </Guide>
   )
 }
 
 export default WelcomeGuide;