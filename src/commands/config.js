import configActions from "./actions/config.js";

export default function addConfigCommand(program) {
    program
        .command('config')
        .description('View, update or reset the CLI configuration')
        .option('-o, --overwrite', 'Overwrite the configuration')
        .option('-r, --reset', 'Reset the configuration')
        .option('-v, --view', 'View the configuration')
        .action((options) => {
            configActions(options);
        });
}   