import fs from 'fs-extra';
import { getAllInternalConfig } from './index.js';

export default function componentExists(component) {
    const config = getAllInternalConfig();

    const componentPaths = [
        { path: config.atomsPath, name: 'atoms' },
        { path: config.moleculesPath, name: 'molecules' },
        { path: config.organismsPath, name: 'organisms' },
        { path: config.templatesPath, name: 'templates' },
        { path: config.pagesPath, name: 'pages' }
    ];

    for (const { path, name } of componentPaths) {
        const directoryPath = `${path}/${component}`;

        try {
            if (fs.existsSync(directoryPath))
                return { exists: true, foundIn: name };

        } catch (error) {
            console.error(`Error checking directory: ${error}`);
        }
    }

    return { exists: false, foundIn: '' };
}
