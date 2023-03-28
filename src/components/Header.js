import AuthNav from "./Auth/AuthNav";


function Header()
{
    return(
        <header>
            <div className="myheader">
            NSCC Full Stack Inc.
            <AuthNav/>
            </div>
        </header>
    )
}


export default Header;