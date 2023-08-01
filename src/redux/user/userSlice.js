import storage from "@/helpers/storage";

const { STATUS } = require("@/helpers/constants/constants.helper");
const { createSlice } = require("@reduxjs/toolkit");
const { userLogin, userVerify } = require("./user.thunk");

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
      .addCase(userLogin.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
      })
      .addCase(userVerify.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(userVerify.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.userInfo = action.payload.data;
        state.successMessage = action.payload.message;
        storage.setUserData(action.payload.data);
        storage.setToken(action.payload.accessToken);
        storage.setRefToken(action.payload.refreshToken);
      })
      .addCase(userVerify.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.errorMessage = action.payload.message;
      });
  },
});
export const { add, setStatus } = userSlice.actions;
export default userSlice.reducer;
