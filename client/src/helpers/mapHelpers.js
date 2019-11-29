const addLocationWatcher = function (cb) {
  if (!cb) {
    cb = updatePosition;
  };
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(cb);
  };
  return null;
};

const updatePosition = function (position) {
  if (position) {
    window.lat = position.coords.latitude;
    window.lng = position.coords.longitude;
    console.log("shoop da woop", [window.lat, window.lng]);
  };
};

export { addLocationWatcher }