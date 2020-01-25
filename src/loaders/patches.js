import mapObj from "map-obj"
import preventEnd from "prevent-end"

import rawEntries from "src/data/patches?aot"

function normalize(id, patch) {
  return {
    id,
    date: patch.date,
    title: patch.title || id,
    version: preventEnd(id, "-ptb"),
    isPtb: id.endsWith("-ptb"),
  }
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})