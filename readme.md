# dead-by-daylight


<a href="https://raw.githubusercontent.com/jaid/dead-by-daylight/master/license.txt"><img src="https://img.shields.io/github/license/jaid/dead-by-daylight?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor dead-by-daylight"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/dead-by-daylight/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fdead-by-daylight%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/dead-by-daylight/commits"><img src="https://img.shields.io/github/commits-since/jaid/dead-by-daylight/v1.30.0?style=flat-square&logo=github" alt="Commits since v1.30.0"/></a> <a href="https://github.com/jaid/dead-by-daylight/commits"><img src="https://img.shields.io/github/last-commit/jaid/dead-by-daylight?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/dead-by-daylight/issues"><img src="https://img.shields.io/github/issues/jaid/dead-by-daylight?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/dead-by-daylight"><img src="https://img.shields.io/npm/v/dead-by-daylight?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/dead-by-daylight/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/dead-by-daylight?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/dead-by-daylight"><img src="https://img.shields.io/npm/dm/dead-by-daylight?style=flat-square&logo=npm" alt="Downloads"/></a>

**Some structured Dead by Daylight data.**





## Installation

<a href="https://npmjs.com/package/dead-by-daylight"><img src="https://img.shields.io/badge/npm-dead--by--daylight-C23039?style=flat-square&logo=npm" alt="dead-by-daylight on npm"/></a>

```bash
npm install --save dead-by-daylight@^1.30.0
```

<a href="https://yarnpkg.com/package/dead-by-daylight"><img src="https://img.shields.io/badge/Yarn-dead--by--daylight-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="dead-by-daylight on Yarn"/></a>

```bash
yarn add dead-by-daylight@^1.30.0
```

<a href="https://github.com/jaid/dead-by-daylight/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/dead--by--daylight-24282e?style=flat-square&logo=github" alt="@jaid/dead-by-daylight on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/dead-by-daylight@^1.30.0
```



## Example


```javascript
import deadByDaylight from "dead-by-daylight"

const result = deadByDaylight.perks.hauntedGround
```

Variable `result` will be:

```javascript
{
  id: "hauntedGround",
  title: "Hex: Haunted Ground",
  iconId: "hauntedGround",
  owner: "spirit",
  rarity: "veryRare",
  for: "killer",
  level: 35,
  iconPath: "UI/Icons/Perks/Haiti/iconPerks_hauntedGround.png",
  visible: true,
  released: true,
}
```















## Legal

Contains official Dead by Daylight content copied from the [Steam release](https://store.steampowered.com/app/381210). Copyright by [Behaviour Interactive](https://bhvr.com/).

## Development



Setting up:
```bash
git clone git@github.com:jaid/dead-by-daylight.git
cd dead-by-daylight
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/dead-by-daylight/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
