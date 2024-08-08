import { NeynarFrameCreationRequest } from "@neynar/nodejs-sdk/build/neynar-api/v2"
import { neynarClient } from "./neynar-client"

export const createTestFrame = async () => {
    const creationRequest: NeynarFrameCreationRequest = {
        name: "starci",
        pages: [
            {       
                uuid: "page1",
                image: {
                    url: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/316301705_114932571436049_549628509009748365_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHaIKEt134Xa2ZjdJrvilRUrDdtxUGd03esN23FQZ3Td7fMEvFORvSbm5TKvy8qC_fb1km34ZjkOpjj4ioMFklQ&_nc_ohc=1NoGOPM6UIYQ7kNvgGxDQXE&_nc_ht=scontent.fsgn5-12.fna&oh=00_AYBGBPlNXVOHSvWWfQ1hIgM2zVg-HzJ3o57fqONKCWRsRw&oe=66BADA4A",
                    aspect_ratio: "1.91:1",
                },
                title: "StarCi NFT minting frame",
                buttons: [
                    {
                        action_type: "post",
                        title: "Check it now",
                        index: 1,
                        next_page: {
                            uuid: "page2"
                        },
                    },
                ],
                input: {
                    text: {
                        enabled: false,
                    },
                },
                version: "vNext",
            },
            {       
                uuid: "page2",
                image: {
                    url: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/316301705_114932571436049_549628509009748365_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHaIKEt134Xa2ZjdJrvilRUrDdtxUGd03esN23FQZ3Td7fMEvFORvSbm5TKvy8qC_fb1km34ZjkOpjj4ioMFklQ&_nc_ohc=1NoGOPM6UIYQ7kNvgGxDQXE&_nc_ht=scontent.fsgn5-12.fna&oh=00_AYBGBPlNXVOHSvWWfQ1hIgM2zVg-HzJ3o57fqONKCWRsRw&oe=66BADA4A",
                    aspect_ratio: "1.91:1",
                },
                title: "StarCi NFT minting frame",
                buttons: [
                    {
                        action_type: "post",
                        title: "Heleee",
                        index: 1,
                    },
                ],
                input: {
                    text: {
                        enabled: false,
                    },
                },
                version: "vNext",
            },
        ],
    }  
    const frame = await neynarClient.publishNeynarFrame(creationRequest) 
    console.log(frame) 
    return frame
}