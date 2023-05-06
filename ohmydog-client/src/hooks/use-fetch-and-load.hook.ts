import { AxiosCall } from '@/models/axios-call.model'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

export const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(false)
    let controller: AbortController

    const callEndpoint = async (axiosCall: AxiosCall<any>) => {
        if (axiosCall.controller) controller = axiosCall.controller
        setLoading(true)
        let result = {} as AxiosResponse<any>
        try {
            result = await axiosCall.call
        } catch (err: any) {
            setLoading(false)
            throw err
        }
        setLoading(false)
        return result
    }

    const cancelEndpoint = () => {
        setLoading(false)
        controller && controller.abort()
    }

    useEffect(() => () => cancelEndpoint(), [])

    return { loading, callEndpoint }
}