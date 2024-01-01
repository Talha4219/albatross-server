import React from 'react'
import { Link } from "react-router-dom";
import { images } from "../constants";
import {
    AiOutlineTwitter,
    AiFillYoutube,
    AiFillInstagram,
    AiFillHeart,
  } from "react-icons/ai";
  import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    
      


<footer className="relative pt-8 pb-6 bg-dark-hard bg-blueGray-200">
<hr className="my-6 border-blueGray-300"/>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full px-4 lg:w-6/12">
      <img
            src={images.Logo}
            alt="logo"
            className=" mx-auto w-44 brightness-0 invert md:mx-0 mt--[80px]"
          />
       
        <h5 className="mt-0 mb-2 text-lg text-dark-light text-blueGray-600">
        AlbatrossRealtor is Link real estate company that provides Link wide range of services to buyers, sellers, and investors in Islamabad, Pakistan.
        </h5>
        <ul className="flex items-center justify-center mt-5 space-x-4 text-gray-300 md:justify-start">
            {/* <li>
              <Link to="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </Link>
            </li> */}
            <li>
              <Link to="/">
                <AiFillYoutube className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillInstagram className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaFacebook className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsTelegram className="w-6 h-auto" />
              </Link>
            </li>
          </ul>
        
        
        
      </div>
      <div className="w-full px-4 lg:w-6/12">
        <div className="flex flex-wrap mb-6 items-top">
          <div className="w-full px-4 ml-auto lg:w-4/12">
            <span className="block mb-2 font-semibold uppercase text-dark-light text-blueGray-500">Useful Links</span>
            <ul className="list-unstyled text-dark-light ">
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/about">About Us</Link>
              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/blogs">Articles</Link>

              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
                <Link to="./contact"  >Contact Us</Link>
              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/privacy">Privacy Policy</Link>

              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/term">Terms & Conditions</Link> 

              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <span className="block mb-2 font-semibold uppercase text-blueGray-500 text-dark-light ">Address</span>
            <ul className="list-unstyled text-dark-light ">
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/">541F, Block 'D', Main Boulevard,
                        Wapda Town, Islamabad
                        Islamabad</Link>
              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/"><b>Phone:</b> +923216340539<br/>
                        +92 3330966025</Link>
              </li>
              <li className="block pb-2  font-semibold text-blueGray-600 hover:text-blueGray-800 text-[#959EAD]  mt-5 space-y-4 md:text-base">
              <Link to="/"><b>Email:</b> realtoralbatross@gmail.com</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex-col items-center hidden space-y-4 md:flex md:col-span-12 lg:col-span-10">
          <div className="p-3 text-white rounded-full bg-primary">
            <AiFillHeart className="h-auto w-7" />
          </div>
          <p className="italic font-bold text-dark-light">
            Copyright © 2023. Powered By Agilex Developers.
          </p>
        </div>
    
  </div>
  
  <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div className="elfsight-app-098258f5-e3be-4417-90ed-42ba2a8f92a3" data-elfsight-app-lazy></div>
</footer>
    
  )
  }
export default Footer
 