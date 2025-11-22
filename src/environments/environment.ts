const DOMAIN: string = 'https://690db645a6d92d83e852cabc.mockapi.io';

interface IEnvironment {
    production: boolean
    key: string;
    domain: string;
    apiUrl: string;
}

export const environment: IEnvironment = {
    production: false,
    key: '',
    domain: DOMAIN,
    apiUrl: DOMAIN + '/api/v1',
};
