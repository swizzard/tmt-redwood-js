import type { Prisma, TabTag } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TabTagCreateArgs>({
  tabTag: {
    one: {
      data: {
        tab: {
          create: {
            url: 'String',
            user: { create: { externalAuthId: 'String' } },
          },
        },
        tag: {
          create: {
            name: 'String',
            user: { create: { externalAuthId: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        tab: {
          create: {
            url: 'String',
            user: { create: { externalAuthId: 'String' } },
          },
        },
        tag: {
          create: {
            name: 'String',
            user: { create: { externalAuthId: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TabTag, 'tabTag'>
