import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/survivors?aot"

function normalize(id, survivor) {
  return {
    id,
    title: survivor.title || titleCase(id),
    shortTitle: survivor.shortTitle || titleCase(id),
  }
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})