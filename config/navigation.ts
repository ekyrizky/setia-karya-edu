import { NavItem } from "@/lib/types";

export const mainNavigation: NavItem[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang",
    href: "/tentang",
    description: "Profil, visi misi, dan sejarah sekolah",
    children: [
      {
        title: "Profil Sekolah",
        href: "/tentang/profil-sekolah",
      },
      {
        title: "Visi & Misi",
        href: "/tentang/visi-misi",
      },
      {
        title: "Guru & Staff",
        href: "/tentang/guru-staff",
      },
    ],
  },
  {
    title: "Akademik",
    href: "/akademik",
    description: "Program akademik dan kurikulum",
    children: [
      {
        title: "Kurikulum",
        href: "/akademik/kurikulum",
      },
      {
        title: "Teknik Kendaraan Ringan Otomotif",
        href: "/akademik/tkro",
      },
      {
        title: "Otomatisasi dan Tata Kelola Perkantoran",
        href: "/akademik/otkp",
      },
      {
        title: "Ekstrakurikuler",
        href: "/akademik/ekstrakurikuler",
      },
      {
        title: "Kalender Akademik",
        href: "/akademik/kalender",
      },
    ],
  },
  {
    title: "Fasilitas",
    href: "/fasilitas",
    description: "Fasilitas sekolah yang modern",
  },
  {
    title: "Berita",
    href: "/berita",
    description: "Berita dan kegiatan terkini",
  },
  {
    title: "PPDB",
    href: "/penerimaan",
    description: "Penerimaan Peserta Didik Baru",
    label: "Buka",
  },
  {
    title: "Kontak",
    href: "/kontak",
  },
];

export const footerNavigation = {
  tentang: [
    { title: "Profil Sekolah", href: "/tentang/profil-sekolah" },
    { title: "Visi & Misi", href: "/tentang/visi-misi" },
    { title: "Guru & Staff", href: "/tentang/guru-staff" },
    { title: "Prestasi", href: "/tentang/prestasi" },
  ],
  akademik: [
    { title: "Kurikulum", href: "/akademik" },
    { title: "Program Studi", href: "/akademik#program" },
    { title: "Ekstrakurikuler", href: "/akademik/ekstrakurikuler" },
    { title: "Kalender", href: "/akademik/kalender" },
  ],
  layanan: [
    { title: "PPDB Online", href: "/penerimaan" },
    {
      title: "E-Learning",
      href: "https://elearning.smksetiakarya.sch.id",
      external: true,
    },
    {
      title: "Perpustakaan Digital",
      href: "https://perpus.smksetiakarya.sch.id",
      external: true,
    },
    { title: "Alumni", href: "/alumni" },
  ],
  informasi: [
    { title: "Berita Terbaru", href: "/berita" },
    { title: "Pengumuman", href: "/berita?kategori=pengumuman" },
    { title: "Agenda", href: "/berita?kategori=agenda" },
    { title: "Download", href: "/download" },
  ],
};
