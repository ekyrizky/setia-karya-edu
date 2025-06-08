import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Berita & Kegiatan",
  description:
    "Berita terbaru, kegiatan sekolah, dan informasi terkini dari SMK Setia Karya",
  keywords: [
    "berita sekolah",
    "kegiatan SMK",
    "informasi sekolah",
    "berita SMK Setia Karya",
    "kegiatan siswa",
  ],
});

export default function BeritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}