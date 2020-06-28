import React from 'react';

import { Container, Index, IndexIcon, OnFireIcon, OnFire, SubscriptionIcon, Subscription, Separator,  NavLibrary, NavLibraryIcon, NavHistory, NavHistoryIcon, NavYourVideos, NavYourVideosIcon, NavWL, NavWLIcon, NavLiked, NavLikedIcon, NavSM, NavSMIcon } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>

      <div>
        <Index>
          <IndexIcon />
          <span>Início</span>
        </Index>
        <OnFire>
          <OnFireIcon />
          <span>Em Alta</span>
        </OnFire>
        <Subscription>
          <SubscriptionIcon />
          <span>Inscrições</span>
        </Subscription>
      </div>

      <Separator />

      <div>
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
        </NavSM>
        </div>
        

      <Separator />
    </Container>
  );
}

export default SideMenu;