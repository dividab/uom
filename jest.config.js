// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testRegex: "./test/.+\\.test\\.ts$",
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.ts"],
//   moduleFileExtensions: ["ts", "js", "json", "node"],
//   coverageReporters: ["text-summary", "lcov"],
//   globals: {
//     "ts-jest": {
//       tsConfig: "<rootDir>/test/tsconfig.json"
//     }
//   }
// };

module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/!(*.test).{ts,tsx}", "!(**/__tests__/**)"],
};
