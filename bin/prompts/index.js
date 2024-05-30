import chalk from 'chalk'
import inquirer from 'inquirer'

export const askQuestions = async () => {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      validate: (value) => {
        if (value.trim() === '') {
          return 'Project name cannot be empty.'
        }
        else {
          return true
        }
      }
    },
    {
      type: 'list',
      name: 'framework',
      choices: [
        { name: chalk.cyan('React + JavaScript'), value: 'react' },
        { name: chalk.magenta('React + TypeScript'), value: 'react-ts' }
      ],
      message: 'Select a framework:'
    },
    {
      type: 'confirm',
      name: 'needInformation',
      message: 'Do you want to enter Kintone information now? \n (You can edit the information in the .env file later.)'
    },
    {
      type: 'input',
      name: 'baseURL',
      message: 'Enter base url (ex: https://domain.cybozu.com) :',
      when: (answers) => answers.needInformation === true
    },
    {
      type: 'input',
      name: 'userName',
      message: 'Enter username :',
      when: (answers) => answers.needInformation === true
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter password :',
      when: (answers) => answers.needInformation === true
    },
    {
      type: 'input',
      name: 'appId',
      message: 'Enter application id :',
      when: (answers) => answers.needInformation === true
    }
  ])

  return answer
}