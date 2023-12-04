import Link from 'next/link';
import Router from 'next/router';
import {useEffect} from 'react';

const SideNav = ({toggleSidenav}) => {
    const closeSideNav = () => {
        const html = document.querySelector("html"),
            sideNav = document.querySelector(".side-nav");

        sideNav.classList.remove("opened");
        html.classList.remove("side-nav-opened");
    };

    useEffect(() => {
        // Close sidenav while navigate to another page
        Router.events.on("routeChangeStart", closeSideNav);
        return () => {
            Router.events.off("routeChangeStart", closeSideNav);
        };
    }, []);

    return (
        <div className="side-nav">
            <div className="side-nav-inner">
             

                <div className="side-nav-content">
                    <div className="row ">
                        <div className="col-lg-5 col-xl-6 col-12">
                            <ul className="main-navigation">
                                <li>
                                    <Link href="/">Ana Sayfa</Link>
                                </li>
                                <li>
                                    <Link href="/services">Hizmetlerimiz</Link>
                                </li>
                                <li>
                                    <Link href="/about">Hakkımızda</Link>
                                </li>
                                <li>
                                    <Link href="/contact">İletişim</Link>
                                </li>
                            
                            </ul>
                        </div>

                        <div className="col-lg-7 col-xl-6 col-12">
                            <div className="axil-contact-info-inner">
                                <div className="axil-contact-info">
                                    <address className="address">
                                        <span className="title">İletişim</span>
                                        <p>
                                            Göztepe Mahallesi&sbquo; 2356. Sokak <br/> Metro Hayat Sitesi&sbquo;  Bağcılar / İstanbul
                                        </p>
                                    </address>
                                    <address className="address">
                                        <span className="title">
                                          Telefon &lsquo;Numaralarımız
                                        </span>
                                        <p>
                                            <a className="tel" href="tel:8884562790">
                                                <i className="fas fa-fax"/>
                                                0(850) 242 5 802
                                            </a>
                                        </p>
                                        <p>
                                            <a className="tel" href="tel:12125553333">
                                                <i className="fas fa-phone"/>
                                                0(538) 064 5 802
                                            </a>
                                        </p>
                                    </address>
                                </div>

                                <div className="axil-contact-info">
                                    <h5 className="title">Sosyal Medya</h5>
                                    <div className="contact-social-share d-flex align-items-center">
                                        <ul className="social-share style-rounded">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-linkedin-in"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="close-sidenav" onClick={toggleSidenav}>
                    <button className="close-button">
                        <i className="fal fa-times"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
