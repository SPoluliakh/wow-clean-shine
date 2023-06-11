import styled from 'styled-components';
import { SVG } from '../../images';

export const Disclaimer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: red;
  overflow: hidden;
  z-index: 10;
`;

export const DisclaimerText = styled.p`
  text-align: center;
  animation: disclaimer 15s linear infinite;

  @keyframes disclaimer {
    0% {
      transform: translateX(55%);
    }
    100% {
      transform: translateX(-55%);
    }
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 144px;
  background: linear-gradient(
    60deg,
    rgb(84, 58, 183) 0%,
    rgb(0, 172, 193) 100%
  );
`;

export const LogoWrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;

export const Logo = styled.img`
  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const MainContent = styled.div`
  @media screen and (min-width: 768px) {
    flex-basis: 70%;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'Coolvetica';
  font-weight: 800;
  line-height: 1.25;
  font-size: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 16px;
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;

export const ContactsList = styled.ul`
  margin-bottom: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 64px;
  }
`;

export const Contact = styled.a`
  display: block;
  text-decoration: none;
  color: #fff69d;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  transition: color 300ms ease;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    :hover {
      color: orange;
    }
  }
`;

export const Facebook = styled(SVG.Facebook)`
  animation: facebook 1000ms ease infinite alternate;
  transition: color 300ms ease;

  @keyframes facebook {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.2);
    }
  }
`;

export const ContentList = styled.ul`
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const TextCard = styled.li`
  padding: 16px;
  border: 3px solid #2f9796;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    :nth-child(1) {
      flex-basis: 61%;
    }
    :nth-child(2) {
      flex-basis: 39%;
    }
  }

  @media screen and (min-width: 1440px) {
    :nth-child(1) {
      flex-basis: 63%;
    }
    :nth-child(2) {
      flex-basis: 37%;
    }
  }
`;

export const ImgItem = styled.li`
  border: 3px solid #2f9796;
  border-radius: 16px;
  flex-basis: calc((100% - 32px) / 3);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-height: 165px;
  }
  @media screen and (min-width: 1440px) {
    max-height: 300px;
  }
`;

export const Img = styled.img``;
