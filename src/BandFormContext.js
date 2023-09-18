import {createContext, useContext} from "react";

export const BandFormContext = createContext({} | null)

export function useBandFormContext() {
    const context = useContext(BandFormContext)
    if (!context) {
        throw new Error(
            "Component must be rendered as a child of BandForm component"
        )
    }
    return context
}