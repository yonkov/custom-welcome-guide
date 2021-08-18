/**
 * Template for displaying the Welcome Guide
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */

 import { __ } from '@wordpress/i18n';
 import { Guide} from '@wordpress/components';
 import DynamicGuide from './../data'
 
 const WelcomeGuide = ( props ) => {
   return (
 
     /* We need to fill the Guide component with dynamic data */
 
     <Guide { ...props } pages={ [
         		{
           image: <img src="https://s.w.org/images/block-editor/welcome-canvas.gif" />,
           content: (
             <div>
               <h2 className="edit-post-welcome-guide__heading">{__('Welcome to the block editor')}</h2>,
               <p className="edit-post-welcome-guide__text">{__('In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content.')}</p>
             </div>
           )
         		},
         		{
         			image: <img src="https://s.w.org/images/block-editor/welcome-editor.gif" />,
         			content: (
             <div>
               <h2 className="edit-post-welcome-guide__heading">{__('Make each block your own')}</h2>
               <p className="edit-post-welcome-guide__text">
               {__(
                 'Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.'
               )}
               </p>
             </div>
         			),
         		},
         {
         			image: <img src="https://s.w.org/images/block-editor/welcome-library.gif" />,
         			content: (
             <div>
               <h2 className="edit-post-welcome-guide__heading">{__('Get to know the block library')}</h2>
               <p className="edit-post-welcome-guide__text">
               {__( 'All of the blocks available to you live in the block library.')}
               </p>
             </div>
         			),
         		},
         	] }
       >
     </Guide>
 
    //  <DynamicGuide>
 
       
    //  </DynamicGuide>
   )
 }
 
 export default WelcomeGuide;