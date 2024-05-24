import { ReactNode } from "react"

export interface ISelectProps {
    id: string 
    className: string 
    value: string 
    children: ReactNode
    onChange: (e: string) => void
}