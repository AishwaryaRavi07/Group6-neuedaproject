
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";
    
    return (
        <AppBar position="static" color="secondary" style={{height:"20vh"}}>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 180 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;