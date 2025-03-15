
import React from 'react';
import { Search, FileText, Briefcase, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Anfrage stellen",
      number: "1",
      description: "Sie teilen uns mit, wie viele Pflegekräfte Sie benötigen."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Passende Kandidaten finden",
      number: "2",
      description: "Wir schlagen Ihnen qualifizierte Pflegekräfte vor."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Bürokratie übernehmen",
      number: "3",
      description: "Wir kümmern uns um Visa, Dokumente und Einreise."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Arbeitsbeginn",
      number: "4",
      description: "Ihre neuen Pflegekräfte starten in Ihrer Einrichtung."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Unser Prozess – So einfach geht's</h2>
          <p className="section-subtitle">
            In nur vier Schritten und etwa 2-4 Monaten zu Ihren neuen Mitarbeitern
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="feature-card relative z-10 h-full flex flex-col">
                <div className="absolute -top-5 -right-2 bg-careblue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                
                <div className="mb-6 bg-careblue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-caregray-800 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-caregray-600 flex-grow">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-careblue-200 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 w-3 h-3 transform rotate-45 translate-x-1/2 -translate-y-1/2 border-t-2 border-r-2 border-careblue-200"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block py-3 px-4 bg-careblue-100 text-careblue-700 font-medium rounded-lg">
            Dauer des gesamten Prozesses: ca. 2-4 Monate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
