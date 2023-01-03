// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro:{
        plugins:["~/server/index.ts"]
    },
    runtimeConfig:{
      mongodbUrl:process.env.MONGODB_URL,
      accessTokenKey:process.env.ACCESS_TOKEN,
      refreshTokenKey:process.env.REFRESH_TOKEN
    },
})
