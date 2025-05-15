import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-col md:flex-row items-center md:space-x-8 py-10 container mx-auto">

        <div className="w-full md:w-1/2">
          <img
            src="https://www.shutterstock.com/image-photo/young-doctor-using-stethoscope-listen-600nw-2200802261.jpg"
            alt="Doctor with Stethoscope"
            className="w-full h-auto object-cover rounded-lg mb-5 md:mb-0"/>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Get-Well Hospital Management</h1>
          <p className="text-xl mb-6">Your Health, Our Priority</p>

          <h2 className="text-3xl font-semibold mb-6 ">Welcome to Getwell Hospital</h2>
          <p className="mb-6">Manage patient records, doctor appointments, and hospital services easily.</p>
          <div className="flex justify-center md:justify-start space-x-5 pt-14">

            <Link to="/signup">
              <button className="bg-pink-900 text-white text-lg font-semibold py-2 px-6 rounded-xl hover:bg-black transition-all duration-300">
                Patient Signup
              </button>
            </Link>

            <Link to="/drsignup">
              <button className="bg-pink-900 text-white text-lg font-semibold py-2 px-6 rounded-xl hover:bg-black transition-all duration-300">
                Doctor Signup
              </button>
            </Link>

          </div>
        </div> 
      </div>

      <div className='bg-gray-100 py-10'>
        <div className='container mx-auto text-center'>
          <h2 className='font-semibold mb-6 text-3xl'>Services We Provide</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8' >
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='font-bold text-2xl mb-4'>General Consultation</h3>
              <img src="https://premiercarehospital.com/wp-content/uploads/2022/08/banner-1.jpg" alt="" className="w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0" />
              <p className='text-lg'>Experienced doctors available for routine check-ups and consultations to ensure your well-being.</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='font-bold text-2xl mb-4'>Emergency Care</h3>
              <img src="https://chirayusuperspecialityhospital.com/wp-content/uploads/2024/07/Emergency-Department-1.webp" alt="" className='w-full md:w-100 h-42 object-cover rounded-lg mb-4 md:mb-0' />
              <p className='text-lg'>24/7 emergency care for critical cases with immediate attention and life-saving procedures.</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='font-bold text-2xl mb-4'>Surgical Services</h3>
              <img src="https://www.konyabaskenthospital.com/Upload/general-surgery.jpg" alt="" className='w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0' />
              <p className='text-lg'>Advanced surgical procedures for a wide range of conditions, performed by skilled specialists.</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Diagnostic Services</h3>
                <img 
                  src="https://radiologyregional.com/wp-content/uploads/2018/10/What-is-Diagnostic-Radiology-1.jpg" alt="Diagnostic Services" className='w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0' />
                <p className='text-lg'>Advanced diagnostic facilities for tests like blood work, X-rays, and MRIs.</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Maternity Services</h3>
                <img 
                  src="https://www.miracleshealth.com/assets/blog/assets/uploads/blog/1696848424Maternity-Hospital-An-Ideal-Choice-for-a-Smooth-and-Successful-Delivery-scaled.webp" alt="Maternity Services"  className='w-full md:w-100 h-45 object-cover rounded-lg mb-3 md:mb-0' />
                <p className='text-lg'>Comprehensive maternity care, including prenatal and postnatal services, and delivery options.</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Cardiology Services</h3>
                <img src="https://srmcriticalcarehospital.com/wp-content/uploads/2023/07/Service-Cardiology.jpg"  alt="Cardiology Services"  className='w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0' />
                <p className='text-lg'>Expert heart care including diagnosis, treatments, and surgeries for heart-related issues.</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Dermatology Services</h3>
                <img 
                  src="https://heritageimshospital.com/assets/images/services/dermetology.jpg" alt="Dermatology Services"  className='w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0' />
                <p className='text-lg'>Treatment for skin conditions, cosmetic dermatology, and advanced skincare procedures.</p>
              </div>


              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Neurology Services</h3>
                <img 
                  src="https://careandcurehospital.co.in/wp-content/uploads/2022/02/neurology-manu-hospital.jpg"  alt="Neurology Services" className='w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0' />
                <p className='text-lg'>Specialized care for neurological disorders including stroke, epilepsy, and other brain-related issues.</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>Orthopedic Services</h3>
                <img 
                  src="https://www.agashehospital.com/wp-content/uploads/2021/05/side-image.jpg"  alt="Orthopedic Services" className="w-full md:w-100 h-40 object-cover rounded-lg mb-4 md:mb-0" />
                <p className='text-lg'>Expert treatment for bone and joint issues including fractures, arthritis, joint replacement, and spine disorders.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;





