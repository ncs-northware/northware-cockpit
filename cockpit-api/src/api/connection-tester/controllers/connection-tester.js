'use strict';

/**
 * connection-tester controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::connection-tester.connection-tester');
