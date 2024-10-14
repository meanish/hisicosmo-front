import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginactive: false
};

const manageLoginStatus = createSlice({
    name: 'LoginFormStatus',
    initialState,
    reducers: {

        activeStatusLogin: (state, action) => {
            state.loginactive = true

        },
        closeLogintab: (state, action) => {
            state.loginactive = false
        }

    },
});

export const { activeStatusLogin, closeLogintab } = manageLoginStatus.actions;
export default manageLoginStatus;
