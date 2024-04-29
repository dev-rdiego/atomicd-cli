import * as fs from "fs-extra";
import chalk from "chalk";
import { getAllInternalConfig } from "./index.js";
import { getComponentFileContent, getExportFileContent } from "./filesContent.js";


export default async function createComponentFiles(component, selectedType) {
    console.log(`\nCreating ${chalk.blueBright(component)} component as ${chalk.blueBright(selectedType)}...`);

    const config = getAllInternalConfig();

    const componentFileExtension = config.useTypescript ? 'tsx' : 'jsx';
    const componentFileContent = getComponentFileContent(component, config.useTypescript, config.componentContentType);

    const exportFileExtension = config.useTypescript ? 'ts' : 'js';
    const exportFileContent = getExportFileContent(component);

    const filePath = {
        atom: `${config.atomsPath}/${component}`,
        molecule: `${config.moleculesPath}/${component}`,
        organism: `${config.organismsPath}/${component}`,
        layout: `${config.templatesPath}/${component}`,
        page: `${config.pagesPath}/${component}`,
    };

    try {

        await fs.outputFile(`${filePath[selectedType]}/${component}.${componentFileExtension}`, componentFileContent);
        await fs.outputFile(`${filePath[selectedType]}/index.${exportFileExtension}`, exportFileContent);

        config.createCssFiles && await fs.outputFile(`${filePath[selectedType]}/${component}.css`, '');

        console.log(chalk.greenBright(`${chalk.yellowBright(component)} component created successfully! 🚀`));
    } catch (error) {
        console.error(chalk.redBright(`Error creating ${component} component: ${error}`));
    }
}