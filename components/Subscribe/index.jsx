"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../lib/axios";


const SubscribeForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);
    

        try {
            const response = await axiosInstance.post('/subscriber', { firstname, lastname, email });
            const result = response.data;
        
            if (result.status === 'success') {
                setMessage(`Subscribed successfully!`);
                setEmail("");
            } else {
                setError(result.message || "Subscription failed.");
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Something went wrong.");
            } else {
                setError(err.message || "Network error, please try again.");
            }
        }
        
        finally {
            setLoading(false);
        }
    };

  return (
    <>
      {/* <!-- ===== Subscribe form ===== --> */}

        <motion.div
            variants={{
            hidden: {
                opacity: 0,
                x: 20,
            },

            visible: {
                opacity: 1,
                x: 0,
            },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-1 animate_right"
        >
            <div className=" p-1 relative grid gap-[2em]">

                <div className=" p-1 grid gap-[1em]">

                    <h1 className="text-white text-[1.6rem] lg:text-[2.6rem] font-extrabold">
                        Sign up to our newsletter  
                    </h1>

                    <p className="lg:w-[70%] text-white">
                    We’d love to keep you up to date with inspiring stories, the latest breakthroughs, and ways you can make a difference.  
                    </p>
                </div>

                <div
                    className=" p-1 "
                >

                    {message && <p className="text-[green]">{message}</p>}
                    {error && <p className="text-[red]">{error}</p>}

                    <form onSubmit={handleSubscribe} className="flex flex-col">

                        <div
                            className=" grid gap-[1rem]"
                        >
                            
                            <div
                                className="lg:w-[70%]"
                            >
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="p-3 w-full text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    
                                />
                            </div>
                            

                            <div
                                className="lg:w-[70%]"
                            >

                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="p-3 w-full text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    
                                />

                            </div>
                            

                            <div
                                className="lg:w-[70%]"
                            >
                                
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-3 w-full text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                
                            </div>


                            <div>

                                <button type="submit" className="bg-black text-white px-6 py-3 rounded-full hover:bg-primary transition duration-300">
                                    {loading ? "Submitting..." : "Submit"}
                                </button>

                            </div>
                        
                        </div>

                    </form>

                </div>

            </div>

        </motion.div>
      {/* <!-- ===== Subscribe form ===== --> */}
    </>
  );
};

export default SubscribeForm;
