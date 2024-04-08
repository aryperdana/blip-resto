import React from 'react'
import Link from "next/link";
import Image from "next/image";
import iconHomeLight from "../../public/image/iconHomeLight.svg";
import iconHome from "../../public/image/iconHome.svg";
import logo from "../../public/image/logo.svg";
import iconDash from "../../public/image/iconDashboard.svg";
import iconDashLight from "../../public/image/iconDashboardLight.svg";
import iconSettings from "../../public/image/iconSettings.svg";
import iconSettingsLight from '../../public/image/iconSettingsLight.svg'
import iconLogout from "../../public/image/iconLogout.svg";


interface SidebarProps {
    menu: string
  }

const SidebarComp: React.FC<SidebarProps> = ({ menu }) => {
    
  return (
    <div className="flex flex-col justify-between min-h-screen w-104 bg-sideColor items-center rounded-r-2xl pt-4 pb-10">
        <div className="flex flex-col items-center rounded-r-2xl pt-4 gap-5">
            <div className="flex bg-custom-yellow-200 w-14 h-14 justify-center items-center rounded-lg">
                <Image src={logo} alt="logo" />
            </div>
            {menu === 'home' ? 
                <Link href='/' className="flex bg-custom-yellow-100 w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconHomeLight} alt="iconHomeLight" />
                </Link>
                :  <Link href='/' className="flex w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconHome} alt="iconHome" />
                </Link>
            }
           
           {menu === 'dashboard' ? 
                <Link href='/dashboard' className="flex bg-custom-yellow-100 w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconDashLight} alt="iconDashLight" />
                </Link>
                : <Link href='/dashboard' className="flex w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconDash} alt="iconDash" />
                </Link>
            }

            {menu === 'settings' ? 
                <Link href='/settings' className="flex bg-custom-yellow-100 w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconSettingsLight} alt="iconSettingsLight" />
                </Link>
                :  <Link href='/settings' className="flex w-14 h-14 justify-center items-center rounded-lg">
                    <Image src={iconSettings} alt="iconSettings" />
                </Link>
            }
           
           
        </div>
        <div>
            <Image src={iconLogout} alt="iconLogout" />
        </div>
    </div>
  )
}

export default SidebarComp