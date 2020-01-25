const path = require("path")

const fsp = require("@absolunet/fsp")
const filterNil = require("filter-nil").default

module.exports = async () => {
  const perksFolder = __dirname
  const perkIds = await fsp.readdir(perksFolder)
  const fetchPerksJobs = perkIds.map(async id => {
    const infoFile = path.join(perksFolder, id, "info.yml")
    const infoFileExists = await fsp.pathExists(infoFile)
    if (!infoFileExists) {
      return null
    }
    const data = await fsp.readYaml(infoFile)
    const effectFile = path.join(perksFolder, id, "effect.txt")
    const effectFileExists = await fsp.pathExists(effectFile)
    if (effectFileExists) {
      data.effect = await fsp.readFile(effectFile, "utf8")
    }
    return {
      id,
      ...data,
    }
  })
  const perks = await Promise.all(fetchPerksJobs)
  return perks |> filterNil
}