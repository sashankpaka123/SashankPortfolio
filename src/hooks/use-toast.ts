import { useState } from "react"

export const useToast = () => {
    const [toasts, setToasts] = useState<any[]>([])
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toast = (options: any) => {
        const id = Math.random().toString(36).substring(7)
        setToasts(prev => [...prev, { ...options, id }])
        console.log("Toast:", options)
    }

    return { toast, toasts }
}
