const path = require("path")

const arrayToObjectKeys = require("array-to-object-keys").parallel
const readFileYaml = require("read-file-yaml").default
const globby = require("globby")

module.exports = async () => {
  const entriesFolder = __dirname
  const ids = await globby("*", {
    cwd: entriesFolder,
    onlyDirectories: true,
  })
  return arrayToObjectKeys(ids, async id => {
    const infoFile = path.join(entriesFolder, id, "info.yml")
    return readFileYaml(infoFile)
  })
}