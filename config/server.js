module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_URL', ''),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '94cdb00f451f9436065d2c0efc46d991'),
    },
  },
});
