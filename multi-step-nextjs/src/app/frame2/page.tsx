import React from "react"
import { getFrameMetadata } from "@coinbase/onchainkit/frame"
import type { Metadata } from "next"
import { envPublicConfig } from "@/config"

const frameMetadata = getFrameMetadata({
    buttons: [
        {
            label: "Story time 222!",
        },
        {
            action: "link",
            label: "Link to Google",
            target: "https://www.google.com",
        },
        {
            label: "Redirect to pictures",
            action: "post_redirect",
        },
    ],
    image: {
        src: `${envPublicConfig().url}/park-3.png`,
        aspectRatio: "1:1",
    },
    input: {
        text: "Tell me a boat story",
    },
    postUrl: `${envPublicConfig().url}/api/frame2`,
})

export const metadata: Metadata = {
    title: "zizzamia.xyz",
    description: "LFG",
    openGraph: {
        title: "zizzamia.xyz",
        description: "LFG",
        images: [`${envPublicConfig().url}/park-1.png`],
    },
    other: {
        ...frameMetadata,
    },
}

const Page = () => {
    return (
        <>
            <h1>zizzamia.xyz</h1>
        </>
    )
}

export default Page
