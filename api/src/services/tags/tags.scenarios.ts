import type { Prisma, Tag } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: {
      data: { name: 'String', user: { create: { externalAuthId: 'String' } } },
    },
    two: {
      data: { name: 'String', user: { create: { externalAuthId: 'String' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Tag, 'tag'>
