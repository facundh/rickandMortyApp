import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from "../store/auth/authSlice";
import { startLoadingFavorites } from "../store/principal/thunks";

export const useCheckAuth = () =>{
    const { status } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) =>{
            if(!user) return dispatch(logout());
            const {uid,email, displayName, photoUrl} = user;
            dispatch(login({uid, email, displayName, photoUrl}))
            dispatch(startLoadingFavorites());
        })
    },[])

    return {
        status
    };
}