import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/items?aot"

function normalize(id, item) {
  const normalizedItem = {
    id,
    type: item.type || null,
    title: item.title || titleCase(id),
    visible: item.visible === undefined ? true : item.visible,
    rarity: item.rarity || "common",
    ingameId: item.ingameId || id,
  }
  if (normalizedItem.visible) {
    normalizedItem.released = item.released === undefined ? true : item.released
  } else {
    normalizedItem.released = false
  }
  const iconFolder = item.iconFolder ? `${item.iconFolder}/` : ""
  normalizedItem.iconPath = item.iconPath || `UI/Icons/Items/${iconFolder}iconItems_${normalizedItem.ingameId}.png`
  return normalizedItem
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})