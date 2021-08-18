import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import WelcomeGuide from './guide';
const { __ } = wp.i18n;

const WelcomeGuideButton = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
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
        </>
    );
};

export default WelcomeGuideButton;