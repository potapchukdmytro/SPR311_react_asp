import {useSelector} from "react-redux";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const ProfilePage = () => {
    const navigate = useNavigate();
    const {user, isAuth} = useSelector(state => state.account);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);

    return (
        <Box>
            {
                user &&
                <>
                    <Typography variant="h3" color="textSecondary" component="div">
                        Id: {user.userId}
                    </Typography>
                    <Typography variant="h3" color="textSecondary" component="div">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="h3" color="textSecondary" component="div">
                        UserName: {user.userName}
                    </Typography>
                </>
            }
        </Box>
    )
};

export default ProfilePage;