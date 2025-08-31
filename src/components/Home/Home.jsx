import React, { useState } from 'react';
import photo from "../../assets/cv_photo.jpg";
import lap1 from "../../assets/laptop1.jpg";
import lap2 from "../../assets/laptop2.jpg";
import lap3 from "../../assets/laptop3.jpg";
import { SiRoamresearch } from "react-icons/si";
import { TbAnalyze } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdLaunch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClick = () => {
        setShowInfo(!showInfo);
    }
    return (
        <div className='bg-100 py-25 bg-base-100'>
            <div className=''>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse w-10/12 max-auto lg:py-10 py-28">
                        <div className="max-w-sm  shadow-2xl bg-none lg:text-right text-center" >
                            <img
                                className='rounded-full '
                                src={photo} />
                        </div>
                        <div>
                            <div className=''>
                                <h1 className="lg:text-6xl text-3xl font-bold">Hello, I’m Md Shaheenur Rashid</h1>
                                <p className="py-6">
                                    I'm a Freelance UI/UX Designer and Web Developer based in Germany, England. I strives
                                    to build immersive and beautiful
                                    web applications through carefully crafted code and user-centric design.
                                </p>
                                <button className="btn btn-primary" onClick={handleInfoClick}>
                                    {showInfo ? "Hide Information" : "Get Information"}
                                    <FaArrowRight className='mt-1'></FaArrowRight>
                                </button>
                                {showInfo && (
                                    <div className="mt-6 bg-purple-200 p-4 rounded-lg shadow-md text-black">
                                        <p><strong>ID: </strong>232-134-020</p>
                                        <p><strong>Batch: </strong>5th</p>
                                        <p><strong>Name: </strong> Md Shaheenur Rashid</p>
                                        <p><strong>Department: </strong> Software Engineering</p>
                                        <p><strong>University: </strong> Metropolitan University</p>
                                        <p><strong>Email: </strong> shahinurmubarak238@gmail.com</p>
                                    </div>
                                )}
                                <div className='py-12'>
                                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 text-black text-center'>
                                        <div className='w-48 bg-purple-300 shadow-xl rounded-lg px-4 py-2'>
                                            <h1 className='font-bold text-2xl'>5 Years</h1>
                                            <p>Experience</p>
                                        </div>
                                        <div className='w-48 bg-purple-300 shadow-xl rounded-lg px-4 py-2'>
                                            <h1 className='font-bold text-2xl'>44+</h1>
                                            <p>Projects Completed</p>
                                        </div>
                                        <div className='w-48 bg-purple-300 shadow-xl rounded-lg px-4 py-2'>
                                            <h1 className='font-bold text-2xl'>20+</h1>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto py-20 bg-base-100'>
                <div className='text-center max-w-sm mx-auto space-y-3 mb-5'>
                    <h1 className="lg:text-5xl text-3xl  font-bold">Portfolio</h1>
                    <p className='mb-3'>Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                    <div className="card lg:w-96 w-72 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lap1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center space-y-2">
                            <h3>UI-UX DESIGN</h3>
                            <h2 className="card-title">Product Admin Dashboard</h2>
                            <p>I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    <a href='https://refactoring.guru/design-patterns'>More Explore</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 w-72 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lap2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center space-y-2">
                            <h3>UI-UX DESIGN</h3>
                            <h2 className="card-title">Product Admin Dashboard</h2>
                            <p>I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    <a href='https://refactoring.guru/design-patterns'>More Explore</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 w-72 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lap3} alt="Shoes" className="rounded-xl w-96" />
                        </figure>
                        <div className="card-body items-center text-center space-y-2">
                            <h3>UI-UX DESIGN</h3>
                            <h2 className="card-title">Product Admin Dashboard</h2>
                            <p>I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    <a href='https://refactoring.guru/design-patterns'>More Explore</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto py-20 bg-slate-900 rounded-xl'>
                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-8 px-4">Do you know how to start ?</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 items-center'>
                    <div className='px-10 space-y-2'>
                        <h1 className="lg:text-5xl text-3xl font-bold">Work Process</h1>
                        <p>Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation,
                            and component is crafted with intention — merging usability with visual clarity,
                        </p>
                        <p>I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.</p>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-20 bg-purple-500 flex items-center justify-center rounded-xl'>
                                <SiRoamresearch className='text-white text-4xl' />
                            </div>
                            <div className='text-start space-y-3 pt-6'>
                                <h1 className='text-2xl font-bold'>1. Research</h1>
                                <h3 className='text-sm font-semibold'>
                                    Design meets function in every pixel, blending clarity with intuitive motion.
                                </h3>
                            </div>
                        </div>

                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-20 bg-purple-500 flex items-center justify-center rounded-xl'>
                                <TbAnalyze className='text-white text-4xl' />
                            </div>
                            <div className='text-start space-y-3 pt-6'>
                                <h1 className='text-2xl font-bold'>2. Analyze</h1>
                                <h3 className='text-sm font-semibold'>
                                    Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.
                                </h3>
                            </div>
                        </div>
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-20 bg-purple-500 flex items-center justify-center rounded-xl'>
                                <CiEdit className='text-white text-4xl' />
                            </div>
                            <div className='text-start space-y-3 pt-6'>
                                <h1 className='text-2xl font-bold'>3. Design</h1>
                                <h3 className='text-sm font-semibold'>
                                    I design seamless digital experiences with precision, purpose, and a touch of elegance.
                                </h3>
                            </div>
                        </div>
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-20 bg-purple-500 flex items-center justify-center rounded-xl'>
                                <MdLaunch className='text-white text-4xl' />
                            </div>
                            <div className='text-start space-y-3 pt-6'>
                                <h1 className='text-2xl font-bold'>4. Launch</h1>
                                <h3 className='text-sm font-semibold'>
                                    I craft digital products where thoughtful design meets performance-driven, responsive development.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;