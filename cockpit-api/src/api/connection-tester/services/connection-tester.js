'use strict';

/**
 * connection-tester service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connection-tester.connection-tester');
