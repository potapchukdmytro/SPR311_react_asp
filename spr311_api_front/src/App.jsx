import './App.css'
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaulLayout.jsx";
import CategoriesHomePage from "./pages/categories/CategoriesHomePage.jsx";
import ProductsHomePage from "./pages/products/ProductsHomePage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useAction} from "./hooks/useAction.js";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import { getTokenByCookie } from './store/reducers/accountReducer/actions.js';

function App() {
    const {isAuth} = useSelector(state => state.account);
    const {loginByToken, refreshTokens} = useAction();

    useEffect(() => {
        if(!isAuth) {
            const token = getTokenByCookie();
            
            if (token) {
                loginByToken(token);
            } else {
                refreshTokens();
            }
        }
    })

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<CategoriesHomePage/>}/>
                <Route path="products" element={<ProductsHomePage category={null}/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
        </Routes>
    )
}

export default App
