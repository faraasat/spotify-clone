export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // Only when developing so we don't have to login everytime
  // token:
  //   "BQDZDF-nxtzgzG3WYR1xByxv-86x4b6RB84QK1kfF32TW7uW4UKIA_jrHsuaK5TDKatmpXzUBPBvTAbODGieHFozv1lJh58aapvbiXJYMjMTBPRNuUTJyNSvdJQFJX8LXvWerbfGVtpSK8OB0d-1IQU1TPcHwGEBl74FNZiV7RYumlHQ",
};

const reducer = (state: any, action: any) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
