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
    const result = await tab({ id: scenario.tab.existingWithTag.id })

    expect(result).toEqual(scenario.tab.existingWithTag)
  })

  scenario('creates a tab without tags', async (scenario: StandardScenario) => {
    const url = 'https://example.com/new/notags'
    const notes = 'notes no tags'
    const result = await createTab({
      input: { url, notes, userId: scenario.user.one.id, tags: [] },
    })
    expect(result.url).toEqual(url)
    expect(result.notes).toEqual(notes)
    expect(result.userId).toEqual(scenario.user.one.id)
    expect(result.tags).toEqual([])
  })
  scenario('creates a tab with tags', async (scenario: StandardScenario) => {
    const url = 'https://example.com/new/tags'
    const notes = 'notes with tags'
    const tagNames = [scenario.tag.one.name, 'three']
    const result = await createTab({
      input: { url, notes, userId: scenario.user.one.id, tags: tagNames },
    })
    expect(result.url).toEqual(url)
    expect(result.notes).toEqual(notes)
    expect(result.userId).toEqual(scenario.user.one.id)
    const actualTags = result.tags.reduce((acc, { tag: { name, id } }) => {
      acc[name] = id
      return acc
    }, {})
    expect(actualTags[scenario.tag.one.name]).toEqual(scenario.tag.one.id)
    expect(actualTags['three']).not.toBeUndefined()
  })
  scenario(
    'creates a tab respecting tag ownership',
    async (scenario: StandardScenario) => {
      const url = 'https://example.com/new/tags'
      const notes = 'notes with tags'
      const tagNames = [scenario.tag.one.name, scenario.tag.other.name]
      const result = await createTab({
        input: { url, notes, userId: scenario.user.one.id, tags: tagNames },
      })
      expect(result.url).toEqual(url)
      expect(result.notes).toEqual(notes)
      expect(result.userId).toEqual(scenario.user.one.id)
      const actualTags = result.tags.reduce(
        (acc, { tag: { name, id, userId } }) => {
          acc[name] = { id, userId }
          return acc
        },
        {}
      )
      expect(actualTags[scenario.tag.one.name].id).toEqual(scenario.tag.one.id)
      expect(actualTags[scenario.tag.other.name].userId).toEqual(
        scenario.user.one.id
      )
      expect(actualTags[scenario.tag.other.name].id).not.toEqual(
        scenario.tag.other.id
      )
    }
  )

  scenario('updates a tab without tags', async (scenario: StandardScenario) => {
    const newUrl = 'https://example.com/updated/notags'
    const newNotes = 'updated notes no tags'
    const result = await updateTab({
      id: scenario.tab.existingNoTags.id,
      input: {
        url: newUrl,
        notes: newNotes,
        userId: scenario.user.one.id,
        tags: [],
      },
    })
    expect(result.url).toEqual(newUrl)
    expect(result.notes).toEqual(newNotes)
    expect(result.tags).toEqual([])
  })

  scenario('updates a tab with tags', async (scenario: StandardScenario) => {
    const newUrl = 'https://example.com/updated/notags'
    const newNotes = 'updated notes no tags'
    const newTagNames = [scenario.tag.two.name, 'three']
    const result = await updateTab({
      id: scenario.tab.existingWithTag.id,
      input: {
        url: newUrl,
        notes: newNotes,
        userId: scenario.user.one.id,
        tags: newTagNames,
      },
    })
    expect(result.url).toEqual(newUrl)
    expect(result.notes).toEqual(newNotes)
    const actualTags = result.tags.reduce((acc, { tag: { name, id } }) => {
      acc[name] = id
      return acc
    }, {})
    expect(actualTags[scenario.tag.two.name]).toEqual(scenario.tag.two.id)
    expect(actualTags['three']).not.toBeUndefined()
  })

  scenario('deletes a tab', async (scenario: StandardScenario) => {
    const original = (await deleteTab({
      id: scenario.tab.existingWithTag.id,
    })) as Tab
    const result = await tab({ id: original.id })

    expect(result).toEqual(null)
  })
})
