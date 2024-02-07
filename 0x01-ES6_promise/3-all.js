import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;

      if (userResponse.firstName && userResponse.lastName) {
        console.log(`${photoBody} ${userResponse.firstName} ${userResponse.lastName}`);
      } else {
        console.error('Signup system offline');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
