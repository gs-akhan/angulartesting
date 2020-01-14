module.exports = {
    preset : "jest-preset-angular",
    roots : ['src'],
    testRegex : [".spec.ts"],
    setupFilesAfterEnv : ["<rootDir>/src/setup-jest.ts"]
}