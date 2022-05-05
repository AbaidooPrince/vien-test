import { BoxIconElement } from "boxicons"
import React from "react"
import { Link } from "react-router-dom"

const SideMenu = () => {
    const userData = {
        firstName: 'Alex',
        lastName: 'Assenmecher',
        profile: 'https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg',
        role: 'Home Buyer'
    }
    const menu = [
        {
            name: 'Profile',
            href: '/',
            icon: 'user'
        },
        {
            name: 'My Listing',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Saved Homes',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Saved search',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Messages',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Notifications',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Billing',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Analytics',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Blog',
            href: '/',
            icon: 'user'
        }
    ]
    return (
        <div className="bg-vien-white lg:p-6 p-4 rounded-lg">
            {/* current user  */}
            {userData && <div align="center"  className="">
                <div  className="h-[145px]">

                <div className="">
                    <img className="rounded-full h-20 w-20 object-cover" alt="avatar" src={userData.profile} />
                </div>
                <div className="mt-3">{ userData.firstName } <span>{ userData.lastName }</span>
                </div>
                <div>{ userData.role }</div>
                </div>
                <div className="mt-3">Edit Profile
                    <button></button>
                </div>
            </div>}
             
            {/* menu links  */}
            <div>
                {
                    menu.length && menu.map((item) => 
                    <Link to={'/'}>
                        <hr />
                        <div className="flex p-3 justify-between">
                            <div className="font-light  my-auto hover:font-normal">{ item.name }</div>
                            <div>
                            <box-icon color="grey" name="user"></box-icon>
                            </div>
                        </div>
                    </Link>)
                }

                <hr />
            </div>

            {/* profile url */}
            <div></div>
        </div>
    )
}

export default SideMenu