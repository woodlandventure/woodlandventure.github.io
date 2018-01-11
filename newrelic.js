'use strict'
require('dotenv').load();
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

let license = process.env.NEW_RELIC_LICENSE_KEY;
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['woodlandventure'],
  /**
   * Your New Relic license key.
   */
  license_key: license,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
