import chalk from 'chalk';

export default function configActions(options) {
    const selectedOptionsCount = ['overwrite', 'reset', 'view']
        .map(opt => options[opt])
        .filter(opt => opt)
        .length;

    if (selectedOptionsCount !== 1) {
        // TODO: view the configuration
    } else {
        const selectedType = Object.keys(options).find(opt => options[opt]);
        console.log(`Performing ${selectedType} action...`);
        // TODO: Implement configuration action logic
    }
}
