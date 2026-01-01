const rateLimiter = (limit = 10, windowMs = 60 * 1000) => {
  const store = new Map(); 
  setInterval(() => {
    store.clear();
  }, windowMs);

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!store.has(ip)) {
      store.set(ip, { count: 1, startTime: now });
      return next();
    }

    const data = store.get(ip);

    if (now - data.startTime > windowMs) {
      store.set(ip, { count: 1, startTime: now });
      return next();
    }

    if (data.count >= limit) {
      return res.status(429).json({
        message: "Rate limit exceeded. Try again later."
      });
    }

    data.count++;
    next();
  };
};

module.exports = rateLimiter;
