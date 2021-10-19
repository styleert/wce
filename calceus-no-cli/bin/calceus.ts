#!/usr/bin/env node
import {validateConfig} from "../config.js";
import { cli } from "../src/cli/cli.js";

const run = () => {
    const isConfigValid = validateConfig()
    if(isConfigValid) {
        console.log('running calceus cli tool...')
        cli(process.argv)
        return
    }

    console.log('fatal: wrong project configuration')
}

run()