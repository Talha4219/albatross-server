import React from "react";
import {Link }from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import './Hero.css'
import { images } from "../../constants";

const Hero = () => {

  return (
    <section className="container flex flex-col px-5 py-5 mx-auto lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-left font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-justify lg:max-w-[540px]">
        AlbatrossRealtor 
        </h1>
     
        <p className="mt-4 text-justify text-dark-light md:text-xl lg:text-base xl:text-xl lg:text-justify">
        AlbatrossRealtor is a real estate company that provides a wide range of services to buyers, sellers, and investors in Islamabad, Pakistan. We are committed to helping our clients achieve their real estate goals, whether they are looking to buy a new home, sell their current home, or invest in real estate.
        </p>
        <ul className="list-unstyled text-dark-light ">
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Home buying and selling
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Home buying and selling

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Rentals
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Commercial real estate

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Investment properties 

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Land development

              </li><li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Construction management

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Property appraisals

              </li><li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              And more!

              </li>
            </ul>
            <p className="mt-4 text-center text-dark-light md:text-xl lg:text-base xl:text-xl lg:text-justify">
            AlbatrossRealtor is a real estate company that provides innovative and affordable real estate solutions to its customers. The company's target customers are people who want to invest in real estate, build their own homes, or benefit from the China-Pakistan Economic Corridor (CPEC). AlbatrossRealtor' target competitors are other real estate companies in Islamabad that do not provide complete information to customers or work only for commission. AlbatrossRealtor offers a wide range of services, including:
        </p>
        <ul className="list-unstyled text-dark-light ">
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Helping customers buy and sell properties
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Providing advice on real estate investment

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Building innovative homes in low budget
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Helping customers get benefits of CPEC

              </li>
            </ul>
            <p className="mt-4 text-justify text-dark-light md:text-xl lg:text-base xl:text-xl lg:text-justify">
            AlbatrossRealtor is a registered realtor with the Islamabad Estate Agent Association. The company has a strong track record of success and has helped many customers achieve their real estate goals. Here are some of the key features of AlbatrossRealtor:
        </p>

        <ul className="list-unstyled text-dark-light ">
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Lowest possible price
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Best available selection
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Utmost convenience
              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Excellence and exceeding expectations

              </li>
              <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Understanding of markets and clients' needs

              </li>  <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Relationship-building

              </li>  <li className="block   font-semibold text-blueGray-600 hover:text-blueGray-800 text-black  mt-5 space-y-4 md:text-base">
              Integrity, agility, courage, respect, and trust

              </li>
            </ul>
            
            <p className="mt-4 w-full text-justify text-dark-light md:text-xl lg:text-base xl:text-xl lg:text-justify">
            AlbatrossRealtor is committed to providing its customers with the best possible real estate experience. The company's mission is to offer customers the lowest possible prices, the best available selection, and the utmost convenience. AlbatrossRealtor also strives to understand its markets and its clients' needs. The company believes that relationships are everything, and it connects people to their homes and to their communities. AlbatrossRealtor delivers only excellence and aims to exceed expectations in everything it does. If you are looking for a real estate company that can help you achieve your real estate goals, then AlbatrossRealtor is the company for you.
        </p>
           
            
      </div>
      <div className="hidden lg:block lg:1/2 ">
        <img
          className="w-[600px] h-[400px] border-gray-700 border-2 rounded-sm ml-9 "
          src={images.about}
          alt="users are reading articles"
        />
        
      </div>
    </section>
  );
};

export default Hero;
