import path from "path"
import os from "os"

// file name
export const CALCEUS_FILE_PREFIX = ".calceus"
export const PROJECT_FILE_NAME_CHECK = "package.json"

// cli flags
export const BUNDLE_FLAG = "b"
export const HELP_FLAG = "h"

// shell commands
export const SHELL_COMMAND_BUILD_DEV = "yarn devBuild"
export const SHELL_COMMAND_BUILD_PROD = "yarn build"

// project initial configuration
export const PROJECT_DIR_PATH = process.cwd()
export const PROJECT_MODULES = "default"

// calceus modules
export const MODULES_PATH_NAME = ".calceus"
export const MODULES_CONFIG_FILE_PATH = "calceus.json"
export const MODULES_TEMPLATES_PATH = "templates"
export const MODULES_SCHEMA_PATH = "schema"
export const MODULES_SCHEMA_CONFIG_FILE_PATH = "schema/schema.json"

// modules
export const getModulesPath = (): string => {
    return path.join(os.homedir(), MODULES_PATH_NAME)
}

export const getModulesConfigFilePath = (): string => {
    return path.join(os.homedir(), MODULES_PATH_NAME, MODULES_CONFIG_FILE_PATH)
}

// shema
export const getSchemaPath = (): string => {
    return path.join(os.homedir(), MODULES_PATH_NAME, MODULES_SCHEMA_PATH)
}

export const getSchemaConfigPath = (): string => {
    return path.join(os.homedir(), MODULES_PATH_NAME, MODULES_SCHEMA_CONFIG_FILE_PATH)
}

// template
export const getTemplatesPath = (): string => {
    return path.join(os.homedir(), MODULES_PATH_NAME, MODULES_TEMPLATES_PATH)
}
