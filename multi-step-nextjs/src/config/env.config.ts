export const envPublicConfig = () => ({
    url: process.env.NEXT_PUBLIC_URL ?? ""
})

export const envConfig = () => ({
    neynarApiKey: process.env.NEYNAR_API_KEY ?? ""
})