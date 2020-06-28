import styled from 'styled-components';
import { Menu, Search, Notifications } from 'styled-icons/material';
import { Keyboard } from 'styled-icons/typicons';
import { VideoPlus, Grid } from 'styled-icons/boxicons-solid';

import { Props } from '.';

export const Container = styled.div`
   grid-area: HH;

   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 0 16px;

   background-color: var(--primary);

   > div:first-child {   
      width: 185px;

      padding: 8px;   
      display: flex;

      align-items: center;
   }

   > div:not(:first-child){
      display: flex;
      align-items: center;
      justify-content: center;
   }

   > div img {
      width: 80px;

      cursor: pointer;
   }

   > div span {
      height: 20px;

      margin-left: 2px;
      color: gray;
      
      font-size: 9px;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      
   }
`;

export const HamburgMenu = styled(Menu)`
   height: 24px;
   width: 24px;

   margin-right: 24px;

   color: white;

   cursor: pointer;
`;

export const InputWrapper = styled.div`
      /* display: flex;
      position: relative; */
      width: 100%;
      padding: 0 16px;

      border: gray; 

      align-items: center;
`;

export const Input = styled.input`
   height: 30px;
   /* width: calc(100vw + 240px); */
   width: 100%;
   max-width: 540px;


   padding: 10px;

   position: relative;
   border-radius: 2px 0 0 2px;

   font-size: 16px;
   font-weight: 400;    
   color: #ffffffe0;

   background-color: var(--yt-searchbox-background);

   ~ svg {
      position: relative;
      right: 30px;
   }
   
`;

export const KeyboardInputIcon = styled(Keyboard)`
   width: 24px;
   height: 24px;

   color: gray;

   cursor: pointer;

   transition: 0.2s;

   :hover {
      color: white;
   }
`;

export const SearchButton = styled.button`
   width: 65px;
   height: 30px;   

   position: relative;
   right: 24px;
   border-radius: 0 2px 2px 0;

   cursor: pointer;

   background-color: var(--ytd-searchbox-legacy-button-border-color);
`;

export const SearchIcon = styled(Search)`
   width: 18px;
   height: 18px;

   color: gray;
`;

export const AccountTools = styled.div`
   padding: 1px 6px;

   > svg {
      margin: 0 8px;
   }
`;

export const UploadVideo = styled(VideoPlus)`
   width: 24px;
   height: 24px;

   cursor: pointer;
   color: white;
`;

export const ExtraApplications = styled(Grid)`
   width: 24px;
   height: 24px;

   cursor: pointer;
   color: white;
`;

export const Notification = styled(Notifications) <Props>`
   width: 24px;
   height: 24px;

   cursor: pointer;
   color: white;

   &::before{
        cursor: initial;
        width: 12px;
        height: 40px;
        

        position: absolute;

        left: -21px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 0 5px 5px 0;

        content: '';
        /* display: ${(props) => (props.hasNotification ? 'inline' : 'none')}; */
    }

   &::after{
        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

       
    }
`;

export const UserProfile = styled.div`
   max-height: 32px;
   max-width: 32px;  
   
   padding: 1px 6px;
   > img {
      max-width: 32px;


      /* margin: 0 6px 0 6px; */
      border-radius: 50%;

   }
`;
