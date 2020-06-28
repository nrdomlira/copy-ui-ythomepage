import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;
  /* width: 100vw; */
  
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 56px auto;
  grid-template-areas: 'HH HH'
                       'SM LV';

`;
