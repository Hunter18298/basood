
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


export default function Product() {
    // const ref = useRef(null);
    // const { scrollXProgress } = useScroll({ container: ref });
    return (
        <div className=' h-fit gap-4 py-20 bg-bg-product bg-cover'>
            <h1 className=' ml-10 mb-10 text-3xl '>Our Products</h1>
            <div className='grid grid-cols-6 '>
                <div className={"col-span-2 ml-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                    <div>
                        <img className="p-1 rounded-t-lg" src="/bag.png" alt="product image" />
                    </div>
                    <div className="px-2 pb-5">
                        <h5 className="text-lg font-bold tracking-tight text-white">
                            Premium Cat Food
                        </h5>
                        <div className='flex flex-wrap justify-between'>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-sm text-white">
                                    Specialized Cat Food will be available soon on market
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-xs text-white"></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-white pb-2 px-2"></div>
                </div>
                <div className={"col-span-2 ml-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                    <div>
                        <img className="p-1 rounded-t-lg" src="/bag.png" alt="product image" />
                    </div>
                    <div className="px-2 pb-5">
                        <h5 className="text-lg font-bold tracking-tight text-white">
                            Premium Dog Food
                        </h5>
                        <div className='flex flex-wrap justify-between'>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-sm text-white">
                                    Specialized Dog Food will be available soon on market
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <span className="text-xs text-white"></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-white pb-2 px-2"></div>
                </div>

            </div>

        </div>
    );
}






