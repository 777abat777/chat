import { useContext } from "react";
import { rootStoreContext } from "./StoreContext";

export const useStore = () => useContext(rootStoreContext);
