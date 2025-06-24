'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

interface TooltipProps {
  children: React.ReactNode
}

export default function Tooltip({ children }: TooltipProps) {
  const [tooltipVisible, setTooltipVisible] = useState(true)

  return (
    <div
      className={cn(
        'relative rounded-xl bg-[#464646] px-4 py-3 text-sm text-white shadow-md',
        !tooltipVisible && 'invisible',
      )}
    >
      <button
        className="absolute top-2 right-2 text-white hover:opacity-60"
        onClick={() => {
          setTooltipVisible(false)
        }}
      >
        <X className="h-4 w-4" />
      </button>
      {children}
      <div className="absolute top-full left-[90%] -ml-2 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-[#464646]" />
    </div>
  )
}
