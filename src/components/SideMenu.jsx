
import React from "react"
import { Link } from "react-router-dom"

const SideMenu = () => {
    const profile='https://www.udwell.com/p.'
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
            icon: 'list-ul'
        },
        {
            name: 'Saved Homes',
            href: '/',
            icon: 'home-heart'
        },
        {
            name: 'Saved search',
            href: '/',
            icon: 'file-find'
        },
        {
            name: 'Messages',
            href: '/',
            icon: 'chat'
        },
        {
            name: 'Notifications',
            href: '/',
            icon: 'bell'
        },
        {
            name: 'Billing',
            href: '/',
            icon: 'user'
        },
        {
            name: 'Analytics',
            href: '/',
            icon: 'pie-chart-alt'
        },
        {
            name: 'Blog',
            href: '/',
            icon: 'news'
        }
    ]
    return (
        <div className="bg-vien-white lg:p-6 p-4 rounded-lg">
            {/* current user  */}
            {userData && <div align="center"  className="mb-6">
                <div  className="h-[145px]">
                <div className="relative">
                    <img className="rounded-full h-20 w-20 object-cover" alt="avatar" src={userData.profile} />
                    <div className="absolute bottom-0 h-5 w-5 right-24 rounded-full grid bg-vien-primary">
                        <div className="place-self-center">
                            <div className="">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: ''}}><path d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"></path><path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"></path></svg> */}
                            </div>
                            {/* <box-icon color="white" size="4" name="camera"></box-icon> */}
                        </div>
                    </div>
                </div>
                <div className="mt-3 font-medium">{ userData.firstName } <span>{ userData.lastName }</span>
                </div>
                <div className="text-gray-500">{ userData.role }</div>
                </div>
                <div className="mt-3">
                    <button className="bg-vien-primary p-1 w-32 h-9 text-white text-sm hover:bg-green-800 rounded-lg">Edit Profile</button>
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
                            <box-icon color="grey" name={item.icon}></box-icon>
                            </div>
                        </div>
                    </Link>)
                }

                <hr />
            </div>

            {/* profile url */}
            <div className="my-3">
            <label className="text-sm mb-1">Profile link</label>
            <div class="relative w-full rounded-lg">
            <input type="search" id="search-dropdown" value={profile} class="block p-2.5 w-full z-20 h-12 text-sm text-blue-700  rounded-l-lg rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
            <button type="submit" class="absolute top-0 h-12 right-0 p-2.5 px-3 text-sm font-medium border-l rounded-r-lg bg-vien-white text-white focus:ring-1 border hover:bg-gray-200 border-gray-300 focus:outline-none focus:ring-blue-300">
            <box-icon color="grey" name='copy'></box-icon>
                </button>
        </div>
            </div>
        </div>
    )
}

export default SideMenu