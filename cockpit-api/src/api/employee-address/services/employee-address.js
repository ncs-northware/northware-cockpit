'use strict';

/**
 * employee-address service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-address.employee-address');
