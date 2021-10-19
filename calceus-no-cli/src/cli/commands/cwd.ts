import inquirer from "inquirer";
import shell from "shelljs"
import { SHELL_COMMAND_BUILD_DEV, SHELL_COMMAND_BUILD_PROD } from "../../../constants.js";

const COMMAND_KEY_NAME_CWD = 'cwd'

enum Environment {
    Production = "production",
    Development = "development"
}

export const cwd = () => {
    console.log("current dir is calceus project...");

    inquirer.prompt([
        {
            type: 'list',
            name: COMMAND_KEY_NAME_CWD,
            message: 'what environment would you like to run?',
            choices: [Environment.Development, Environment.Production],
        }
    ]).then(answer => {
        console.log(`preparing project for ${answer[COMMAND_KEY_NAME_CWD]} environment...`);

        switch(answer[COMMAND_KEY_NAME_CWD]) {
            case Environment.Development: {
                shell.exec(SHELL_COMMAND_BUILD_DEV)
                break
            }

            case Environment.Production: {
                shell.exec(SHELL_COMMAND_BUILD_PROD)
                break
            }

            default: {
                console.error('fatal: undefined environment key')
            }
        }
    })

}