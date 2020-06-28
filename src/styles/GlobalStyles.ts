import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    html, body, #root{
        height: 100%;

    }

    *,button,input {
        border:0;
        outline:0;

        font-family: 'Roboto', sans-serif;
        font-family: 'Noto Sans', sans-serif;
        
    }

    :root {
        --primary: #212121fa;
        --yt-searchbox-background: #121212;
        --yt-background-spec: #181818;
        --ytd-searchbox-legacy-button-border-color: #303030;
        --notification: #f84a4b;
        --ytd-scroll-navsidebar: #666666;
        
    }
`;