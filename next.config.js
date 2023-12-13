const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sroovy",
        mongodb_password: "HqTV6J6N2TXDisTZ",
        mongodb_clustername: "cluster0",
        mongodb_database: "test",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sroovy",
      mongodb_password: "HqTV6J6N2TXDisTZ",
      mongodb_clustername: "cluster0",
      mongodb_database: "prod",
    },
  };
};
