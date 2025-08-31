import React, { useState } from 'react';

const Service = () => {
    const [showSay, setShowSay] = useState(false);
    const handleSay = () =>{
        setShowSay(!showSay);
    }
    return (
        <div className='py-20 bg-slate-900'>
            <div className='w-10/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 items-center'>
                    <div className='px-10 space-y-10'>
                        <h1 className="lg:text-5xl text-3xl font-bold pt-10">What I do?</h1>
                        <p>
                            I specialize in designing user experiences, crafting engaging interfaces,
                            and building robust web applications that deliver value and usability.
                        </p>
                        <p>
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
        </div>
    );
};

export default Service;