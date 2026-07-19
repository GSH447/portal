"use client";

import Image from "next/image";




const images = {


  col1: [
    "/assets/images/programs-services/001.svg",
    "/assets/images/programs-services/003.svg",
    "/assets/images/programs-services/015.svg",
  ],

  col2: [
    "/assets/images/programs-services/care-03.png",
    "/assets/images/programs-services/vmo.png",
    "/assets/images/programs-services/014.svg",
  ],

    col3: [
    "/assets/images/programs-services/013.svg",
    "/assets/images/programs-services/vmo.png",
    "/assets/images/programs-services/009.svg",
  ],

  col4: [
    "/assets/images/programs-services/011.svg",
    "/assets/images/programs-services/010.svg",
    "/assets/images/programs-services/012.svg",
  ],

};



const VerticalColumn = ({
  items,
  reverse = false,

}) => (
  <div className={`hero-grid-column-track ${reverse ? "reverse" : ""}`}>
    {items.concat(items).map((src, i) => (
      <Image
        key={i}
        src={src}
        alt="Healthcare visual"
        width={300}
        height={400}
        className="hero-grid-image"
        priority
      />
    ))}
  </div>
);

const HeroImageGridSlider = () => {
  return (
    <section className="hero-grid-wrapper">
      {/* Edge fades */}
      <div className="hero-grid-fade-top" />
      <div className="hero-grid-fade-bottom" />

      <div className="hero-grid-track">
        <VerticalColumn items={images.col1} />
        <VerticalColumn items={images.col2} reverse />
        <VerticalColumn items={images.col3} />
        <VerticalColumn items={images.col4} reverse />
      </div>
    </section>
  );
};

export default HeroImageGridSlider;








// "use client";

// import Image from "next/image";


// const images = {
//   col1: ["/assets/images/programs-services/001.svg", "/assets/images/programs-services/002.svg"],
//   col2: [
//     "/assets/images/programs-services/001.svg",
//     "/assets/images/programs-services/002.svg",
//     "/assets/images/programs-services/003.svg",
//   ],
//   col3: [
//     "/assets/images/programs-services/001.svg",
//     "/assets/images/programs-services/002.svg",
//     "/assets/images/programs-services/003.svg",
//   ],
//   col4: ["/assets/images/programs-services/001.svg", "/assets/images/programs-services/002.svg"],
// };

// const GridBlock = () => (
//   <div className="hero-grid-block">
//     {/* Column 1 */}
//     <div className="hero-grid-column">
//       {images.col1.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 2 */}
//     <div className="hero-grid-column">
//       {images.col2.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 3 (offset for rhythm) */}
//     <div className="hero-grid-column offset">
//       {images.col3.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 4 */}
//     <div className="hero-grid-column">
//       {images.col4.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>
//   </div>
// );

// const HeroImageGridSlider = () => {
//   return (
//     <section className="border-2 border-[green] hero-grid-wrapper">
//       {/* Edge fades */}
//       <div className="border-2 border-[red] hero-grid-fade-left" />
//       <div className="border-2 border-[pink] hero-grid-fade-right" />

//       {/* Sliding content */}
//       <div className="border-2 border-[blue] hero-grid-track">
//         <GridBlock />
//         <GridBlock /> {/* duplicate for seamless loop */}
//       </div>
//     </section>
//   );
// };

// export default HeroImageGridSlider;
