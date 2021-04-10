export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";

const clientId = "2d53f03ca7ef460791f33d29f76cafbf";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item: any): any => {
      let parts: string[] = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {}); // {} where should initial start with
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
