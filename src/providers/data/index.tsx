import graphqlDataProvider, { GraphQLClient
    , liveProvider as graphqlLiveProvider
 } from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetch-wrapper";
import {createClient} from "graphql-ws"
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_URL = `${API_BASE_URL}/api`;

export const WS_URL = 'wss://api.crm.refine.dev/graphql'
export const client = new GraphQLClient(API_URL, {
    fetch:(url:string, options:RequestInit)=>{
        try {
            return fetchWrapper(url, options);
        } catch (error) {
            return Promise.reject(error as Error);
        }
    }
})

export const wsClient = typeof window !== "undefined"
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
            const accessToken = localStorage.getItem("access_token")
            return{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        },
    }) : undefined

export const dataProvider = graphqlDataProvider(client)
export const liveProvider = wsClient ? graphqlLiveProvider(wsClient) : undefined;