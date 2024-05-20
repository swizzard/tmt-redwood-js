import { validateWithSync } from '@redwoodjs/api'
import type {
  QueryResolvers,
  MutationResolvers,
  TabRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tabs: QueryResolvers['tabs'] = () => {
  return db.tab.findMany({
    where: { userId: context.currentUser?.id },
  })
}

export const tab: QueryResolvers['tab'] = ({ id }) => {
  return db.tab.findUnique({
    where: { id, userId: context.currentUser?.id },
  })
}

export const createTab: MutationResolvers['createTab'] = async ({ input }) => {
  const userId = input.userId
  validateWithSync(() => {
    if (userId !== context.currentUser?.id) {
      throw new Error('Unauthorized')
    }
  })
  const { tags, ...tabData } = input
  return db.$transaction(async (tx) => {
    const { id: tabId } = await tx.tab.create({
      data: tabData,
    })
    const existingTags: Set<string> = await tx.tag
      .findMany({
        where: { userId, name: { in: tags } },
        select: { id: true, name: true },
      })
      .then((tags) =>
        tags.reduce((acc, { name }) => {
          acc.add(name)
          return acc
        }, new Set<string>())
      )
    const toCreate = []
    tags.forEach((tag) => {
      if (!existingTags.has(tag)) {
        toCreate.push({ userId, name: tag })
      }
    })
    await tx.tag.createMany({
      data: toCreate,
    })
    const ttsToCreate = await tx.tag
      .findMany({
        where: { userId, name: { in: tags } },
        select: { id: true },
      })
      .then((ids) => ids.map(({ id }) => ({ tagId: id, tabId })))
    await tx.tabTag.createMany({ data: ttsToCreate })
    return tx.tab.findUnique({
      where: { id: tabId },
      include: {
        tags: {
          include: { tag: true },
        },
      },
    })
  })
}

export const updateTab: MutationResolvers['updateTab'] = async ({
  id: tabId,
  input,
}) => {
  const userId = input.userId
  validateWithSync(() => {
    if (userId !== context.currentUser?.id) {
      throw new Error('Unauthorized')
    }
  })
  const { tags, ...tabData } = input
  return db.$transaction(async (tx) => {
    await tx.tab.update({ where: { id: tabId }, data: tabData })

    const existingTags: Set<string> = await tx.tag
      .findMany({
        where: { userId, name: { in: tags } },
        select: { id: true, name: true },
      })
      .then((tags) =>
        tags.reduce((acc, { name }) => {
          acc.add(name)
          return acc
        }, new Set<string>())
      )
    const toCreate = []
    tags.forEach((tag) => {
      if (!existingTags.has(tag)) {
        toCreate.push({ userId, name: tag })
      }
    })
    await tx.tag.createMany({
      data: toCreate,
    })
    await tx.tabTag.deleteMany({
      where: { tabId },
    })
    const ttToCreate = await tx.tag
      .findMany({
        where: { userId, name: { in: tags } },
        select: { id: true },
      })
      .then((tags) => tags.map(({ id: tagId }) => ({ tagId, tabId })))
    await tx.tabTag.createMany({ data: ttToCreate })
    return tx.tab.findUnique({
      where: { id: tabId },
      include: { tags: { include: { tag: true } } },
    })
  })
}

export const deleteTab: MutationResolvers['deleteTab'] = ({ id }) => {
  return db.$transaction(async (tx) => {
    const tab = await tx.tab.findUnique({
      where: { id, userId: context.currentUser.id },
    })
    if (!tab) {
      return
    }
    await tx.tabTag.deleteMany({ where: { tabId: id } })
    return tx.tab.delete({ where: { id } })
  })
}

export const Tab: TabRelationResolvers = {
  user: (_obj, { root }) => {
    return db.tab.findUnique({ where: { id: root?.id } }).user()
  },
  tags: (_obj, { root }) => {
    return db.tab.findUnique({ where: { id: root?.id } }).tags()
  },
}
