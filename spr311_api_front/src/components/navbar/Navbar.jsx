import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAction} from "../../hooks/useAction.js";

const Navbar = () => {
    const {isAuth, user} = useSelector(state => state.account);
    const {logout} = useAction();

    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Box display="flex" minHeight="75px" alignItems="center">
                <Box display="flex" flexGrow={1} justifyContent="start">
                    <Link to="/">
                        <Typography variant="h6" component="div" sx={{mx: 5}}>
                            Категорії
                        </Typography>
                    </Link>
                    <Link to="/products">
                        <Typography variant="h6" component="div" sx={{mx: 5}}>
                            Товари
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    {isAuth ?
                        <>
                            <Link to="/profile">
                                <Button color="inherit" sx={{mx: 5}}>{user.email}</Button>
                            </Link>
                            <Button onClick={() => logout()} color="inherit" sx={{mx: 5}}>Logout</Button>
                        </>
                        :
                        <Link to="/login">
                            <Button color="inherit" sx={{mx: 5}}>Login</Button>
                        </Link>}
                </Box>
            </Box>
        </AppBar>
    </Box>)
}

export default Navbar