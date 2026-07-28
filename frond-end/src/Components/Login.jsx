import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const Schema = yup.object().shape({

    email: yup.string().required(),
    password: yup.string().required(),

})

const Login = () => {
    // const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm(
        {
            resolver: yupResolver(Schema)
        }
    );
    const LoginFunction = async (data) => {
        const url = "http://localhost:9000/api/login";
        const result = await axios.post(url, data)
        // toast.success()
        toast.success(result.data.message);
        // navigate("/view")
        console.log(result);

    }
    return (
        <>
            <section className="bg-gray-100  min-h-screen px-5 flex items-center justify-center">
                <div className='border border-dark-300 p-8 mt-6 rounded  shadow-lg '>
                    <h1 className='text-3xl text-center mb-4 font-bold '>Login...</h1>
                    <form onSubmit={handleSubmit(LoginFunction)} className="space-y-5">


                        <input {...register('email')} placeholder='Email' className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.email && <p className='text-red-500'>Please enter number for email.</p>}
                        <input {...register('password')} placeholder='password' className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {errors.password && <p className='text-red-500'>Please enter number for password.</p>}
                        <button className="w-full   border-gray-300 rounded-lg px-4 py-3 btn bg-amber-800 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border border-2" onClick={() => { LoginFunction() }}>Login</button>
                        {/* Register Button */}
                        <Link
                            to="/home"
                            className="block w-full text-center rounded-lg px-4 py-3 border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white transition"
                        >
                            Register
                        </Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
