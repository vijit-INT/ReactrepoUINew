import { configureStore } from "@reduxjs/toolkit";
import Doc from "./Document";
import customerSlice from "./CustomerDetails";
import Loader from "./Loader";
import employmentFinancialDetailsSlice from "./EmploymentFinancialDetails";

const store = configureStore({
  reducer: {
    dState: Doc.reducer,
    load: Loader.reducer,
    customer: customerSlice.reducer,
    employee: employmentFinancialDetailsSlice.reducer,
  },
});

export default store;
