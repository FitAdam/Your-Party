module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person", {
      first_name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      }
    });
  
    return Person;
  };