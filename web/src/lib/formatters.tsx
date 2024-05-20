import React from 'react'

import humanize from 'humanize-string'
import { EditTabById } from 'types/graphql'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values: string | string[] | null | undefined) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (
  value: string | number,
  maxLen = MAX_STRING_LENGTH
) => {
  let output = value?.toString() ?? ''

  if (output.length > maxLen) {
    output = output.substring(0, maxLen) + '...'
  }

  return output
}

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

export function fmtTags(tags: EditTabById['tab']['tags']) {
  return tags && tags.length
    ? tags
      .map((tag) => {
        const name = tag.tag.name
        if (name.includes(',')) {
          return `"${name}"`
        } else {
          return name
        }
      })
      .join(', ')
    : ''
}

export function splitTags(value: string) {
  const tags: Array<string> = []
  let inQuotes = false
  let currentTag = ''
  for (let i = 0; i < value.length; i++) {
    const char = value[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      tags.push(currentTag.trim())
      currentTag = ''
    } else {
      currentTag += char
    }
  }
  const final = currentTag.trim()
  if (final.length > 0) {
    tags.push(final)
  }
  console.log('tags', tags)
  return tags
}
