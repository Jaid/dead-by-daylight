import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: deadByDaylight} = indexModule

it("should run", () => {
  console.dir(deadByDaylight.items)
  expect(deadByDaylight.killers.wraith.realName).toBe("Philip Ojomo")
  expect(deadByDaylight.patches["3.4.0"].title).toBe("Cursed Legacy")
  expect(deadByDaylight.perks.hauntedGround.for).toBe("killer")
  expect(deadByDaylight.survivors.meg.title).toBe("Meg Thomas")
  expect(deadByDaylight.items.dullKey.title).toBe("Dull Key")
})