// Footer.styled.js
import styled from 'styled-components';
import { media } from '../../device';

export const StyledFooter = styled.footer`
footer {
    width: 100%;
    bottom: 0;
    min-height: 64px;
    margin-right: auto;
    margin-left: auto;

    display: flex;
    align-items: center;
}

.footer-inner {
    width: 100%;
    height: 32px;
    top: 0;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    ${media.l`
        width: 1024px;
        margin-right: auto;
        margin-left: auto;
    `};

    @media only screen and (max-width: $bp-large) {
        margin-right: auto;
        margin-left: auto;
    }
}
`;