import { IUser } from './users.interface'
import { User } from './users.model'

const createUsersService = async (user: IUser): Promise<IUser | null> => {
  const createrUser = await User.create(user)
  if (!createrUser) {
    throw new Error('Failed to create user')
  }
  return createrUser
}

export default {
  createUsersService,
}
