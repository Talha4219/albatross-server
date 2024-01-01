import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container grid grid-cols-10 px-5 py-10 mx-auto space-x-16 text-justify gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        {/* <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">Pages</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Articles</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Referral Program</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Design</Link>
            </li>
            <li>
              <Link to="/">Themes</Link>
            </li>
            <li>
              <Link to="/">Illustrations</Link>
            </li>
            <li>
              <Link to="/">UI Kit</Link>
            </li>
          </ul>
        </div> */}
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/term">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">541F, Block 'D', Main Boulevard,
Wapda Town, Islamabad
Islamabad</Link>
            </li>
            <li>
              <Link to="/"><b>Phone:</b> +923216340539<br/>
                        +92 3330966025</Link>
            </li>
            <li>
              <Link to="/"><b>Email:</b> realtoralbatross@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="mx-auto brightness-0 invert md:mx-0 mt--[80px]"
          />
          <p className="mt-4 text-sm text-center text-dark-light md:text-left md:text-base lg:text-sm">
          AlbatrossRealtor is Link real estate company that provides Link wide range of services to buyers, sellers, and investors in Islamabad, Pakistan.
          </p>
          <ul className="flex items-center justify-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <Link to="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </Link>
            </li>
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
        <div className="flex-col items-center hidden space-y-4 md:flex md:col-span-12 lg:col-span-10">
          <div className="p-3 text-white rounded-full bg-primary">
            <AiFillHeart className="h-auto w-7" />
          </div>
          <p className="italic font-bold text-dark-light">
            Copyright © 2023. Powered By Agilex Developers.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
