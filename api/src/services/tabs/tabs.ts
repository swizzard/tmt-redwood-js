import type {
  QueryResolvers,
  MutationResolvers,
  TabRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tabs: QueryResolvers['tabs'] = () => {
  return db.tab.findMany()
}

export const tab: QueryResolvers['tab'] = ({ id }) => {
  return db.tab.findUnique({
    where: { id },
  })
}

export const createTab: MutationResolvers['createTab'] = async ({ input }) => {
  const userId = input.userId
  const { tags, ...tabData } = input
  return db.$transaction(async (tx) => {
    const tab = await tx.tab.create({
      data: tabData,
    })
    const existingTags: Record<string, string> = await tx.tag
      .findMany({
        where: { userId, name: { in: tags } },
        select: { id: true, name: true },
      })
      .then((tags) =>
        tags.reduce((acc, { id, name }) => ({ ...acc, [name]: id }), {})
      )
    const existing = []
    const toCreate = []
    tags.forEach((tag) => {
      if (existingTags[tag]) {
        existing.push({ id: existingTags[tag] })
      } else {
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
      .then((ids) => ids.map(({ id }) => ({ tagId: id, tabId: tab.id })))
    await tx.tabTag.createMany({ data: ttsToCreate })
    return tx.tab.findUnique({ where: { id: tab.id } })
  })
}

export const updateTab: MutationResolvers['updateTab'] = ({ id, input }) => {
  return db.tab.update({
    data: input,
    where: { id },
  })
}

export const deleteTab: MutationResolvers['deleteTab'] = ({ id }) => {
  return db.tab.delete({
    where: { id },
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
