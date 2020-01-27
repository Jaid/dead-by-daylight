import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/offerings?aot"

function normalize(id, offering) {
  const normalizedOffering = {
    id,
    type: offering.type || null,
    title: offering.title || titleCase(id),
    visible: offering.visible === undefined ? true : offering.visible,
    rarity: offering.rarity || "common",
    iconId: offering.iconId || id,
  }
  if (normalizedOffering.visible) {
    normalizedOffering.released = offering.released === undefined ? true : offering.released
  } else {
    normalizedOffering.released = false
  }
  const iconFolder = offering.iconFolder ? `${offering.iconFolder}/` : ""
  normalizedOffering.iconPath = offering.iconPath || `UI/Icons/Favors/${iconFolder}iconFavors_${normalizedOffering.iconId}.png`
  return normalizedOffering
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})