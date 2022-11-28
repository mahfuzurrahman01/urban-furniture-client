import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const BookingModal = ({ modalState, setModalState }) => {
    console.log(modalState)
    const itemImage = modalState.productImage;
    const itemName = modalState.productName;
    const index = modalState._id;
    const { user } = useContext(AuthContext)
    //modal result 
    const { register, handleSubmit: modalSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const bookingsData = { ...data, itemImage, itemName, index }
        console.log(bookingsData)
        fetch('https://urban-eta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(bookingsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // fetch(`https://urban-eta.vercel.app/newProducts/${modalState._id}`, {
                    //     method: 'PUT'
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data)

                    //     })
                    toast.success('Booking Successful')
                }
            })
        setModalState(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={modalSubmit(onSubmit)} noValidate="" action="" className="space-y-2 ng-untouched ng-pristine ng-valid lg:p-5">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block font-semibold  text-gray-600">Name</label>
                            <input {...register("name")} type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={user?.displayName} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block font-semibold  text-gray-600">Email</label>
                            <input {...register("email")} type="email" name="email" id="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={user?.email} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="item" className="block font-semibold  text-gray-600">Selected Item</label>
                            <input {...register("item")} type="text" name="item" id="item" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={modalState.productName} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="price" className="block font-semibold  text-gray-600">Price</label>
                            <input {...register("price")} type="text" name="price" id="price" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" defaultValue={modalState.resalePrice} readOnly />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="number" className="block font-semibold   text-gray-600">Phone number</label>
                            <input {...register("number")} type="number" name="number" id="number" placeholder="Your Phone number" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="location" className="block font-semibold  text-gray-600">Location</label>
                            <input {...register("location")} type="text" name="location" id="location" placeholder="Meeting location" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-200 text-gray-800 focus:border-violet-400" />
                        </div>
                        <button htmlFor="my-modal-4" className="block w-full p-3 text-center rounded-sm  bg-primary text-white">Submit</button>
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;



                    // <label  className="btn">Yay!</label>