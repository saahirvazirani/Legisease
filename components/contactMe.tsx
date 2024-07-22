"use client";
// This is a starter code for a new component. Copy and paste this code into a new file in the components folder.
// Dont forget to import react and anything else you use!!!

import React from "react";
import Link from 'next/link';

//Change the name of the component. Call it in whichever page you desire.
export default function contactMe() {
    return (
        <section
            // Keep this section since it provides basic styling for the component.
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            
            <div className="max-w-screen-md bg-white p-8 rounded shadow-lg mx-auto">
   <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
   <form>
      <div className="mb-4">
         <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
         <input type="text" id="name" name="name" className="border border-gray-400 p-2 w-full rounded" />
      </div>
      <div className="mb-4">
         <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
         <input type="email" id="email" name="email" className="border border-gray-400 p-2 w-full rounded" />
      </div>
      <div className="mb-4">
         <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
         <textarea id="message" name="message" className="border border-gray-400 p-2 w-full rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
   </form>
</div>

        </section>
    );
}