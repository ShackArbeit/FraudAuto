import { findProsecutorBySlug } from "../data";

export default async function ProsecutorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;           // ✅ 先 await
  const p = findProsecutorBySlug(slug);    // ✅ 用 slug

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>
        {p ? p.nameZh : `Unknown prosecutor: ${slug}`}
      </h1>

      {p ? (
        <div style={{ lineHeight: 1.8 }}>
          <div><b>Slug</b>: {p.slug}</div>
          <div><b>地址</b>: {p.address}</div>
          <div><b>座標</b>: {p.lat}, {p.lng}</div>
        </div>
      ) : (
        <p style={{ color: "rgba(0,0,0,0.7)" }}>
          找不到對應資料，請確認 slug 是否正確。
        </p>
      )}
    </main>
  );
}
