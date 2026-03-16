import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    user: any,
    token: string
}

const initialState: InitialState = {
    user: {},
    token: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        }
    }
});

export const { setUser, setToken } = loginSlice.actions
export default loginSlice.reducer;