import DataActionTypes from "./data-types.js"

export const setData = (data) => ({
    type: DataActionTypes.DISPLAY_DATA,
    payload: data
})