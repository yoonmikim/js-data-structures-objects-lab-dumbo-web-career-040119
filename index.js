// Write your solution in this file!
const driver = {};

<<<<<<< HEAD
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];


  return driver;
}
=======
updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}  
>>>>>>> 7dbd304f37ea7e2d4d5a36ccd3b3dd79c26f94c7
