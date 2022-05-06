import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const socialMedia = {
        facebook: '//https://www.facebook.com',
        instagram: '//https://www.instagram.com',
        twitter: '//https://www.twitter.com'
    }
    const location = {
        city: 'Counter Delivery, Carters Beach',
        town: 'Post Center, Westport'
    }
    const about = ['Company', 'Team', 'Careers', 'Blog']
    const support = ['Help Center', 'Cancellation Options', 'Neighborhood Support', 'Trust & Safety']

    return (
        <div className="py-4">
            <div className="grid md:grid-cols-4 gap-4 text-gray-600 text-sm">
                <div className="self-center ">
                    <div className="font-light text-center md:text-right">
                        <div className="py-2.5">
                            {location.city}
                        </div>
                        <div className="py-2.5">
                            {location.town}
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-black text-lg mb-2">
                        About
                    </div>
                    {about.map(link => <Link key={link} to={'/'}>
                        <div className="font-light py-2.5">{link}</div>
                    </Link>)
                    }
                </div>
                <div className="text-center md:text-right">
                    <div className="text-black text-lg mb-2">Support</div>
                    {support.map(link => <Link key={link} to={'/'}><div className="font-light py-2.5">{link}</div></Link>)}
                </div>
                <div className="text-center md:text-right">
                    <div className="text-black text-lg mb-2 ">
                        Address
                    </div>
                    <div className="font-light">
                        <div className="py-2.5">
                            {location.city}
                        </div>
                        <div className="py-2.5">
                            {location.town}
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-4 mb-4">
                        <Link target={'_blank'} to={socialMedia.facebook}>
                            <div className="rounded-full justify-self-start w-12 h-12 grid drop-shadow-xl bg-vien-white">
                                <div className="place-self-center">
                                    <box-icon color="#016450" type='logo' name='facebook'></box-icon>
                                </div>
                            </div>
                        </Link>

                        <Link to={socialMedia.instagram}>
                            <div className="rounded-full mx-4 w-12 h-12 grid drop-shadow-xl bg-vien-primary">
                                <div className="place-self-center">
                                    <box-icon color="white" type='logo' name='instagram'></box-icon>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to={socialMedia.twitter}
                        >
                            <div className="rounded-full w-12 h-12 grid drop-shadow-xl bg-vien-white">
                                <div className="place-self-center">
                                    <box-icon color="#016450" type='logo' name='twitter'></box-icon>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 text-sm">
                <div className="flex justofy-start md:justify-center align-middle">
                    <div>&copy;Udwell, LLC. All rights reserved
                        <span className=" text-gray-400 font-black text-3xl mx-3">.</span>
                    </div>
                    <div>Terms &amp; Conditions
                        <span className=" text-gray-400 font-black text-3xl mx-3">.</span>
                    </div>
                    <div>Privacy Policy
                        <span className=" text-gray-400 font-black text-3xl mx-3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer