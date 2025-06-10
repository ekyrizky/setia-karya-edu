"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SchoolProfile, QuickInfo, SchoolStatistic } from "@/types/homepage";

interface HeroSectionProps {
  profile: SchoolProfile;
  quickInfo: QuickInfo[];
  statistics: SchoolStatistic[];
}

export function HeroSection({
  profile,
  quickInfo,
  statistics,
}: HeroSectionProps) {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-blue-900 overflow-hidden">
        {/* Background Images */}
        <div
          className={
            "absolute inset-0 transition-opacity duration-1000 ease-in-out"
          }
        >
          <Image
            src={profile.hero_image}
            alt={profile.hero_image_alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>

        <div className="relative z-10 container h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Selamat Datang di
              <br />
              <span className="text-yellow-400">SMK Setia Karya</span>
            </h1>
            <p className="text-xl mb-2 text-blue-100">
              Sekolah Menengah Kejuruan Unggulan
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Membentuk Generasi Cerdas, Berkarakter, dan Berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link href={profile.cta_href}>{profile.cta_text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-red-600 text-white py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left md:text-center">
            {quickInfo.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-start md:justify-center gap-2"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="font-semibold">{info.info_text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              SMK Setia Karya dalam Angka
            </h2>
            <p className="text-gray-600">
              Prestasi dan pencapaian yang membanggakan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
