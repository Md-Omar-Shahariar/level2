import { User } from './users.model'

let lastUserId = 0

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}
export function generateUserId() {
  lastUserId += 1
  return String(lastUserId).padStart(5, '0')
}
