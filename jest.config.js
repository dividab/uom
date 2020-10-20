module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/!(*.test).{ts,tsx}", "!(**/__tests__/**)"],
};
