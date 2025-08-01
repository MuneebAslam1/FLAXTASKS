import * as React from "react"

import { cn } from "@/lib/utils"


const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" rounded-lg border bg-card text-card-foreground shadow-sm max-w-md", className)}
    {...props} />
))
Card.displayName = "Card"

const Imag = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" max-w-md hover:scale-102 transform", className)}
    {...props} />
))
Imag.displayName = "Dummy Image"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex  flex-col space-y-2.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl   md:text-lg lg:text-xl leading-tight font-semibold tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-left text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex align-left justify-left px-7 pb-5", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, Imag }
