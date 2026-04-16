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
  
  // This explicitly sets your browser tab icon
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
    // Fixed this link to match the openGraph link
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

// export default function Home() { ...
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-[45rem] bg-black/50 relative flex-col flex items-center justify-center">
        <Image src="/doctor.png" alt="Doctor Image" fill className="-z-10" />
        <div className="w-[50%] h-[3rem] rounded-full border-[2px] border-white flex items-center justify-center">
          <div className="rounded-full border-white border-[2px] h-[70%] flex items-center justify-center aspect-square">
            <Image src="/m.png" alt="Logo" width={10} height={10} />
          </div>

          <h1 className="text-white  font-bold">
            Leader in Medical Practice Management and Biling
          </h1>
          <div className="w-[2px] h-[70%] bg-white mx-4"></div>
          <div className="w-[50%] h-full flex items-center justify-center aspect-square">
            <div className="  relative  w-[30%] flex items-center justify-center aspect-square">
              <div className="absolute  right-12 w-6 h-6 rounded-full border-1 border-white shadow-2xl overflow-hidden overflow-hidden shadow-lg">
                <Image
                  src="/person1.webp"
                  alt="human Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute  right-8 w-6 h-6 rounded-full border-1 border-white shadow-2xl overflow-hidden">
                <Image
                  src="/person2.jpg"
                  alt="human image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute  right-5 w-6 h-6 rounded-full border-1 border-white shadow-2xl overflow-hidden">
                <Image
                  src="/person3.jpg"
                  alt="human image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-white w-[70%] font-bold">
              Trusted by 150,000 providers
            </h1>
          </div>
        </div>
        <h1 className="w-[70%] h-[7rem] text-white text-center mt-6 text-6xl font-bold">
          One Platform to Power Your Entire Practice
        </h1>
        <p className="w-[50%] text-white text-center mt-4 text-lg">
          Healentra unifies care, billing, scheduling, and more in one platform.
          With built-in AI, it streamlines notes, manages reviews, and automates
          routine administrative tasks.
        </p>
        <div className="w-[30%] h-[3rem] rounded-2xl border-[1px] border-white flex items-center justify-between mt-6">
          <h1 className="text-white  font-bold ml-1">Search Doctor</h1>
          <Image
            src="/search.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="mr-2"
          />
        </div>
        <div className="flex w-[30%] justify-between items-center">
          <div className="w-[40%] h-[3rem] text-center rounded-2xl bg-[#2CA8E0] flex items-center justify-center mt-6">
            <h1 className="text-white text-center font-bold ml-1">
              Video Consultation
            </h1>
          </div>
          <div className="w-[40%] h-[3rem] text-center rounded-2xl border-[1px] text-[#8DC645] border-[#8DC645] flex items-center justify-center mt-6">
            <h1 className="text-[#8DC645] text-center  ml-1">
              Text Consultation
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[30rem] flex items-center justify-around">
        <div className="relative w-[40%] h-[80%]">
          <Image src="/person4.png" alt="Doctors Image" fill className="" />
        </div>
        <div className="w-[40%] h-[80%] ">
          <h1 className="text-4xl text-black font-bold mb-4">
            We Provide Best Online Doctor Consultation For you
          </h1>
          <p className="text-sm text-gray-400">
            At Healentra, we provide the best online doctor consultation
            tailored to your needs. Our platform connects you with trusted
            healthcare professionals, making it easy to access expert medical
            advice, prescriptions, and care—all from the comfort of your home.
          </p>
          <div className="w-full flex justify-between">
            <div className="w-[40%] ">
              <div className="w-full h-[2rem] text-center rounded-2xl  flex items-center justify-center ">
                <Image
                  src="/tick.png"
                  alt="tick Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <h1 className="text-black text-center  ml-1">
                  All types of doctors
                </h1>
              </div>
              <h1 className="text-gray-400 text-center  ml-1">
                Comprehensive care with doctor from every specialty
              </h1>
              <div className="w-full h-[3rem] text-center rounded-2xl  flex items-center justify-between ">
                <h1 className="text-black text-center  ml-1">
                  Save More Times
                </h1>
                <h1 className="text-gray-400 text-center  ml-1">92%</h1>
              </div>
              <div className="bg-gray-300 rounded-full w-full h-[1rem]">
                <div className="w-[92%] h-full bg-[#8DC645]"></div>
              </div>
              <div className="w-full h-[3rem] bg-[#2CA8E0] flex text-center text-white rounded-2xl items-center justify-center mt-6">
                About us
              </div>
            </div>
            <div className="w-[40%] ">
              <div className="w-full h-[2rem] text-center rounded-2xl  flex items-center justify-center ">
                <Image
                  src="/tick.png"
                  alt="tick Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <h1 className="text-black text-center  ml-1">
                  Get an E-Prescription
                </h1>
              </div>
              <h1 className="text-gray-400   ml-1">
                Quickly recieve secure e-prescriptions from licensed doctors,
                anytime, anywhere.
              </h1>
              <div className="w-full h-[3rem] text-center rounded-2xl  flex items-center justify-between ">
                <h1 className="text-black text-center  ml-1">
                  Satisfied Patients
                </h1>
                <h1 className="text-gray-400 text-center  ml-1">89%</h1>
              </div>
              <div className="bg-gray-300 rounded-full w-full h-[1rem]">
                <div className="w-[89%] h-full bg-[#8DC645]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10rem] bg-[#9ac466] flex flex-col items-center justify-around">
        <h1 className="text-white font-bold">
          Trusted by healthcare providers across specialties
        </h1>
        <div className="w-full flex justify-around h-[50%]">
          <div className="w-[20%] h-full rounded-xl bg-white flex flex-col items-center justify-around">
            <h1 className="text-xl font-bold text-[#2CA8E0]">1,000+</h1>
            <h1 className="text-sm text-gray-400">Healthcare Providers</h1>
          </div>
          <div className="w-[20%] h-full rounded-xl bg-white flex flex-col items-center justify-around">
            <h1 className="text-xl font-bold text-[#2CA8E0]">98%</h1>
            <h1 className="text-sm text-gray-400">Patient Satisfaction</h1>
          </div>
          <div className="w-[20%] h-full rounded-xl bg-white flex flex-col items-center justify-around">
            <h1 className="text-xl font-bold text-[#2CA8E0]">98%</h1>
            <h1 className="text-sm text-gray-400">Reduced No-Shows</h1>
          </div>
          <div className="w-[20%] h-full rounded-xl bg-white flex flex-col items-center justify-around">
            <h1 className="text-xl font-bold text-[#2CA8E0]">$1M</h1>
            <h1 className="text-sm text-gray-400">Revenue Generated</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[35rem] flex flex-col items-center bg-gray-200">
        <h1 className="text-4xl mt-6 text-black font-bold mb-4 text-center">
          Healentra Clinical Care Services
        </h1>
        <p className="w-[50%] text-center mb-6 text-gray-400">
          Providing comprehensive, patient-centered medical care with expertise
          and compassion, Healentra Clinical Care Services is committed to
          supporting your health and well-being at every stage of life
        </p>
        <div className="h-[20rem] mb-6 flex justify-around items-center w-full ">
          <div className="w-[30%]  gap-2 flex flex-col justify-between h-full">
            <div className="w-full p-2 h-[45%] bg-[rgb(154,196,102)] rounded-2xl">
              <Image
                src="/lamp.png"
                alt="light"
                width={25}
                height={25}
                className="ml-2"
              />
              <h1 className="text-2xl">Urgent care</h1>
              <p className="text-sm">
                Get immediate medical attention from licensed professionals
                without leaving home. Our urgent care online consultations
                provide fast, convenient, and reliable care for non-life
              </p>
            </div>
            <div className="w-full p-2 h-[45%] bg-white rounded-2xl">
              <Image
                src="/medic.png"
                alt="Medical equipment"
                width={25}
                height={25}
                className="ml-2"
              />
              <h1 className="text-[#2CA8E0] text-2xl">Primary Care</h1>
              <p className="text-gray-300 text-sm">
                Connect with experienced primary care providers from the comfort
                of your home. Receive expert guidance, routine check-ups, and
                personalized health .
              </p>
            </div>
          </div>
          <div className="w-[30%] p-2  h-full bg-white rounded-2xl">
            <Image
              src="/brain.svg"
              alt="Medical equipment"
              width={35}
              height={35}
              className="ml-2"
            />
            <h1 className="text-[#2CA8E0] text-2xl">
              Stress and Mental Health
            </h1>
            <p className="text-gray-300 text-sm">
              "Our online Stress and Mental Health consultations provide
              personalized support for managing anxiety, depression, stress, and
              other emotional challenges. Connect with licensed mental health
              professionals from the comfort of your home and receive expert
              guidance, coping strategies, and therapeutic interventions
              tailored to your unique needs. Whether you’re facing daily
              stressors, major life changes, or persistent mental health
              concerns, our compassionate team is here to help you regain
              balance, build resilience, and improve your overall well-being—all
              through a secure, convenient online platform
            </p>
          </div>
          <div className="w-[30%]  gap-2 flex justify-between flex-col h-full">
            <div className="w-full p-2 h-[45%] bg-white rounded-2xl">
              <Image
                src="/bone.png"
                alt="light"
                width={25}
                height={25}
                className="ml-2"
              />
              <h1 className="text-[#2CA8E0] text-2xl">Chronic care</h1>
              <p className="text-gray-300 text-sm">
                Receive continuous, personalized care for chronic conditions
                from the comfort of your home. Our expert providers monitor,
                guide, and adjust your treatment plan.
              </p>
            </div>

            <div className="w-full p-2 h-[45%] bg-white rounded-2xl">
              <Image
                src="/doc.png"
                alt="Medical equipment"
                width={25}
                height={25}
                className="ml-2"
              />
              <h1 className="text-[#2CA8E0] text-2xl">Prescriptions</h1>
              <p className="text-gray-300 text-sm">
                Get expert medical advice from licensed professionals receive
                prescriptions digitally safe, convenient, and delivered directly
                to you without the need for in-person visits
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 justify-center flex h-[30rem]">
        <div className=" ml-6 ">
          <h1 className="text-4xl text-black font-bold mb-4">
            Your Journey with Us
          </h1>
          <p className="text-gray-400">
            From your first consultation to ongoing support, we guide you every
            step of the way toward better health and well-being.
          </p>
          <div className="w-[80%] flex  items-center h-[3rem]">
            <div className="h-[80%] mr-2 aspect-square flex items-center justify-center rounded-full bg-[#8DC645]">
              <Image src="/dr.png" alt="Journey Image" width={20} height={20} />
            </div>
            <div className="">
              <div className="text-base font-semibold text-black">
                Choose Medical Specialist
              </div>
              <div className="text-gray-400">
                Select the right specialist for your health needs with ease and
                confidence.
              </div>
            </div>
          </div>
          <div className="w-[80%] flex  items-center h-[3rem]">
            <div className="h-[80%] mr-2 aspect-square flex items-center justify-center rounded-full ">
              <Image
                src="/bandage.png"
                alt="Journey Image"
                width={30}
                height={30}
              />
            </div>
            <div className="">
              <div className="text-base font-semibold text-black">
                Choose Consultation Service
              </div>
              <div className="text-gray-400">
                Select the right specialist for your health needs with ease and
                confidence.
              </div>
            </div>
          </div>
          <div className="w-[80%] flex  items-center h-[3rem]">
            <div className="h-[80%] mr-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/headphone.png"
                alt="Journey Image"
                width={30}
                height={30}
              />
            </div>
            <div className="">
              <div className="text-base font-semibold text-black">
                Make an Appointment
              </div>
              <div className="text-gray-400">
                Select the right specialist for your health needs with ease and
                confidence.
              </div>
            </div>
          </div>
          <div className="w-[80%] flex  items-center h-[3rem]">
            <div className="h-[80%] mr-2 aspect-square flex items-center justify-center rounded-full">
              <Image src="/r.png" alt="R" width={30} height={30} />
            </div>
            <div className="">
              <div className="text-base font-semibold text-black">
                Get Your Prescription
              </div>
              <div className="text-gray-400">
                Select the right specialist for your health needs with ease and
                confidence.
              </div>
            </div>
          </div>
          <div className="w-[80%] flex  items-center h-[3rem]">
            <div className="h-[80%] mr-2 aspect-square flex items-center justify-center rounded-full ">
              <Image
                src="/medic.png"
                alt="Journey Image"
                width={30}
                height={30}
              />
            </div>
            <div className="">
              <div className="text-base font-semibold text-black">
                Get Diagnosed
              </div>
              <div className="text-gray-400">
                Select the right specialist for your health needs with ease and
                confidence.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[50%] relative h-full">
          <div className="w-[70%] relative h-[70%]">
            <Image src="/rep.png" alt="Journey Image" fill className="" />
          </div>

          <Image
            src="/doc-.png"
            alt="Journey Image"
            width={100}
            height={100}
            className="absolute bottom-35 -left-10"
          />
        </div>
      </div>
      <div className="relative w-full h-[20rem] bg-[#2CA8E0] flex items-center justify-center">
        <Image
          src="/back.png"
          alt="Footer Image"
          fill
          className=""
        />
      </div>
      <HealthcareLandingPage />
    </main>
  );
}