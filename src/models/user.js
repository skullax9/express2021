export default (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
    });
    User.associate = function(models) {
        models.user.hasOne(models.permission);
    }
    return User;
};