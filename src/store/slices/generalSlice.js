import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        loaded: 0,
        signedIn: false,
        accessToken: "",
        stacc:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
        sync:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
        id:{
            daily: 0,
            weekly: 0,
            monthly: 0,
        },
    },
    reducers: {
        changeLoaded(state, action){
            state.loaded = action.payload;
        },
        changeSignInState(state, action){
            state.signedIn = action.payload;
            console.log(action.payload, "signinstate")
        },
        changeStaccLoaded(state, action){
            state["stacc"][action.payload.list] = action.payload.value;
        },
        changeStaccSyncStat(state, action){
            state["sync"][action.payload.list] = action.payload.value;
        },
        setIds(state, action){
                console.log(action.payload)
                state.id = action.payload
        },
        resetStacc(state){
            Object.keys(state["stacc"]).map(list => {
                state["stacc"][list] = 0
            })
        },
        setAccessToken(state, action){
            console.log(action.payload)
            state.accessToken = action.payload
        }
    }
})

export const { changeLoaded, changeSignInState, changeStaccLoaded, changeStaccSyncStat, resetStacc, setAccessToken, setIds } = generalSlice.actions;
export default generalSlice.reducer;