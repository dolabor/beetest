import AppHeader from "../AppHeader/AppHeader";
import AppHeaderRightPart from "../AppHeaderRightPart/AppHeaderRightPart";
import "./AppContentHeader.css";
import AppHeaderProfile from "../AppHeaderProfile/AppHeaderProfile";

function AppContentHeader() {
    return (
        <div className="AppContentHeader">
            <AppHeader/>
            <div className={'AppContentHeader_RightPart'}>
                <AppHeaderRightPart/>
                <AppHeaderProfile/>
            </div>
        </div>
    );
}


export default AppContentHeader;
