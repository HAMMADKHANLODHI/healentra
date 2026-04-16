import Image from "next/image";
import HealthcareLandingPage from "./components/health";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healentra | Complete Medical Practice Management & Care",
  description: "Healentra unifies care, billing, scheduling, and more in one platform. Connect with trusted healthcare professionals for online doctor consultations, primary care, and e-prescriptions.",
  keywords: [
    "medical practice management", 
    "online doctor consultation", 
    "telemedicine", 
    "medical billing software", 
    "healthcare platform", 
    "Healentra", 
    "e-prescriptions"
  ],
  authors: [{ name: "Healentra" }],
  
  icons: {
    icon: '/icon.png', 
    shortcut: '/icon.png', 
    apple: '/icon.png', 
  },
  
  openGraph: {
    type: "website",
    url: "https://healentra-seven.vercel.app/", 
    title: "Healentra | Complete Medical Practice Management",
    description: "One Platform to Power Your Entire Practice. Connect with doctors online, manage billing, and schedule appointments seamlessly.",
    siteName: "Healentra",
    images: [
      {
        url: "https://healentra-seven.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Healentra Logo",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healentra | Complete Medical Practice Management",
    description: "One Platform to Power Your Entire Practice. Connect with doctors online, manage billing, and schedule appointments seamlessly.",
    images: ["https://healentra-seven.vercel.app/icon.png"], 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center mt-10 justify-center overflow-x-hidden">
      

      <div className="w-full min-h-screen md:min-h-[45rem] py-20 bg-black/50 relative flex-col flex items-center justify-center px-4">
        <Image src="/doctor.png" alt="Doctor Image" fill className="-z-10 object-cover" priority />
        
        
        <div className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[4rem] rounded-2xl md:rounded-full border-[2px] border-white flex flex-col md:flex-row items-center justify-center p-4 md:p-0 gap-4 md:gap-0 mt-10 md:mt-0">
          <div className="rounded-full border-white border-[2px] h-10 w-10 md:h-[70%] flex items-center justify-center aspect-square shrink-0">
            <Image src="/m.png" alt="Logo" width={15} height={15} />
          </div>

          <h1 className="text-white font-bold text-center md:text-left text-sm md:text-base px-2">
            Leader in Medical Practice Management and Billing
          </h1>
          
          <div className="hidden md:block w-[2px] h-[70%] bg-white mx-4"></div>
          
          <div className="w-full md:w-[45%] h-full flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="relative w-24 h-8 flex items-center justify-center">
              <div className="absolute right-12 w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                <Image src="/person1.webp" alt="human Image" fill className="object-cover" />
              </div>
              <div className="absolute right-8 w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden z-10">
                <Image src="/person2.jpg" alt="human image" fill className="object-cover" />
              </div>
              <div className="absolute right-4 w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden z-20">
                <Image src="/person3.jpg" alt="human image" fill className="object-cover" />
              </div>
            </div>
            <h1 className="text-white font-bold text-sm md:text-base text-center">
              Trusted by 150,000+
            </h1>
          </div>
        </div>

        <h1 className="w-full md:w-[80%] lg:w-[70%] text-white text-center mt-10 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          One Platform to Power Your Entire Practice
        </h1>
        <p className="w-full md:w-[70%] lg:w-[50%] text-white text-center mt-6 text-base md:text-lg">
          Healentra unifies care, billing, scheduling, and more in one platform.
          With built-in AI, it streamlines notes, manages reviews, and automates
          routine administrative tasks.
        </p>
        

        <div className="w-[90%] sm:w-[60%] lg:w-[30%] h-[3.5rem] rounded-2xl border-[1px] border-white flex items-center justify-between px-4 mt-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
          <h1 className="text-white font-bold">Search Doctor</h1>
          <Image src="/search.png" alt="Search Icon" width={20} height={20} />
        </div>
        
        <div className="flex flex-col sm:flex-row w-[90%] sm:w-[70%] lg:w-[40%] justify-center gap-4 mt-6">
          <div className="w-full sm:w-1/2 h-[3.5rem] text-center rounded-2xl bg-[#2CA8E0] flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
            <h1 className="text-white font-bold">Video Consultation</h1>
          </div>
          <div className="w-full sm:w-1/2 h-[3.5rem] text-center rounded-2xl border-[2px] border-[#8DC645] bg-black/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-[#8DC645]/20 transition-colors">
            <h1 className="text-[#8DC645] font-bold">Text Consultation</h1>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="relative w-full md:w-[80%] lg:w-[40%] aspect-square lg:aspect-auto lg:h-[25rem] rounded-3xl overflow-hidden shadow-xl">
          <Image src="/person4.png" alt="Doctors Image" fill className="object-cover" />
        </div>
        
        <div className="w-full lg:w-[50%] flex flex-col">
          <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            We Provide Best Online Doctor Consultation For you
          </h1>
          <p className="text-base text-gray-500 mb-8 leading-relaxed">
            At Healentra, we provide the best online doctor consultation
            tailored to your needs. Our platform connects you with trusted
            healthcare professionals, making it easy to access expert medical
            advice, prescriptions, and care—all from the comfort of your home.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row gap-8">
            
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <div className="w-full p-3 bg-gray-50 rounded-xl flex items-center border border-gray-100">
                <Image src="/tick.png" alt="tick Icon" width={24} height={24} className="mr-3" />
                <h1 className="text-gray-900 font-bold text-sm">All types of doctors</h1>
              </div>
              <p className="text-gray-500 text-sm px-1">
                Comprehensive care with doctor from every specialty
              </p>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-semibold text-sm">Time Saved</span>
                  <span className="text-gray-500 font-bold text-sm">92%</span>
                </div>
                <div className="bg-gray-200 rounded-full w-full h-2.5 overflow-hidden">
                  <div className="w-[92%] h-full bg-[#8DC645]"></div>
                </div>
              </div>
              <button className="w-full py-4 mt-6 bg-[#2CA8E0] text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-200">
                About us
              </button>
            </div>
            
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <div className="w-full p-3 bg-gray-50 rounded-xl flex items-center border border-gray-100">
                <Image src="/tick.png" alt="tick Icon" width={24} height={24} className="mr-3" />
                <h1 className="text-gray-900 font-bold text-sm">Get an E-Prescription</h1>
              </div>
              <p className="text-gray-500 text-sm px-1">
                Quickly receive secure e-prescriptions from licensed doctors, anytime, anywhere.
              </p>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-semibold text-sm">Satisfied Patients</span>
                  <span className="text-gray-500 font-bold text-sm">89%</span>
                </div>
                <div className="bg-gray-200 rounded-full w-full h-2.5 overflow-hidden">
                  <div className="w-[89%] h-full bg-[#8DC645]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#9ac466] py-12 px-4 flex flex-col items-center justify-center gap-8">
        <h1 className="text-white font-bold text-xl md:text-2xl text-center">
          Trusted by healthcare providers across specialties
        </h1>
        <div className="w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "1,000+", label: "Healthcare Providers" },
            { value: "98%", label: "Patient Satisfaction" },
            { value: "98%", label: "Reduced No-Shows" },
            { value: "$1M", label: "Revenue Generated" }
          ].map((stat, i) => (
            <div key={i} className="w-full py-6 rounded-xl bg-white flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 transition-transform">
              <h1 className="text-3xl font-bold text-[#2CA8E0] mb-2">{stat.value}</h1>
              <h1 className="text-xs md:text-sm text-gray-500 font-medium text-center px-2">{stat.label}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4 text-center">
          Healentra Clinical Care Services
        </h1>
        <p className="w-full md:w-[70%] lg:w-[50%] text-center mb-12 text-gray-500 leading-relaxed">
          Providing comprehensive, patient-centered medical care with expertise
          and compassion, Healentra Clinical Care Services is committed to
          supporting your health and well-being at every stage of life.
        </p>
        
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="flex flex-col gap-6">
            <div className="w-full p-8 bg-[#9ac466] text-white rounded-3xl shadow-sm flex-1">
              <Image src="/lamp.png" alt="light" width={32} height={32} className="mb-4 brightness-0 invert" />
              <h1 className="text-2xl font-bold mb-3">Urgent care</h1>
              <p className="text-sm opacity-90 leading-relaxed">
                Get immediate medical attention from licensed professionals
                without leaving home. Our urgent care online consultations
                provide fast, convenient, and reliable care for non-life threatening issues.
              </p>
            </div>
            <div className="w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm flex-1">
              <Image src="/medic.png" alt="Medical equipment" width={32} height={32} className="mb-4" />
              <h1 className="text-[#2CA8E0] text-2xl font-bold mb-3">Primary Care</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect with experienced primary care providers from the comfort
                of your home. Receive expert guidance, routine check-ups, and
                personalized health plans.
              </p>
            </div>
          </div>
          
          <div className="w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm h-full">
            <Image src="/brain.svg" alt="Brain" width={40} height={40} className="mb-4" />
            <h1 className="text-[#2CA8E0] text-2xl font-bold mb-4">
              Stress and Mental Health
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our online Stress and Mental Health consultations provide
              personalized support for managing anxiety, depression, stress, and
              other emotional challenges. Connect with licensed mental health
              professionals from the comfort of your home and receive expert
              guidance, coping strategies, and therapeutic interventions
              tailored to your unique needs. Whether you’re facing daily
              stressors, major life changes, or persistent mental health
              concerns, our compassionate team is here to help you regain
              balance.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm flex-1">
              <Image src="/bone.png" alt="bone" width={32} height={32} className="mb-4" />
              <h1 className="text-[#2CA8E0] text-2xl font-bold mb-3">Chronic care</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Receive continuous, personalized care for chronic conditions
                from the comfort of your home. Our expert providers monitor,
                guide, and adjust your treatment plan.
              </p>
            </div>
            <div className="w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm flex-1">
              <Image src="/doc.png" alt="Doctor" width={32} height={32} className="mb-4" />
              <h1 className="text-[#2CA8E0] text-2xl font-bold mb-3">Prescriptions</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get expert medical advice from licensed professionals receive
                prescriptions digitally safe, convenient, and delivered directly
                to your local pharmacy without the need for in-person visits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col max-w-xl">
          <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Your Journey with Us
          </h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            From your first consultation to ongoing support, we guide you every
            step of the way toward better health and well-being.
          </p>
          
          <div className="flex flex-col gap-8">
            
            {[
              { icon: "/dr.png", bg: "bg-[#8DC645]", title: "Choose Medical Specialist" },
              { icon: "/bandage.png", bg: "bg-blue-50", title: "Choose Consultation Service" },
              { icon: "/headphone.png", bg: "bg-blue-50", title: "Make an Appointment" },
              { icon: "/r.png", bg: "bg-blue-50", title: "Get Your Prescription" },
              { icon: "/medic.png", bg: "bg-blue-50", title: "Get Diagnosed" }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${step.bg}`}>
                  <Image src={step.icon} alt={step.title} width={24} height={24} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Select the right specialist for your health needs with ease and confidence.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-1/2 relative min-h-[600px]">
          <div className="absolute top-0 right-10 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/rep.png" alt="Dashboard" fill className="object-cover" />
          </div>
          <div className="absolute bottom-10 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src="/doc-.png" alt="Doctor App" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[15rem] md:h-[25rem] bg-[#2CA8E0] flex items-center justify-center">
        <Image src="/back.png" alt="Footer Banner" fill className="object-cover opacity-90" />
      </div>

      <HealthcareLandingPage />
    </main>
  );
}