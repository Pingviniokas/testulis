"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden font-sora rounded-[16px] m-[10px] h-[900px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/lt.jpeg"
            alt="Hero Background"
            fill
            className="rounded-[16px] object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-20 z-10" />
        </div>

        {/* Content from the first section */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg w-[670px] min-h-[750px] relative">
              <div className="px-12">
                <h1>
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text text-6xl font-bold leading-tight">
                    Perkraustymo
                  </span>
                  <span className="block text-6xl mt-2 leading-tight">
                    paslaugos
                  </span>
                </h1>
              </div>

              <div className="bg-[#3B4956]/95 rounded-3xl absolute bottom-2 left-2 right-2">
                <div className="px-24 py-10">
                  <p className="text-white text-lg mb-8">
                    Perkraustymo paslaugos – daugiau nei daiktų pervežimas iš taško A į tašką B. „Mes Jau Čia" komanda siekia užtikrinti, kad visas jūsų perkraustymo procesas taptų lengvesnis, saugesnis ir malonesnis. Mūsų paslaugos orientuotos ne tik į fizinį perkėlimą, bet ir į tai, kad kiekvienas kliento poreikis būtų išklausytas bei įgyvendintas.
                  </p>

                  <button className="px-10 py-3 rounded-full border-2 border-red-500 text-red-600 
                    hover:bg-red-50 transition-all duration-300
                    shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
                    text-lg bg-white">
                    Kainininkas
                  </button>

                  <hr className="my-8 border-gray-300" />

                  <p className="text-xs text-white">
                    Mūsų patirtis viršija 9000 sėkmingų užsakymų, o moderni įranga, profesionali
                    komanda ir patikrinti darbo metodai užtikrina, kad viskas vyktų sklandžiai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative w-full min-h-screen p-3">
        <div className="relative w-full rounded-3xl bg-[#CECFD4] overflow-hidden">
          {/* Red corner box */}
          <div className="absolute top-0 left-0 bg-[#DC2625] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl z-10 shadow-[-30px_3px_0px_3px_#3B4956,_3px_3px_0px_3px_#3B4956,_-30px_3px_0px_3px_#3B4956]">
            <div className="px-12 py-3 flex items-center gap-5">
              <Image 
                src="/images/target.svg" 
                alt="Target icon" 
                width={24} 
                height={24}
              />
              <span className="text-white text-sm">Mūsų požiūris į</span>
            </div>
          </div>

          <div className="p-16 pt-24">
            <h2 className="text-4xl mb-12">
              <span className="text-[#3B4956]">perkraustymo</span> paslaugas
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                "Ramybė ir saugumas",
                "Patogumas ir kontrolė",
                "Reagavimas ir operatyvumas",
                "Laiko taupymas efektyviai valdant procesus",
                "Prieinamumas ir lankstumas",
                "Kompleksiniai sprendimai ir moderni technika"
              ].map((title, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden group cursor-pointer">
                  <div className="relative h-[240px]">
                    <Image
                      src="/images/lt.jpeg"
                      alt="Map visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#3B4956] p-6 flex items-center justify-between group-hover:bg-[#2D3A44] transition-colors duration-300">
                    <span className="text-white text-base">{title}</span>
                    <Image
                      src="/images/arrow-down.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="transform rotate-180"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background pattern */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle, #D92D20 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.1
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
