import {
    getModulesConfigFilePath,
    getModulesPath,
    getSchemaConfigPath,
    getSchemaPath,
    getTemplatesPath,
    PROJECT_FILE_NAME_CHECK
} from "./constants.js"
import fs from 'fs'

export enum RunMode {
    Debug,
    Prod
}

export type ConfigOpts = {
    // directory path configuration
    modulesPath: string
    schemaPath: string
    templatePath: string

    // file path configuration
    schemaConfigurationPath: string
    modulesConfigurationPath: string

    mode: RunMode,
}

export const cfg: ConfigOpts = {
    modulesPath: getModulesPath(),
    schemaPath: getSchemaPath(),
    schemaConfigurationPath: getSchemaConfigPath(),
    modulesConfigurationPath: getModulesConfigFilePath(),
    templatePath: getTemplatesPath(),
    mode: RunMode.Prod
}

export const validateConfig = (): boolean => {
    return fs.existsSync(cfg.modulesPath) &&
        fs.existsSync(cfg.schemaPath) &&
        fs.existsSync(cfg.templatePath)
}