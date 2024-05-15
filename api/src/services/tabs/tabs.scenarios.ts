import type { Prisma, Tab } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TabCreateArgs>({
  tab: {
    one: { data: { user: { create: { externalAuthId: 'String' } } } },
    two: { data: { user: { create: { externalAuthId: 'String' } } } },
  },
})

export type StandardScenario = ScenarioData<Tab, 'tab'>
