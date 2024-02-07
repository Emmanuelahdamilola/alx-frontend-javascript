import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Using Promise.allSettled to handle both promises concurrently
    const [userResult, photoResult] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    // Creating the result array based on promise statuses
    const resultArray = [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.value },
    ];

    return resultArray;
  } catch (error) {
    // Handle any unexpected errors during the process
    return [{ status: 'rejected', value: error.message }];
  }
}
