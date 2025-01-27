"use client"

import { PlusIcon } from "lucide-react"

import {
    IconHoverButton,
    IconHoverButtonIcon,
    IconHoverButtonText,
} from "@/registry/default/stoneui/icon-hover-button"

export default function IconHoverButtonOutline() {
    return (
        <IconHoverButton variant="outline">
            <IconHoverButtonIcon>
                <PlusIcon />
            </IconHoverButtonIcon>
            <IconHoverButtonText>Outline</IconHoverButtonText>
        </IconHoverButton>
    )
}
