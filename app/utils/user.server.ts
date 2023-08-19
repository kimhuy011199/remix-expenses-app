import { db } from './db.server';

export interface User {
  username: string;
  password: string;
}

export async function createUser(userData: User) {
  try {
    const user = await db.user.create({ data: userData });
    return userWithoutPassword(user);
  } catch (error) {
    console.log(error);
    throw new Error('Create user failed.');
  }
}

export async function getUser(username: string) {
  try {
    return await db.user.findFirst({ where: { username } });
  } catch (error) {
    console.log(error);
    throw new Error('Get user failed.');
  }
}

export async function getUserById(id: string) {
  const user = await db.user.findUnique({ where: { id } });
  return userWithoutPassword(user);
}

function userWithoutPassword(user: any) {
  delete user.password;
  return user;
}
