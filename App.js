import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import {Amplify} from 'aws-amplify';
import {Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import AuthContextProvider from './src/contexts/AuthContext'

Amplify.configure({...awsconfig, Analytics:{disabled:true}});


function App() {
  return (
    <NavigationContainer>  
      <AuthContextProvider>
          <RootNavigator />
        </AuthContextProvider> 
      
     

      <StatusBar style="light" />    
    </NavigationContainer>

  );
}

export default withAuthenticator(App);


