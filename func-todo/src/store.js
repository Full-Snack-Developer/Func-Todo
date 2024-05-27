import { createStore } from "redux";
import rootReducer from "./reducer";
import { apiMiddleware } from "./middleware/customMiddle";

const store = createStore(rootReducer, apiMiddleware(apiMiddleware));
export default store;
