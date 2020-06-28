import React from 'react';

import { Grid } from './styles';
import Header from '../Header';
import SideMenu from '../SideMenu';
import ContentView from '../ContentView';

const Layout: React.FC = () => {
  return (
      <Grid>
          <Header />
          <SideMenu />
          <ContentView />
      </Grid>
  );

}

export default Layout;