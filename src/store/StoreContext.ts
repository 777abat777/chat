import { createContext } from "react";
import { Store } from "./Store";

export const rootStoreContext = createContext({
   store: new Store()
});
