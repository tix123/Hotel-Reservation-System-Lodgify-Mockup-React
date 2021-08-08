//import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import {
    HeaderWarp,
    Brand,
    PageName
} from './HeaderElements';

const Header = () => {

    return (
        
            <HeaderWarp>
                <BiMenuAltLeft style={{
                            color: '#fff',
                            fontSize: '30px',
                        }} />
                <Brand>BOSTON BAY HOTEL</Brand>
                <PageName>Reservations</PageName>
            </HeaderWarp>
        
    )
}

export default Header;