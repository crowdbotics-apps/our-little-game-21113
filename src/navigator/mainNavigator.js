import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial127450Navigator from '../features/Tutorial127450/navigator';
import NotificationList127422Navigator from '../features/NotificationList127422/navigator';
import Settings127421Navigator from '../features/Settings127421/navigator';
import Settings127413Navigator from '../features/Settings127413/navigator';
import UserProfile127411Navigator from '../features/UserProfile127411/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial127450: { screen: Tutorial127450Navigator },
NotificationList127422: { screen: NotificationList127422Navigator },
Settings127421: { screen: Settings127421Navigator },
Settings127413: { screen: Settings127413Navigator },
UserProfile127411: { screen: UserProfile127411Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
