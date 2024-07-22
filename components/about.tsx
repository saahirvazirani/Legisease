"use client";

import React from "react";


export default function About() {
    return (
        <section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="aboutPage"
        >
            <h2 className="font-bold">About</h2> <br />
            <p className="mb-3">
                <span className="font-bold">Welcome to Legisease,</span> a platform based in New Jersey. We specialize in <span className="font-bold">policy/legisation education</span>. We are always <span className="font-bold">looking for people who want to assist our cause</span>.
            </p>

            <p>
                Outside of teaching policy, we are <span className="font-bold">passionate about the ethical use of technology</span> and <span className="font-bold">innovation</span>.
            </p>
        </section>
    );
}