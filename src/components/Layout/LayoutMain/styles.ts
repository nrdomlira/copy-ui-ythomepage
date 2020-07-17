import styled from 'styled-components';

import { DotSingle } from 'styled-icons/entypo'
import { DotsVertical } from 'styled-icons/heroicons-solid';

export const Container = styled.div`
    grid-area: LV;    

    padding: 0px 64px;
    
    background-color: var(--yt-background-spec);


`;


export const Title = styled.div`
        margin: 36px 0 0 24px;

        color: white;

        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
`;

export const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: 360px 360px 360px 360px;
    grid-template-rows: 1fr 1fr;

    grid-gap: 40px 16px;

    margin: 16px 0 0 22px;

    /* :hover {
        > div + svg {
            display: initial;

        :hover{
            color: white;
            }    
        }
    } */
        
`;

export const VideoInfo = styled.div`
    width: 100%;
    padding: 0 24px 0 0;
    

    /* position: relative; */
    
`;

export const UploadDetail = styled.div`
    /* height: 12px; */
    display: flex;

    padding-top: 12px;

    > svg:first-child {
        min-width: 24px;
        min-height: 24px;
    }

    > img {
        width:36px;
        height: 36px;

        margin: 0 12px 0 0;

        border-radius: 50%;
    }
    
    /* :hover {
        > svg {
            display: initial;

            :hover{
                color: white;
            }
        }
    } */
    

`;

export const VideoDetail = styled.div`
    
`;

export const UploaderUser = styled.div`

    margin-top: 6px;
    
    font-size: 13px;
    font-weight: 500;
    color: #909090;
`;
export const MetadataVideo = styled.span`    

    font-size: 14px;
    font-weight: 400;
    color: #909090;
`;

export const VideoDescription = styled.h4`
    color: white;
    overflow: hidden;

    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
`;

export const DotIcon = styled(DotSingle)`
    height: 12px;
    width: 12px;

    /* font-weight: 700; */
`;

export const VideoOptions = styled(DotsVertical)`
    width: 24px;
    height: 24px;    

    display: none;
    
    color: #909090;

`;

export const VideoScope = styled.div`
    cursor: pointer; 
    
    > img {
        max-width: 360px;
        max-height: 202px;
    }

    :hover {
        > div svg {
            display: initial;

            :hover{
                color: white;
            }
        }
    }
`;
