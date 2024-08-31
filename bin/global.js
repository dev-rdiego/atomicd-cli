#!/usr/bin/env node

import { Command } from "commander";
import addCreateCommand from "../src/commands/create.js";
import addInitCommand from "../src/commands/init.js";
import addConfigCommand from "../src/commands/config.js";

const program = new Command();

program
    .name("atomd")
    .description("A CLI tool to generate files using Atomic Desing convention.\nRead more at:\n\t- https://atomicdesign.bradfrost.com/\n\t- https://bradfrost.com/blog/post/atomic-web-design/")
    .version("1.1.0");

// Init command
addInitCommand(program);

// Create command
addCreateCommand(program);

// Config command
addConfigCommand(program);

// Parse the arguments
program.parse(process.argv);