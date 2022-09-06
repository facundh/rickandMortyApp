import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice ({
    name:"character",
    initialState:{
        page: 0,
        characters: [],
        isLoading: false,
        prevPage:1,
        favorites: [],
        active:null, 
        
        
    },
    reducers:{
        startLoadingCharacters: (state) => {
            state.isLoading = true
        },
        setCharacters: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.prevPage = action.payload.prevPage;
            state.characters = action.payload.characters;
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            
        },
        setActiveFavorite: (state, action) => {
            state.active = action.payload;
        },
        setFavorites:(state, action) => {
            state.favorites = action.payload;
        },
        clearCharactersLogout: (state ) => {
            state.characters = [];
            state.favorites = [];
            state.active = null;
        }
    }
})

export const { startLoadingCharacters, setCharacters, addFavorite, setActiveFavorite, setFavorites, savingNewFavorite, clearCharactersLogout } = characterSlice.actions