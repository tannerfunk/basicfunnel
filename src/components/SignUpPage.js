import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import {db} from '../firebase';
import {collection, addDoc} from 'firebase/firestore';
// import { firestore } from "firebase/app";
// import "firebase/database";
import axios from 'axios';


const SignUpPage = () => {

  const initialValues = {name: "", email:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [emailError, setEmailError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});

    setIsDisabled(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value));
  }

  


  const handleDownload = async () => {



    await addDoc(collection(db, 'opt-ins'), {
      name: formValues.name,
      email: formValues.email
    })

    // try {
    //   const link = document.createElement('a');
    //   link.href = './8_Step_Guide.pdf';
    //   link.setAttribute('download', '8_Step_Guide.pdf');
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // } catch (error) {
    //   console.error(error);
    // }
    
  };


    return (
      <div className="bg-white py-16 sm:py-24">
      {/* <pre>{ JSON.stringify(formValues)}</pre> */}
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-s9" />
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-s5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-s2 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-s9 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-s9 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    The FREE 8 Step Guide To <em>Really</em> Influence your Adult Children For Good ($39 Value)
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
                  It's time to level up and live a life of influence, take back the leadership role in your life, and make your life attractive, enticing, and full of love.
                  </p>
                </div>


                <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                
                  
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-name" className="sr-only">
                      Name
                    </label>
                    {/* <p className="text-white font-bold">{ emailError.email }</p> */}
                    <input
                      id="cta-name"
                      type="text"
                      name="name"
                      className="block w-full rounded-md border border-transparent mb-2 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-s6"
                      placeholder="Your Name"
                      value={ formValues.name }
                      onChange={handleChange}
                    />
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    {/* <p className="text-white font-bold">{ emailError.email }</p> */}
                    <input
                      id="cta-email"
                      type="email"
                      name="email"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-s6"
                      placeholder="Your Email"
                      value={ formValues.email }
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4 sm:mt-auto sm:ml-3">
                  {!isDisabled ? (
                    <Link to="/thankyou" onClick={handleDownload}>
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent bg-s9 px-5 py-3 text-base font-medium text-s2 shadow hover:bg-s8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-s2 sm:px-10">
                      Download PDF 
                    </button></Link>
                  ) : (
                    <button
                      disabled
                      className="block w-full rounded-md border border-transparent bg-slate-300 px-5 py-3 text-base font-medium text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-s2 sm:px-10"
                    >
                      Download PDF 
                    </button>
                  )}
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default SignUpPage;