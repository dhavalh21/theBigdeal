const storagePrefixAccess = "tbd_frontend_access_token";
const storageUUID = "tbd_frontend_uuid";
const storageUserInfo = "user_info";
const storagePrefixRefresh = "tbd_frontend_refresh_token";
const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefixAccess));
  },
  getUUID: () => {
    return JSON.parse(window.localStorage.getItem(storageUUID));
  },
  getRefToken:()=>{
    return JSON.parse(window.localStorage.getItem(storagePrefixRefresh));
  },
  setToken: (token) => {
    window.localStorage.setItem(storagePrefix, JSON.stringify(token));
  },
  setRefToken: (token) => {
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
    window.localStorage.removeItem(storagePrefixRefresh);
  },
};
export default storage;
