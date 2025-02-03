/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>src'],
    // Пути по которым находим файлы с тестами
    testMatch: [
        // Было изменено стандартное значение, поскольку оно не работало на mac
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>.jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1'
    }
}
