module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  preset: '@shelf/jest-mongodb',
  roots: ['src', '__mocks__']
}
