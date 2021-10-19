import { cwd } from "./commands/cwd.js";
import { HELP_FLAG } from "../../constants.js";
import { IO } from "../util/io.js";
import { build } from "./commands/build.js";
import { help } from "./commands/help.js";

export type CliOpts = {
    dirPath: string
    modules: string
}

export const cli = (args: string[]) => {
    const isHelpCmd = args.some(value => value === HELP_FLAG)
    if(isHelpCmd) {
        help()
        return
    }

    // check cwd for calceus project
    const isCwdCalceus = IO.isCalceus()
    if(isCwdCalceus) {
        cwd()
        return
    }

    build()
}

