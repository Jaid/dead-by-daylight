import fsp from "@absolunet/fsp"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: deadByDaylight} = indexModule

async function checkPaths() {
  const deadByDaylightFolder = process.env.deadByDaylightFolder || path.resolve("E:/Steam Library", "steamapps", "common", "Dead by Daylight", "DeadByDaylight", "Content")
  const pathsToCheck = [
    ...Object.values(deadByDaylight.perks).map(perk => perk.iconPath),
    ...Object.values(deadByDaylight.items).map(item => item.iconPath),
  ]
  const missingPaths = []
  const jobs = pathsToCheck.map(async pathToCheck => {
    const fullPath = path.join(deadByDaylightFolder, pathToCheck)
    const exists = await fsp.pathExists(fullPath)
    if (!exists) {
      if (missingPaths.length === 0) {
        console.log(`Example missing path: ${fullPath}`)
      }
      missingPaths.push(pathToCheck)
    }
  })
  await Promise.all(jobs)
  expect(missingPaths).toStrictEqual([])
}

it("should run", async () => {
  if (process.env.checkPaths) {
    await checkPaths()
  }
  expect(deadByDaylight.killers.wraith.realName).toBe("Philip Ojomo")
  expect(deadByDaylight.patches["3.4.0"].title).toBe("Cursed Legacy")
  expect(deadByDaylight.perks.hauntedGround.for).toBe("killer")
  expect(deadByDaylight.survivors.meg.title).toBe("Meg Thomas")
  expect(deadByDaylight.items.dullKey.title).toBe("Dull Key")
  expect(deadByDaylight.addOns.unusualStamp.rarity).toBe("uncommon")
  console.log(deadByDaylight.perks.hauntedGround)
})