require("regenerator-runtime/runtime")

const path = require("path")

const arrayToObjectKeys = require("array-to-object-keys").parallel
const readFileYaml = require("read-file-yaml").default
const globby = require("globby")
const moment = require("moment")
const sortObjectEntries = require("sort-object-entries").default

module.exports = async () => {
  const entriesFolder = __dirname
  const ids = await globby("*", {
    cwd: entriesFolder,
    onlyDirectories: true,
  })
  const entries = await arrayToObjectKeys(ids, async id => {
    const infoFile = path.join(entriesFolder, id, "info.yml")
    const info = await readFileYaml(infoFile)
    info.date = Number(moment(info.date, "DD.MM.YYYY"))
    return info
  })
  return sortObjectEntries(entries, (value1, value2) => {
    return value1.date - value2.date
  })
}