import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>İletişim</title>
            </Head>

            <Breadcrumb title="İletişim" current="İletişim"/>

            <main className="main-wrapper">
                <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                                <div className="contact-form-wrapper">
                                    <div className="axil-contact-form contact-form-style-1">
                                        <h3 className="title">Bize Ulaşın</h3>
                                        <ContactFormThree/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                                <div className="axil-address-wrapper">
                                    <div
                                        className="axil-address"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Telefon</h4>
                                                <p>
                                                Müşteri hizmetlerimiz Pzt-Cuma, sabah 10:00 ile 18:00 arasıdır.
                                                </p>
                                                <p>
                                                    <a className="axil-link" href="tel:1234567890">
                                                        (0850) 242 5802
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="axil-address mt--60 mt_sm--30 mt_md--30"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">E-mail</h4>
                                                <p>
                                                Destek ekibimiz standart çalışma saatleri içerisinde, 48 saat içinde size geri dönecektir.
                                                </p>
                                                <p>
                                                    <a
                                                        className="axil-link"
                                                        href="mailto:example@gmail.com"
                                                    >
                                                        info@timedijital.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape shape-01">
                            <i className="icon icon-contact-01"/>
                        </div>
                        <div className="shape shape-02">
                            <i className="icon icon-contact-02"/>
                        </div>
                        <div className="shape shape-03">
                            <i className="icon icon-contact-03"/>
                        </div>
                    </div>
                </div>

            </main>
        </Layout>
    );
};

export default Contact;
