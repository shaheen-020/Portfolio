import React, { useState } from 'react';
import s1 from "../../assets/images/facebook.png";
import s2 from "../../assets/images/amazon.png";
import s3 from "../../assets/images/google.png";
import s4 from "../../assets/images/instagram.png";
import s5 from "../../assets/images/LinkedIn.png";
import s6 from "../../assets/images/spotify-image.png";
const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and modern websites.',
        icon: '🌐',
    },
    {
        title: 'SEO Optimization',
        description: 'Improving your site visibility on search engines.',
        icon: '🔍',
    },
    {
        title: 'Graphic Design',
        description: 'Creating stunning visual content for your brand.',
        icon: '🎨',
    },
];
const Service = () => {
    const [showSay, setShowSay] = useState(false);
    const handleSay = () => {
        setShowSay(!showSay);
    }
    return (
        <div>
            <div className='py-20 bg-slate-900'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 items-center'>
                        <div className='px-10 space-y-10'>
                            <h1 className="lg:text-5xl text-3xl font-bold lg:pt-10 pt-20 text-white">What I do?</h1>
                            <p className='text-white'>
                                I specialize in designing user experiences, crafting engaging interfaces,
                                and building robust web applications that deliver value and usability.
                            </p>
                            <p className='text-white'>
                                My approach combines creativity and technical expertise to deliver solutions that
                                are both visually appealing and highly functional for users.
                            </p>
                            <div className='py-5'>
                                <button class="btn btn-secondary hover:bg-sky-900 border-none" onClick={handleSay}>
                                    {showSay ? "Hide GitHub!" : " Explore GitHub!"}
                                </button>
                                {showSay && (
                                    <div className='mt-6 bg-purple-200 p-4 rounded-lg shadow-md text-black'>
                                        <h2><strong>Name:  </strong>  Md Shaheenur Rashid</h2>
                                        <h2><strong>Account Name:  </strong>  shaheen-020</h2>
                                        <h2><strong>URL:  </strong><a href='https://github.com/shaheen-020'>  https://github.com/shaheen-020</a></h2>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='w-full max-w-[500px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                                <div className='text-start space-y-3'>
                                    <h1 className='text-2xl font-bold'>User Experience (JavaScript)</h1>
                                    <h3 className='text-base text-slate-500'>
                                        I use JavaScript to build dynamic, responsive, and user-friendly web applications.
                                        From DOM manipulation to API integration, I bring interactivity and real-time functionality to websites.
                                        I write clean, modular code and often work with frameworks like React for scalable front-end development.
                                    </h3>
                                </div>
                            </div>

                            <div className='w-full max-w-[500px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>

                                <div className='text-start space-y-3'>
                                    <h1 className='text-2xl font-bold'>User Interface (React Frameworks)</h1>
                                    <h3 className='text-base text-slate-500'>
                                        I build modern, responsive user interfaces using React and its powerful component-based architecture.
                                        By breaking down UIs into reusable components, I ensure maintainability and scalability.
                                        I use hooks and state management to handle dynamic data and user interactions.
                                    </h3>
                                </div>
                            </div>
                            <div className='w-full max-w-[500px] h-auto bg-slate-300 hover:bg-sky-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>

                                <div className='text-start space-y-3 pt-6'>
                                    <h1 className='text-2xl font-bold'>Web Development</h1>
                                    <h3 className='text-base text-slate-500'>
                                        I develop responsive and accessible websites using HTML, CSS, JavaScript, and modern frameworks.
                                        From front-end design to back-end logic, I create full-featured web applications.
                                        I focus on performance, usability, and cross-browser compatibility.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className="px-4 py-10 lg:max-w-6xl max-w-sm mx-auto bg-slate-700 rounded-xl">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
                            <p className="text-white mt-2">What you offer to help your business grow.</p>
                        </div> 
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                                    <div className="card-body items-center text-center">
                                        <div className="text-4xl">{service.icon}</div>
                                        <h2 className="card-title mt-2">{service.title}</h2>
                                        <p className="text-gray-500">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <h3 className="text-2xl font-semibold mb-6 text-white">Ready to work with us?</h3>
                            <button className="btn btn-primary"><a href='/contact'>Contact Us</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-800 py-10'>
                <div className='w-2/3 mx-auto text-center'>
                    <h1 className="lg:text-5xl text-3xl font-bold mb-5 text-white">Happy Clients</h1>
                    <p className='mb-5 text-white'>I've had the pleasure of working with a diverse range of companies, from startups to established brands.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-5'>
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-lg'>
                                <img src={s1} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>Facebook</h1>
                                <p>Built high-performance, user-centric features inspired by Facebook's
                                    scalable design principles to deliver seamless user experiences.
                                </p>
                                <button className='btn btn-primary rounded-xl p-5'><a href='https://www.facebook.com/shahin.srshahin'>Add Me</a></button>
                            </div>
                        </div>
                        {/* social connected no. 1 */}
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-25 flex items-center justify-center rounded-lg'>
                                <img src={s2} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>~Amazon</h1>
                                <p>
                                    Engineered scalable, user-driven components influenced by Amazon’s data-backed eCommerce efficiency and UX.
                                </p>
                                <button className='btn btn-primary rounded-xl p-5'><a href='https://www.amazon.com/'>Search</a></button>
                            </div>
                        </div>
                        {/* social connected no.  2*/}
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-lg'>
                                <img src={s4} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>Instagram</h1>
                                <p>
                                    Designed visually engaging, mobile-first interfaces inspired by Instagram’s sleek and intuitive user experience.
                                </p>
                                <button className='btn btn-primary rounded-xl p-5'><a href=''>Add Me</a></button>
                            </div>
                        </div>
                        {/* social connected no. 3 */}
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-lg'>
                                <img src={s5} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>LinkedIn</h1>
                                <p>Built professional, conversion-focused features modeled after LinkedIn’s networking and engagement strategies.</p>
                                <button className='btn btn-primary rounded-xl p-5'><a href=''>Add Me</a></button>
                            </div>
                        </div>
                        {/* social connected no. 4 */}
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-25 flex items-center justify-center rounded-lg'>
                                <img src={s3} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>Google</h1>
                                <p>
                                    Developed fast, accessible, and SEO-optimized solutions inspired by Google’s performance and usability standards.
                                </p>
                                <button className='btn btn-primary rounded-xl p-5'><a href='https://www.google.com/'>Search</a></button>
                            </div>
                        </div>
                        {/* social connected no. 5 */}
                        <div className='w-full max-w-[300px] h-auto bg-slate-300 hover:bg-slate-900 transition-colors duration-1000 hover:text-white text-black rounded-xl text-center px-6 py-6 flex flex-col items-center'>
                            <div className='w-20 h-20 flex items-center justify-center rounded-lg'>
                                <img src={s6} className="rounded-full " alt="" />
                            </div>
                            <div className='text-start space-y-3'>
                                <h1 className='text-2xl font-bold'>Spotify</h1>
                                <p>
                                    Created immersive, responsive layouts inspired by Spotify’s dynamic and personalized user experiences.
                                </p>
                                <button className='btn btn-primary rounded-xl p-5'><a href='https://open.spotify.com/'>Search</a></button>
                            </div>
                        </div>
                        {/* social connected no. 6 */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;