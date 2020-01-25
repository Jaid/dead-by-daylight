const path = require("path")

const filterNil = require("filter-nil").default
const fsp = require("@absolunet/fsp")

module.exports = async () => {
  const killersFolder = __dirname
  const killerIds = await fsp.readdir(killersFolder)
  const fetchJobs = killerIds.map(async id => {
    const infoFile = path.join(killersFolder, id, "info.yml")
    const infoFileExists = await fsp.pathExists(infoFile)
    if (!infoFileExists) {
      return null
    }
    const data = await fsp.readYaml(infoFile)
    const powerFile = path.join(killersFolder, id, "power.txt")
    const powerFileExists = await fsp.pathExists(powerFile)
    if (powerFileExists) {
      data.power = await fsp.readFile(powerFile, "utf8")
    }
    return {
      id,
      ...data,
    }
  })
  const killers = await Promise.all(fetchJobs)
  return killers |> filterNil
}