import chalk from 'chalk';

export default function createComponent(component, options) {
    const selectedOptionsCount = ['atom', 'molecule', 'organism', 'layout', 'page']
        .map(opt => options[opt])
        .filter(opt => opt)
        .length;

    if (selectedOptionsCount !== 1) {
        console.log(chalk.bold(chalk.redBright('Error:'), 'You must select exactly one component type'));
    } else {
        const selectedType = Object.keys(options).find(opt => options[opt]);
        console.log(`Creating ${selectedType} component named "${component}"...`);
        // TODO: Implement component creation logic
    }
}
