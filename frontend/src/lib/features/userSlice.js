import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadInitialState = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    };
  }
};

// Save state to localStorage
const saveState = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(state));
  }
};

// Clear state from localStorage
const clearState = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: loadInitialState(),
  reducers: {
    setCredentials: (state, action) => {
      console.log("action", action.payload);
      state.user = action.payload.username;
      state.token = action.payload.accessToken;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      saveState(state);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      clearState();
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
