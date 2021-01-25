exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("fr-FR", options);
}

exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("fr-FR", options);
}

console.log(module.exports);
