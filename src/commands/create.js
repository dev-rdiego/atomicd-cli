import createAction from "./actions/create.js";

export default function addCreateCommand(program) {
    program
        .command("create")
        .argument("<component>", "Component name")
        .description("Create a new component")
        .option("-a, --atom", "Create an atom component")
        .option("-m, --molecule", "Create a molecule component")
        .option("-o, --organism", "Create an organism component")
        .option("-l, --layout", "Create a layout component (Reffered as 'template' in Atomic Design)")
        .option("-p, --page", "Create a page component")
        .action((component, options) => {
            createAction(component, options);
        });
}