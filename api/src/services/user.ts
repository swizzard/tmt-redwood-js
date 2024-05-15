import { db } from 'src/lib/db'

export async function getUserByExternalAuthId(externalAuthId: string) {
  return await db.user.findFirst({
    where: { externalAuthId },
  })
}

export async function createUserWithExternalAuthId(externalAuthId: string) {
  return await db.user.create({
    data: {
      externalAuthId,
    },
  })
}
