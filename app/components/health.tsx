"use client";
import React from 'react';
import { 
  Stethoscope, 
  Receipt, 
  Calendar, 
  Star, 
  MonitorSmartphone, 
  ChevronDown, 
  ChevronUp, 
  Quote 
} from 'lucide-react';

const HealthcareLandingPage = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 w-full overflow-hidden">
      

      <section className="bg-[#0B1B3D] text-white py-20 px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Complete Care. All in One Place
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"></span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 mb-16 text-sm">
            Embracing EMPs that read and comprehend notes, Tebra goes beyond—integrating your EMR with billing, scheduling, and reputation management tools that seamlessly work together.
          </p>

          <div className="relative">

            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] border-t border-dashed border-gray-500 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0B1B3D] p-2 rounded-full mb-3">
                  <Stethoscope className="text-green-400 w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-gray-300">Smarter Clinical Workflows That Simplify Your Day</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0B1B3D] p-2 rounded-full mb-3">
                  <Receipt className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-gray-300">Integrated Billing & Claims for Faster Payments</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0B1B3D] p-2 rounded-full mb-3">
                  <Calendar className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-gray-300">Automated Scheduling for a Full Calendar</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0B1B3D] p-2 rounded-full mb-3">
                  <Star className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-gray-300">Reputation Tools For Patient Growth and Loyalty</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0B1B3D] p-2 rounded-full mb-3">
                  <MonitorSmartphone className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-gray-300">One Platform. Simplifying Practice Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0B1B3D] mb-4">Experience Exceptional Care</h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-20">
          Our team of highly qualified doctors brings years of expertise to deliver trusted, personalized care for every patient.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 pt-16 pb-8 px-6 relative mt-12">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-blue-100">
              <img src="susan.png" alt="Dr. James Lee" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-[#0B1B3D] text-lg">Dr. James Lee, MD</h3>
            <p className="text-sm font-medium text-gray-600 mb-4">Head of Cardiologist</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              With expertise in managing complex heart conditions and performing advanced cardiac procedures
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 pt-16 pb-8 px-6 relative mt-12">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-blue-100">
              <img src="john.png" alt="Dr. John Smith" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-[#0B1B3D] text-lg">Dr. John Smith, MD</h3>
            <p className="text-sm font-medium text-gray-600 mb-4">Emergency Medicine Physician</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              With expertise in treating acute illnesses and injuries in medicine physician
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 pt-16 pb-8 px-6 relative mt-12">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-blue-100">
              <img src="susan.png" alt="Dr. Susan Bones" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-[#0B1B3D] text-lg">Dr. Susan Bones, MD</h3>
            <p className="text-sm font-medium text-gray-600 mb-4">Board-certified Pediatrician</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              With experience in managing complex medical conditions in children
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1B3D] text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-300 text-sm mb-12 max-w-xl mx-auto">
            Discover the experiences of those who have trusted us with their care. Real stories, real results, and the impact of compassionate treatment.
          </p>

          <div className="bg-[#2D6A8F] rounded-2xl p-10 relative max-w-2xl mx-auto mt-8 shadow-lg">
            <Quote className="w-10 h-10 text-yellow-400 mx-auto mb-4" fill="currentColor" />
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <h4 className="font-bold mb-3">I just joined Rapid Fitness a few days ago...</h4>
            <p className="text-sm text-blue-100 mb-8 leading-relaxed">
              I was so nervous because I've never been to a gym. But everyone there made me feel so welcome. I really appreciate the customer service you provide. Thank you for helping me change my life!
            </p>
            
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
               <img src="girl.png" alt="David Singh" className="w-12 h-12 rounded-full border-2 border-[#0B1B3D]" />
               <p className="text-xs font-bold mt-2">David Singh</p>
               <p className="text-[10px] text-gray-300">Patient</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-16">
             <div className="w-2 h-2 rounded-full bg-green-400"></div>
             <div className="w-2 h-2 rounded-full bg-gray-400"></div>
             <div className="w-2 h-2 rounded-full bg-gray-400"></div>
             <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          
          <div>
            <h2 className="text-3xl font-bold text-[#0B1B3D] mb-4">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 mb-8">
              From your first consultation to ongoing support, we guide you every step of the way toward better health and well-being.
            </p>

            <div className="space-y-4">
              
              <div className="bg-[#E8F3E8] p-5 rounded-lg border border-green-100 cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-[#0B1B3D] text-sm">How do I book an appointment online?</h4>
                  <ChevronUp className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pr-8">
                  UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                </p>
              </div>

              
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-5 rounded-lg border border-gray-200 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-[#0B1B3D] text-sm">What types of medical services do you offer?</h4>
                  <ChevronDown className="w-5 h-5 text-green-600" />
                </div>
              ))}
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4">
            <img src="smile.png" alt="Doctor" className="w-full h-48 md:h-64 object-cover rounded-xl" />
            <img src="faq.png" alt="FAQ Blocks" className="w-full h-48 md:h-64 object-cover rounded-xl mt-8" />
            <img src="drr.png" alt="Doctor Portrait" className="w-full h-48 md:h-64 object-cover rounded-xl -mt-8" />
            <img src="micro.png" alt="Medical Query" className="w-full h-48 md:h-64 object-cover rounded-xl" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default HealthcareLandingPage;