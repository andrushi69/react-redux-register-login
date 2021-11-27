 const getIsLoggedIn = state => state.auth.isLoggedIn;
 const getUsername = state => state.auth.user.name;
const getFetchCurrUser = state => state.auth.isFetchingCurrUser

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetchCurrUser
};
export default authSelectors;