"use client";

import { useMemo, useState } from "react";
import TaiwanProsecutorMap from "@/components/TaiwanProsecutorMap";
import ProsecutorDashboard from "@/components/ProsecutorDashboard";
import { PROSECUTORS } from "@/app/prosecutors/data";

export default function HomeClient() {
  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(
    () => new Set()
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const selected = useMemo(
    () => PROSECUTORS.filter((item) => selectedSlugs.has(item.slug)),
    [selectedSlugs]
  );

  const handleToggle = (slug: string, next: boolean) => {
    setSelectedSlugs((prev) => {
      const nextSelected = new Set(prev);
      if (next) {
        nextSelected.add(slug);
      } else {
        nextSelected.delete(slug);
      }
      return nextSelected;
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_55%)] text-slate-900">
      <div className="mx-auto max-w-[1280px] px-10 py-12">
        <div className="grid grid-cols-[minmax(560px,1fr)_420px] gap-10">
          <section className="rounded-[32px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.15)] backdrop-blur">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  全台地檢署分布
                </h2>
                <p className="text-sm text-slate-500">
                  點擊地圖上的地檢署即可加入篩選
                </p>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                已選 {selected.length}/{PROSECUTORS.length}
              </div>
            </div>
            <TaiwanProsecutorMap
              selectedSlugs={selectedSlugs}
              onToggle={handleToggle}
            />
          </section>

          <ProsecutorDashboard
            selected={selected}
            totalCount={PROSECUTORS.length}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </div>
      </div>
    </div>
  );
}
