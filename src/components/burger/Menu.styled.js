// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  background-color: ${({ theme }) => theme.ui}; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  display: flex;
  transition: all 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .menu-inner {
    width: 66.67%;
  }

  a {
    padding: 2rem 0;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5em;
      text-align: center;
    }
  }
`;
