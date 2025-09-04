import React from 'react';

const Footer = () => {
    return (
        <div className='bg-100 py-12'>
            <div className='w-10/12 mx-auto'>
                <footer className="footer pl-100">
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                        <nav className='grid grid-cols-1 w-2/3 max-auto space-y-2'>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className='grid grid-cols-1 space-y-2'>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className='grid grid-cols-1 space-y-2'>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                        <form>
                            <header className="footer-title">Newsletter</header>
                            <fieldset className="form-control w-80 space-y-4">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="relative w-full">
                                    <input type="text" placeholder="username@gmail.com" className="input input-bordered w-full pr-16" />
                                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;