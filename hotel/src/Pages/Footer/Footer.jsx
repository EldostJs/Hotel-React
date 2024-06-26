import React from 'react'
import StyleFooter from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer className={StyleFooter.new_footer_area}>
            <div className={StyleFooter.new_footer_top}>
                <div className={StyleFooter.container}>
                    <div className={StyleFooter.row}>
                        <div className={StyleFooter.col}>
                            <div className={`${StyleFooter.f_widget} ${StyleFooter.company_widget} wow fadeInLeft`} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                <h3>Contact Us</h3>
                                <p>Send  us your e-mail , and we will contact you!</p>
                                <form action="#" className={StyleFooter.two} method="post" noValidate={true}>
                                    <input type="text" name="EMAIL" placeholder="Email" />
                                    <button type="submit">Send</button>
                                    <p className={StyleFooter.mchimp_errmessage} style={{ display: 'none' }}></p>
                                    <p className={StyleFooter.mchimp_sucmessage} style={{ display: 'none' }}></p>
                                </form>
                            </div>
                        </div>
                        <div className={StyleFooter.col}>
                            <div className={`${StyleFooter.f_widget} ${StyleFooter.about_widget} ${StyleFooter.pl_70} wow fadeInLeft`} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <h3>About</h3>
                                <ul className={StyleFooter.lis}>
                                    <li><a href="#" className={StyleFooter.tex}>Company</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Android App</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>ios App</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Desktop</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Projects</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={StyleFooter.col}>
                            <div className={`${StyleFooter.f_widget} ${StyleFooter.about_widget} ${StyleFooter.pl_70} wow fadeInLeft`} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                <h3>Help</h3>
                                <ul className={StyleFooter.lis}>
                                    <li><a href="#" className={StyleFooter.tex}>FAQ</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Term &amp; conditions</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Reporting</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Documentation</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Support Policy</a></li>
                                    <li><a href="#" className={StyleFooter.tex}>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={StyleFooter.col}>
                            <div className={`${StyleFooter.f_widget} ${StyleFooter.social_widget} ${StyleFooter.pl_70} wow fadeInLeft`} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                <h3 >Subscribe</h3>
                                <div className={StyleFooter.f_social_icon}>
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={StyleFooter.footer_bg}>
                    <div className={StyleFooter.footer_bg_one}></div>
                    <div className={StyleFooter.footer_bg_two}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
