import { ReactNode } from "react"

export interface ISelectProps {
    id: string 
    className: string 
    value?: string 
    children: any
    onChange?: (e: string) => void
}