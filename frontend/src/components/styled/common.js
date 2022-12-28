import styled from 'styled-components';
import { device } from './device';

export const Button = styled.button`
  background-color: #d8b6a4;
  height: 60px;
  width: 320px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: harmattan;
  font-size: 25px;
  font-weight: bold;
  border: 0;
  color: #630000;
  margin: 25px auto;
  display: block;

  @media (max-width: ${device.mobileL}) {
    width: 200px;
    height: 50px;
  }
`;

export const Input = styled.input`
  display: block;
  border-radius: 10px;
  border: 2px solid #d8b6a4;
  height: 50px;
  width: 410px;
  font-size: 15px;
  padding: 0 20px;
  margin: 20px 0;

  @media (max-width: ${device.mobileL}) {
    border-radius: 8px;
    width: 270px;
    height: 30px;
    margin-bottom: 8px;
    padding: 0 15px;
  }
`;

export const InputLarge = styled.input`
  display: block;
  border-radius: 10px;
  border: 2px solid #d8b6a4;
  height: 60px;
  width: 435px;
  font-size: 15px;
  padding: 0 20px;

  @media (max-width: ${device.mobileL}) {
    border-radius: 8px;
    width: 65%;
    height: 30px;
    margin-bottom: 8px;
  }
`;

export const label = styled.label``;

export const DashboardTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #630000;
  opacity: 0.75;
  width: 40%;
  border-radius: 20px;
  height: 120px;
  max-height: 20%;
`;
