// Navbar.styled.js
import styled from 'styled-components';
import { media } from '../../device';

export const StyledHeader = styled.header`
  header {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 5;
  }
  
  .header-inner {
    width: 100%;
    height: 64px;
    top: 0;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${({ theme }) => theme.ui};
    color: ${({ theme }) => theme.highlight.primary};
  
    ${media.m`
      justify-content: space-between;
    `};
  }
  
  .header-left {
    display: flex;
    margin-left: 0.4rem;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    margin-right: 0.4rem;

    ${media.m`
      display: none;
    `};
  }

  .header-mobile {
    width: 100%;
    top: 0;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center
    align-items: center;
    align-content: center;
    flew-wrap: wrap;
  }
  
  .header-logo {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
    text-align: center;
    position: relative;
    z-index: 10;

    ${media.m`
      font-size: 2em;
    `};
  }
  
  .navbar {
    display: none;

    ${media.m`
      display: flex;
    `};
  
    ul {
      align-items: flex-end;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
    }
  
    li {
      display: flex;
    }
  }  
`;