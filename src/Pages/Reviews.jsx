import React from 'react';
import bg from '../assets/bg/angelo-pantazis-N4wUsqIbMAM-unsplash.jpg'
const Reviews = () => {
    return (
        <div style={{
            backgroundImage: "url(" + bg + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <section className="   lg:text-gray-100 text-gray-400" data-aos='fade-up'>
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="lg:text-5xl text-4xl  text-center font-bold">What our client says about us!</h2>
                            <p className=" text-gray-100 ">Our clients praise us for our great results, personable service, expert knowledge and on-time delivery. Here are what just a few of them had to say:</p>
                        </div>
                        <div className="p-6 xl:col-span-3" >
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md  bg-gray-700 bg-opacity-50" data-aos='fade-left'>
                                        <p>Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-12 h-12 bg-center bg-cover rounded-full  bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Nazmus Sakib</p>
                                                <p className="text-sm  text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md  bg-gray-700 bg-opacity-50" data-aos='fade-right'>
                                        <p>eLab Communications is attentive, personable, and professional. Will and his team provide great support for my company's needs.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80" alt="" className="w-12 h-12 bg-center bg-cover rounded-full  bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Shahriar Abid</p>
                                                <p className="text-sm  text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md  bg-gray-700 bg-opacity-50" data-aos='fade-right'>
                                        <p>Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab Communications as our online marketing partner!</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="w-12 h-12 bg-center bg-cover rounded-full  bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Maksudul Alam</p>
                                                <p className="text-sm  text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md  bg-gray-700 bg-opacity-50" data-aos='fade-left'>
                                        <p>I have worked with Will and the eLab Communications team for several years. Unflinchingly reliable, professional and proactive from a technology and security standpoint. Over the years, eLab Communications has streamlined our communications so that any of our website updates or other needs are handled seamlessly.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-12 h-12 bg-center bg-cover rounded-full  bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Mahmudul Hassan</p>
                                                <p className="text-sm  text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;