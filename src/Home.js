import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import bridge from '../src/assets/bridge.jpg';

const Styles = styled.div`
.jumbo {
    background : url(${bridge}) no-repeat fixed bottom;
    width:750px;
    height:1260px;
    color: #fcfcfc;
    height: 200px;
    position: relative;
}
`;
export const Home = () => (
<Styles>
<div className='jumbo'>
    <h2>Home Default</h2>
    </div>
</Styles>
)