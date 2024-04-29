import Configstore from 'configstore';

const config = new Configstore('atomd-cli');

const setInternalConfig = (key, value) => config.set(key, value);
const getInternalConfigValue = (key) => config.get(key);
const getAllInternalConfig = () => config.all;
const deleteInternalConfig = (key) => config.delete(key);
const deleteAllInternalConfig = () => config.clear();

export { setInternalConfig, getInternalConfigValue, getAllInternalConfig, deleteInternalConfig, deleteAllInternalConfig };

