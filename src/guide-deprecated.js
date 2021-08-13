/**
 * Component for displaying the Deprecated Guide
 * @deprecated in WP core since v. 5.5
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/blob/7b63e877336bb8f156bcd25191066bad38ba6635/packages/edit-post/src/components/welcome-guide/index.js
 */

import { __ } from '@wordpress/i18n';
import { ExternalLink, Guide, GuidePage } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import {
  CanvasImage,
  EditorImage,
  BlockLibraryImage,
  DocumentationImage,
  InserterIconImage,
} from './images';

const WelcomeGuide = ( props ) => {
  return (
    <Guide { ...props } >
      <GuidePage>
      <CanvasImage className="edit-post-welcome-guide__image" />
        <h1 className="edit-post-welcome-guide__heading">
          {__('Welcome to the block editor')}
        </h1>
        <p className="edit-post-welcome-guide__text">
          {__(
            'In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content.'
          )}
        </p>
      </GuidePage>

      <GuidePage className="edit-post-welcome-guide__page">
      <EditorImage className="edit-post-welcome-guide__image" />
        <h1 className="edit-post-welcome-guide__heading">
          {__('Make each block your own')}
        </h1>
        <p className="edit-post-welcome-guide__text">
          {__(
            'Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.'
          )}
        </p>
      </GuidePage>

      <GuidePage className="edit-post-welcome-guide__page">
      <BlockLibraryImage className="edit-post-welcome-guide__image" />
        <h1 className="edit-post-welcome-guide__heading">
          {__('Get to know the block library')}
        </h1>
        <p className="edit-post-welcome-guide__text">
          {createInterpolateElement(
            __(
              'All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'
            ),
            {
              InserterIconImage: (
                <InserterIconImage className="edit-post-welcome-guide__inserter-icon" />
              ),
            }
          )}
        </p>
      </GuidePage>

      <GuidePage className="edit-post-welcome-guide__page">
      <DocumentationImage className="edit-post-welcome-guide__image" />
        <h1 className="edit-post-welcome-guide__heading">
          {__('Learn how to use the block editor')}
        </h1>
        <p className="edit-post-welcome-guide__text">
          {__(
            'New to the block editor? Want to learn more about using it? '
          )}
          <ExternalLink
            href={__(
              'https://wordpress.org/support/article/wordpress-editor/'
            )}
          >
            {__("Here's a detailed guide.")}
          </ExternalLink>
        </p>
      </GuidePage>
    </Guide>
  )
}
export default WelcomeGuide;