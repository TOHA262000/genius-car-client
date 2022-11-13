import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {creatUser} = useContext(AuthContext);
    const handleSignup =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        creatUser(email,password)
        .then(res=>{
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
                <form onSubmit={handleSignup} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                            <p>Allready have an account, Please <Link className='font-bold text-orange-600' to="/login">Login</Link></p>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;