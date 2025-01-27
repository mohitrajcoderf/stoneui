"use client"

import { PlusIcon } from "lucide-react"

import {
    IconHoverButton,
    IconHoverButtonIcon,
    IconHoverButtonText,
} from "@/registry/default/stoneui/icon-hover-button"

export default function IconHoverButtonPrimary() {
    return (
        <IconHoverButton>
            <IconHoverButtonIcon>
                <PlusIcon />
            </IconHoverButtonIcon>
            <IconHoverButtonText>Primary</IconHoverButtonText>
        </IconHoverButton>
    )
}