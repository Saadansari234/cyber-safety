import React from 'react'
import BasicLayout from '../components/BasicLayout'
import Button from '../common/Button'
import useMediaQuery from '../utils/useMediaQuery'
const CreateNamePage = () => {
  const matches = useMediaQuery("(max-width:480px)")

  const menu = [
    { title: "Menu", icon: "./assets/icon/menu.svg" },
    { title: "Exit", icon: "./assets/icon/exit.svg" },
    { title: "Mute", icon: "./assets/icon/mute.svg" }
  ]
  const footer = {
    isEnable: true,
  }
  return (
    <BasicLayout
      image={"url(./assets/bg/common-bg.jpg)"}
      menus={menu}
      pathto={["Cyber safety", "Introduction"]}
      footer={footer}
    >
      <div className='Create-name'>
        <div className='content'>
          <div className='inner-content'>

            <img src={matches ? './assets/bg/introduction-panel-mobile.svg' : './assets/bg/introduction-panel.svg'} className='content-img' />
            <div className='content-body'>
              <p>In this course, we'd like to use your name (you can make up a name if you prefer).</p>
              <input type="text" id="name-input" placeholder="Please enter your name here" />

              <Button name={"Submit"} />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default CreateNamePage
