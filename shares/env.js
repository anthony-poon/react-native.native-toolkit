// https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html
import Constants from "expo-constants";

const env = !!__DEV__ ? "__DEV__" : Constants.manifest.releaseChannel;

const config = {
    "__DEV__": {
        DOTENV: "dev",
        END_POINT_URL: "http://192.168.1.196:4080"
    },
    "default": {
        DOTENV: "prod",
        END_POINT_URL: "http://native-toolkit.anthony-poon.com"
    }
};

export default config[env];