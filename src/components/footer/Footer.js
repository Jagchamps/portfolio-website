import React from 'react';
import { StyledFooter } from './Footer.styled';
import ScrollToTop from '../ScrollToTop';

const Footer = () => {
    return (
        <StyledFooter style={{ backgroundColor: theme.ui }}>
            <div className="footer-inner">
                <div className="col col-xs-12 section-container">
                    <ScrollToTop />
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;