import { validateWithSync } from '@redwoodjs/api'
import type {
  QueryResolvers,
  MutationResolvers,
  TagRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tags: QueryResolvers['tags'] = () => {
  return db.tag.findMany({ where: { userId: context.currentUser?.id } })
}

export const tag: QueryResolvers['tag'] = ({ id }) => {
  return db.tag.findUnique({
    where: { id, userId: context.currentUser?.id },
  })
}

export const taggedTabs: QueryResolvers['taggedTabs'] = ({ id }) => {
  return db.tab.findMany({
    where: {
      userId: context.currentUser?.id,
      tags: { some: { tag: { id, userId: context.currentUser?.id } } },
    },
  })
}

export const createTag: MutationResolvers['createTag'] = ({ input }) => {
  return db.tag.create({
    data: input,
  })
}

export const updateTag: MutationResolvers['updateTag'] = ({ id, input }) => {
  validateWithSync(() => {
    if (input.userId !== context.currentUser?.id) {
      throw new Error('Unauthorized')
    }
  })
  return db.tag.update({
    data: input,
    where: { id },
  })
}

export const deleteTag: MutationResolvers['deleteTag'] = ({ id }) => {
  return db.tag.delete({
    where: { id, userId: context.currentUser?.id },
  })
}

export const Tag: TagRelationResolvers = {
  user: (_obj, { root }) => {
    return db.tag.findUnique({ where: { id: root?.id } }).user()
  },
  tabs: (_obj, { root }) => {
    return db.tag.findUnique({ where: { id: root?.id } }).tabs()
  },
}
