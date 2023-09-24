import { useEffect } from 'react';

const WowJS = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
        // Code that uses the window object
      
    // Dynamically import Wow.js to ensure it runs only on the client-side
    import('wowjs/dist/wow').then((wowModule) => {
      const { WOW } = wowModule;
      const wow = new WOW({
        boxClass: 'wow', // Class name for the element
        animateClass: 'animated', // Class name for animations
        offset: 0, // Viewport offset in pixels
        mobile: false, // Whether to apply the animations on mobile devices
      });
      wow.init();
    });
}
  }, []);

  return <></>; // This component doesn't render anything in the UI
};

export default WowJS;
