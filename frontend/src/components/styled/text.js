import styled from "styled-components";
import { device } from "./device";

export const H1 = styled.h1`
    font-size: 60px; 
    color: #630000;
    font-family: "Rowdies";
    margin: 0;
    font-weight: normal;

    @media (max-width: ${device.mobileL}) {
        font-size: 8vw;
    }
`

export const H2 = styled.h2`
    font-family: "Rowdies";
    font-size: 25px;
    color: #D8B6A4;
    font-weight: normal;

    @media (max-width: ${device.mobileL}) {
        font-size: 4vw;
    }
`
export const H3 = styled.h3`
    font-family: "Harmattan";
    font-size: 25px;
    color: #000000;
`

export const H4 = styled.h4`
    font-family: "Harmattan";
    font-size: 16px;
    color: #000000;
    font-weight: normal;
`