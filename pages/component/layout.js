import TopMenu from "./TopMenu"
import SideBarMenu from "./SideBarMenu"


function Layout(props) {
    return (
        
        <div className='container' dir={"rtl"}>
            <TopMenu />
            <SideBarMenu />

            <div className='Dashborde'>
                {props.children}
            </div>
        </div>
    
    )
}

export default Layout