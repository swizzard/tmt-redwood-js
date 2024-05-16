import type {
  QueryResolvers,
  MutationResolvers,
  TabTagRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tabTags: QueryResolvers['tabTags'] = () => {
  return db.tabTag.findMany()
}

export const tabTag: QueryResolvers['tabTag'] = ({ id }) => {
  return db.tabTag.findUnique({
    where: { id },
  })
}

export const createTabTag: MutationResolvers['createTabTag'] = ({ input }) => {
  return db.tabTag.create({
    data: input,
  })
}

export const updateTabTag: MutationResolvers['updateTabTag'] = ({
  id,
  input,
}) => {
  return db.tabTag.update({
    data: input,
    where: { id },
  })
}

export const deleteTabTag: MutationResolvers['deleteTabTag'] = ({ id }) => {
  return db.tabTag.delete({
    where: { id },
  })
}

export const TabTag: TabTagRelationResolvers = {
  tab: (_obj, { root }) => {
    return db.tabTag.findUnique({ where: { id: root?.id } }).tab()
  },
  tag: (_obj, { root }) => {
    return db.tabTag.findUnique({ where: { id: root?.id } }).tag()
  },
}
