const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const basketSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
});

export default restaurantSlice.reducer;
