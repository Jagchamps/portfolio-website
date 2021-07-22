// global.js
import { createGlobalStyle } from 'styled-components'
import { media } from './device';
import RobotoTTF from './styles/fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 100%;
    height: 100%;

    ${media.full`
      font-size: 125%;
    `};
  }
  
  body {
    ${media.l`
      width: 100%;
    `};
  
    min-height: 100%;
    text-align: center;
    font-family: 'Roboto Regular';
    overflow: ${({ open }) => (open ? 'hidden' : 'visible')};
  }
  
  .profile {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.syntax};
  }
  
  h1 {
    color: ${({ theme }) => theme.syntax};
    font-size: 4em;
    margin: 1.5rem 0 1.5rem;
  
    ${media.m`
      font-size: 6em;
    `};

    span {
      color: ${({ theme }) => theme.highlight.secondary};
    }
  }
  
  h2 {
    font-size: 3em;
    margin: 1.25rem 0 1.25rem;

    span {
      color: ${({ theme }) => theme.highlight.secondary};
    }
  }
  
  p {
    font-size: 1.25em;
    text-align: left;
    margin-bottom: 0.5rem;

    ${media.xs`
        margin-left: 0.5em;
        margin-right: 0.5em;
    `};
  }
  
  a {
    color: ${({ theme }) => theme.highlight.primary};
    text-decoration-line: none;
    text-transform: uppercase;
    text-align: center;
  }
  
  li {
    width: fit-content;
    list-style: none;
    margin: 1rem -1rem 0;
    font-weight: 500;
    font-size: 1.25em;
  }
  
  section {
     margin-top: 2rem;
     margin-bottom: 2rem;
  }
  
  .section-container {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .section-inner {
    width: 100%;
    flex-basis: 100%;

    ${media.s`
      width: 83.33%;
      flex-basis: 83.33%;
    `};

    ${media.l`
      width: 66.67%;
      flex-basis: 66.67%;
    `};

    ${media.full`
      max-width: 900px;
    `};
  }
  
  [class|=link-line] {
    overflow: hidden;
    position: relative;
      display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  [class|=link-line]:after {
    content: "";
    background-color: currentColor;
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    left: 0;
    right: 0;
    -webkit-transition: ease-in-out 0.8s width;
    -o-transition: ease-in-out 0.8s width;
    transition: ease-in-out 0.8s width;
    -webkit-animation-name: lineOut;
    animation-name: lineOut;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
  
  [class|=link-line]:hover {
    text-decoration: none
  }
  
  [class|=link-line]:hover:after {
    -webkit-animation-name: lineIn;
    animation-name: lineIn;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-direction: alternate;
    animation-direction: alternate
  }
  
  @-webkit-keyframes lineIn {
    0% {
        -webkit-transform: translateX(-100.5%);
        transform: translateX(-100.5%)
    }
  
    to {
        -webkit-transform: translateX(0%);
        transform: translateX(0%)
    }
  }
  
  @keyframes lineIn {
    0% {
        -webkit-transform: translateX(-100.5%);
        transform: translateX(-100.5%)
    }
  
    to {
        -webkit-transform: translateX(0%);
        transform: translateX(0%)
    }
  }
  
  .lineIn {
    -webkit-animation-name: lineIn;
    animation-name: lineIn
  }
  
  @-webkit-keyframes lineOut {
    0% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%)
    }
  
    to {
        -webkit-transform: translateX(100.5%);
        transform: translateX(100.5%)
    }
  }
  
  @keyframes lineOut {
    0% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%)
    }
  
    to {
        -webkit-transform: translateX(100.5%);
        transform: translateX(100.5%)
    }
  }
  
  .lineOut {
    -webkit-animation-name: lineOut;
    animation-name: lineOut
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  ${media.xs`
    #scroll {
      display: none;
    }
  `};

  .col {
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    //padding: 0 12px;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 100%;
    -webkit-flex-basis: 100%;
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }

  .col-xs-1 {
      max-width: 8.33%;
      flex-basis: 8.33%;
  }

  .col-xs-2 {
      max-width: 16.67%;
      flex-basis: 16.67%;
  }

  .col-xs-3 {
      max-width: 25%;
      flex-basis: 25%;
  }

  .col-xs-4 {
      max-width: 33.33%;
      flex-basis: 33.33%;
  }

  .col-xs-5 {
      max-width: 41.67%;
      flex-basis: 41.67%;
  }

  .col-xs-6 {
      max-width: 50%;
      flex-basis: 50%;
  }

  .col-xs-7 {
      max-width: 58.33%;
      flex-basis: 58.33%;
  }

  .col-xs-8 {
      max-width: 66.67%;
      flex-basis: 66.67%;
  }

  .col-xs-9 {
      max-width: 75%;
      flex-basis: 75%;
  }

  .col-xs-10 {
      max-width: 83.33%;
      flex-basis: 83.33%;
  }

  .col-xs-11 {
      max-width: 91.67%;
      flex-basis: 91.67%;
  }

  .col-xs-12 {
      max-width: 100%;
      flex-basis: 100%;
  }

  .col-sm-1 {
      ${media.s`
          max-width: 8.33%;
          flex-basis: 8.33%;
      `};
  }

  .col-sm-2 {
      ${media.s`
          max-width: 16.67%;
          flex-basis: 16.67%;
      `};
  }

  .col-sm-3 {
      ${media.s`
          max-width: 25%;
          flex-basis: 25%;
      `};
  }

  .col-sm-4 {
      ${media.s`
          max-width: 33.33%;
          flex-basis: 33.33%;
      `};
  }

  .col-sm-5 {
      ${media.s`
          max-width: 41.67%;
          flex-basis: 41.67%;
      `};
  }

  .col-sm-6 {
      ${media.s`
          max-width: 50%;
          flex-basis: 50%;
      `};
  }

  .col-sm-7 {
      ${media.s`
          max-width: 58.33%;
          flex-basis: 58.33%;
      `};
  }

  .col-sm-8 {
      ${media.s`
          max-width: 66.67%;
          flex-basis: 66.67%;
      `};
  }

  .col-sm-9 {
      ${media.s`
          max-width: 75%;
          flex-basis: 75%;
      `};
  }

  .col-sm-10 {
      ${media.s`
          max-width: 83.33%;
          flex-basis: 83.33%;
      `};
  }

  .col-sm-11 {
      ${media.s`
          max-width: 91.67%;
          flex-basis: 91.67%;
      `};
  }

  .col-sm-12 {
      ${media.s`
          max-width: 100%;
          flex-basis: 100%;
      `};
  }

  .col-md-1 {
    ${media.m`
        max-width: 8.33%;
        flex-basis: 8.33%;
    `};
}

.col-md-2 {
    ${media.m`
        max-width: 16.67%;
        flex-basis: 16.67%;
    `};
}

.col-md-3 {
    ${media.m`
        max-width: 25%;
        flex-basis: 25%;
    `};
}

.col-md-4 {
    ${media.m`
        max-width: 33.33%;
        flex-basis: 33.33%;
    `};
}

.col-md-5 {
    ${media.m`
        max-width: 41.67%;
        flex-basis: 41.67%;
    `};
}

.col-md-6 {
    ${media.m`
        max-width: 50%;
        flex-basis: 50%;
    `};
}

.col-md-7 {
    ${media.m`
        max-width: 58.33%;
        flex-basis: 58.33%;
    `};
}

.col-md-8 {
    ${media.m`
        max-width: 66.67%;
        flex-basis: 66.67%;
    `};
}

.col-md-9 {
    ${media.m`
        max-width: 75%;
        flex-basis: 75%;
    `};
}

.col-md-10 {
    ${media.m`
        max-width: 83.33%;
        flex-basis: 83.33%;
    `};
}

.col-md-11 {
    ${media.m`
        max-width: 91.67%;
        flex-basis: 91.67%;
    `};
}

.col-md-12 {
    ${media.m`
        max-width: 100%;
        flex-basis: 100%;
    `};
}

.col-lg-1 {
  ${media.l`
      max-width: 8.33%;
      flex-basis: 8.33%;
  `};
}

.col-lg-2 {
  ${media.l`
      max-width: 16.67%;
      flex-basis: 16.67%;
  `};
}

.col-lg-3 {
  ${media.l`
      max-width: 25%;
      flex-basis: 25%;
  `};
}

.col-lg-4 {
  ${media.l`
      max-width: 33.33%;
      flex-basis: 33.33%;
  `};
}

.col-lg-5 {
  ${media.l`
      max-width: 41.67%;
      flex-basis: 41.67%;
  `};
}

.col-lg-6 {
  ${media.l`
      max-width: 50%;
      flex-basis: 50%;
  `};
}

.col-lg-7 {
  ${media.l`
      max-width: 58.33%;
      flex-basis: 58.33%;
  `};
}

.col-lg-8 {
  ${media.l`
      max-width: 66.67%;
      flex-basis: 66.67%;
  `};
}

.col-lg-9 {
  ${media.l`
      max-width: 75%;
      flex-basis: 75%;
  `};
}

.col-lg-10 {
  ${media.l`
      max-width: 83.33%;
      flex-basis: 83.33%;
  `};
}

.col-lg-11 {
  ${media.l`
      max-width: 91.67%;
      flex-basis: 91.67%;
  `};
}

.col-lg-12 {
  ${media.l`
      max-width: 100%;
      flex-basis: 100%;
  `};
}

.col-xl-1 {
  ${media.xl`
      max-width: 8.33%;
      flex-basis: 8.33%;
  `};
}

.col-xl-2 {
  ${media.xl`
      max-width: 16.67%;
      flex-basis: 16.67%;
  `};
}

.col-xl-3 {
  ${media.xl`
      max-width: 25%;
      flex-basis: 25%;
  `};
}

.col-xl-4 {
  ${media.xl`
      max-width: 33.33%;
      flex-basis: 33.33%;
  `};
}

.col-xl-5 {
  ${media.xl`
      max-width: 41.67%;
      flex-basis: 41.67%;
  `};
}

.col-xl-6 {
  ${media.xl`
      max-width: 50%;
      flex-basis: 50%;
  `};
}

.col-xl-7 {
  ${media.xl`
      max-width: 58.33%;
      flex-basis: 58.33%;
  `};
}

.col-xl-8 {
  ${media.xl`
      max-width: 66.67%;
      flex-basis: 66.67%;
  `};
}

.col-xl-9 {
  ${media.xl`
      max-width: 75%;
      flex-basis: 75%;
  `};
}

.col-xl-10 {
  ${media.xl`
      max-width: 83.33%;
      flex-basis: 83.33%;
  `};
}

.col-xl-11 {
  ${media.xl`
      max-width: 91.67%;
      flex-basis: 91.67%;
  `};
}

.col-xl-12 {
  ${media.xl`
      max-width: 100%;
      flex-basis: 100%;
  `};
}

.col-full-1 {
  ${media.full`
      max-width: 8.33%;
      flex-basis: 8.33%;
  `};
}

.col-full-2 {
  ${media.full`
      max-width: 16.67%;
      flex-basis: 16.67%;
  `};
}

.col-full-3 {
  ${media.full`
      max-width: 25%;
      flex-basis: 25%;
  `};
}

.col-full-4 {
  ${media.full`
      max-width: 33.33%;
      flex-basis: 33.33%;
  `};
}

.col-full-5 {
  ${media.full`
      max-width: 41.67%;
      flex-basis: 41.67%;
  `};
}

.col-full-6 {
  ${media.full`
      max-width: 50%;
      flex-basis: 50%;
  `};
}

.col-full-7 {
  ${media.full`
      max-width: 58.33%;
      flex-basis: 58.33%;
  `};
}

.col-full-8 {
  ${media.full`
      max-width: 66.67%;
      flex-basis: 66.67%;
  `};
}

.col-full-9 {
  ${media.full`
      max-width: 75%;
      flex-basis: 75%;
  `};
}

.col-full-10 {
  ${media.full`
      max-width: 83.33%;
      flex-basis: 83.33%;
  `};
}

.col-full-11 {
  ${media.full`
      max-width: 91.67%;
      flex-basis: 91.67%;
  `};
}

.col-full-12 {
  ${media.full`
      max-width: 100%;
      flex-basis: 100%;
  `};
}
`