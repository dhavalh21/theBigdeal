const storagePrefix = "tbd_frontend_token";
const storageUUID = "tbd_frontend_uuid";
const storageUserInfo = "user_info";
const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefix));
  },
  getUUID: () => {
    return JSON.parse(window.localStorage.getItem(storageUUID));
  },
  setToken: (token) => {
    window.localStorage.setItem(storagePrefix, JSON.stringify(token));
  },
  setUserData: (data) => {
    window.localStorage.setItem(storageUserInfo, JSON.stringify(data));
  },
  setUUID: (uuid) => {
    window.localStorage.setItem(storageUUID, JSON.stringify(uuid));
  },
  clear: () => {
    window.localStorage.removeItem(storagePrefix);
    window.localStorage.removeItem(storageUUID);
  },
};
export default storage;
