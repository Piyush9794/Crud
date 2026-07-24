// import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { data } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),

})

const Home = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm(
        {
            resolver: yupResolver(Schema)
        }
    );



    const SaveFunction = async (data) => {
        const url = "http://localhost:9000/api/reg";
        const result = await axios.post(url, data)
        // toast.success()
        toast.success(result.data.message);
        navigate("/view")
        console.log(result);

    }

    return (
        <section className="bg-gray-100 px-5 min-h-screen">

            <div className="w-full max-w-md border border-dark-300 rounded-xl shadow-lg p-8 mt-6 items-center justify-center ">
                <h1 className="text-3xl font-bold text-center mb-6">Regsiter</h1>


                <form onSubmit={handleSubmit((data) => SaveFunction(data))} className="space-y-5">
                    <input {...register('name')} placeholder='Name' className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.name && <p className='text-red-500'>Please enter number for age.</p>}

                    <input {...register('email')} placeholder='Email' className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.email && <p className='text-red-500'>Please enter number for age.</p>}
                    <input {...register('password')} placeholder='password' className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.email && <p className='text-red-500'>Please enter number for age.</p>}
                    <input type="submit" className="w-full   border-gray-300 rounded-lg px-4 py-3 btn bg-amber-800 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border border-2" />
                </form>

            </div>
        </section>
    )
}

export default Home
