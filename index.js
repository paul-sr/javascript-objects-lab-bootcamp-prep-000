var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = object
  newObj[key] = value;
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value
}