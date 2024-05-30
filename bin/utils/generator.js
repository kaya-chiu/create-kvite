import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ncp from 'ncp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const currentPath = process.cwd()

const copyTemplateFiles = (framework, projectName, cb) => {
  const sourcePath = path.resolve(__dirname, `../template/${framework}`)
  const targetPath = path.join(currentPath, projectName)

  ncp(sourcePath, targetPath, err => {
    if (err) {
      console.error('Error copying files:', err)
    }
    else {
      cb()
    }
  })
}

const createEnv = answer => {
  const { projectName, baseURL, userName, password, appId } = answer

  const envContent = `KINTONE_BASE_URL=${baseURL || ''}
KINTONE_USERNAME=${userName || ''}
KINTONE_PASSWORD=${password || ''}
KINTONE_APPID=${appId || ''}
`

  const targetPath = path.join(currentPath, projectName)
  const envPath = path.join(targetPath, '/.env')

  fs.writeFileSync(envPath, envContent)
}

const editJsonFile = data => {
  const { key, value, targetFilePath } = data

  fs.readFile(targetFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err)
      return
    }

    const jsonObject = JSON.parse(data)
    jsonObject[key] = value
    const updatedJsonString = JSON.stringify(jsonObject, null, 2)
    fs.writeFile(targetFilePath, updatedJsonString, (err) => {
      if (err) {
        console.error('Failed to write file:', err)
        return
      }
    })
  })
}

export const generateTemplate = async answer => {
  const { projectName, framework, needInformation, appId } = answer
  
  copyTemplateFiles(framework, projectName, () => {
    const targetPath = path.join(currentPath, projectName)

    editJsonFile({
      key: 'name',
      value: projectName,
      targetFilePath: `${targetPath}/package.json`
    })
    
    createEnv(answer)
    
    if (!needInformation) return
    if (!appId) return
    editJsonFile({
      key: 'app',
      value: appId,
      targetFilePath: `${targetPath}/mainfests/dev.json`
    })
    editJsonFile({
      key: 'app',
      value: appId,
      targetFilePath: `${targetPath}/mainfests/prod.json`
    })
  })
}