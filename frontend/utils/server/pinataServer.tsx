import pinataSDK from '@pinata/sdk'

export const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
)
