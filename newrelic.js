var secrets = require('./server/config/secrets');

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
var NEW_RELIC_LICENSE_KEY;

exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['djfrsn-vivy'],
  /**
   * Your New Relic license key.
   */
  license_key: NEW_RELIC_LICENSE_KEY || secrets.newrelic_key,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
};
