export const handlePending = state => {
  state.isLoading = true;
};

export const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

export const handleGetAllContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.unshift(action.payload);
};

export const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

export const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = false;
};

export const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
