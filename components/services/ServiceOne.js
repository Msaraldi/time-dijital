import {useEffect, useState} from 'react';
import ServiceData from '../../data/Services.json';
import SectionTitle from '../common/SectionTitle';
import ServiceCardOne from './ServiceCardOne';

const ServiceOne = () => {
    const [defaultServices, setDefaultServices] = useState([]);
    const [activeService, setActiveService] = useState(1);

    const getDefaultServices = () => {
        const filteredServices = ServiceData.filter(
            (service) => service.category === 'Default'
        );

        setDefaultServices(filteredServices)
    }

    const changeActive = (index) => {
        setActiveService(index);
    };

    useEffect(() => {
        getDefaultServices();
    }, []);

    return (
        <div className="axil-service-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Hizmetlerimiz"
                            
                            description="Biz, Time Dijital olarak markanızın dijital varlığını güçlendirmek ve sizi öne çıkarmak için kapsamlı hizmetler sunuyoruz. Sizinle birlikte büyümek için buradayız!"
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row">
                    {defaultServices?.map((service, index) => (
                        <ServiceCardOne
                            key={service.id}
                            column="col-lg-4 col-md-6 col-sm-6 col-12"
                            index={index}
                            activeIndex={activeService}
                            data={service}
                            changeActive={changeActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOne;
