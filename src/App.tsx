import React from 'react';
import { Router } from './routes'
import { GlobalStyles } from './themes/styles';
import { Theme } from './themes/theme';

const App: React.FC = ()  => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
}

export default App;
