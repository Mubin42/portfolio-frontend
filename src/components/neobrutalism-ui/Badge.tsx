import {cva, type VariantProps} from 'class-variance-authority'

import * as React from 'react'

import {cn} from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-base border-2 text-black border-border px-2.5 font-base py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-main',
        neutral: 'bg-white dark:bg-secondaryBlack dark:text-text',
      },
      size: {
        md: 'h-6',
        sm: 'h-6',
        lg: 'h-7 px-4 text-lg font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
}

function Badge({className, variant, size, ...props}: BadgeProps) {


  return (
    <div className={cn(badgeVariants({variant, size}), className)} {...props} />
  )
}

export {Badge, badgeVariants}