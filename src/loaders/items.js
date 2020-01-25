import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/items?aot"

function normalize(id, item) {
  const normalizedItem = {
    id,
    type: item.type || null,
    title: item.title || titleCase(id),
    visible: item.visible === undefined ? true : item.visible,
  }
  if (normalizedItem.visible) {
    normalizedItem.released = item.released === undefined ? true : item.released
  } else {
    normalizedItem.released = false
  }
  return normalizedItem
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})