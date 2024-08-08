
import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame"
import { NextRequest, NextResponse } from "next/server"
import { encodeFunctionData, parseEther } from "viem"
import { baseSepolia } from "viem/chains"
import type { FrameTransactionResponse } from "@coinbase/onchainkit/frame"

import BuyMeACoffeeABI from "./abi"
import { envConfig } from "@/config"
export const BUY_MY_COFFEE_CONTRACT_ADDR = "0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f"

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
    const body: FrameRequest = await req.json()
    const { isValid } = await getFrameMessage(body, { neynarApiKey: envConfig().neynarApiKey })

    if (!isValid) {
        return new NextResponse("Message not valid", { status: 500 })
    }

    const data = encodeFunctionData({
        abi: BuyMeACoffeeABI,
        functionName: "buyCoffee",
        args: [parseEther("1"), "Coffee all day!"],
    })

    const txData: FrameTransactionResponse = {
        chainId: `eip155:${baseSepolia.id}`,
        method: "eth_sendTransaction",
        params: {
            abi: [],
            data,
            to: BUY_MY_COFFEE_CONTRACT_ADDR,
            value: parseEther("0.00004").toString(), // 0.00004 ETH
        },
    }
    return NextResponse.json(txData)
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req)
}

export const dynamic = "force-dynamic"
