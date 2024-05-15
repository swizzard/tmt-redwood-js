import type { Tab } from '@prisma/client'

import { tabs, tab, createTab, updateTab, deleteTab } from './tabs'
import type { StandardScenario } from './tabs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tabs', () => {
  scenario('returns all tabs', async (scenario: StandardScenario) => {
    const result = await tabs()

    expect(result.length).toEqual(Object.keys(scenario.tab).length)
  })

  scenario('returns a single tab', async (scenario: StandardScenario) => {
    const result = await tab({ id: scenario.tab.one.id })

    expect(result).toEqual(scenario.tab.one)
  })

  scenario('creates a tab', async (scenario: StandardScenario) => {
    const result = await createTab({
      input: { userId: scenario.tab.two.userId },
    })

    expect(result.userId).toEqual(scenario.tab.two.userId)
  })

  scenario('updates a tab', async (scenario: StandardScenario) => {
    const original = (await tab({ id: scenario.tab.one.id })) as Tab
    const result = await updateTab({
      id: original.id,
      input: { userId: scenario.tab.two.userId },
    })

    expect(result.userId).toEqual(scenario.tab.two.userId)
  })

  scenario('deletes a tab', async (scenario: StandardScenario) => {
    const original = (await deleteTab({ id: scenario.tab.one.id })) as Tab
    const result = await tab({ id: original.id })

    expect(result).toEqual(null)
  })
})
