import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/survivors?aot"

function normalize(id, survivor) {
  const normalizedSurvivor = {
    id,
    title: survivor.title || titleCase(id),
    shortTitle: survivor.shortTitle || titleCase(id),
    visible: survivor.visible === undefined ? true : survivor.visible,
  }
  if (normalizedSurvivor.visible) {
    normalizedSurvivor.released = survivor.released === undefined ? true : survivor.released
  } else {
    normalizedSurvivor.released = false
  }
  return normalizedSurvivor
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})