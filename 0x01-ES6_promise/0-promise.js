function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const conection = true;
    if (conection) {
      resolve('Success');
    } else {
      reject(Error('Failed'));
    }
  });
}

export default getResponseFromAPI;
