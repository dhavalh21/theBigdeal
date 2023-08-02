import storage from "@/helpers/storage";

const { STATUS } = require("@/helpers/constants/constants.helper");
const { createSlice } = require("@reduxjs/toolkit");
const {
  userLogin,
  userVerify,
  userRegister,
  userLogout,
} = require("./user.thunk");

const initialState = {
  userInfo: {},
  successMessage: "",
  errorMessage: "",
  isLoggedIn: false,
  status: STATUS.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //login
      .addCase(userLogin.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
      })
      //verify 
      .addCase(userVerify.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userVerify.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.userInfo = action.payload.data;
        state.successMessage = action.payload.message;

        storage.setUserData(action.payload.data);
        storage.setToken(action.payload.data.accessToken);
        storage.setRefToken(action.payload.data.refreshToken);
      })
      .addCase(userVerify.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.errorMessage = action.payload.message;
      })
      //register
      .addCase(userRegister.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.userInfo = action.payload;
        console.log("fulfilled", state.userInfo, action);
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        console.log("rejected");
      })
      //logout
      .addCase(userLogout.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.userInfo = action.payload;
        console.log("fulfilled logout", state.userInfo, action);
        storage.clear();
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        console.log("rejected");
      });
  },
});
export const { add, setStatus } = userSlice.actions;
export default userSlice.reducer;
