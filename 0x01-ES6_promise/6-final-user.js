import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((results) => {
    const output = results.map((result) => ({
      result: result.status,
      value: result.value ? result.value : String(result.reason),
    }));
    return output;
  });
}
