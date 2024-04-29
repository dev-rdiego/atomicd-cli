import * as fs from "fs-extra";
import chalk from "chalk";


export default async function createDirectory(path) {
    try {
        await fs.ensureDir(path);
        console.log(chalk.green(`Directory created successfully: ${path}`));
    } catch (error) {
        console.error('Error occurred during directory creation:', error);
    }
}