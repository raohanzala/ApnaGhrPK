import { SuccessAlertProps } from '@/app/types'
import React from 'react'

export default function SuccessAlert({message}: SuccessAlertProps) {
    return (
        <div className="bg-[#3E7C59]/10 border border-[#3E7C59] p-4 rounded-xl text-xs text-[#3E7C59] font-bold">
            {message}
        </div>
    )
}
