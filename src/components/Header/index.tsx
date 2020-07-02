import React from 'react';
/* import Logo from '../../assets/you-tube-2017-seeklogo.com-2.svg'; */
import Logo from '../../assets/yt_logo_rgb_dark.png';

import { Container, HamburgMenu, InputWrapper, Input, KeyboardInputIcon, SearchButton, SearchIcon, AccountTools, UploadVideo, ExtraApplications, Notification, UserProfile } from './styles';

export interface Props {
  hasNotification?: boolean;
}

const Hearder: React.FC<Props> = ({
  hasNotification
}) => {
  return (
    <Container>
      <div>
        <HamburgMenu />
        <img src={Logo} alt='Logotipo' />
        <span>BR</span>
      </div>
      
      <InputWrapper>
        <Input type="text" placeholder={`Pesquisar`} />
        <KeyboardInputIcon />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </InputWrapper>
      
        <AccountTools>
          <UploadVideo />
          <ExtraApplications />
          <Notification /* hasNotification={hasNotification} *//>
          <UserProfile>
            <img src={'https://lh5.googleusercontent.com/-wLDNng7B4EY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclMz4ujScnJEG7MkE6iNVY__qt-yQ/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg'} alt='Imagem do Perfil' />
          </UserProfile>
        </AccountTools>
    </Container>
  );
}

export default Hearder;