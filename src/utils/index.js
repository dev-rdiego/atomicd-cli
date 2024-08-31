import fs from 'fs-extra';
import path from 'path';

// Define the path for your config file
const configFilePath = path.join(process.cwd(), 'atomicd.config.json');

// Helper function to read the config file
const readConfigFile = () => {
    try {
        return fs.readJsonSync(configFilePath);
    } catch (error) {
        // Return an empty object if the file doesn't exist
        return {};
    }
};

// Helper function to write to the config file
const writeConfigFile = (config) => {
    fs.writeJsonSync(configFilePath, config, { spaces: 2 });
};

const setInternalConfig = (key, value) => {
    const config = readConfigFile();
    config[key] = value;
    writeConfigFile(config);
};

const getInternalConfigValue = (key) => {
    const config = readConfigFile();
    return config[key];
};

const getAllInternalConfig = () => readConfigFile();

const deleteInternalConfig = (key) => {
    const config = readConfigFile();
    delete config[key];
    writeConfigFile(config);
};

const deleteAllInternalConfig = () => {
    writeConfigFile({});
};

export { setInternalConfig, getInternalConfigValue, getAllInternalConfig, deleteInternalConfig, deleteAllInternalConfig };
