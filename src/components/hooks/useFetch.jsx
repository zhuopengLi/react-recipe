import { useState, useEffect, useCallback } from "react";

export default function useFetch(url, method = "GET") {
    const [data, setData] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')
    const [options, setOptions] = useState(null)


    let errMsg = "background: red; color: white; border-radius: 5px; font-weight:bolder"
    let msg = "background: aquamarine; color: #1f2d3d; border-radius: 5px"

    const postData = data => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

const fetchData = useCallback(async (controller, fetchOptions) => {
        setIsPending(true)
        console.log(`%c Fetch %cSending ${method} request`, msg)

        try {
            const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
            if (!res.ok) {
                throw new Error(res.status)
            }
            const json = await res.json()

            setData(json)
            setError('')
        } catch (err) {
            if (err.name === "AbortError") {
                setIsPending(false)
                setError("Aborted")
                console.log("%c ERROR %cFetch aborted", errMsg)
            } else {
                setIsPending(false)
                setError("Could not fetch the data")
                console.log(`%c ERROR %c${err.message}`, errMsg)
            }
        }

        setIsPending(false)
    }, [url])

    useEffect(() => {

        const controller = new AbortController()

        if (method === "GET") {
            fetchData(controller)
        } else if (method === "POST" && options) {
            fetchData(controller, options)
        }

        return () => {
            controller.abort()
        }

    }, [fetchData, options, method])

    return { data, isPending, error, postData }
}