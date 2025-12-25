"use client";

import type { Prosecutor } from "@/app/prosecutors/data";

type Props = {
  selected: Prosecutor[];
  totalCount: number;
  startDate: string;
  endDate: string;
  onStartDateChange: (next: string) => void;
  onEndDateChange: (next: string) => void;
};

export default function ProsecutorDashboard({
  selected,
  totalCount,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: Props) {
  const hasSelection = selected.length > 0;
  return (
    <section className="rounded-[28px] border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_70px_rgba(15,23,42,0.16)] backdrop-blur">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Fraud Auto
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Hi, Shack 歡迎回來
          </h1>
          <p className="text-sm text-slate-600">
            重大金融詐欺新聞自動分類系統
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-sm font-semibold text-white shadow-lg">
          S
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white px-4 py-3 text-sm text-slate-600 shadow-sm">
        請先選擇地檢署與日期區間，即可進行分類、下載或追蹤歷史紀錄。
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>篩選條件</span>
          <span>
            已選 {selected.length}/{totalCount}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <label className="text-xs font-semibold text-slate-500">
            起始日期
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
            />
          </label>
          <label className="text-xs font-semibold text-slate-500">
            結束日期
            <input
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="text-xs font-semibold text-slate-500">已選擇地檢署</div>
        <div className="flex flex-wrap gap-2">
          {hasSelection ? (
            selected.map((item) => (
              <span
                key={item.slug}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {item.nameZh}
              </span>
            ))
          ) : (
            <span className="text-xs text-slate-400">尚未選取</span>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">初步篩選</p>
              <p className="text-xs text-slate-500">
                依地檢署與日期產生初步清單
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800">
                開始篩選
              </button>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-800">
                下載 Excel
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">進階篩選</p>
              <p className="text-xs text-slate-500">
                依類型與權重進行細緻分類
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500">
                啟動流程
              </button>
              <button className="rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300">
                下載 Excel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-800">歷史紀錄</p>
            <p className="text-xs text-slate-500">
              查看最近的篩選與下載紀錄
            </p>
          </div>
          <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-400">
            查看篩選紀錄
          </button>
        </div>
      </div>
    </section>
  );
}
