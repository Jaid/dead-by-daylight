const path = require("path")

const readFileYaml = require("read-file-yaml").default
const globby = require("globby")
const upperCaseFirst = require("upper-case-first").upperCaseFirst

module.exports = async () => {
  const entriesFolder = __dirname
  const ids = await globby("*/*/*", {
    cwd: entriesFolder,
    onlyDirectories: true,
  })
  const jobs = ids.map(async folder => {
    const [type, forItem, id] = folder.split("/")
    let returnId = id
    const infoFile = path.join(entriesFolder, type, forItem, id, "info.yml")
    const info = await readFileYaml(infoFile)
    info.type = type
    info.for = forItem
    if (type === "power") {
      info.shortId = id
      info.id = `${forItem}${upperCaseFirst(id)}`
      returnId = info.id
    }
    return [returnId, info]
  })
  const entries = await Promise.all(jobs)
  return Object.fromEntries(entries)
}