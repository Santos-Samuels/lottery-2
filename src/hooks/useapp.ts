import { AppContext } from "@src/context";
import { useContext } from "react";

export const useApp = () => useContext(AppContext)