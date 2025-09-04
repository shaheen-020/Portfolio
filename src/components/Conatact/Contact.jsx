import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Contact = () => {
    const [submitError, setSubmitError] = useState(' ');
    const [successSubmit, setSuccessSubmit] = useState(' ');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setSubmitError(' ');
        setSuccessSubmit(' ');
        if (password.length < 6) {
            setSubmitError("Password must be greater than 6 length.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setSuccessSubmit("Submit successfully.")
                setSubmitError(' ');
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                setSubmitError(error.message);
                setSuccessSubmit('');
            })
    }
    return (
        <div className='bg-gray-800  py-24'>
            <div className='w-10/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 items-center'>
                    <div className='lg:w-[400px] w-[280px] items-center'>
                        <h1 className="lg:text-3xl text-xl font-bold mb-3 pt-16 lg:pt-0 text-white">Let’s discuss your Project</h1>
                        <p className='mb-10 text-white'>I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.</p>
                        <div>
                            <div className='flex gap-4 mb-8 text-white'>
                                <div className='w-10 bg-purple-500 flex items-center justify-center rounded-xl'>
                                    <CiLocationOn className='text-white text-3xl' />
                                </div>
                                <div className='font-bold'>
                                    <h2>Address: </h2>
                                    <h1>Zindabazar, Sylhet</h1>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-8 text-white'>
                                <div className='w-10 bg-purple-500 flex items-center justify-center rounded-xl'>
                                    <MdEmail className='text-white text-3xl' />
                                </div>
                                <div className='font-bold'>
                                    <h2>Email: </h2>
                                    <h1>shahinurmubarak238@gmail.com</h1>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-8 text-white'>
                                <div className='w-10 bg-purple-500 flex items-center justify-center rounded-xl'>
                                    <FaPhoneVolume className='text-white text-3xl' />
                                </div>
                                <div className='font-bold'>
                                    <h2>Call Now: </h2>
                                    <h1>+8801792345238</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md space-y-6" onSubmit={handleSubmit}>
                            <h2 class="text-2xl font-semibold text-gray-800">Contact Us</h2>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" name="name" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" name="email" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input type="password" id="password" name="password" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1" for="location">Location</label>
                                <input type="text" id="location" name="location"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1" for="message">Message</label>
                                <textarea id="message" name="message" rows="4" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>

                            <div>
                                <button type="submit"
                                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-semibold">
                                    Submit
                                </button>
                            </div>
                        </form>
                        {submitError && <p className="text-red-600 text-xl text-center py-5 font-bold">{submitError}</p>}
                        {successSubmit && <p className="text-green-600 text-xl text-center py-5 font-bold">{successSubmit}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;