const path = require("path")

const fsp = require("@absolunet/fsp")
const filterNil = require("filter-nil").default
const globby = require("globby")
const preventEnd = require("prevent-end").default
const {paramCase} = require("param-case")

module.exports = async () => {
  const patchesFolder = __dirname
  const versions = await fsp.readdir(patchesFolder)
  const fetchPatchesJobs = versions.map(async version => {
    const logFile = path.join(patchesFolder, version, "log.yml")
    const logFileExists = await fsp.pathExists(logFile)
    if (!logFileExists) {
      return null
    }
    const data = await fsp.readYaml(logFile)
    if (!data.semver) {
      data.semver = version
    }
    if (!data.linkId) {
      data.linkId = paramCase(data.title || data.semver)
    }
    if (!data.points) {
      data.points = {}
    }
    const additionNames = await globby("*.yml", {
      cwd: path.join(patchesFolder, version),
      baseNameMatch: true,
    })
    const additionJobs = additionNames.map(async additionName => {
      const additionId = preventEnd(additionName, ".yml")
      if (additionId === "log") {
        return
      }
      data.points[additionId] = await fsp.readYaml(path.join(patchesFolder, version, additionName))
    })
    await Promise.all(additionJobs)
    return data
  })
  const patches = await Promise.all(fetchPatchesJobs)
  return patches |> filterNil
}