import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {user} = useContext(AuthContext);
    const {_id,title,price} = useLoaderData();
    const handlePlaceOrder =event=>{
        event.preventDefault();
        const form = event.target;
        const first = form.firstName.value;
        const last = form.lastName.value;
        const name = `${first} ${last}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const msg = form.msg.value;


        const order ={
            service:_id,
            serviceName:title,
            price,
            name,
            email,
            phone,
            msg
        }
        console.log(order);
    }
    return (
        <form onSubmit={handlePlaceOrder}>
            <div>
            <h2 className='text-2xl font-semibold'>Service Name:{title}</h2>
            <h2 className='text-2xl text-orange-600 font-semibold'>Price: ${price}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                <input type="text" name='firstName' placeholder="Firs Name" className="input input-bordered w-full" required />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" />
                <input type="text" name='email' defaultValue={user.email} readOnly name='email' placeholder="Email" className="input input-bordered w-full" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" required />
            </div>
            <textarea name='msg' className="textarea textarea-bordered h-24 w-full" placeholder="Message"></textarea>
            <input className='btn btn-info' type="submit" value="Submit" />
        </form>
    );
};

export default Checkout;