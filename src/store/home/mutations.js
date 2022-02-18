export const setItem = (state, value) => {
    console.log("STORE SET ITEM", value)
    state.itemSelected = value

}
export const setOffers = (state, value) => {
    console.log("STORE SET OFFERS", value)
    state.offers = value

}
export const setLoading = (state, value) => {
    state.isLoading = value

}

export const setDatafilter = (state, value) => {

    state.dataFilter = value

}

export const setDetailContainer = (state, value) => {

    state.detailContainer = value
}