import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs-extra";
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
                type: 'confirm',
                name: 'createCssFiles',
                message: 'Do you want to create CSS files?',
                default: true,
            },
            {
                type: 'list',
                name: 'componentContentType',
                message: 'Select the component strcuture you want to use:',
                choices: [
                    'Class Components',
                    'Class Components Exported',
                    'Functional Components',
                    'Functional Components Exported',
                    'Arrow Functions Components',
                    'Arrow Functions Components Exported'],
                default: 'Functional Components',
                transformer: function (value) {
                    return value.toLowerCase().replace(/ /g, '-');
                }
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
            {
                type: 'confirm',
                name: 'createDirectories',
                message: 'Do you want to create the directories now?',
                default: true,
            }
        ]);

        setInternalConfig('useTypescript', answers.useTypescript);
        setInternalConfig('componentsPath', answers.defaultComponentPath);
        setInternalConfig('createCssFiles', answers.createCssFiles);
        setInternalConfig('componentContentType', answers.componentContentType);
        setInternalConfig('atomsPath', answers.defaultComponentPath + '/atoms');
        setInternalConfig('moleculesPath', answers.defaultComponentPath + '/molecules');
        setInternalConfig('organismsPath', answers.defaultComponentPath + '/organisms');
        setInternalConfig('templatesPath', answers.defaultTemplatePath);
        setInternalConfig('pagesPath', answers.defaultPagePath);

        if (answers.createDirectories) {
            const directories = [
                answers.defaultComponentPath,
                answers.defaultTemplatePath,
                answers.defaultPagePath,
                answers.defaultComponentPath + '/atoms',
                answers.defaultComponentPath + '/molecules',
                answers.defaultComponentPath + '/organisms'
            ];

            directories.forEach(async (dir) => {
                try {
                    await fs.ensureDir(dir);
                    console.log(chalk.greenBright(`Directory ${dir} created successfully! 🚀`));
                } catch (error) {
                    console.error(chalk.redBright(`Error creating directory ${dir}: ${error}`));
                }
            });
        }

        console.log(chalk.greenBright('\nConfiguration saved successfully! 🚀'));
    } catch (error) {
        console.error('Error occurred during prompt:', error);
    }
}
