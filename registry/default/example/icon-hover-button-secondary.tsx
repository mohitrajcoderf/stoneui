"use client"

import { PlusIcon } from "lucide-react"

import {
    IconHoverButton,
    IconHoverButtonIcon,
    IconHoverButtonText,
} from "@/registry/default/stoneui/icon-hover-button"

export default function IconHoverButtonSecondary() {
    return (
        <IconHoverButton variant="secondary">
            <IconHoverButtonIcon>
                <PlusIcon />
            </IconHoverButtonIcon>
            <IconHoverButtonText>Secondary</IconHoverButtonText>
        </IconHoverButton>
    )
}