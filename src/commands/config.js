

export default function addConfigCommand(program) {
    program
        .command('config')
        .description('View or update the CLI configuration')
        .action(() => {
            console.log('config command');
        });
}   