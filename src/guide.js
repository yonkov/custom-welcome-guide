import { Guide, GuidePage } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WelcomeGuide = ( props ) => {
  return (
    <Guide { ...props } >
      <GuidePage>
      <h2>{ __('Step One!') }</h2>
        <video width="640" height="400" controls>
          <source src="https://d1c2lqfn9an7pb.cloudfront.net/presentations/graphql-api/videos/graphql-api-creating-persisted-query.mov" type="video/mp4" />
          { __('Your browser does not support the video tag.') }
        </video>
      </GuidePage>
      <GuidePage>
      <h2>{ __('Step Two!') }</h2>
      </GuidePage>
      <GuidePage>
      <h2>{ __('Step Three!') }</h2>
      </GuidePage>
    </Guide>
  )
}
export default WelcomeGuide;