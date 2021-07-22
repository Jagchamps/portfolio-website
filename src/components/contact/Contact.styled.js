// Contact.styled.js
import styled from 'styled-components';

export const StyledContact = styled.section`
.contact {
    margin-bottom: 3rem;

    ul {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 0;
        flex-wrap: wrap;
    }

    li {
        margin-left: auto;
        margin-right: auto;


    }

    svg  {
        height: 30px;
        width: 30px;
        path {
            fill: ${({ theme }) => theme.highlight.primary};
        }
    }
}

.contact-list-container {
    margin-left: auto;
    margin-right: auto;
}
`;