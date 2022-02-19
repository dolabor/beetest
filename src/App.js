import AppHeader from "./components/AppHeader/AppHeader";
import AppHeaderRightPart from "./components/AppHeaderRightPart/AppHeaderRightPart";
import "./App.css";
import AppHeaderProfile from "./components/AppHeaderProfile/AppHeaderProfile";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <div className={'App_RightPart'}>
                <AppHeaderRightPart/>
                <AppHeaderProfile/>
            </div>
        </div>
    );
}

export default App;
