module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // Apuntamos al nuevo archivo en la raíz
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        // Esta expresión regular es más robusta para encontrar archivos JS y JSX
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/mocks/fileMock.js"
    }
};