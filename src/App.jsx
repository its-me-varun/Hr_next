import React from 'react';
import AuthProvider from './context/AuthContext';
import MainRoutes from './Routes/MainRoutes';

const App = () => {

  return (
    <AuthProvider>
     <MainRoutes/>
    </AuthProvider>
  );
};

export default App;
