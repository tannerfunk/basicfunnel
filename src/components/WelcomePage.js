import { Link } from 'react-router-dom';
// import {useState} from 'react';

/* This example requires Tailwind CSS v3.0+ */
const WelcomePage = () => {

    // const [showPopup, setShowPopup] = useState(false);

    // const togglePopup = () => {
    //   setShowPopup(!showPopup);
    // }


    return (
      <div className="bg-white">
      <div className="mx-auto w-96">
        <div className="mx-auto rounded-lg rounded-t-none bg-center mb-8 bg-logo1 bg-cover max-w-7xl h-48 py-16 px-6 sm:py-24 lg:px-8">
        </div></div>
        <div className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-0 lg:px-8">
          <div className="relative isolate overflow-hidden bg-s8 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-s12">
              Learn How To <em>Actually</em> Be An Influence In The Life Of Your Adult Child Today For FREE
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-s12">
                This Is Next-Level Motherhood And You Need To Be Equipped To Make The Difference You Were Born To Make
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-2xl leading-7 text-s12"><em>
                The "8 Step Guide to <strong>Really</strong> Influence your Adult Children for Good" has the tools you'll <strong>need</strong> to be a force for good in the lives of those you love most (or want to love the most!).
            </em></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-md bg-white px-3.5 py-2 text-base font-semibold leading-7 text-s12 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download
              </Link>
              <Link to="/signup" className="text-base font-semibold leading-7 text-s12">
                Let's Talk! <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.9" />
              <defs>
                <radialGradient
                  id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#CB627E" />
                  <stop offset={1} stopColor="#EAE8DE" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/* <div>
            <button onClick={togglePopup}>Show Popup</button>
            {showPopup && (
                <div className="popup">
                    <p>This is my pop-up component</p>
                    <button onClick={togglePopup}>Close Popup</button>
                </div>
            )}
        </div> */}
      </div>
    )
  }
  

  export default WelcomePage;