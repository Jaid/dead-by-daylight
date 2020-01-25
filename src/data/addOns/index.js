const path = require("path")

const readFileYaml = require("read-file-yaml").default
const globby = require("globby")

module.exports = async () => {
  const entriesFolder = __dirname
  const ids = await globby("*/*/*", {
    cwd: entriesFolder,
    onlyDirectories: true,
  })
  const jobs = ids.map(async folder => {
    const [type, forItem, id] = folder.split("/")
    const infoFile = path.join(entriesFolder, type, forItem, id, "info.yml")
    const info = await readFileYaml(infoFile)
    info.type = type
    info.for = forItem
    return [id, info]
  })
  const entries = await Promise.all(jobs)
  return Object.fromEntries(entries)
}