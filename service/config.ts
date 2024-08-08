// 全局配置文件

const environment = {
    DEVELOPMENT: 'http://192.168.0.222:8080',
    TESTING: '',
    PRODUCTION: ''
};

const baseUrl: string = environment.TESTING; // 正式环境

const version: number = 1;
const vuex_version: string = `1.0.${version}`;

const flag_hot: boolean = false;

export {
    baseUrl,
    version,
    vuex_version,
    flag_hot,
};
