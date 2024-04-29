import chalk from 'chalk';
import createComponentFiles from '../../utils/createComponentFiles.js';
import { getAllInternalConfig } from '../../utils/index.js';
import validatePascalCase from '../../utils/validatePascalCase.js';

export default function createComponent(component, options) {

    const hasConfig = Object.keys(getAllInternalConfig()).length > 0;
    const isValidComponentName = validatePascalCase(component);

    if (!hasConfig) {
        console.log(chalk.yellowBright('\nWARNING: No configuration found! 🚨'));
        console.log(chalk.bold('Use the "init" command to create a new configuration.'));
        return;
    }

    if (!isValidComponentName) {
        console.log(chalk.bold(chalk.redBright('Error:'), 'Invalid component name. Please use PascalCase.'));
        return;
    }

    const selectedOptionsCount = ['atom', 'molecule', 'organism', 'layout', 'page']
        .map(opt => options[opt])
        .filter(opt => opt)
        .length;

    if (selectedOptionsCount !== 1) {
        console.log(chalk.bold(chalk.redBright('Error:'), 'You must select exactly one component type'));
    } else {
        const selectedType = Object.keys(options).find(opt => options[opt]);
        createComponentFiles(component, selectedType);
    }
}
