function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .then((secondResolvedValue) => {
      console.log('Got a response from the API');
      return secondResolvedValue;
    })
    .then((thirdResolvedValue) => {
      console.log('Got a response from the API');
      return thirdResolvedValue;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
