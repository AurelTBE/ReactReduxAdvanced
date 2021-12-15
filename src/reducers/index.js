import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ActionInfoReducer from "./action-info"
import RessouceReducer from "./ressouces";
const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressource: RessouceReducer
});

export default rootReducer;
