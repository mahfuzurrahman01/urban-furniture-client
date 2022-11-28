import React from 'react';

const Blogs = () => {
    document.title = "Blogs";
    return (
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto my-10'>
            <section className=" bg-secondary bg-gradient-to-r from-primary text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">What are the different ways to manage a state in a React application?</h3>
                            <p className="mt-1  text-gray-400">There are four main different types of state you need to properly manage in your React apps:</p>
                            <p className='text-gray-300'>1. Local State</p>
                            <p className='text-gray-300'>2. Global State</p>
                            <p className='text-gray-300'>3. Server state</p>
                            <p className='text-gray-300'>4. Url state</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does prototypical inheritance work?</h3>
                            <p className="mt-1  text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">React vs Angular vs Vue ?</h3>
                            <p className="mt-1  text-gray-400">React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
                            <p className="mt-1  text-gray-400">Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS).</p>
                            <p className="mt-1  text-gray-400">
                                Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. </p>
                        </div>
                        <div>
                            <h3 className="font-semibold"> What is a unit test? Why should we write unit tests?</h3>
                            <p className="mt-1  text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;