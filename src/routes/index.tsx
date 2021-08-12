import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../hooks/auth';

export default function Routes() {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      {isLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
