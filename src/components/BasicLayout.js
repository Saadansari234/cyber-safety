
import { StraightIcon } from '../common/Icons'
import Path from "../common/Path"
import useMediaQuery from '../utils/useMediaQuery'
import { WideIconleft } from '../common/Icons'
import { WideIconright } from '../common/Icons'
import { useNavigate } from 'react-router-dom'
const BasicLayout = ({ children, image, menus, pathto, footer }) => {
    const navigate=useNavigate()
    const matches = useMediaQuery("(max-width:768px)")
    return (
        <div className="container-home" style={{ backgroundImage: image }}>

            <header>
                {
                    matches ? (
                        <div className="heading-left">
                            <StraightIcon onClick={()=>navigate('/menupage')}  title={"Menu"} icon={"./assets/icon/hamberger.svg"} />
                        </div>
                    ) : (
                        <div className="heading-left">
                            <div className="logo">Your logo</div>
                            {pathto ?
                                pathto.map((item, index) => {
                                    return (<Path title={item} key={index} />)
                                }) : null
                            }
                        </div>
                    )
                }

                <div className="controls">
                    {menus ?
                        menus.map((item, index) => {
                            return (<StraightIcon key={index} title={item.title} icon={item.icon} onClick={item.onClick} />)
                        }) : null
                    }
                </div>
            </header>
            {children}
            {
                footer.isEnable ? (
                    <footer>
                        <WideIconleft title={"Back"} icon={"./assets/icon/back.svg"} onClick={footer.backClick} />
                        <WideIconright title={"Next"} icon={"./assets/icon/next.svg"} onClick={footer.nextClick} />
                    </footer>
                ) : null
            }

        </div>
    )
}

export default BasicLayout
