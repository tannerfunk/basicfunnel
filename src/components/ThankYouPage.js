import Calendly from "./Calendly";
// import susieLogo from "./img/logo.png";

const ThankYouPage = () => {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-13 pr-6"
                src="./img/logo.png"
                alt="Susie Funk Coaching"
              />
              <h1 className="mt-14 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                One-time Offer: Free Coaching Jumpstart!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Only available to you NOW for signing up. Be the Mother of Influence your adult children need you to be!
              </p>
              <div className="pr-8 mt-8">
                <Calendly />
              </div>
            <div className="sm:mt-22 sm:flex lg:mt-16">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  You can also find me on instagram  {' '}
                  <a href="https://www.instagram.com/motherofinfluence/" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    I signed up! <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              {/* <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="./img/happymidlifemother.jpg"
              alt=""
            />
          </div>
        </div>
      </div> 
    )
}


export default ThankYouPage;