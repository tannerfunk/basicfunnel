import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import tp from "../testimonialProfile.png";
import { Link } from 'react-router-dom';


const frequencies = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ]
  const tiers = [
    {
      name: '3-month Coaching Program ($6,000 Value)',
      id: 'tier-starter',
      href: 'https://square.link/u/pmlovRlK',
      featured: false,
      description: 'A big step towards becoming the Mother of Your Dreams',
      price: { monthly: '$2,750', annually: '$30,000' },
      strikePrice: "$3,000",
      mainFeatures: ['Discover your happiest self', 'Become a Mother of Influence', 'Strengthen family relationships'],
    },
    {
      name: "All for 3k Special ($11,000 Value)",
      id: 'tier-scale',
      href: 'https://square.link/u/pzj3xUnH',
      featured: true,
      description: 'The best financial services for your thriving business.',
      price: { monthly: '$3,000', annually: 'N/a' },
      strikePrice: "$6,000",
      mainFeatures: [
        '3-month Coaching Program',
        'Made For More Retreat',
        'More Love',
        'More Influence',
        'More Laughs',
        'More YOU',
      ],
    },
    {
      name: 'Made For More Retreat ($5,000 Value)',
      id: 'tier-growth',
      href: 'https://square.link/u/QP3xxLkm',
      featured: false,
      description: 'Will be such a fun weekend. Full of growth!',
      price: { monthly: '$2,500', annually: 'N/A' },
      strikePrice: "$3,000",
      mainFeatures: ['Disconnect from the noise of your life', 'Relax with uplifting and new friends', 'Manage your mind, take on the world', 'Take action in the direction of your dreams'],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Retreat = () => {
    const incentives = [
        { 
        name: "When:",
        imgSource: "",
        description: "March 23-25: Arrive Wednesday night, check out Sunday morning",
        },
        { 
            name: "Where:",
            imgSource: "",
            description: "In beautiful El Dorado Hills (about 30 minutes from Sacramento Airport)",
        },

    ]
    const [frequency, setFrequency] = useState(frequencies[0])

    
    return (
        <div className="bg-s2">
            <div className=" rounded-b-3xl bg-white py-24 px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl text-center ">
                    <p className="text-lg font-semibold leading-8 tracking-tight text-s2">3-day Uplevel Retreat</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-s5 sm:text-6xl">Made For More.</h2>
                    <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-600">
                        You've been a mother to your kids, and you always will be! But it's time to become their <em>mentor.</em> I will show you how to continue to be honored, revered, and admired by your adult kids and family. After 3 days you will discover more about yourself and be a <strong>stronger influence <em>than ever before.</em></strong>
                    </p>
                </div>
            </div>

            <div className="relative isolate overflow-hidden bg-main bg-cover bg-gray-900 py-20 sm:py-20">
                {/* <img
                src=""
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                /> */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
                >
                <path
                    fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                    id="10724532-9d81-43d2-bb94-866e98dd6e42"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
                </svg>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
                >
                <path
                    fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                    id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
                </svg>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-s9 sm:text-6xl">March 23-25</h2>
                        <h2 className="text-2xl font-bold tracking-tight text-s9 sm:text-4xl">El Dorado Hills</h2>
                        <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-s9">
                        No more excuses! Just 30 minutes from the Sacramento Airport, you'll get 4 nights private room (beginning Wednesday March 22nd) with breakfast, lunch, and snacks for Thursday, Friday and Saturday + 1 dinner!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-s1 px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-s12">
                            What you need to know <em>before</em>
                        </h2>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-2">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                            {/* <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" />
                                </div>
                            </div> */}
                            <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 bg-s11 p-6 pb-8 rounded-lg">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-s6">{incentive.name}</h3>
                                <p className="mt-2 text-md sm:text-lg lg:text-xl text-s6">{incentive.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-s5 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-s9 sm:text-4xl">
            What you'll know <em>after</em>
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">

        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-indigo mx-auto text-s9 lg:max-w-none sm:mx-12"> <br />
              <ul role="list" className="text-md sm:text-lg lg:text-xl ">
                <li>&#x2022; Learn why your circumstances are never the cause of your suffering and how to manage your mindset and your emotions so that they both serve you. </li>
                <br /><li>&#x2022; Recognize that all emotions are God-given and there are no wrong or right ones Some serve us and help us move forward and others keep us stuck and in pain.</li>
                <br /><li>&#x2022; Know how to deepen your connection with God, yourself, your spouse and children. Understand why people “get on your nerves” and how to show up as the best version of yourself, no matter the other person's behavior.</li>
                <br /><li>&#x2022; Find out why you don't take action in the direction of your dreams and goals or if you do why it doesn't last (hint: there is nothing wrong with YOU, you just have a human brain that needs some hacking to get it done; we will teach you how)</li>
                <br /><li>&#x2022; Discover the best practices and tips for weight loss after 45 and why willpower isn't the answer.</li>
              </ul><br /><br />

              <p className="text-md sm:text-lg lg:text-xl ">
                In addition to all of this, we'll also be having a special treat with our guest stylist for a lot of fun to wrap us up. You are <em>not</em> going to want to miss this. Space is limited so grab your spot right now while they last!
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#made4more"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-s3 px-5 py-3 text-base font-medium text-white hover:bg-s3"
                >
                  I'm Made for More.
                </a>
              </div>
              {/* <div className="ml-4 rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-s3 hover:bg-gray-50"
                >
                  Talk to us <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote className="relative rounded-lg bg-white shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                {/* <img
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                  alt="Workcation"
                  className="h-8"
                /> */}
                <div className="relative mt-8 text-md sm:text-lg lg:text-xl font-medium text-gray-700">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-s6  ">
                  Working with Susie has changed all aspects of my life. I have more fulfillment at work, more love and connection in my relationships, and more peace in my body image and in showing up as my true and full self!
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-s2 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                <span className="relative flex-none rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                  <img
                    className="h-12 w-12 rounded-full bg-s8 sm:h-20 sm:w-20"
                    src={tp}
                    alt=""
                  />
                </span>
                <span className="relative ml-4 font-semibold leading-6 text-s8 sm:ml-24 sm:pl-1">
                  <span className="font-semibold text-s7 sm:inline">Lyndsie Wilson</span>{' '}
                  {/* <span className="sm:inline">CEO at Workcation</span> */}
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>


    <div className="isolate overflow-hidden " id="made4more">
      <div className="flow-root bg-s7 pt-20 pb-16 sm:pt-20 lg:pb-0" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10 ">
            
            <p className="mx-auto mt-4 max-w-2xl text-center text-2xl sm:text-3xl leading-8 text-s6 pb-16">
              For you, right now, I'll take my $3,000 coaching program and my $3,000 Made for More Retreat and combine it for an <em>unbelievable</em> price. $3,000 for everything.
            </p>
            <h2 className="mx-auto max-w-4xl text-center text-4xl sm:text-5xl font-bold tracking-tight text-s6 pb-3">
              Made for More.
            </h2>
            <h2 className="mx-auto max-w-4xl text-center text-3xl sm:text-4xl font-bold tracking-tight text-s6 pb-6">
              ...for so much <em>less</em>
            </h2>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute left-1/2 -bottom-48 h-[64rem] translate-y-1/2 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:bottom-auto lg:-top-48 lg:translate-y-0"
            >
              <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#E3D5D2" />
                  <stop offset={1} stopColor="#CB627E" />
                </radialGradient>
              </defs>
            </svg>
            <div
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
              aria-hidden="true"
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                    : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                  'relative rounded-2xl'
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-gray-900' : 'text-white',
                      'text-sm font-semibold leading-6'
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">
                      <p
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white',
                          'text-4xl font-bold tracking-tight'
                        )}
                      >
                        {tier.price[frequency.value]}
                      </p>
                      <div className="text-sm leading-5">
                        <p className={tier.featured ? 'text-gray-900' : 'text-white'}><del>{tier.strikePrice}</del></p>
                        <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                      </div>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.featured
                          ? 'bg-s2 shadow-sm hover:bg-s2 focus-visible:outline-s2'
                          : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                        'rounded-md py-2 px-3 text-center text-sm leading-6 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                      )}
                    >
                      Buy this program
                    </a>
                  </div>
                  <div className="mt-8 flow-root sm:mt-10">
                    <ul
                      role="list"
                      className={classNames(
                        tier.featured
                          ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                          : 'divide-white/5 border-white/5 text-white',
                        '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0'
                      )}
                    >
                      {tier.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature} className="flex gap-x-3 py-2">
                          <CheckIcon
                            className={classNames(
                              tier.featured ? 'text-indigo-600' : 'text-gray-500',
                              'h-6 w-5 flex-none'
                            )}
                            aria-hidden="true"
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative bg-s7 lg:pt-10">
        <div className="mx-auto max-w-7xl py-0 px-6 sm:py-0 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          You will thank yourself for investing in YOU.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="https://checkout.square.site/merchant/FEZJDKK7MV8SC/checkout/EKJVMIKLGFO5V7BDREPBM5KZ"
            className="rounded-md bg-s2 px-3.5 py-1.5 text-base font-semibold leading-7 text-s7 shadow-sm hover:bg-s2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <em>Let's do this</em>
          </a>
          <Link to="/letstalk" className="text-base font-semibold leading-7 text-gray-900">
            Let's talk <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
          

        </div>
      </div>
    </div>



        </div>
        



      
    )
}

export default Retreat;