export default async function setConfigs() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'useTypescript',
                message: 'Do you want to use TSX files?',
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

        // TODO: Save the configuration to a file and create the directories
        console.log(chalk.green('\nConfiguration saved successfully! 🚀'));
    } catch (error) {
        console.error('Error occurred during prompt:', error);
    }
}