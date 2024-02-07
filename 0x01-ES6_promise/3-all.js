import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: userBody } = userResponse;
      const { body: photoBody } = photoResponse;
      console.log(`firstName ${userBody.firstName} lastName ${userBody.lastName}`);
      console.log(`Photo ${photoBody}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
