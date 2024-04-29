#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import Configstore from "configstore";

const config = new Configstore("atomd-cli");
const program = new Command();

program
    .name("atomicd")
    .description("A CLI tool to generate files using Atomic Desing convention.\nRead more at:\n\t- https://atomicdesign.bradfrost.com/\n\t- https://bradfrost.com/blog/post/atomic-web-design/")
    .version("1.0.0");

program
    .command("init")
    .description("Initialize the CLI configuration")
    .action(() => {
        inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'size',
                    message: 'What size do you need?',
                    default: 'Large',
                    choices: ['Large', 'Medium', 'Small'],
                    filter(val) {
                        return val.toLowerCase();
                    },
                },
                {
                    type: 'confirm',
                    name: 'toBeDelivered',
                    message: 'Is this for delivery?',
                    default: true,
                    transformer: (answer) => (answer ? '👍' : '👎'),
                },
            ]
        ).then(answers => {
            console.log(answers);
        });
    });

program.parse(process.argv);