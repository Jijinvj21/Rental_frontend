import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { dataManagementSlice } from "./features/dataManagementSlice";
import { adminAuthSlice } from "./features/adminAuthSlice";
import { vendorAuthSlice } from "./features/vendorAuthSlice";
import { userAuthSlice } from "./features/userAuthSlice";
import { userDataSlice } from "./features/userDateSlice";

const reducer = combineReducers({
  dataManagement: dataManagementSlice.reducer,
  adminAuthSlice: adminAuthSlice.reducer,
  vendorAuthSlice: vendorAuthSlice.reducer,
  userAuthSlice: userAuthSlice.reducer,
  userDataSlice: userDataSlice.reducer,
});

export default configureStore({
  reducer: reducer,
});
