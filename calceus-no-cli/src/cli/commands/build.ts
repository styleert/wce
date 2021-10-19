import {cfg} from '../../../config.js'
import {Schema} from "../../schema.js";
import {Bootstraper} from "../../bootstraper.js";
import {PROJECT_DIR_PATH, PROJECT_FILE_NAME_CHECK, PROJECT_MODULES} from "../../../constants.js";
import { CliOpts } from '../cli.js';
import fs from "fs"

export const build = () => {
    if(fs.existsSync(PROJECT_FILE_NAME_CHECK)) {
        console.error(`fatal: current dir contains ${PROJECT_FILE_NAME_CHECK} file!`)
        return
    }

    console.log("building the project...");
    const cliOpts: CliOpts = {
        dirPath: PROJECT_DIR_PATH,
        modules: PROJECT_MODULES
    }

    const schemaModel = Schema.parseFromConfig(cfg.schemaConfigurationPath)
    const bootstrapper = new Bootstraper(cliOpts, schemaModel)
    bootstrapper.bootstrap()
}