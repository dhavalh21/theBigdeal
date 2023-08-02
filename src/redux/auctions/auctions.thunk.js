import { ERROR, SUCCESS } from "@/helpers/constants/labels.constants";
import { upcomingAuctionHttp } from "./auctions/auctions.httpCalls";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const upcomingAuction = createAsyncThunk(
  "auction/upcomingAuction",
  async (params, cb) => {
    try {
      const res = await upcomingAuctionHttp();
      if (res.success) {
        cb(SUCCESS, res);
      } else {
        cb(ERROR, res);
      }
      return res;
    } catch (error) {
      return error;
    }
  }
);
