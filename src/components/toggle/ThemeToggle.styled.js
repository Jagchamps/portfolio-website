// ThemeToggle.styled.js
import styled from 'styled-components';

export const StyledThemeToggle = styled.div`
/* Hide default HTML checkbox */
input[type="checkbox"] {
    visibility: hidden;
    width: 0;
    height: 0;
}

/* The switch - the box around the slider */
.themeSwitch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    cursor: pointer;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.highlight.primary};
    -webkit-transition: .4s;
    transition: .4s;
    box-shadow: 0 0 20px ${({ theme }) => theme.highlight.primary};
}

label::after {
    content: "";
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.bg};
    position: absolute;
    border-radius: 70px;
    top: 4px;
    left: 4px;
    transition: 0.5s;
}

input:checked + label:after {
    transform: translateX(26px);
}

label:active:after {
    width: 30px;
}
`;