module.exports = {
  port: 80,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://terror:terror123@ds163377.mlab.com:63377/myblog'
};
