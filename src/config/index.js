
const VUE_APP_API_URL ='http://127.0.0.1:5000';
const VUE_APP_WS_URL =
  process.env.VUE_APP_WS_URL || `ws:${location.hostname}:20003`;

export { VUE_APP_API_URL, VUE_APP_WS_URL };


