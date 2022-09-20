module.exports = (sequelize, Datatypes) => {
  const Users = sequelize.define("Users", {
    name: {
      type: Datatypes.STRING(255),
      allowNull: false,
      validate: {
        len: [2, 20],
      },
    },
    email: {
      type: Datatypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
        len: [5, 50],
      },
    },
    password: {
      type: Datatypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: Datatypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: Datatypes.ENUM({
        values: [
          "admin",
          // 'moderator',
          "user",
        ],
      }),

      defaultValue: "user",
    },
  });

  // Users.associate =(models)=>{
  //     Users.hasMany(models.Cartitems,{
  //         onDelete:"cascade",
  //     })
  // }

  // Users.associate =(models)=>{
  //     Users.hasMany(models.Orders,{
  //         onDelete:"cascade",
  //     })
  // }

  // Users.associate =(models)=>{
  //     Users.hasMany(models.Payments,{
  //         onDelete:"cascade",
  //     })
  // }

  return Users;
};
