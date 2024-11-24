import DesktopBackground from '..//../assets/Background/Background_Main_Page.png';
import DesktopElementBackground from '..//../assets/Background/Background_element_Main_Page.png';
import TabletBackground from '..//../assets/Background/Background_Main_Page_tablet.png';
import TabletElementBackground from '..//../assets/Background/Background_element_HomeScreen_tablet.png';
import MobileBackground from '..//../assets/Background/Background_Main_Page_mobile.png';
import MobileElementBackground from '..//../assets/Background/Background_element_HomeScreen_mobile.png';

export const backgrounds = {
    desktop: `url(${DesktopBackground}), url(${DesktopElementBackground})`,
    tablet: `url(${TabletBackground}), url(${TabletElementBackground})`,
    mobile: `url(${MobileBackground}), url(${MobileElementBackground}) `,
    
  };