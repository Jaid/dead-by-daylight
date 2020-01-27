import mapObj from "map-obj"

import titleCase from "lib/titleCase"

import rawEntries from "src/data/perks?aot"

import killers from "./killers"

function getRarity(level) {
  if (level > 30) {
    return "veryRare"
  }
  return "rare"
}

function getOwnerType(ownerId) {
  return killers[ownerId] ? "killer" : "survivor"
}

function normalize(id, perk) {
  const normalizedPerk = {
    id,
    title: perk.title || titleCase(id),
    iconId: perk.iconId || id,
    owner: perk.owner || null,
    rarity: getRarity(perk.level),
    for: perk.for || getOwnerType(perk.owner),
    visible: perk.visible === undefined ? true : perk.visible,
  }
  const iconFolder = perk.iconFolder ? `${perk.iconFolder}/` : ""
  normalizedPerk.iconPath = perk.iconPath || `UI/Icons/Perks/${iconFolder}iconPerks_${normalizedPerk.iconId}.png`
  if (!normalizedPerk.level && normalizedPerk.owner) {
    normalizedPerk.level = perk.level || 30
  }
  if (normalizedPerk.visible) {
    normalizedPerk.released = perk.released === undefined ? true : perk.released
  } else {
    normalizedPerk.released = false
  }
  return normalizedPerk
}

export default mapObj(rawEntries, (id, object) => {
  return [id, normalize(id, object)]
})