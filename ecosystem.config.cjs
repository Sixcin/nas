module.exports = {
  apps: [
    {
      cwd: "/opt/online/icekylin/nodenas/",
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
      name: "node-nas",
      node_args: "--es-module-specifier-resolution=node",
      script: "./packages/node-nas/dist/main.js",
      watch: false,
    },
  ],
};
