# Atomic Design CLI

Atomic Design CLI is a command-line tool that allows you to automatically generate atomic components in an atomic design structure for web applications. This CLI creates directories and files with predefined content based on the provided specifications.

## Installation

To use Atomic Design CLI, you need to have `Node.js` and `npm` installed on your computer. Then, you can install the package globally using `npm`:

```bash
npm install -g atomicd-cli
```

## Usage

### Initialize CLI Configuration

Use the init command to initialize the CLI configuration:

```bash
atomicd init
```

This command will guide you through setting up the initial configuration for the Atomic Design CLI.

> **IMPORTANT**: *Ensure you have a valid configuration before using the create or config commands. Use atomicd init to set up the configuration if it does not exist*.

### CLI Configuration

Use the `config` command to interact with the CLI configuration:

```bash
atomicd config [options]
Options:

-o, --overwrite: Overwrite the current configuration.
-r, --reset: Reset the configuration to default.
-v, --view: View the current configuration.
```

### Creating A New Component

Use the `create` command to create a new component with various options:

```bash
atomicd create <component> [options]

Arguments:

<component>: The name of the component to create.
Options:

-a, --atom: Create an atom component.
-m, --molecule: Create a molecule component.
-o, --organism: Create an organism component.
-l, --layout: Create a layout component (referred to as 'template' in Atomic Design).
-p, --page: Create a page component.
```

## Contribution

If you encounter any issues or have ideas to improve this CLI, feel free to open an issue or submit a pull request on [GitHub - atomicd-cli](https://github.com/dev-rdiego/atomicd-cli)

## Author

Developed by [Diego Rivas](https://github.com/rivasdiego-dev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
