"use client"

import { PlusIcon } from "lucide-react"

import {
    IconHoverButton,
    IconHoverButtonIcon,
    IconHoverButtonText,
} from "@/registry/default/stoneui/icon-hover-button"

export default function IconHoverButtonGhost() {
    return (
        <IconHoverButton variant="ghost">
            <IconHoverButtonIcon>
                <PlusIcon />
            </IconHoverButtonIcon>
            <IconHoverButtonText>Ghost</IconHoverButtonText>
        </IconHoverButton>
    )
}