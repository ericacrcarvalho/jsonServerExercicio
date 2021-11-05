import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Stack';

const Routes = () => {
  return ( 
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}
export default Routes;