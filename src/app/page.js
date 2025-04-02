import FreeTrail from "@/components/FreeTrail";
import PlayButton from "@/components/PlayButton";
import SectionHead from "@/components/SectionHead";
import { provideDevices } from "@/config";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="absolute top-0 -z-10 left-0 right-0 min-w-screen h-[500px] md:h-[636px] 2xl:h-[860px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] md:h-[636px] 2xl:h-[860px] z-10 pointer-events-none bg-gradient-home" />
        <div className=" flex flex-col gap-5 ">
          {[
            "/images/ImageContainer3.png",
            "/images/ImageContainer.png",
            "/images/ImageContainer1.png",
            "/images/ImageContainer2.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden flex justify-center"
            >
              <img
                src={src}
                className="min-w-[1280px] max-w-none h-auto object-cover"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-[75px]">
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] 2xl:w-[470px] 2xl:h-[470px]"
          src="/images/AbstractDesign.png"
        />
      </div>
      <div className="max-w-[1140px] mx-auto text-center flex flex-col justify-center items-center">
        <div className="mb-10">
          <h2 className="xl:text-6xl lg:text-5xl text-3xl text-white font-bold ">
            The Best Streaming Experience
          </h2>
          <p className="lg:text-sm text-gray-800 mt-4 text-xs">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <PlayButton title="Start Watching Now" className="w-[209px]" />
      </div>
      <section className="">
        <SectionHead
          title="We Provide you streaming experience across various devices."
          subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-5 2xl:gap-7">
          {provideDevices.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 lg:p-10 2xl:p-[50px] bg-gradient-devices"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 lg:w-14 lg:h-14 2xl:w-[72px] 2xl:h-[72px] flex items-center justify-center bg-black-700">
                    <img src={item.imgSrc} />
                  </div>

                  <h4 className="text-lg xl:text-xl 2xl:text-2xl text-white">{item.title}</h4>
                </div>
                <p className="text-sm lg:text-base 2xl:text-lg text-gray-800">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <FreeTrail />
    </div>
  );
}
