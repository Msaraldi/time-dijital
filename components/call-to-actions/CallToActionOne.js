import SectionTitle from '../common/SectionTitle';

const CallToActionOne = () => {
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title="Başarılı Bir Projeye mi İhtiyacınız Var ? "
                                subtitle=""
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                
                                <div className="callto-action">
                                    <span className="axil-call-to-action">
                                       Şimdi Bize Ulaşın
                                    </span>
                                    <br/>
                                    <br/>
                                    <span>
                                      <i className="fal fa-phone-office"/>
                                      <a href="tel:0(850)242 5802">0(850) 242 5 802</a>
                                    </span>
                                    <br/>
                                    <br/>
                                    <span>
                                      <i className="fal fa-phone-alt"/>
                                      <a href="tel:0(850)242 5802">0(538) 064 5 802</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14"/>
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09"/>
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10"/>
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11"/>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
