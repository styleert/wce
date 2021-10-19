import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import { CALCEUS_FILE_PREFIX } from '../../constants.js';

export class IO {
    public static readJSONConfig<T>(path: string): T {
        // console.log('read json by path', path);
        
        if (fs.existsSync(path)) {

            const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' })
            const jsonData: T = JSON.parse(data.toString())
            return jsonData
        }

        throw new Error(`config file: ${path} doesn\`t exists!`)
    }
    public static navigate(path: string): void {
        shell.cd(path)
    }

    public static createDirRec(path: string): void {
        // console.log(`create new dir: ${path}...`);
        shell.mkdir('-p', path)
    }

    public static copyFile(path: string, dest: string) {
        console.log(`init new file in: ${dest}...`);
        // console.debug(`cp -f ${path} ${dest}...`);
        shell.cp('-f', path, dest)
    }

    public static formRootDirPathFromFile(root: string, filePath: string): string {
        const nodePath = path.join(root, filePath)
        const pathData = nodePath.split(path.sep)
        const fileName = pathData[pathData.length - 1]
        const dirPath = nodePath.substring(0, nodePath.length - fileName.length - 1)
        return dirPath
    }

    // optional
    public static swapFileName(filePath: string, fileName: string): string {
        const pathData = filePath.split("/")
        const oldFileName = pathData[pathData.length - 1]
        const rawPath = filePath.substring(0, filePath.length - oldFileName.length - 1)
        const swappedPath = path.join(rawPath, fileName)

        return swappedPath
    }

    // checks whether project is calceus cli project or not
    public static isCalceus = (): boolean => {
        const cwd = process.cwd()
        const checkPath = path.join(cwd, CALCEUS_FILE_PREFIX)
        if(!fs.existsSync(checkPath)) {
            return false
        }

        try {
            const fileData = IO.readJSONConfig<{calceusProject: boolean}>(checkPath)
            // console.log("fileData", fileData.calceusProject)
            return fileData.calceusProject
        } catch(e) {
            console.error(`failed to read ${CALCEUS_FILE_PREFIX} configuration file: `, e);
            return false
        }
    }
}