// Get user's location
window.lat = 49.2812;
window.lng = -123.12345;

function addLocationWatcher(cb) {
  if (!cb) {
    cb = updatePosition
  }
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(cb);
  }

  return null;
};

function updatePosition(position) {
  if (position) {
    window.lat = position.coords.latitude;
    window.lng = position.coords.longitude;
    console.log("shoop da woop", [window.lat, window.lng]);
    // document.querySelector('.horseapples').innerHTML = `hmn ${window.lat}, ${window.lng}`;
    // return [window.lat, window.lng]
  }
}

export { addLocationWatcher}