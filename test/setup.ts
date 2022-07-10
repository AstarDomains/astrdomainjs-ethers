global.console = {
  ...console,
  // hide console.error during the test
  error: jest.fn(),
};
