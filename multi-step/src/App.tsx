import React from "react"
import "./App.css"
import { base } from "viem/chains"
import { envConfig } from "./config"
import { OnchainKitProvider } from "@coinbase/onchainkit"

import "@coinbase/onchainkit/styles.css"

export const App = () => {
    return (
        <OnchainKitProvider apiKey={envConfig().onchainKitApiKey} chain={base}>
            <div/>
        </OnchainKitProvider>
    )
}