import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/addOns?aot"

function normalize(id, addOn) {
  const normalizedAddOn = {
    id,
    title: addOn.title || titleCase(id),
    visible: addOn.visible === undefined ? true : addOn.visible,
    rarity: addOn.rarity || "common",
    for: addOn.for,
    forType: addOn.type,
  }
  if (normalizedAddOn.visible) {
    normalizedAddOn.released = addOn.released === undefined ? true : addOn.released
  } else {
    normalizedAddOn.released = false
  }
  return normalizedAddOn
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})