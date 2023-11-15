module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
      enabled: true,
      config: {
        // See `Config` section.
      },
    },
    'graphql':{
      config: {
        defaultLimit: -1
      }
    }
    //...
  });