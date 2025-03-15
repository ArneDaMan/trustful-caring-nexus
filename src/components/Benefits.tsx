
import React from 'react';
import { Heart, Globe, Award, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="w-10 h-10 text-careblue-500 mb-4" />,
      title: "Hervorragend ausgebildet",
      description: "Qualifizierte Fachkräfte mit internationaler Erfahrung und hohen Standards in der Pflege."
    },
    {
      icon: <Heart className="w-10 h-10 text-careblue-500 mb-4" />,
      title: "Hohe Motivation",
      description: "Engagierte Pflegekräfte mit Leidenschaft für ihren Beruf und dem Wunsch, in Deutschland zu arbeiten."
    },
    {
      icon: <Globe className="w-10 h-10 text-careblue-500 mb-4" />,
      title: "Englischsprachig",
      description: "Englischsprachige Betreuung mit interkultureller Kompetenz und Bereitschaft zum Deutsch lernen."
    },
    {
      icon: <Clock className="w-10 h-10 text-careblue-500 mb-4" />,
      title: "Schnell vermittelbar",
      description: "Unkomplizierter und zügiger Vermittlungsprozess dank unserer etablierten Strukturen vor Ort."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Warum Pflegekräfte aus Simbabwe?</h2>
          <p className="section-subtitle">
            Entdecken Sie die Vorteile qualifizierter Pflegekräfte aus Simbabwe für Ihre Einrichtung
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="feature-card text-center"
              data-aos="fade-up" 
              data-aos-delay={100 * index}
            >
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-caregray-800 mb-3">{benefit.title}</h3>
              <p className="text-caregray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
