/**
 * Template for displaying a List of Guides in the Gutenberg Post Sidebar
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */
import { useState, Fragment } from '@wordpress/element';
import { Button} from '@wordpress/components';
import WelcomeGuide from './guide';
const { __ } = wp.i18n;

const WelcomeGuideList = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Button onClick={() => setOpen(true)}>
                {__('Welcome Guide: “Teach NSMG Editorial Team How To Code”')}
            </Button>
            <Button onClick={() => setOpen(true)}>
                {__('How to Become Senior Dev')}
            </Button>
            <Button onClick={() => setOpen(true)}>
                {__('How to Go to the Beach while you Work')}
            </Button>
            {isOpen && (
                <WelcomeGuide
                    {...props}
                    onFinish={() => setOpen(false)}
                />
            )}
        </Fragment>
    )
};

export default WelcomeGuideList;