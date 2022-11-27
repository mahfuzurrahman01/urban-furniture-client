import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spinner from '../Shared/Spinner';

const AddProducts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    document.title = "Add Products";

    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    console.log(imgHostingKey)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        setIsLoading(true)
        const postedTime = new Date().toJSON().slice(1, 19)
        const formData = new FormData();
        const image = data.productImage[0]
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imgHostingKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productImage = imgData.data.url;
                    data.productImage = productImage;
                    if (data.categoryName === "Living Room") {
                        const newData = { ...data, categoryId: 1, categoryImage: "https://i.ibb.co/QPNJC23/livingroom.jpg", postedTime }
                        fetch('http://localhost:5000/addProducts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    setIsLoading(false)
                                    toast.success('Product added successfully')
                                    navigate('/dashboard/myProducts')
                                }
                            })
                    }
                    else if (data.categoryName === "Dinning Room") {
                        const newData = { ...data, categoryId: 2, categoryImage: "https://images.unsplash.com/photo-1615803796379-b4cda8e9c09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", postedTime }
                        fetch('http://localhost:5000/addProducts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    setIsLoading(false)
                                    toast.success('Product added successfully')
                                    navigate('/dashboard/myProducts')
                                }
                            })

                    }
                    else if (data.categoryName === "kitchen Room") {
                        const newData = { ...data, categoryId: 3, categoryImage: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", postedTime }
                        fetch('http://localhost:5000/addProducts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    setIsLoading(false)
                                    toast.success('Product added successfully')
                                    navigate('/dashboard/myProducts')
                                }
                            })
                    }

                }
            })
    }

    if (isLoading) {
        return <div className='flex flex-col gap-y-5'><h1 className='text-2xl font-light my-10 text-center'>please wait it will take few seconds!<Spinner></Spinner></h1></div>
    }
    return (
        <div className='border-t-2 border-amber-100 p-5'>
            <h1>This is add products section</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-2 ng-untouched ng-pristine ng-valid lg:p-5">

                    <div className='flex w-full gap-x-4'>
                        <div className="space-y-1 text-sm w-1/2">
                            <label htmlFor="name" className="block font-semibold  text-gray-600">Name</label>
                            <input {...register("sellerName")} type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={user?.displayName} readOnly />
                        </div>
                        <div className="space-y-1 text-sm w-1/2">
                            <label htmlFor="email" className="block font-semibold  text-gray-600">Email</label>
                            <input {...register("sellerEmail")} type="email" name="email" id="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={user?.email} readOnly />
                        </div>
                    </div>

                    <div className='flex w-full gap-x-4'>
                        <div className="space-y-1 text-sm w-1/2">
                            <label className="block font-semibold  text-gray-600">Product Name</label>
                            <input type="text" {...register("productName")} className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" required placeholder="Product Name" />
                        </div>
                        <div className="space-y-1 text-sm w-1/2">
                            <label className="block font-semibold  text-gray-600">Product Image</label>
                            <input {...register("productImage")} type="file" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" required placeholder="Add an Image" />
                        </div>
                    </div>

                    <div className='flex w-full gap-x-4'>
                        <div className="space-y-1 text-sm text-gray-600 w-1/2">
                            <label htmlFor="role" className="block font-semibold text-gray-600">Category?</label>
                            <select {...register("categoryName", { required: 'Please select category' })} id='role' className="select bg-gray-200 w-full font-normal" placeholder="Product category" required>
                                <option disabled >Category?</option>
                                <option value="Living Room">Living Room</option>
                                <option value="Dinning Room">Dinning Room</option>
                                <option value="kitchen Room">Kitchen Room</option>
                            </select>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600 w-1/2">
                            <label htmlFor="condition" className="block font-semibold text-gray-600">Product Condition?</label>
                            <select {...register("condition", { required: 'Please select condition' })} id='condition' className="select bg-gray-200 w-full font-normal" required>
                                <option disabled >Condition?</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full gap-x-4'>
                        <div className="space-y-1 text-sm w-1/2">
                            <label className="block font-semibold  text-gray-600">Original Price</label>
                            <input {...register("originalPrice")} className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" type="number" placeholder="Original price" required />
                        </div>
                        <div className="space-y-1 text-sm w-1/2">
                            <label className="block font-semibold  text-gray-600">Resale Price</label>
                            <input {...register("resalePrice")} className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" type="number" placeholder="Resale price" required />
                        </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                        <label htmlFor="use" className="block text-gray-600">Years of use?</label>
                        <select {...register("yearsOfUse", { required: 'Please select category' })} id='use' className="select bg-gray-200 w-full font-normal" required>
                            <option disabled >Years of use?</option>
                            <option value="1 year used">1 year</option>
                            <option value="2 years used">2 years</option>
                            <option value="3 years used">3 years</option>
                            <option value="4 years used">4 years</option>
                            <option value="5 years used">5 years</option>
                        </select>

                    </div>

                    <div className='flex w-full gap-x-4'>
                        <div className="space-y-1 text-sm w-1/2">
                            <label className="block font-semibold  text-gray-600">Location</label>
                            <input {...register("sellerLocation")} className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" type="text" placeholder='Meeting place' required />
                        </div>
                        <div className="space-y-1 text-sm w-1/2">
                            <label htmlFor="number" className="block font-semibold   text-gray-600">Phone number</label>
                            <input {...register("number")} type="number" name="number" id="number" placeholder="Your Phone number" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" />
                        </div>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="description" className="block font-semibold  text-gray-600">Description about product?</label>
                        <textarea {...register("description")} type="text" name="description" id="description" placeholder="Product description" className="w-full min-h-[100px] px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" />
                    </div>
                    <button htmlFor="my-modal-4" className="block w-full p-3 text-center rounded-sm  bg-primary text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;