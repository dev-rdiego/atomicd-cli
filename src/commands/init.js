import initializeConfig from "./actions/init.js";

export default function addInitCommand(program) {
    program
        .command('init')
        .description('Initialize the CLI configuration')
        .action(initializeConfig);
}