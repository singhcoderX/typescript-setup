module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["text-summary", "html"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
