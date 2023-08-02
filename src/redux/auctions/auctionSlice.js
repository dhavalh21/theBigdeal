import storage from "@/helpers/storage";
import { upcomingAuction } from "./auctions.thunk";

const { STATUS } = require("@/helpers/constants/constants.helper");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  auctionInfo: {},
  successMessage: "",
  errorMessage: "",
  isLoggedIn: false,
  status: STATUS.IDLE,
};

const auctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(upcomingAuction.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(upcomingAuction.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
      })
      .addCase(upcomingAuction.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
      });
  },
});
export const { add, setStatus } = auctionSlice.actions;
export default auctionSlice.reducer;
