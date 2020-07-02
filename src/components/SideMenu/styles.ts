import styled from 'styled-components';

import { Home, Subscriptions, VideoLibrary, History, KeyboardArrowDown } from 'styled-icons/material';
import { Fire, Clock } from 'styled-icons/heroicons-solid';
import {PlayVideo} from 'styled-icons/foundation';
import { Like } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    grid-area: SM;

    display: flex;
    flex-direction: column;

    background-color: var(--primary);  

    > div {      
                
        font-size: 13px;
        font-family: 'Noto', sans-serif;
        font-weight: bold;
        color: #f0f0f0;
    
        transition: .2s;

        > a:hover{
            cursor: pointer;
            background-color: #383838;
        }

        > a {
            height: 38px;
            padding: 0 24px;
            margin: 4px 0 0 0;

            display: flex;
            align-items: center;

            text-decoration: none;
        }

        >a svg {
        color: #909090;       
        
        width: 24px;
        height: 24px;
        
        margin-right: 24px;
        }

        &.active {
            background-color: #383838;
        }

    }
    

    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        position: relative;
        width: 4px;
    }

    :hover{
        ::-webkit-scrollbar-thumb {
        background-color: var(--ytd-scroll-navsidebar);
        }
    }
    
`;

export const Index = styled.a`
    color: white;
`;

export const IndexIcon = styled(Home)`
        
`;

export const OnFireIcon = styled(Fire)`
`;

export const OnFire = styled.a`
`;

export const SubscriptionIcon = styled(Subscriptions)`
    
`;

export const Subscription = styled.a`
`;

export const Separator = styled.div`
    width: 100%;
    border-bottom: 1px solid #808080;
    opacity: 0.2;

    margin-bottom: 12px;
    padding: 12px 0 0;
`;

export const NavSideBar = styled.div`

`;

export const NavLibrary = styled.a`
`;

export const NavLibraryIcon = styled(VideoLibrary)`
`;

export const NavHistory = styled.a`
`;

 export const NavHistoryIcon = styled(History)`
 `;

 export const NavYourVideos = styled.a`
 `;

 export const NavYourVideosIcon = styled(PlayVideo)`
 `;

 export const NavWL = styled.a`
 `;

 export const NavWLIcon = styled(Clock)`
 `;

 export const NavLiked = styled.a`
 `;

 export const NavLikedIcon = styled(Like)`
 `;

 export const NavSM = styled.a`
 `;

 export const NavSMIcon = styled(KeyboardArrowDown)`
 `;

