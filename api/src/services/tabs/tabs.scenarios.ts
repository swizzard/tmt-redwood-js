import type { Prisma, Tab, TabTag, Tag, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

const standardUser: Record<string, Prisma.UserCreateArgs> = {
  one: {
    data: {
      id: 'testUser',
      externalAuthProvider: 'auth0',
      externalAuthId: 'testUser',
    },
  } as Prisma.UserCreateArgs,
  other: {
    data: {
      id: 'otherTestUser',
      externalAuthProvider: 'auth0',
      externalAuthId: 'testUser',
    },
  } as Prisma.UserCreateArgs,
}

export const standardTab: Record<string, any> = {
  existingNoTags: (scenario: StandardScenario) => ({
    data: {
      url: 'https://example.com/existing/notags',
      user: { connect: { id: scenario.user.one.id } },
    },
  }),
  existingWithTag: (scenario: StandardScenario) => ({
    data: {
      url: 'https://example.com/existing/tags',
      user: { connect: { id: scenario.user.one.id } },
    },
  }),
}

export const standardTag: Record<string, any> = {
  one: (scenario: StandardScenario) => ({
    data: {
      name: 'one',
      user: { connect: { id: scenario.user.one.id } },
    },
  }),
  two: (scenario: StandardScenario) => ({
    data: {
      name: 'two',
      user: { connect: { id: scenario.user.one.id } },
    },
  }),
  other: (scenario: StandardScenario) => ({
    data: { name: 'other', user: { connect: { id: scenario.user.other.id } } },
  }),
}

export const standardTabTag: Record<string, any> = {
  one: (scenario: StandardScenario) => ({
    data: {
      tabId: scenario.tab.existingWithTag.id,
      tagId: scenario.tag.one.id,
    },
  }),
}

export const standard = defineScenario({
  user: standardUser,
  tab: standardTab,
  tag: standardTag,
  tabTag: standardTabTag,
})

export type StandardScenario = {
  user: Record<keyof typeof standardUser, User>
  tab: Record<keyof typeof standardTab, Tab>
  tag: Record<keyof typeof standardTag, Tag>
  tabTag: Record<keyof typeof standardTabTag, TabTag>
}
