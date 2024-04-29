import chalk from 'chalk';
import inquirer from 'inquirer';
import setConfigs from '../../utils/setConfigs.js';
import { deleteAllInternalConfig, getAllInternalConfig } from '../../utils/index.js';

export default async function configActions(options) {
    const selectedOptionsCount = ['overwrite', 'reset', 'view']
        .map(opt => options[opt])
        .filter(opt => opt)
        .length;

    const hasConfig = Object.keys(getAllInternalConfig()).length > 0;

    if (!hasConfig) {
        console.log(chalk.yellowBright('\nWARNING: No configuration found! 🚨'));
        console.log(chalk.bold('Use the "init" command to create a new configuration.'));
        return;
    }

    if (selectedOptionsCount !== 1) {
        viewConfig();
    } else {
        const selectedType = Object.keys(options).find(opt => options[opt]);

        switch (selectedType) {
            case 'overwrite':
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'overwrite',
                        message: 'Are you sure you want to overwrite the configuration?',
                        default: false,
                    }
                ).then((answers) => {
                    if (answers.overwrite)
                        setConfigs();
                    else {
                        console.log(chalk.blueBright('\nAll right, the configuration will remain intact. 🤝'));
                        return;
                    }
                });
                break;
            case 'reset':

                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'overwrite',
                        message: 'Are you sure you want to reset all the configuration?',
                        default: false,
                    }
                ).then((answers) => {
                    if (answers.overwrite) {
                        deleteAllInternalConfig();
                        console.log(chalk.greenBright('\nConfiguration reset successfully! ♻'));
                    }
                    else {
                        console.log(chalk.blueBright('\nAll right, the configuration will remain intact. 🤝'));
                        return;
                    }
                });
                break;
            case 'view':
                viewConfig();
                break;
            default:
                console.log(chalk.red('Invalid option selected!'));
                break;
        }

    }
}

function viewConfig() {
    const config = getAllInternalConfig();

    console.log(chalk.magentaBright('\nCurrent Configuration:'));
    console.log(chalk.blueBright(`\n- Use Typescript: ${chalk.whiteBright(chalk.bold(config.useTypescript))}`));
    console.log(chalk.blueBright(`- Atoms Path: ${chalk.whiteBright(chalk.bold(config.atomsPath))}`));
    console.log(chalk.blueBright(`- Molecules Path: ${chalk.whiteBright(chalk.bold(config.moleculesPath))}`));
    console.log(chalk.blueBright(`- Organisms Path: ${chalk.whiteBright(chalk.bold(config.organismsPath))}`));
    console.log(chalk.blueBright(`- Templates Path: ${chalk.whiteBright(chalk.bold(config.templatesPath))}`));
    console.log(chalk.blueBright(`- Pages Path: ${chalk.whiteBright(chalk.bold(config.pagesPath))}`));
}