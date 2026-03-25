import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Hum aapse jald hi sampark karenge.");
    console.log(formData);
  };
  return (
    <>
      <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-4xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Humein Bataiye Aapka Favourite{" "}
            <span className="text-red-600">Pizza</span> Kaunsa Hai!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Koi sawal ho ya order me help chahiye? Hum aapki madad ke liye
            taiyar hain.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500 flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Phone Karein
                </h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500 flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Email Karein
                </h3>
                <p className="text-gray-600">hello@pizzahutclone.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500 flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Hamara Pata</h3>
                <p className="text-gray-600">
                  123 Pizza Street, Foodie Nagar, Delhi - 110001
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500 flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Opening Hours
                </h3>
                <p className="text-gray-600">Mon - Sun: 10:00 AM - 11:30 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Aapka Naam
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 outline-none transition duration-200"
                  placeholder="Rahul Kumar"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 outline-none transition duration-200"
                  placeholder="rahul@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message / Feedback
                </label>
                <textarea
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 outline-none transition duration-200"
                  placeholder="Aapka message yahan likhein..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-[1.02]">
                <span>Message Bhejein</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
