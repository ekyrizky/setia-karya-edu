import { generateMetadata } from "@/lib/seo";
import { getNewsData } from "@/lib/news-data";
import NewsGrid from "./news-grid";

export const metadata = generateMetadata({
  title: "Berita & Kegiatan",
  description:
    "Informasi terbaru tentang kegiatan, prestasi, dan perkembangan SMK Setia Karya",
  keywords: [
    "berita sekolah",
    "kegiatan SMK",
    "prestasi siswa",
    "pengumuman sekolah",
    "SMK Setia Karya",
  ],
});

export default async function BeritaPage() {
  const { news } = await getNewsData();

  if (!news) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="heading-1 mb-4">Berita & Kegiatan</h1>
          <p className="text-muted-foreground">
            Data berita sedang dimuat atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Berita & Kegiatan</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Informasi terbaru tentang kegiatan, prestasi, dan perkembangan SMK
          Setia Karya
        </p>
      </div>

      <NewsGrid news={news || []} />
    </div>
  );
}