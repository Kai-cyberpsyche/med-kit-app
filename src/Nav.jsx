import picture from "./assets/settings-button.svg"
import Button from './Button.jsx'


function Nav(){

    return(
        <div id="nav">
            <Button pic={picture} id="settings-button"/>
        </div>
    );

}
export default Nav
