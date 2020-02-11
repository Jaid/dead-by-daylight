/** @module dead-by-daylight */

import itemTypes from "lib/itemTypes"
import rarities from "lib/rarities"

import addOns from "src/loaders/addOns"
import items from "src/loaders/items"
import killers from "src/loaders/killers"
import offerings from "src/loaders/offerings"
import patches from "src/loaders/patches"
import perks from "src/loaders/perks"
import survivors from "src/loaders/survivors"

export default {
  killers,
  patches,
  perks,
  survivors,
  items,
  addOns,
  offerings,
  rarities,
  itemTypes,
}