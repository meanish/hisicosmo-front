const { createSlice } = require("@reduxjs/toolkit")

const initialState = {

    userData: {
        id: "",
        username: "",
        email: " ",
        role: "",
        dob: "",
        address: "",
        phoneNumber: "",
        featured_image: ""
    },
    token: null

}

const manageUserData = createSlice({
    name: "userData",
    initialState,
    reducers: {
        storeUserData: (state, action) => {
            const data = action.payload
            if (data) {
                state.userData = {
                    id: data?.id || "",
                    username: data?.username || "",
                    email: data?.email || "",
                    role: data?.role || "",
                    dob: data?.dob || "",
                    address: data?.address || "",
                    phoneNumber: data?.phoneNumber || "",
                    featured_image: data?.featured_image || null,
                }
            }
        },
        updateInputField: (state, action) => {

            const { name, value } = action.payload

            state.userData = { ...state.userData, [name]: value }
        },
        storeToken: (state, action) => {
            const { token } = action.payload
            return {
                ...state,
                token: token,
            }
        }
    }
})

export const { storeUserData, updateInputField, storeToken } = manageUserData.actions
export default manageUserData