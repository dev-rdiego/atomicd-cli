import chalk from "chalk";
import inquirer from "inquirer";
import { setInternalConfig } from "./index.js";

export default async function setConfigs() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'useTypescript',
                message: 'Do you want to use Typescript?',
                default: true,
            },
            {
                type: 'input',
                name: 'defaultComponentPath',
                message: 'Enter the components path',
                default: 'src/lib/components',
            },
            {
                type: 'input',
                name: 'defaultTemplatePath',
                message: 'Enter the layouts path',
                default: 'src/lib/views/layouts',
            },
            {
                type: 'input',
                name: 'defaultPagePath',
                message: 'Enter the pages path',
                default: 'src/lib/views/pages',
            },
        ]);

        setInternalConfig('useTypescript', answers.useTypescript);
        setInternalConfig('componentsPath', answers.defaultComponentPath);
        setInternalConfig('atomsPath', answers.defaultComponentPath + '/atoms');
        setInternalConfig('moleculesPath', answers.defaultComponentPath + '/molecules');
        setInternalConfig('organismsPath', answers.defaultComponentPath + '/organisms');
        setInternalConfig('templatesPath', answers.defaultTemplatePath);
        setInternalConfig('pagesPath', answers.defaultPagePath);

        console.log(chalk.greenBright('\nConfiguration saved successfully! 🚀'));
    } catch (error) {
        console.error('Error occurred during prompt:', error);
    }
}
