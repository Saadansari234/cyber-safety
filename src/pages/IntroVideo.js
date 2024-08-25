
import BasicLayout from '../components/BasicLayout'
import VideoPlayer from '../components/video content/VideoPlayer'
import { useNavigate } from 'react-router-dom'
const IntroVideo = () => {
    const navigate=useNavigate()
    const menu = [
        { title: "Menu", icon: "./assets/icon/menu.svg" ,  onClick:()=>navigate("/menupage") },
        { title: "Exit", icon: "./assets/icon/exit.svg", onClick:()=>navigate("/createname") },
        { title: "Mute", icon: "./assets/icon/mute.svg" }
    ]
    const footer = {
        isEnable: true,
        nextClick: ()=>navigate("/policypage"),
        backClick:()=>navigate("/createname")
    }
    return (
        <BasicLayout
            image={"url(./assets/bg/common-bg.jpg)"}
            menus={menu}
            pathto={["Cyber safety", "Introduction to Cyber Safety"]}
            footer={footer}
        >
            <div className='intro-video'>
                <div className='content'>
                    <div className='inner-content'>
                        <div className='video-content'>
                            <VideoPlayer />
                        </div>
                        <div className='text-content'>
                            <div class="video-controls">
                                <div className='d-flex align-items-center'>
                                    <button class="play-btn">▶</button>
                                    <div class="volume-control">
                                        <span>🔊</span>
                                    </div>
                                    <div class="time-display">0:02 / 0:42</div>
                                </div>
                                <div>
                                    <button class="transcript-btn">View Transcript</button>
                                </div>
                                <button class="fullscreen-btn">⤢</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}

export default IntroVideo
