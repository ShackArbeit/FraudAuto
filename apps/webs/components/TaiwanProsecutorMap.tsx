"use client";

import { PROSECUTORS } from "@/app/prosecutors/data";
import { FancyCheckbox } from "./FancyCheckbox";

type Props = {
  svgSrc?: string;
  selectedSlugs: Set<string>;
  onToggle: (slug: string, next: boolean) => void;
};

export default function TaiwanProsecutorMap({
  svgSrc = "/taiwan.svg",
  selectedSlugs,
  onToggle,
}: Props) {
  return (
    <div className="relative w-full">
      <img
        src={svgSrc}
        alt="Taiwan Map"
        className="block w-full max-h-[820px] select-none object-contain"
        draggable={false}
      />

      {PROSECUTORS.map((p) => {
        const isSelected = selectedSlugs.has(p.slug);
        return (
        <div
          key={p.slug}
          style={{
            position: "absolute",
            left: `${p.xPct}%`,
            top: `${p.yPct}%`,
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <button
            type="button"
            style={{
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
            onClick={() => onToggle(p.slug, !isSelected)}
            aria-label={p.nameZh}
            title={p.nameZh}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: isSelected ? "#0f766e" : "#0f172a",
                background: isSelected ? "rgba(13,148,136,0.12)" : "transparent",
                padding: "2px 6px",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              {p.nameZh}
            </div>
          </button>
          <FancyCheckbox
            id={p.slug}
            checked={isSelected}
            onCheckedChange={(next) => onToggle(p.slug, next)}
            checkedText="已選取"
            checkColor="#22c55e"
            size="sm"
          />
        </div>
        );
      })}
    </div>
  );
}
