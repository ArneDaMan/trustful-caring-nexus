
import React from 'react';
import { Check, Users, FileCheck, GraduationCap, UserCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6 text-careblue-500" />,
      title: "Auswahl passender Kandidaten"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-careblue-500" />,
      title: "Visa- und Einreiseformalitäten"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-careblue-500" />,
      title: "Unterstützung bei Sprachkursen"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-careblue-500" />,
      title: "Begleitung bis zur Arbeitsaufnahme"
    }
  ];

  const advantages = [
    "Fachkräfte mit relevanter Pflegeerfahrung",
    "Rechtssichere Vermittlung mit allen nötigen Dokumenten",
    "Effiziente Prozesse – in nur wenigen Monaten startklar"
  ];

  return (
    <section id="services" className="py-20 bg-careblue-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Unser Service – Ihr Vorteil</h2>
          <p className="section-subtitle">
            Wir übernehmen den gesamten Rekrutierungsprozess für Sie
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-5">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-white rounded-xl shadow-soft"
                  data-aos="fade-right"
                  data-aos-delay={100 * index}
                >
                  <div className="mr-4 p-2 bg-careblue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-caregray-800">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="bg-white p-8 rounded-xl shadow-medium border border-careblue-100"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-caregray-800 mb-6">
              Ihre Vorteile
            </h3>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-careblue-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-caregray-700">{advantage}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="cta-button w-full text-center block">
                Jetzt Personal anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
