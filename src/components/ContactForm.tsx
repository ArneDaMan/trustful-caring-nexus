
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    facilityName: '',
    numNurses: '',
    startDate: '',
    contactName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Anfrage erhalten",
        description: "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-careblue-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Kontakt & Unverbindliche Anfrage</h2>
          <p className="section-subtitle">
            Füllen Sie das Formular aus, und wir kontaktieren Sie zeitnah
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-medium p-8 border border-careblue-100">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-caregray-800 mb-3">Anfrage erfolgreich gesendet!</h3>
                  <p className="text-lg text-caregray-600 mb-6">
                    Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="cta-button-secondary"
                  >
                    Neue Anfrage stellen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="facilityName" className="block text-sm font-medium text-caregray-700 mb-1">
                        Name der Pflegeeinrichtung*
                      </label>
                      <input
                        type="text"
                        id="facilityName"
                        name="facilityName"
                        required
                        value={formState.facilityName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="numNurses" className="block text-sm font-medium text-caregray-700 mb-1">
                          Anzahl benötigter Pflegekräfte*
                        </label>
                        <select
                          id="numNurses"
                          name="numNurses"
                          required
                          value={formState.numNurses}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                        >
                          <option value="">Bitte wählen</option>
                          <option value="1-2">1-2 Pflegekräfte</option>
                          <option value="3-5">3-5 Pflegekräfte</option>
                          <option value="6-10">6-10 Pflegekräfte</option>
                          <option value="10+">Mehr als 10 Pflegekräfte</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-caregray-700 mb-1">
                          Gewünschter Starttermin*
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={formState.startDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-caregray-700 mb-1">
                          Ihr Name*
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          value={formState.contactName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-caregray-700 mb-1">
                          Telefon*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-caregray-700 mb-1">
                          E-Mail*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-caregray-700 mb-1">
                        Nachricht (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-caregray-300 focus:ring-2 focus:ring-careblue-400 focus:border-careblue-400 outline-none transition-all"
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full cta-button text-lg flex items-center justify-center ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Wird gesendet...
                          </>
                        ) : (
                          'Jetzt Personal anfragen'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-medium p-6 border border-careblue-100 mb-6">
              <h3 className="text-xl font-semibold text-caregray-800 mb-4">Kontaktdaten</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-careblue-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Standort:</p>
                    <p className="text-caregray-600">Deutschland & Simbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-careblue-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail:</p>
                    <a href="mailto:info@carebridge-africa.de" className="text-careblue-600 hover:underline">
                      info@carebridge-africa.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-careblue-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <a href="tel:+49XXXXXXXXX" className="text-careblue-600 hover:underline">
                      +49 XXX XXXXXXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-careblue-500">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Website:</p>
                    <a href="https://www.carebridge-africa.de" target="_blank" rel="noopener noreferrer" className="text-careblue-600 hover:underline">
                      www.carebridge-africa.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-caregray-800 mb-4">Schnelle Antwort</h3>
              <p className="text-caregray-600 mb-4">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
              </p>
              <div className="w-full h-1 bg-careblue-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-careblue-500 rounded-full"></div>
              </div>
              <p className="text-sm text-caregray-500 mt-2">Durchschnittliche Antwortzeit: 8 Stunden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
