import { createSelector } from "reselect"

const state = state => state

export const SelectData = createSelector(
    [state],
    (state) => state.data
)