import Configstore from 'configstore';

const config = new Configstore('atomd-cli');

const setConfig = (key, value) => config.set(key, value);
const getConfigValue = (key) => config.get(key);
const getAllConfig = () => config.all;
const deleteConfig = (key) => config.delete(key);

export { setConfig, getConfigValue, getAllConfig, deleteConfig };

