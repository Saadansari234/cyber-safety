
import BasicLayout from '../components/BasicLayout'
import Button from '../common/Button'
const Home = () => {
    const menu = [
        { title: "Exit", icon: "./assets/icon/exit.svg" },
        { title: "Mute", icon: "./assets/icon/mute.svg" }
    ]
    const footer= {
        isEnable: false,
    }
    return (
        <BasicLayout
            image={"url(./assets/bg/home-splash-bg.jpg)"}
            menus={menu}
            pathto={["Cyber safety","Cyber safety"]}
            footer={footer}
        >
            <div className='home-content'>
                <div className="content" >
                    <div style={{ backgroundImage: "url(./assets/bg/home-splash.svg)" }} className='content-circle'>
                        <div>
                            <h5>Welcome to</h5>
                            <h1>Cyber Safety</h1>
                            <p>Click <strong>Start</strong> when you are ready to begin.</p>
                            <Button name={"Start"}/>
                        </div>
                    </div>

                </div>
            </div>

        </BasicLayout>


    )
}

export default Home
