import React from 'react';

import { Container, Title, VideoInfo, VideoScope, VideoGrid, UploadDetail, VideoDetail, UploaderUser, MetadataVideo, VideoDescription, DotIcon, VideoOptions } from './styles';

const LayoutMain: React.FC = () => {
  return (
    <Container >
      <Title>
        <span>Recomendados</span>
      </Title>


      <VideoGrid>
        <VideoScope>
          <img src={'https://i.ytimg.com/vi/uJ03M13_4ck/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDuQ4y3ay9kr8gus78R-LN86ICNng'} alt="Thumbnail" />
          <UploadDetail>
            <img src={'https://yt3.ggpht.com/a-/AOh14GiWwxiY3uUJs185GZgOs6dQkxBQe5F4YWnfow=s68-c-k-c0x00ffffff-no-rj-mo'} alt="UploaderProfile" />
            <VideoInfo>
              <VideoDetail>
                <VideoDescription>ME DÓI O CORAÇÃO TER QUE DIZER ISSO SOBRE A AHRI 😥 | Kami</VideoDescription>
              </VideoDetail>
              <UploaderUser>
                <a>KamiKat</a>
              </UploaderUser>
              <MetadataVideo> <span>41 mil visualizações</span><DotIcon /><span>há 1 hora</span></MetadataVideo>
            </VideoInfo>
          <VideoOptions />
          </UploadDetail>
        </VideoScope>



        <VideoScope>
          <img src={'https://i.ytimg.com/vi/nu8mwGZUBFU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALfvJGYOgfRWBHjKm1c1FoSuqQVw'} alt="Thumbnail" />
          <UploadDetail>
            <img src={'https://yt3.ggpht.com/a-/AOh14GjmRrdkQg-tKdGWbULBfIYw6_u2Do4lBefYJw=s68-c-k-c0x00ffffff-no-rj-mo'} alt="UploaderProfile" />
            <VideoInfo>
              <VideoDetail>
                <VideoDescription>Programador Deve Ter Projeto no Github Como Este!</VideoDescription>
              </VideoDetail>
              <UploaderUser>
                <a>Lucas Montano</a>
              </UploaderUser>
              <MetadataVideo> <span>41 mil visualizações</span><DotIcon /><span>há 1 hora</span></MetadataVideo>
            </VideoInfo>
          <VideoOptions />
          </UploadDetail>
        </VideoScope>



        <VideoScope>
          <img src={'https://i.ytimg.com/vi/4oW4XsIzX_c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC3OtFLz7q7VFCYYbDOITGDJIx5SA'} alt="Thumbnail" />
          <UploadDetail>
            <img src={'https://yt3.ggpht.com/a-/AOh14Gg5tB3LBf3-u-uZBs_tlHddsVpJTZZUIF_Fgw=s68-c-k-c0x00ffffff-no-rj-mo'} alt="UploaderProfile" />
            <VideoInfo>
              <VideoDetail>
                <VideoDescription>TODOS os POLlTICOS vão GANHAR</VideoDescription>
              </VideoDetail>
              <UploaderUser>
                <a>Alessando Santana Oficial</a>
              </UploaderUser>
              <MetadataVideo> <span>2,6 mil visualizações</span><DotIcon /><span>há 1 hora</span></MetadataVideo>
            </VideoInfo>
          <VideoOptions />
          </UploadDetail>
        </VideoScope>


      </VideoGrid>
      </Container>
  );
}

export default LayoutMain;