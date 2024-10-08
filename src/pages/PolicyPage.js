import React from 'react'
import BasicLayout from '../components/BasicLayout'
import { useNavigate } from 'react-router-dom'
const PolicyPage = () => {

    const navigate=useNavigate()
    const menu = [
        { title: "Menu", icon: "./assets/icon/menu.svg",  onClick:()=>navigate("/menupage") },
        { title: "Exit", icon: "./assets/icon/exit.svg",  onClick:()=>navigate("/introvideo") },
        { title: "Mute", icon: "./assets/icon/mute.svg" }
    ]
    const footer = {
        isEnable: true,
        backClick:()=>navigate("/introvideo")
    }

    return (
        <BasicLayout
            image={"url(./assets/bg/common-bg.jpg)"}
            menus={menu}
            pathto={["Cyber safety", "Your Policy"]}
            footer={footer}
        >
            <div className='policy-page'>
                <div className='content'>
                    <div className='inner-content'>
                        <div className='row  main' >
                            <div className='col-12  col-lg-6 text-content'>
                                <div>
                                    <img alt='zebra line' src='./assets/utils/loader-zebra-white.svg' />
                                </div>
                                <div>
                                    Our Policy sets out responsibilities and standards to help keep our data safe.
                                </div>
                                <div>
                                    If you are not yet familiar with it, select the Policy image to take a look, otherwise select Next to continue
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 img-cotent'>
                                <div className='policy-img'>
                                    <img alt='poicy' src='./assets/utils/Policy-pic.png'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </BasicLayout>
    )

}

export default PolicyPage
