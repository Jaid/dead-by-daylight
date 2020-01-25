import {sentenceCase} from "sentence-case"
import {titleCase} from "title-case"

export default input => {
  return titleCase(sentenceCase(input))
}