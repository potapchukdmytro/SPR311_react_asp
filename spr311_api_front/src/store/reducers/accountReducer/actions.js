import {jwtDecode} from "jwt-decode";
import { http } from "../../../http_common";

export const login = (credentials) => async (dispatch) => {
    const url = "account/login";
    const response = await http.post(url, credentials);
    const {data} = response;
    const {payload} = data;
    const {accessToken, refreshToken} = payload;
    localStorage.setItem("refresh", refreshToken);

    dispatch(loginByToken(accessToken));
}

export const refreshTokens = () => async (dispatch) => {
    const model = {
        accessToken: localStorage.getItem("auth"),
        refreshToken: localStorage.getItem("refresh")
    }

    if(model.accessToken && model.refreshToken) {
        const url = "account/refresh";
        const response = await http.post(url, model);
        const {data} = response;
        const {payload} = data;
        const {accessToken, refreshToken} = payload;
        localStorage.setItem("refresh", refreshToken);
    
        dispatch(loginByToken(accessToken))
    }
}

export const getTokenByCookie = () => {
    const cookie = document.cookie.split("; ");
    
    for (const item of cookie) {
        const data = item.split("=");
        if(data[0] === "auth") {
            return data[1];
        }
    }

    return null;
}

export const loginByToken = (token) => {
    localStorage.setItem("auth", token);
    document.cookie = `auth=${token};path=/;`;
    const decodedToken = jwtDecode(token);
    delete decodedToken.aud;
    delete decodedToken.iss;
    delete decodedToken.exp;
    delete decodedToken.jti;

    return {type: "LOGIN", payload: decodedToken};
}

export const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("refresh");
    document.cookie = "auth=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    return {type: "LOGOUT"};
}