import React from 'react'

const Contacts = () => {
  return (
    <>
    
    <div class="container mx-auto p-6">
        
        <section class="mb-12 text-center">
        <h1 className="text-4xl font-bold text-center text-white-900 hover:text-orange-700 transition-colors duration-300">
      Contact Us
      </h1>
            <p class="text-lg text-gray-600 mb-6">We’re here to help! If you have any questions or need assistance, please reach out to us using the information below.</p>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold text-gray-700 mb-4">Our Contact Information</h2>
                <p class="text-gray-600 mb-2"><strong>Address:</strong> Shadman Main Street, Karachi,Pakistan</p>
                <p class="text-gray-600 mb-2"><strong>Phone:</strong> +92 3462631070</p>
                <p class="text-gray-600 mb-4"><strong>Email:</strong> <a href="sheikhhammadiam@gmail.com" class="text-blue-500 hover:underline">sheikhhammadiam@gmail.com</a></p>
                <p class="text-gray-600 mb-2"><strong>Business Hours:</strong></p>
                <ul class="list-disc list-inside text-gray-600 mb-4">
                    <li>Monday to Friday: 9 AM – 6 PM</li>
                    <li>Saturday: 10 AM – 4 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </section>

        
        <section>
            <h2 class="text-2xl font-semibold text-white-700 mb-4">Find Us Here</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                
                <iframe class="w-full h-64 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.210960418025!2d-73.97115538459608!3d40.7830604167818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f5c6e4b84b%3A0xaff4c3b0e02d83c4!2sCentral%20Park%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sin!4v1609818669712!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
    </div>
    </>
  )
}

export default Contacts