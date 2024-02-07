function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .then((data) => {
      console.log('Resolved:', data);
    })
    .catch((error) => {
      console.error('Got a response from the API');
      console.error('Rejected:', error);
      return new Error();
    });
}

export default handleResponseFromAPI;
