function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .then((secondResolvedValue) => {
      console.log('Got a response from the API');
    })
    .then((thirdResolvedValue) => {
      console.log('Got a response from the API');
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
