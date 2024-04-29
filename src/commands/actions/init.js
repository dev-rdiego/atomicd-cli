import chalk from "chalk";
import { getAllConfig } from "../../utils/index.js";
import setConfigs from "../../utils/setConfigs.js";

export default async function initializeConfig() {

    const hasConfig = Object.keys(getAllConfig()).length > 0;

    if (hasConfig) {
        console.log(chalk.yellowBright('\nWARNING: Configuration already exists! 🚨'));
        console.log(chalk.bold('Use the "config" command to view or update the configuration.'));
    }
    else {
        console.log(chalk.magentaBright('\nWelcome to the Atomic Desing CLI configuration! 👾'));
        setConfigs();
    }
}

