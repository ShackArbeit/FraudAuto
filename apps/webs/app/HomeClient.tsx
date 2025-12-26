"use client";

import { useState } from "react";
import TaiwanProsecutorMap from "@/components/TaiwanProsecutorMap";
import ProsecutorDashboard from "@/components/ProsecutorDashboard";
import { PROSECUTORS } from "@/components/data";

export default function HomeClient() {
  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(
    () => new Set()
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const selected = PROSECUTORS.filter((item) => selectedSlugs.has(item.slug));

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
  const handleDeleteAllSelected = () => {
    setSelectedSlugs(new Set());
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_55%)] text-slate-900">
      <div className="mx-auto max-w-[1600px] px-10 py-12  ">
        <div className="grid grid-cols-[minmax(560px,1fr)_420px] gap-10 ">
          <section className=" rounded-[32px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.15)] backdrop-blur">
            <div className="mb-5 flex items-start justify-between ">
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
              <button 
              onClick={handleDeleteAllSelected}
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-amber-200 bg-gradient-to-b from-amber-200 via-orange-100 to-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_8px_18px_rgba(180,83,9,0.18)] transition hover:from-amber-300 hover:via-orange-200 hover:to-amber-200 hover:text-amber-950 hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_12px_24px_rgba(217,119,6,0.28)] active:scale-[0.98]">清除所有選取</button>
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
