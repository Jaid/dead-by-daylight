import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/killers?aot"

function normalize(id, killer) {
  const normalizedKiller = {
    id,
    powerTitle: killer.powerTitle || titleCase(killer.powerId),
    realName: killer.realName || null,
    shortTitle: killer.shortTitle || titleCase(id),
    title: killer.title || `The ${titleCase(killer.shortTitle || id)}`,
    visible: killer.visible === undefined ? true : killer.visible,
    powerIconId: killer.powerIconId || killer.powerId,
    powerId: killer.powerId,
  }
  const powerIconFolder = killer.powerIconFolder ? `${killer.powerIconFolder}/` : ""
  normalizedKiller.powerIconPath = killer.powerIconPath || `UI/Icons/Powers/${powerIconFolder}iconPowers_${normalizedKiller.powerIconId}.png`
  if (normalizedKiller.visible) {
    normalizedKiller.released = killer.released === undefined ? true : killer.released
  } else {
    normalizedKiller.released = false
  }
  return normalizedKiller
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})