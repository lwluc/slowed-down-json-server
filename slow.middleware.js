const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const slowDown = async (delayInMilliSeconds) => new Promise((resolve) => setTimeout(resolve, delayInMilliSeconds));

export const slowingDownMiddleware = async (req, res, next) => {
  const delay = randomIntFromInterval(0, 2000);
  await slowDown(delay);
  next();
};
