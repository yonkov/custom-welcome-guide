import { pluginOptions } from './../data'
import { useState} from '@wordpress/element';
import Guide from './guide';
import DeprecatedGuide from './guide-deprecated';

/**
 * Display a Featured Guide. If selected from the plugin options, 
 * it will popup and override the default welcome guide
 * when the user visits the Block Editor screen for the first time
 */
const FeaturedGuide = (props) => {
    const show_deprecated_guide = custom_welcome_guide_script_params.show_deprecated_guide;
    const [isOpen, setOpen] = useState(true);

    const featuredPostId = custom_welcome_guide_script_params.guide_settings.featured_post_id;

    return ( !localStorage.getItem('custom-welcome-guide') && featuredPostId && 
        <>
        {isOpen && ( !show_deprecated_guide ? 
        <Guide parentPostId = {featuredPostId}
            onFinish={() => {
                setOpen(false)
                localStorage.setItem('custom-welcome-guide', 'yes')
            }
            }
        /> :
        <DeprecatedGuide parentPostId = {featuredPostId}
            onFinish={() => {
                setOpen(false)
                localStorage.setItem('custom-welcome-guide', 'yes')
            }
            }
        />
        )}
        </>
    )
}

export default FeaturedGuide;