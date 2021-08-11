import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import WelcomeGuide from './guide';
const { __ } = wp.i18n;

const WelcomeGuideButton = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>
                {__('Welcome Guide: “Teach NSMG Editorial Team”')}
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