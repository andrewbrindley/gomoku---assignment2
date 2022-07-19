import React from 'react';
import styled from 'styled-components';
import {BoardSize} from './BoardSize';

const StyledHome = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledContainer = styled.div`
    width: 30%;
    height: 40%;
    border: 1px solid black;
    position: relative;
`

const StartButton = styled.button`
    width: 100%;
    height: 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    position: absolute;
    bottom: 0;
    > span {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
    &: hover{
        cursor: pointer;
    }
`


export const Home = ({setBoardSize, startClicked}) => (
    <StyledHome>
        <StyledContainer>
            <BoardSize setBoardSize = {setBoardSize}/>
            <StartButton onClick = {startClicked}>
                <span>
                    Start
                </span>
            </StartButton>
        </StyledContainer>
    </StyledHome>
)