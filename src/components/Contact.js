import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Contact = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <section id="contact" className="section-container contact">
            <div className="section-inner">
                <h2 className="col-xs-12">
                    <span style={{ color: theme.highlight.secondary }}>Contact</span> me
                </h2>
                <div className='col-xs-8 col-sm-12 section-container contact-list-container'>
                    <ul>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="mailto:jonathan.ag.champion@gmail.com">
                                Mail
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://www.linkedin.com/in/jonathan-champion-39281993"
                                rel="noreferrer"
                                target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://twitter.com/JagChamps"
                                rel="noreferrer"
                                target="_blank">
                                Twitter
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://github.com/Jagchamps"
                                rel="noreferrer"
                                target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;