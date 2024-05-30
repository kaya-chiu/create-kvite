import chalk from 'chalk'

const header = `
${chalk.magenta.bold('*** Your new project has been created! ***')}
`

const noInfo = `
${chalk.cyan.bold(`Before you start, please make sure you've filled out
the following files:`)}
${chalk.green('- .env')}
${chalk.green('- manifests/dev.json')}
${chalk.green('- manifests/prod.json')}
`

const ts = `
To get Type definition of fields in your kintone APP,
run the following command:
${chalk.yellow('npm run dts-gen')}
`

const main = `
To watch for changes during development, run the following command:
${chalk.yellow('npm run watch:dev')}

To update customizations, run the following command:
${chalk.yellow('npm run update')}
`


export const logResult = answer => {
  const { needInformation, projectName, framework } = answer
  
  const init = `
To initialize project, run the following command:
${chalk.yellow(`cd ${projectName}`)}
${chalk.yellow('npm install')}
`

  if (needInformation) {
    if (framework === 'react-ts') {
      console.log(header + init + ts + main)
      return
    } else {
      console.log(header + init + main)
      return
    } 
  } else {
    if (framework === 'react-ts') {
      console.log(header + noInfo + init + ts + main)
      return
    } else {
      console.log(header + noInfo + init + main)
      return
    }
  }  
}