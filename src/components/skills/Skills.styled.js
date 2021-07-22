// Skills.styled.js
import styled from 'styled-components';
import { media } from '../../device';

export const StyledSkills = styled.section`
.skills-section {
    display: flex;
    flex-wrap: wrap;
}

.skills-list {
    display: -webkit-box;
    flex-wrap: wrap;
    list-style-type: none;
    
    ${media.xs`
        margin-left: 0.5em;
        margin-right: 0.5em;
    `};

    li {
        margin-bottom: 0.5em;
        margin-left: 0;
        margin-right: 0.5em;
        padding: 0.5em;
        border-radius: 3%;
        background-color: ${({ theme }) => theme.highlight.primary};
        color: #f2f2f2;
    }
}
`;