import Navbar from "@/layouts/navbat";
import { User } from "@/types";
import React from "react";

const EtherealLandingPage = ({ auth }: { auth: User }) => {
    return (
        <div className="font-sans text-[]">
            <Navbar auth={auth} />
            <section
                className="hero-section min-h-screen pt-20 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')",
                }}
            >
                <div className="min-h-screen flex items-center bg-gradient-to-r from-[#F5F3F0E6] to-[#F5F3F066]">
                    <div className="max-w-7xl mx-auto px-6 py-24 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 animate-fade-in">
                                <div className="space-y-4">
                                    <p className="uppercase tracking-widest text-sm text-umber font-sans">
                                        Premium Experience
                                    </p>
                                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-slate">
                                        <span className="block">Timeless</span>
                                        <span className="block font-light">Elegance</span>
                                    </h1>
                                    <div className="h-px w-24 my-6 bg-gradient-to-r from-transparent via-slate/20 to-transparent"></div>
                                    <p className="text-lg text-slate/80 max-w-md">
                                        Where heritage craftsmanship meets contemporary design. Each
                                        piece tells a story of meticulous attention to detail.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a
                                        href="#"
                                        className="px-8 py-3 bg-orange-500 text-pearl font-sans text-sm tracking-wider uppercase hover:bg-umber transition-colors duration-300 text-center"
                                    >
                                        View Collection
                                    </a>
                                    <a
                                        href="#"
                                        className="px-8 py-3 border border-orange-500 text-slate font-sans text-sm tracking-wider uppercase hover:bg-slate/5 transition-colors duration-300 text-center"
                                    >
                                        Our Process
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="product-image overflow-hidden aspect-[4/5] bg-pearl/50 border border-taupe/20 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        alt="Premium product showcase"
                                        className="object-cover object-center w-full h-full"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 text-slate shadow-lg w-48 border border-taupe/20">
                                    <p className="font-display text-xl">Handcrafted</p>
                                    <p className="font-sans text-sm mt-1 text-slate/70">Since 1987</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Indicators */}
            <div className="bg-pearl py-12 border-t border-taupe/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Natural Materials", value: "100%" },
                            { label: "Production Steps", value: "24" },
                            { label: "Warranty", value: "5Y" },
                            { label: "Dedication", value: "∞" },
                        ].map(({ label, value }) => (
                            <div key={label} className="space-y-2">
                                <p className="font-display text-3xl text-accent-dark">{value}</p>
                                <p className="font-sans uppercase text-xs tracking-widest text-slate/70">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EtherealLandingPage;
