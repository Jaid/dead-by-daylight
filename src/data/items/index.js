require("regenerator-runtime/runtime")

const path = require("path")

const readFileYaml = require("read-file-yaml").default
const globby = require("globby")

module.exports = async () => {
  const entriesFolder = __dirname
  const ids = await globby("*/*", {
    cwd: entriesFolder,
    onlyDirectories: true,
  })
  const jobs = ids.map(async folder => {
    const [type, id] = folder.split("/")
    const infoFile = path.join(entriesFolder, type, id, "info.yml")
    const info = await readFileYaml(infoFile)
    info.type = type
    return [id, info]
  })
  const entries = await Promise.all(jobs)
  return Object.fromEntries(entries)
}