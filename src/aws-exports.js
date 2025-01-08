const awsconfig = {
    Auth: {
        identityPoolId: 'your-identity-pool-id',
        region: 'your-region',
        userPoolId: 'your-user-pool-id',
        userPoolWebClientId: 'your-web-client-id',
    },
    Storage: {
        AWSS3: {
            bucket: 'your-bucket-name',
            region: 'your-region',
        },
    },
    // other configurations
};
export default awsconfig;
