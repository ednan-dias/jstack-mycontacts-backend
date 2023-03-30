module.exports = (req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000/',
    'https://mycontacts-ednandias.netlify.app/',
  ];

  const origin = req.header('Origin');
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Max-Age', '10');
  }

  next();
};
