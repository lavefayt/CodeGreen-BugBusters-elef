import React, { useState } from 'react';


const Forgot = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center bg-secondgrey bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
            
            <div className='bg-hoverbutton p-3 rounded-sm'>
                <h3 className="font-skye-regular text-white">Forgot Password?</h3>
                <h5 className="font-skye-regular text-white">Enter the email associated with your account and we'll send an email with a link to reset your password.</h5>
               
               
                <form className="space-y-2" onSubmit={handleSubmit}>

                <div>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondgrey mt-4 font-syke-regular w-full mt-1 px-4 py-2 focus:shadow-inner border-none focus:outline-none focus:ring-1 focus:ring-textgreen rounded-sm text-white placeholder-white"
                placeholder="Email"
                required/>
              </div></form> </div>
        </div>
    );
}

export default Forgot;
