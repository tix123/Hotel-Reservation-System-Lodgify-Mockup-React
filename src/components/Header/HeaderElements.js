import styled from 'styled-components';

const headerBG = "#000";
const brandColor = "#fff";
const pageNameColor = "#aaa";

export const HeaderWarp = styled.div`
background: ${headerBG};
padding: 0 0 0 10px;
display: flex;
height: 10%;
margin: 0px;
align-items: center;
//line-height: 1.25;
//justify-content: center;
//max-height: 40px;
`;

export const Brand = styled.div`
font-family: "Arial Black";
font-size: 16px;
color: ${brandColor};
margin-left: 2rem;
//line-height: inherit;
//vertical-align: bottom;
`;

export const PageName = styled.div`
color: ${pageNameColor};
margin-left: 1rem;
`;