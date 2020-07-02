import React from 'react';
import { BrowserRouter as Router, /* Switch, */ Link, /* Route */ } from 'react-router-dom';

import SideMenuButton from '../SideMenuButton';

import { Container, IndexIcon, OnFireIcon, SubscriptionIcon, Separator, NavLibraryIcon, NavHistoryIcon, NavYourVideosIcon, NavWLIcon, NavLikedIcon, NavSMIcon } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Router>
        <div>

          <Link to='/'>
            <IndexIcon />
            <SideMenuButton title={'Início'} />
          </Link>

          <Link to='/feed/trending'>
            <OnFireIcon />
            <SideMenuButton title={'Em Alta'} />
          </Link>

          <Link to='/feed/subscriptions'>
            <SubscriptionIcon />
            <SideMenuButton title={'Inscrições'} />
          </Link>

          <Separator />

          <Link to='#'>
            <NavLibraryIcon />
            <SideMenuButton title={'Biblioteca'} />
          </Link>

          <Link to='#'>
            <NavHistoryIcon />
            <SideMenuButton title={'Histórico'} />
          </Link>

          <Link to='#'>
            <NavYourVideosIcon />
            <SideMenuButton title={'Seus Videos'} />
          </Link>

          <Link to='#'>
            <NavWLIcon />
            <SideMenuButton title={'Assistir mais tarde'} />
          </Link>

          <Link to='#'>
            <NavLikedIcon />
            <SideMenuButton title={'Vídeos marcados co...'} />
          </Link>

          <Link to='#'>
            <NavSMIcon />
            <SideMenuButton title={'Mostrar mais'} />
          </Link>

          {/* <Index href={'/'}>
          <IndexIcon />
          <SideMenuButton title={'Início'}/>
        </Index>

        <OnFire href={'/feed/trending'}>
          <OnFireIcon />
          <SideMenuButton  title={'Em Alta'}/>
        </OnFire>

        <Subscription href={'/feed/subscriptions'}>
          <SubscriptionIcon />
          <SideMenuButton  title={'Inscrições'}/> 
        </Subscription>      

      <Separator />
     
        <NavLibrary>
          <NavLibraryIcon />
          <span>Biblioteca</span>
        </NavLibrary>

        <NavHistory>
          <NavHistoryIcon />
          <span>Historico</span>
        </NavHistory>

        <NavYourVideos>
          <NavYourVideosIcon />
          <span>Seus Videos</span>
        </NavYourVideos>

        <NavWL>
          <NavWLIcon />
          <span>Assistir mais tarde</span>
        </NavWL>

        <NavLiked>
          <NavLikedIcon />
          <span>Vídeos marcados co...</span>
        </NavLiked>

        <NavSM>
          <NavSMIcon />
          <span>Mostrar mais</span>
        </NavSM> */}
        </div>
      </Router>

      <Separator />
    </Container>
  );
}

export default SideMenu;