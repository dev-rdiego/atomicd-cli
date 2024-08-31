import chalk from 'chalk';
import inquirer from 'inquirer';
import setConfigs from '../../utils/setConfigs.js';
import { deleteAllInternalConfig, getAllInternalConfig } from '../../utils/index.js';

export default async function configActions(options) {
    const selectedOption = Object.keys(options).find(opt => options[opt]);

    if (!hasConfig()) {
        console.log(chalk.yellowBright('\nWARNING: No configuration found! 🚨'));
        console.log(chalk.bold('Use the "init" command to create a new configuration.'));
        return;
    }

    if (selectedOption) {
        await handleOption(selectedOption);
    } else {
        viewConfig();
    }
}

function hasConfig() {
    return Object.keys(getAllInternalConfig()).length > 0;
}

async function handleOption(option) {
    switch (option) {
        case 'overwrite':
            await confirmAction(
                'overwrite',
                'Are you sure you want to overwrite the configuration?',
                async () => await setConfigs()
            );
            break;

        case 'reset':
            await confirmAction(
                'reset',
                'Are you sure you want to reset all the configuration?',
                () => {
                    deleteAllInternalConfig();
                    console.log(chalk.greenBright('\nConfiguration reset successfully! ♻'));
                }
            );
            break;

        case 'view':
            viewConfig();
            break;

        default:
            console.log(chalk.red('Invalid option selected!'));
            break;
    }
}

async function confirmAction(action, message, onConfirm) {
    const answers = await inquirer.prompt({
        type: 'confirm',
        name: action,
        message,
        default: false,
    });

    if (answers[action]) {
        await onConfirm();
        console.log(chalk.greenBright(`\n${action.charAt(0).toUpperCase() + action.slice(1)} action completed successfully! 🚀`));
    } else {
        console.log(chalk.blueBright('\nAction canceled. 🤝'));
    }
}

function viewConfig() {
    const config = getAllInternalConfig();

    console.log(chalk.magentaBright('\nCurrent Configuration:'));
    console.log(chalk.blueBright(`- Use Typescript: ${formatBoolean(config.useTypescript)}`));
    console.log(chalk.blueBright(`- Create CSS Files: ${formatBoolean(config.createCssFiles)}`));
    console.log(chalk.blueBright(`- Component Content Type: ${chalk.whiteBright(chalk.bold(config.componentContentType))}`));
    console.log(chalk.blueBright(`- Components Path: ${chalk.whiteBright(chalk.bold(config.componentsPath))}`));
    console.log(chalk.blueBright(`- Templates Path: ${chalk.whiteBright(chalk.bold(config.templatesPath))}`));
    console.log(chalk.blueBright(`- Pages Path: ${chalk.whiteBright(chalk.bold(config.pagesPath))}`));
}

function formatBoolean(value) {
    return value ? chalk.greenBright('Yes ✅') : chalk.redBright('No ❌');
}
