import React from 'react'
import BasicLayout from '../components/BasicLayout'
import useMediaQuery from '../utils/useMediaQuery'
import CustomeAccordion from '../components/accordion/Accordion'
import { useNavigate } from 'react-router-dom'
const MenuPage = () => {
    
  const navigate=useNavigate()
    const matches = useMediaQuery("(max-width:768px)")
    const menu = [
        { title: "Exit", icon: "./assets/icon/exit.svg", onClick:()=>navigate("/createname") },
        { title: "Mute", icon: "./assets/icon/mute.svg" }
    ]
    const footer = {
        isEnable: false,

    }
    return (
        <BasicLayout
            image={"url(./assets/bg/menu-bg.jpg)"}
            menus={menu}
            pathto={["Cyber safety", "Menu"]}
            footer={footer}
        >

            <div className='Menu-page'>
                <div className='content'>

                    <div className='content-header'>
                        <h1>Menu</h1>
                        <div className='hor-line'></div>
                        <div>select the first topic to begin</div>
                    </div>
                    <div className='bg-area' >
                        <img alt='bg-img' className='bg-img' src={matches ? './assets/bg/menu-panel-mobile.svg' : './assets/bg/menu-panel.svg'} />
                        <div className='content-body'>
                            <CustomeAccordion/>
                        </div>
                    </div>
                </div>
            </div>


        </BasicLayout>
    )
}

export default MenuPage
