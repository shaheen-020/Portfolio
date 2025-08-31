import React from 'react';
import photo from "../../assets/cv_photo.jpg";
const About = () => {
    return (
        <div className='bg-gray-300 py-20'>
            <div>
                <div className="hero min-h-screen w-2/3 mx-auto">
                    <div className="hero-content flex-col lg:flex-row gap-4">
                        <img src={photo} className="lg:max-w-xl mx-w-xs rounded-lg shadow-2xl" />
                        <div className='text-black'>
                            <h1 className="lg:text-5xl text-2xl font-bold">I am Professional User Experience Designer And Developer!</h1>
                            <p className="py-4">
                                I design and develop services for customers specializing creating stylish, modern websites,
                                web services and online stores.
                                My passion is to design digital user experiences.
                            </p>
                            <p className="py-4">I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                            <button className="btn btn-primary">MY PROJECTS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;