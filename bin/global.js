#!/usr/bin/env node

import { Command } from "commander";
import addCreateCommand from "../src/commands/create.js";
import addInitCommand from "../src/commands/init.js";

const program = new Command();

program
    .name("atomicd")
    .description("A CLI tool to generate files using Atomic Desing convention.\nRead more at:\n\t- https://atomicdesign.bradfrost.com/\n\t- https://bradfrost.com/blog/post/atomic-web-design/")
    .version("1.0.0");

// Create command
addCreateCommand(program);

// Init command
addInitCommand(program);

program.parse(process.argv);