import fsp from "@absolunet/fsp"
import chalk from "chalk"
import path from "path"
import yargs from "yargs"

import titleCase from "../src/lib/titleCase"

async function job(argv) {
  const targetFile = path.join(__dirname, "..", "src", "data", "offerings", argv.forType, argv.name, "info.yml")
  const props = {
    rarity: argv.rarity,
  }
  if (argv.title) {
    props.title = argv.title
  }
  console.log(`${chalk.blue("For:")}      ${chalk.yellow(argv.forType)}`)
  console.log(`${chalk.blue("Offering:")} ${chalk.yellow(argv.name)}`)
  console.log(`${chalk.blue("Title:")}    ${chalk.yellow(argv.title || titleCase(argv.name))}`)
  console.log(`${chalk.blue("Rarity:")}   ${chalk.yellow(argv.rarity)}`)
  const exists = await fsp.pathExists(targetFile)
  await fsp.outputYaml(targetFile, props)
  if (exists) {
    console.log(chalk.yellow("File overwritten!"))
  }
}

yargs
  .command("$0 <forType> <rarity> <name> [title]", "", {}, job).argv