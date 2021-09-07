/**
 * Template for displaying the Welcome Guide
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */

 import { __ } from '@wordpress/i18n';
 import { Guide} from '@wordpress/components';
 import { getPosts } from './../data'

 const WelcomeGuide = ( props ) => {
  
  const posts = getPosts();
  const {parentPostId} = props;
  console.log(parentPostId);

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

  /**
   * Create new array from the guides array to pull the selected guide with all its corresponding sub-guides
   * @param {array} currentGuide 
   * @returns new array
   */
   function getcurrentGuide(guides){
    var currentGuide = [];
    guides.forEach(guide =>{
      if (guide.parent == parentPostId || guide.id == parentPostId){
        currentGuide.push(guide)
      }
    });

    return currentGuide;
  }

   return (
    posts.length > 0 && 
      
      <Guide { ...props } pages={ getcurrentGuide(posts).map((post) => (
        
        {
          image: post.featured_image ? <img src={post.featured_image} /> : '',
          content: (
            <div>
              <h2 className="edit-post-welcome-guide__heading">{post.title.rendered}</h2>
              <div className="edit-post-welcome-guide__text" dangerouslySetInnerHTML={{ __html: escapeHtml(post.content.rendered) }} />
            </div>
          )
        } 

      ))
      
      } >

      </Guide>
   )
 }
 
 export default WelcomeGuide;