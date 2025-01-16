"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden font-sora rounded-[16px] m-[10px] h-[900px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/lt.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="rounded-[16px]"
        />
        {/* Dark Overlay */}
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
                  Perkraustymo paslaugos – daugiau nei daiktų pervežimas iš taško A į tašką B. „Mes Jau Čia&quot; komanda siekia užtikrinti, kad visas jūsų perkraustymo procesas taptų lengvesnis, saugesnis ir malonesnis. Mūsų paslaugos orientuotos ne tik į fizinį perkėlimą, bet ir į tai, kad kiekvienas kliento poreikis būtų išklausytas bei įgyvendintas.
                </p>

                <button className="px-10 py-3 rounded-full border-2 border-red-500 text-red-600 
                  hover:bg-red-50 transition-all duration-300
                  shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
                  text-lg">
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
  );
};

export default Hero;
