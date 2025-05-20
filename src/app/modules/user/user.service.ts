import { TUser } from './user.interface';
import { User } from './user.model';
const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

// const getMe = async (id: string, role: string) => {
//   let result = null;
 
//   if (role === 'admin') {
//     result = await User.findById(id);
//   }
 
//   return result;
// };



export const UserServices = {
  createUserIntoDB,
  // getMe
};
