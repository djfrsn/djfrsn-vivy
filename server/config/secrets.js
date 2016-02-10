module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/ReactWebpackNode',
  sessionSecret: process.env.SESSION_SECRET || 'secret',
  google: {
    clientID: process.env.GOOGLE_CLIENTID || 'secret',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL: process.env.GOOGLE_CALLBACK || "/auth/google/callback"
  },
  newrelic: process.env.NEW_RELIC_LICENSE_KEY || 'secret'
};