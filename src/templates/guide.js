/**
 * Template for displaying the Welcome Guide
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */

 import { __ } from '@wordpress/i18n';
 import { Guide} from '@wordpress/components';
 import {getPosts}  from './../data'

 const WelcomeGuide = ( props ) => {

  const posts = getPosts();
  posts.length > 0 && console.log(posts);
  
   return (
    posts.length > 0 && 
      
      <Guide { ...props } pages={ posts.map((post) => (
        
        {
          image: <img src={post.featured_image ? post.featured_image : ""} />,
          content: (
            <div>
              <h2 className="edit-post-welcome-guide__heading">{__(post.title.rendered)}</h2>,
              <p className="edit-post-welcome-guide__text">{__(post.content.rendered)}</p>
            </div>
          )
        }

      ))
      
      } >

      </Guide>
   )
 }
 
 export default WelcomeGuide;