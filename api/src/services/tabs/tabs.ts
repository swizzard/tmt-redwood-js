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

export const createTab: MutationResolvers['createTab'] = ({ input }) => {
  return db.tab.create({
    data: input,
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
