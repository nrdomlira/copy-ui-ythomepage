import React from 'react';

import { Grid } from './styles';
import Header from '../Header';
import SideMenu from '../SideMenu';
import LayoutMain from './LayoutMain';

const Layout: React.FC = () => {
  return (
      <Grid>
          <Header />
          <SideMenu />
          <LayoutMain />
      </Grid>
  );

}

export default Layout;