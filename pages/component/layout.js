import TopMenu from "./TopMenu"
import SideBarMenu from "./SideBarMenu"


function Layout(props) {
    return (

        <div className='container' dir={"rtl"}>
            <TopMenu />
            <SideBarMenu />


            {props.children}

        </div>

    )
}

export default Layout