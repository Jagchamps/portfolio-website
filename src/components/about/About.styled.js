// Menu.styled.js
import styled from 'styled-components';
import { media } from '../../device';

export const StyledAbout = styled.section`
.about-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.about-section-first-item {
    ${media.m`
        order: 0;
    `};
    display: flex;
    margin-top: 0.5rem;
}

.about-section-second-item {
    ${media.m`
        order: 1;
        margin-top: auto;
        margin-bottom: auto;
    `};
}

.about-text {
    font-size: 2em;
    text-align: left;
    margin-bottom: 1rem;
}

.about-photo {
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    display: block;
    filter: grayscale(100%);
    transition: 0.5s;

    ${media.xs`
        filter: grayscale(0%);
    `};
}

.about-photo {
    border: solid 2px;
    border-color: ${({ theme }) => theme.syntax};
}

.about-photo:hover {
    filter: grayscale(0%);
}
`;