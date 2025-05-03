import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actionsCreator} from "../store/actions/actionsCreator.js";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionsCreator, dispatch);
}
