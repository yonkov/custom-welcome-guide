import { pluginOptions } from './../data'
import { useState} from '@wordpress/element';
import WelcomeGuide from './guide';

/**
 * Display a Featured Guide. If selected from the plugin options, 
 * it will popup and override the default welcome guide
 * when the user visits the Block Editor screen for the first time
 */
const FeaturedGuide = (props) => {
    const [isOpen, setOpen] = useState(true);
    const {isAPILoaded, featuredPostId} = pluginOptions();

    if (!isAPILoaded) {
        return null
    }

    return ( !localStorage.getItem('admin-welcome-guide') && featuredPostId && 
        <>
        {isOpen && (
        <WelcomeGuide
            parentPostId = {featuredPostId}
            onFinish={() => {
                setOpen(false)
                localStorage.setItem('admin-welcome-guide', 'yes')
            }
            
            }
        />
        )}
        </>
    )
}

export default FeaturedGuide;