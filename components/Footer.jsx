import Image from "next/image";
import Logo from "../public/Logo.png"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socials = [
  {logo: FaFacebookF ,link: ''},
  {logo: FaInstagram ,link: ''},
  {logo: FaXTwitter ,link: ''},
]
const Footer = () => {
  return (
    <div className='bg-[#202430] text-white pt-10'>
      <div className="container mx-auto">
      <div className="flex flex-wrap xl:mx-auto">
        <div className='px-4 basis-[100%] order-1 md:basis-[50%] lg:basis-[30%] lg:order-1 space-y-4 pb-[1.5rem]'>
          <Image src={Logo} />
          <p className="text-xs md:text-base text-gray-300">
            Great platform for the job seeker that are passionate about startups. Find your dream job easier.
          </p>
        </div>

        <div className='px-4 basis-[50%] order-2 md:basis-[50%] md:order-3 lg:basis-[20%] lg:order-2 space-y-2 pb-[1.5rem]'>
          <h3 className="font-medium text-base">About</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='px-4 basis-[50%] order-3 md:basis-[50%] md:order-4 lg:basis-[20%] lg:order-3 space-y-2 pb-[1.5rem]'>
          <h3 className="font-medium text-base">Resources</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='px-4 basis-[100%] order-4 md:basis-[50%] md:order-2 lg:basis-[30%] lg:order-4 space-y-2 pb-[1.5rem]'>
          <h3 className="font-medium text-base">Get job notifications</h3>

          <p className="text-xs md:text-base text-gray-300">
            The latest job news, articles, sent to your inbox weekly.
          </p>

          <div className="lg:pt-5 w-full">
            <form action="">
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="w-full sm:w-[70%]">
                  <input className="bg-white w-full py-2 px-3" type="email" placeholder="Email address" />
                </div>
                <div className=" sm:w-[30%]">
                  <button className="bg-blue-900 text-white py-2 px-3 sm:px-0 sm:w-full"> Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-4 border-t-[2px] border-neutral-600 py-4 mt-6">
        <div className="flex justify-between items-center">
          <h4 className="text-sm md:text-base text-gray-300">All rights reserved</h4>
          <div className="flex gap-2 md:gap-5">
            {socials.map((social, i) => {
              return(
                <div className="bg-gray-600 h-7 w-7 rounded-full flex justify-center items-center" key={i}><social.logo/></div>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer