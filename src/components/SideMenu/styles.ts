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

        > div:hover{
            cursor: pointer;
            background-color: #383838;
        }

        > div {
            height: 38px;
            padding: 0 24px;

            display: flex;
            align-items: center;
        }

        > div span {
            max-width: 20px;
            white-space: nowrap;
        }

        > div svg {
        color: #909090;       
        
        width: 24px;
        height: 24px;
        
        margin-right: 24px;
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

export const Index = styled.div`
    
`;

export const IndexIcon = styled(Home)`
    
`;

export const OnFireIcon = styled(Fire)`
`;

export const OnFire = styled.div`
`;

export const SubscriptionIcon = styled(Subscriptions)`
    
`;

export const Subscription = styled.div`
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

export const NavLibrary = styled.div`
`;

export const NavLibraryIcon = styled(VideoLibrary)`
`;

export const NavHistory = styled.div`
`;

 export const NavHistoryIcon = styled(History)`
 `;

 export const NavYourVideos = styled.div`
 `;

 export const NavYourVideosIcon = styled(PlayVideo)`
 `;

 export const NavWL = styled.div`
 `;

 export const NavWLIcon = styled(Clock)`
 `;

 export const NavLiked = styled.div`
 `;

 export const NavLikedIcon = styled(Like)`
 `;

 export const NavSM = styled.div`
 `;

 export const NavSMIcon = styled(KeyboardArrowDown)`
 `;

