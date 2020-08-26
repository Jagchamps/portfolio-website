import React from 'react';

const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="scroll-to-top">
            <p onClick={scrollToTop}>Back to top</p>
        </div>
    );
}

export default ScrollToTop;