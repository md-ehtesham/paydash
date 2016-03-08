'use strict';

module.exports = function(sequelize, DataTypes) {
    var notifications = sequelize.define('notifications', {
        msg: DataTypes.STRING,
        region_code: DataTypes.STRING,
        notification_type: DataTypes.INTEGER,
        viewed: DataTypes.BOOLEAN,
        batch_id: DataTypes.INTEGER
    }, {
        timestamps: true,
        underscored: true,
        classMethods: {
            
            associate: function(models) {
                // associations can be defined here
                notifications.belongsTo(models.User, {
                    onDelete: 'CASCADE',
                    foreignKey: 'user_id',

                });
            }
        }
    });
    return notifications;
};
