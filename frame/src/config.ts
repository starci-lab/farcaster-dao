import "dotenv/config"

export const config = () => ({
    apiKey: process.env.NEYNAR_API_KEY ?? ""
})