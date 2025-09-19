import React, { useState } from 'react';
import { FaJs, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import photo from "../../assets/cv_photo.jpg";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";
import photo6 from "../../assets/images/photo6.jpg";
const About = () => {
    const [showProjects, setShowProjects] = useState(false);
    const handleInProject = () => {
        setShowProjects(!showProjects);
    }

    const skills = [
        {
            name: "JavaScript",
            icon: <FaJs className="text-yellow-400" />,
            level: "Advanced",
            experience: "Almost 4 years",
            role: "Frontend Developer",
            salary: "15,000"
        },
        {
            name: "Java",
            icon: <FaJava className="text-red-600" />,
            level: "Intermediate",
            experience: "Almost 2 years",
            role: "Android Developer",
            salary: "12,000"
        },
        {
            name: "Python",
            icon: <FaPython className="text-blue-500" />,
            level: "Intermediate",
            experience: "Almost 2 years",
            role: "Data/Backend Developer",
            salary: "12,000"
        },
        {
            name: "React",
            icon: <FaReact className="text-cyan-400" />,
            level: "Advanced",
            experience: "Almost 3 years",
            role: "Front-end Developer",
            salary: "10,000"
        },
        {
            name: "C++",
            icon: <SiCplusplus className="text-blue-700" />,
            level: "Intermediate",
            experience: "4 years",
            role: "Software Developer",
            salary: "8,500"
        },
        {
            name: "SQL",
            icon: <SiMysql className="text-blue-600" />,
            level: "Intermediate",
            experience: "1 years",
            role: "Database Developer",
            salary: "9,500"
        },
    ];
    return (
        <div>
            <div className='bg-base-200'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse w-10/12 max-auto lg:py-10 py-28">
                        <div className="max-w-sm  lg:text-left text-center" >
                            <img
                                className='rounded-xl lg:mt-0 mt-10'
                                src={photo} />
                        </div>
                        <div>
                            <div className='lg:w-[500px] w-[270px]'>
                                <h1 className="lg:text-5xl text-2xl font-bold">I am Professional User Experience Designer And Web Developer!</h1>
                                <p className="py-4">
                                    I develop services for customers specializing creating stylish, modern websites,
                                    web services and online stores.
                                    My passion is to design digital user experiences.
                                </p>
                                <p className="py-4">I develop services for customers specializing creating stylish, modern websites, web services.</p>
                                <button className="btn btn-primary" onClick={handleInProject}>
                                    {showProjects ? "HIDE MY PROJECTS" : "MY PROJECTS"}
                                </button>
                                {showProjects && (
                                    <div className="bg-white hover:bg-black text-black hover:text-white duration-500 rounded-xl mt-10">
                                        <div className="p-6">
                                            <h1 className="font-bold mb-3">It's not possible to show all projects, but also some specific given the below:</h1>
                                            <h1><strong>URL: </strong><a href="https://makebyme-334f6.web.app/">https://makebyme-334f6.web.app/</a></h1>
                                            <h1><strong>URL: </strong><a href="https://category-d388c.web.app/">https://category-d388c.web.app/</a></h1>
                                            <h1><strong>URL: </strong><a href="https://job-replacement-b25d7.web.app/">https://job-replacement-b25d7.web.app/</a></h1>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-900 py-10'>
                <div className='w-10/12 mx-auto'>
                    <div className='text-center max-w-sm mx-auto  space-y-3'>
                        <h className="lg:text-5xl text-3xl font-bold text-white">My Research</h>
                        <p className='text-white'>
                            Explore my recent research work where I share findings, insights, and perspectives on emerging trends and developments in the field.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 py-6 px-4'>
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo1} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">22 October, 2022</h2>
                                <p>Responsive Design: Adapting to all devices.</p>
                            </div>
                        </div>
                        {/* card no 1 */}
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo2} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">3 November, 2022</h2>
                                <p>When you hear the word desert, what comes to mind?</p>
                            </div>
                        </div>
                        {/* card no 2 */}
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo3} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">29 December, 2021</h2>
                                <p>A hill is a naturally raised area of land, lower and less steep than a mountain.</p>
                            </div>
                        </div>
                        {/* card no 3 */}
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo4} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">21 September, 2023</h2>
                                <p>Unlike highways or city streets, hill roads have a rhythm of their own.</p>
                            </div>
                        </div>
                        {/* card no 4 */}
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo5} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">23 August, 2023</h2>
                                <p>Popular with professionals, known for high quality and lens flexibility.</p>
                            </div>
                        </div>
                        {/* card no 5 */}
                        <div className="card lg:w-96 w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={photo6} alt="Shoes" className="rounded-xl w-[400px] h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">28 January, 2024</h2>
                                <p>There are over 8.7 million estimated species on Earth, and more than 7 million of them are animals!</p>
                            </div>
                        </div>
                        {/* card no 6 */}
                    </div>
                </div>
            </div>
            <div className='bg-slate-800 py-20'>
                <div className="w-10/12 mx-auto rounded-xl" id="skill">
                    <div className='lg:w-[500px] w-[300px] mx-auto text-center'>
                        <h2 className="text-3xl font-bold text-center mb-4 text-white">
                            Experience
                        </h2>
                        <p className='mb-10 text-white px-3'>Experience with JavaScript, Java, Python, and React encompasses a
                            wide range of programming paradigms and application development areas.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4'>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="lg:w-96 w-72 flex flex-col items-center bg-white text-slate-900 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
                            >
                                <div className='lg:text-7xl text-5xl mb-4'>{skill.icon}</div>
                                <div className='lg:text-3xl text-2xl mb-4 font-bold'>{skill.name}</div>
                                <div className='text-xl mb-4 font-semibold'>{skill.level}</div>
                                <div className='text-xl mb-4 font-semibold'>{skill.experience}</div>
                                <div className='text-xl mb-4 font-semibold'>{skill.role}</div>
                                <div className='text-xl mb-4 font-semibold'>Salary: {skill.salary}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
