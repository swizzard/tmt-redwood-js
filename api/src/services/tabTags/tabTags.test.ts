import type { TabTag } from '@prisma/client'

import {
  tabTags,
  tabTag,
  createTabTag,
  updateTabTag,
  deleteTabTag,
} from './tabTags'
import type { StandardScenario } from './tabTags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tabTags', () => {
  scenario('returns all tabTags', async (scenario: StandardScenario) => {
    const result = await tabTags()

    expect(result.length).toEqual(Object.keys(scenario.tabTag).length)
  })

  scenario('returns a single tabTag', async (scenario: StandardScenario) => {
    const result = await tabTag({ id: scenario.tabTag.one.id })

    expect(result).toEqual(scenario.tabTag.one)
  })

  scenario('creates a tabTag', async (scenario: StandardScenario) => {
    const result = await createTabTag({
      input: {
        tabId: scenario.tabTag.two.tabId,
        tagId: scenario.tabTag.two.tagId,
      },
    })

    expect(result.tabId).toEqual(scenario.tabTag.two.tabId)
    expect(result.tagId).toEqual(scenario.tabTag.two.tagId)
  })

  scenario('updates a tabTag', async (scenario: StandardScenario) => {
    const original = (await tabTag({ id: scenario.tabTag.one.id })) as TabTag
    const result = await updateTabTag({
      id: original.id,
      input: { tabId: scenario.tabTag.two.tabId },
    })

    expect(result.tabId).toEqual(scenario.tabTag.two.tabId)
  })

  scenario('deletes a tabTag', async (scenario: StandardScenario) => {
    const original = (await deleteTabTag({
      id: scenario.tabTag.one.id,
    })) as TabTag
    const result = await tabTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
