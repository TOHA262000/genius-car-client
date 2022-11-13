import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {
    const {signIn,googleSignIn}=useContext(AuthContext);
    const handleLogin =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user);
        })
        .catch(err=> console.error(err));
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .catch(err=>console.error(err));
    }
    return (
        <div className="hero py-8">
            <div className="hero-content grid md:grid-cols-2 flex-col">
                <div className="text-center lg:text-left">
                    <img src={picture} alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <p className='text-center'>New to Genius Car, Please <Link className='font-bold text-orange-600' to="/signup">Signup</Link></p>
                        </div>
                        <div className="form-control">
                            <p className="text-center my-2">Or Sign In with</p>
                            <div className='flex justify-center items-center text-2xl'>
                            <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;