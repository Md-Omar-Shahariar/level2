import config from '../config'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUsersService = async (user: IUser): Promise<IUser | null> => {
  //auto generate id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createrUser = await User.create(user)
  if (!createrUser) {
    throw new Error('Failed to create user')
  }
  return createrUser
}

export default {
  createUsersService,
}
