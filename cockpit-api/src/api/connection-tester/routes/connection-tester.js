'use strict';

/**
 * connection-tester router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::connection-tester.connection-tester');
