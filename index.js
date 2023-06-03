/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import DrawerNavigation from './DrawerNavigation';
import Login from './Login';
import LandingPage from './LandingPage';
import ForgotPassword from './ForgotPassword';
import NavBar from './NavBar';
import HomePlace from './HomePlace';
import Places from './Places';
import MorePlaces from './MorePlaces';
import Food from './Food';
import Tour from './Tour';


AppRegistry.registerComponent(appName, () => LandingPage);
