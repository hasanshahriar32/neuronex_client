import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

import errorAni from '../../assets/lottie/error.json';

const ErrorPage = () => {
    return (
        <div className=" md:w-4/5 mx-auto pt-20 md:pt-0  text-center ">
            <Lottie className='max-w-5xl mx-auto' animationData={errorAni} loop={true} />
            <div className="lg:-mt-28">
                <p className=' text-red-400'>Page is not Found );</p><br />
                <p className=' text-gray-500'>The page you are looking for might have been removed <br />
                    had its name changed or is temporarily unavailable.</p>
                <div className="pt-8 flex justify-center">
                    <Link className='btn btn-warning' to='/'>Go Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;