'use strict';

var Queries = require('../../helpers/queries');


exports.showPage = {
    handler: function(request, reply) {
        return reply.view('musters/current');
    }
};

exports.getData = {
    handler: function(request, reply) {

        var sequelize = request.server.plugins.sequelize.db.sequelize;
        var active_region = request.query.active_region;
        var queryString = queries.current_musters(active_region);

        sequelize.query(queryString, {
            type: sequelize.QueryTypes.SELECT
        }).then(function(data) {
            reply(data);
        });
    }
};
