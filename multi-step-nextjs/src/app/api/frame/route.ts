import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from "@coinbase/onchainkit/frame"
import { NextRequest, NextResponse } from "next/server"
import { envConfig, envPublicConfig } from "../../../config"

async function getResponse(req: NextRequest): Promise<NextResponse> {
    let accountAddress: string | undefined = ""
    let text: string | undefined = ""

    console.log(envConfig().neynarApiKey)
    
    const body: FrameRequest = await req.json()
    const { isValid, message } = await getFrameMessage(body, { neynarApiKey: envConfig().neynarApiKey, allowFramegear: true })

    if (isValid) {
        accountAddress = message.interactor.verified_accounts[0]
        console.log(accountAddress)
    }

    if (message?.input) {
        text = message.input
    }

    if (message?.button === 3) {
        return NextResponse.redirect(
            "https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms",
            { status: 302 },
        )
    }

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: `🌲 ${text} 🌲`,
                    action: "post", 
                },
            ],
            image: {
                src: `${envPublicConfig().url}/park-1.png`,
            },
            postUrl: `${envPublicConfig().url}/api/frame2`,
        }),
    )
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req)
}

export const dynamic = "force-dynamic"