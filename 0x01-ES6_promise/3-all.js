import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;

      if (userResponse.firstName && userResponse.lastName) {
        console.log(`${photoBody} ${userResponse.firstName} ${userResponse.lastName}`);
      } else {
        console.error('Signup system offline');
      }
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
