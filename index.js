/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import bgMessaging from './bgMessaging';


// import { initializeFirebase } from './src/pushNotification';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
// initializeFirebase()