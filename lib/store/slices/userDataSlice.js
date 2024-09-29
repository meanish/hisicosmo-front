const { createSlice } = require("@reduxjs/toolkit")

const initialState = {

    userData: {
        id: "",
        username: "",
        email: " ",
        role: "",
        password: '',
        dob: "",
        address: "",
        phoneNumber: "",
        featured_image: ""
    }

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
                    password: data?.password || "",
                    dob: data?.dob || "",
                    address: data?.address || "",
                    phoneNumber: data?.phoneNumber || "",
                    featured_image: data?.featured_image || "",
                }
            }
        },
        updateInputField: (state, action) => {

            const { name, value } = action.payload
            console.log(name, value, "name-value in store");

            state.userData = { ...state.userData, [name]: value }
        }
    }
})

export const { storeUserData, updateInputField } = manageUserData.actions
export default manageUserData