import styled from 'styled-components';
import { Link } from 'react-scroll';

const navBarBG = "#e9eae4";
const border = "#ccc"
const textColor = "#333";
const lighterText = "#aaa";
const contentBG = "#f0f1ec";
const emptyContentTitle = "#999";
const emptyContentSubtitle = "#666";
const contentButtonBG = '#444';
const contentButtonColor = '#f0f1ec';
const contentButtonHover = '#000';
const sideButtonBG = '#03ebc3';
const sideButtonColor = '#333';
const sideButtonHover = '#05d2b1';

export const BookingDetailItem = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 0px 10px 0px;
`;

export const BookinglItemLabel = styled.div`
color:  ${lighterText};
`;

export const BookinglItemValue = styled.div`

`;

export const BookingDetailWarpper = styled.div`
width: 400px;
display: flex;
flex-direction: column;
background: #fff;
padding: 20px;
`;

export const IdNumberAndDate = styled.div`
color: ${lighterText};
font-style: italic;
font-size: 14px;
`;

export const RoomTypeAndGuests = styled.div`
font-size: 14px;
`;

export const HrBar = styled.hr`
border-style: solid none none none;
border-color: ${lighterText};
width: 100%;
`;

export const BookingContentContainer = styled.div`
background: ${contentBG};
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
`;

export const BookingContentWarpper = styled.div`
width: 95%;
margin-top: 20px;
color: ${textColor};
`;

export const BookingTitle = styled.div`
font-size: 30px;
font-weight: bold;
color: ${textColor};
`;

export const SearchInput = styled.input`
padding: 5px 5px;
border: none;
`;

export const SideButton = styled(Link)`
width: 200px;  
border-radius: 5px;
background: ${sideButtonBG};
padding: 12px 30px;
color: ${sideButtonColor};
font-size: 14px;
font-family: "Arial";
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
  background: ${sideButtonHover};
  }
`;

export const ContentButton = styled(Link)`
width: 250px;  
border-radius: 5px;
background: ${contentButtonBG};
padding: 12px 30px;
color: ${contentButtonColor};
font-size: 14px;
font-family: "Arial";
margin-top: 10px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
  background: ${contentButtonHover};
}
`;

export const ButtonWarp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;
`;

export const EmptyContentTitle = styled.div`
font-size: 40px;
color: ${emptyContentTitle};
`;

export const EmptyContentSubtitle = styled.div`
font-size: 14px;
color: ${emptyContentSubtitle};
`;

export const BookingBodyWarp = styled.div`
display: flex;
height: 90%;
margin: 0px;
`;

export const Nonselected = styled.div`
background: ${contentBG};
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const NavSideBar = styled.div`
min-width: 300px;
width: 20%;
display: flex;
flex-direction: column;
flex: 1;
`;

export const NavTopBlock = styled.div`
background: ${navBarBG};
height: 10%;
margin: 0px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 2px solid ${border};
`;

export const NavBottomBlock = styled.div`
background: ${navBarBG};
height: 10%;
margin: 0px;
display: flex;
justify-content: center;
align-items: center;
border-top: 2px solid ${border};
`;

export const BookingCardContainer = styled.div`
min-width: 300px;
margin: 0px;
height: 80%;
flex: 1 ;
overflow-y: scroll;
overflow-x: hidden;
`;

export const BookingCardWarpper = styled.div`
position: relative;
`;

export const BookingCheckBoxLabel = styled.label`
position: absolute;
top: 0;
background: ${navBarBG};
height: 65px;
width: 100%;
padding: 10px;
cursor: pointer;
border-bottom: 2px solid ${border};
opacity: 1;
`;

export const BookingCheckBox = styled.input`
opacity: 0.5;
z-index: 1;
height: 80px;
width: 100%;
color: ${textColor};

&:checked + ${BookingCheckBoxLabel} {
  background: #333;
  color: #fff ;
}
`;

export const BookingTitleWarp = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
`;

export const ThridLineWarp = styled.div`
//color: inherit;
`;

export const LastUpdate = styled.div`
font-size: 12px;
`;

export const GuestName = styled.div`
font-family: "Arial Black";
font-size: 14px;
`;

