import { ColoredLabel } from "@/registry/default/stoneui/colored-label"

export default function ColoredLabelColor() {
    return (
        <div className="flex flex-wrap gap-2">
            <ColoredLabel color="#A294F9" textOpacity={0.5}>
                Text
            </ColoredLabel>
            <ColoredLabel color="#A294F9" bgOpacity={0.3}>
                Background
            </ColoredLabel>
            <ColoredLabel color="#A294F9" textOpacity={0.8} bgOpacity={0.5}>
                Text & Background
            </ColoredLabel>
        </div>
    )
}