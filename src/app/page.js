"use client";
import React from "react";

const WebsiteWireframe = () => {
  return (
    <div>
      <CollaborativeTeam/>
      <PricingComponent/>
      <FeatureComponent/>
      <TestimonialComponent></TestimonialComponent>
      <Navbar/>
    </div>
  )
};
export default WebsiteWireframe


// function CollaborativeTeam(props) {
//   return (
//     <div className="bg-white flex flex-col">
//       <header className="bg-white self-stretch flex w-full flex-col justify-center items-center px-5 py-8 max-md:max-w-full">
//         <div className="flex w-full max-w-[1220px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
//           <div className="items-center flex justify-between gap-5">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/647015e6-993d-4fed-b44d-e505028d5352?apiKey=d281bd051822428daa150eb2eda86050&"
//               className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full my-auto"
//               alt="Logo"
//             />
//             <div className="text-black text-center text-4xl font-semibold leading-[54px] self-stretch">
//               Logo
//             </div>
//           </div>
//           <div className="justify-between items-center flex gap-5 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
//             <div className="justify-between items-stretch flex gap-5 my-auto max-md:justify-center">
//               <a href="#" className="text-black text-center text-lg leading-5">
//                 Home
//               </a>
//               <a href="#" className="text-black text-center text-lg leading-5">
//                 About
//               </a>
//               <a href="#" className="text-black text-center text-lg leading-5">
//                 Features
//               </a>
//               <a href="#" className="text-black text-center text-lg leading-5">
//                 Pricing
//               </a>
//             </div>
//             <button
//               className="text-white text-center text-base font-bold leading-5 justify-center items-center bg-black self-stretch px-5 py-5 rounded-[30px]"
//               aria-label="Contact Us"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </header>
//       <h1 className="text-black text-center text-6xl font-bold leading-[66px] self-center max-w-[774px] mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
//         Your team has never collaborated this well before
//       </h1>
//       <p className="text-slate-400 text-center text-lg leading-8 self-center max-w-[533px] mt-9 max-md:max-w-full">
//         Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
//       </p>
//       <form className="items-stretch self-center flex w-[357px] max-w-full justify-between gap-5 mt-11 max-md:mt-10">
//         <div className="items-stretch bg-black flex justify-between gap-2 pl-8 pr-10 py-6 rounded-[40px] max-md:px-5">
//           <div className="text-white text-center text-lg font-bold leading-5">
//             Contact Us
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/1479c4a2-d35f-4a25-87df-6b93b95ff84d?apiKey=d281bd051822428daa150eb2eda86050&"
//             className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden shrink-0 max-w-full"
//             alt="Contact Icon"
//           />
//         </div>
//         <div className="text-black text-center text-lg leading-5 border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white grow justify-center pl-8 pr-5 py-6 rounded-[36.55px] border-solid items-start">
//           <label htmlFor="signup">Sign up</label>
//           <input
//             type="text"
//             id="signup"
//             aria-label="Sign up"
//             aria-role="textbox"
//           />
//         </div>
//       </form>
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&"className="aspect-[2.08] object-contain object-center w-full overflow-hidden self-center max-w-[1260px] mt-28 max-md:max-w-full max-md:mt-10"
//         alt="Team Collaboration"
//       />
//     </div>
//   );
// }

function CollaborativeTeam(props) {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <header className="bg-white w-full flex flex-col justify-center items-center px-5 py-8">
        <div className="flex w-full max-w-[1220px] items-center justify-between gap-5 flex-wrap">
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/647015e6-993d-4fed-b44d-e505028d5352?apiKey=d281bd051822428daa150eb2eda86050&"
              className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0"
              alt="Logo"
            />
            <div className="text-black text-center text-4xl font-semibold">
              Logo
            </div>
          </div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a href="#home" className="text-black text-center text-lg mb-2 md:mb-0">Home</a>
            <a href="#about" className="text-black text-center text-lg mb-2 md:mb-0">About</a>
            <a href="#features" className="text-black text-center text-lg mb-2 md:mb-0">Features</a>
            <a href="#pricing" className="text-black text-center text-lg mb-2 md:mb-0">Pricing</a>
            <a href="#contact" className="bg-black text-white text-center text-base font-bold px-4 py-2 rounded-full">
              Contact Us
            </a>
          </div>
        </div>
      </header>
      <h1 className="text-black text-center text-4xl md:text-6xl font-bold leading-[53px] md:leading-[66px] max-w-[774px] mt-10 md:mt-20">
        Customised demos For Your Potential Customers.
      </h1>
      <p className="text-slate-400 text-center text-lg leading-8 max-w-[533px] mt-5 md:mt-9">
        We make it easier to close your sales faster by creating demos which appeal to your customers.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-7 md:mt-11">
        <a href="#contact-form" className="bg-black text-white text-lg font-bold px-6 py-3 rounded-full flex items-center gap-2 justify-center">
          <span>Contact Us</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1479c4a2-d35f-4a25-87df-6b93b95ff84d?apiKey=d281bd051822428daa150eb2eda86050&"
            className="w-[18px] h-[18px]"
            alt="Contact Icon"
          />
        </a>
        <form className="flex flex-col md:flex-row items-center border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white pl-8 pr-5 py-3 rounded-full">
          <label htmlFor="signup" className="text-black text-lg font-bold mr-2">Sign up</label>
          <input
            type="text"
            id="signup"
            className="outline-none text-black mt-2 md:mt-0"
            aria-label="Sign up"
          />
        </form>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/513f796b-9ef3-4047-957e-54c705b5414f?apiKey=d281bd051822428daa150eb2eda86050&"
        className="w-full max-w-[1260px] mt-20 md:mt-28"
        alt="Team Collaboration"
      />
    </div>
  );
}



function FeatureCard({ featureImage, featureTitle, featureDescription }) {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white flex grow flex-col items-center w-full px-8 py-12 rounded-3xl border-solid max-md:mt-7 max-md:px-5">
        <img
          loading="lazy"
          srcSet={featureImage}
          className="aspect-square object-contain object-center w-[172px] overflow-hidden max-w-full mt-1.5 rounded-[50%]"
          alt={featureTitle}
        />
        <h2 className="text-black text-center text-3xl font-bold leading-10 mt-8">{featureTitle}</h2>
        <p className="text-slate-400 text-center text-lg leading-8 self-stretch mt-7">
          {featureDescription}
        </p>
        <button
          className="text-black text-center text-lg leading-5 justify-center items-center bg-white self-stretch mt-14 mb-2.5 px-5 py-6 rounded-[40px] border-[1.333px] border-solid border-black max-md:mt-10"
          aria-label={`Learn more about ${featureTitle}`}
          role="button"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

function FeatureComponent(props) {
  return (
    <header className="justify-center items-stretch bg-white flex flex-col">
      <section className="bg-white flex w-full flex-col justify-center items-center px-5 py-12 max-md:max-w-full">
        <div className="flex w-full max-w-[1220px] flex-col items-stretch mt-32 mb-20 max-md:max-w-full max-md:my-10">
          <h1 className="text-black text-center text-4xl font-bold leading-10 max-w-[459px] self-center max-md:max-w-full">
            Browse our set of features
          </h1>
          <p className="text-slate-400 text-center text-lg leading-8 self-center max-w-[574px] mt-9 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
          </p>
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <FeatureCard 
                featureImage="https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44728003-ff73-42e9-8581-dec18e5973fe?apiKey=d281bd051822428daa150eb2eda86050&"
                featureTitle="Feature 1"
                featureDescription="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
              />
              <FeatureCard 
                featureImage="https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/305eb236-2dd7-4b08-bace-263c0a07d44b?apiKey=d281bd051822428daa150eb2eda86050&"
                featureTitle="Feature 2"
                featureDescription="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
              />
              <FeatureCard 
                featureImage="https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba539e40-de4a-4236-922a-e9d599ae5dd1?apiKey=d281bd051822428daa150eb2eda86050&"
                featureTitle="Feature 3"
                featureDescription="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

function TestimonialCard({ imageSrcSet, altText, name, position, quote, description }) {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
        <div className="border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white flex flex-col items-stretch px-10 py-11 rounded-xl border-solid max-md:px-5">
          <div className="flex items-stretch justify-between gap-3">
            <img
              loading="lazy"
              srcSet={imageSrcSet}
              className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
              alt={altText}
            />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
              <div className="text-black text-lg font-bold leading-5">{name}</div>
              <div className="text-gray-400 text-lg leading-5 mt-3">{position}</div>
            </div>
          </div>
          <div className="text-black text-2xl font-bold leading-6 mt-7">{quote}</div>
          <div className="text-slate-400 text-lg leading-8 mt-5">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialComponent() {
  return (
    <section className="justify-center items-stretch bg-white flex flex-col px-20 py-12 max-md:px-5">
      <header className="text-black text-center text-4xl font-bold leading-10 self-center max-w-[357px] mt-12 max-md:mt-10">
        What our clients say
      </header>
      <div className="text-slate-400 text-center text-lg leading-8 self-center max-w-[614px] mt-7 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
      </div>
      <form className="justify-center mt-7 mb-12 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <TestimonialCard
             imageSrcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ca565f2-fc87-4af8-98cc-bde3d5e3c255?apiKey=d281bd051822428daa150eb2eda86050&"
            altText="John Carter"
            name="John Carter"
            position="CTO @abc inc"
            quote="“An amazing service”"
            description="Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas."
          />
          <TestimonialCard
            imageSrcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2699910d-e4e7-4716-bc8f-2e689f43f107?apiKey=d281bd051822428daa150eb2eda86050&"className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
            // imageSrcSet=""
            altText="Jane Doe"
            name="Jane Doe"
            position="CEO @xyz LLC"
            quote="“One of a kind service.”"
            description="Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas."
          />
          <TestimonialCard
            imageSrcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46367017-66c8-4fb6-abec-0634d8fb1056?apiKey=d281bd051822428daa150eb2eda86050&"className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
            altText="Alex Smith"
            name="Alex Smith"
            position="Founder @example Co"
            quote="“Top notch development.”"
            description="Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas."
          />
        </div>
      </form>
    </section>
  );
}


function Navbar(props) {
  return (
    <header className="items-stretch bg-white flex flex-col justify-center align-middle">
      <div className="bg-white flex w-full max-w-full flex-col items-center px-20 py-11 max-md:px-5">
        <div className="self-stretch flex items-center justify-center gap-5 mt-2.5 mx-8 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
          <a href="#home" className="flex items-center justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a638a0-38d6-4278-ad2c-5ad279c6a570?apiKey=d281bd051822428daa150eb2eda86050&"
              className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full my-auto"
              alt="Logo"
            />
            <div className="text-black text-center text-4xl font-semibold leading-[54px] self-stretch">
              Logo
            </div>
          </a>
          <div className="justify-center items-center self-center flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <a href="#home" className="text-slate-400 text-center text-lg leading-5">Home</a>
            <a href="#about" className="text-slate-400 text-center text-lg leading-5">About</a>
            <a href="#features" className="text-slate-400 text-center text-lg leading-5">Features</a>
            <a href="#pricing" className="text-slate-400 text-center text-lg leading-5">Pricing</a>
            <a href="#contact" className="text-slate-400 text-center text-lg leading-5">Contact Us</a>
          </div>
          <div className="justify-center items-center self-center flex gap-4 my-auto max-md:justify-center">
            {/* Image links can be added here if needed */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58ea4df9-851d-4c3a-a2eb-acee41a71a49?apiKey=d281bd051822428daa150eb2eda86050&"
              className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
              alt="Image 1"
            />
             <img
               loading="lazy"
               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4520283-994c-4486-9031-fe76865692bd?apiKey=d281bd051822428daa150eb2eda86050&"
              className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
               alt="Image 4"
             />
            {/* More images follow here... */}
          </div>
        </div>
        <div className="bg-gray-300 self-stretch w-full shrink-0 h-px mt-20 mx-8 max-md:mr-2.5 max-md:mt-10" />
        <div className="text-slate-400 text-center text-lg leading-5 max-w-full mt-8 max-md:max-w-full">
          <a href="#privacy-policy" className="hover:underline">Privacy policy</a> | 
          <a href="#terms-of-service" className="hover:underline"> Terms of service</a>
        </div>
      </div>
    </header>
  );
}

// function PricingComponentCard({ planName, planDescription, price, features, buttonText }) {
//   return (
//     <div className="border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white flex flex-col items-stretch pb-12 rounded-3xl border-solid">
//       <header className="bg-slate-50 flex w-full flex-col px-10 py-12 rounded-3xl max-md:px-5">
//         <h1 className="text-black text-center text-3xl font-bold leading-10 self-center mt-1.5">{planName}</h1>
//         <h2 className="text-black text-center text-xl font-medium leading-6 mt-7">{planDescription}</h2>
//         <h1 className="text-black text-center text-4xl font-bold leading-[66px] self-center mt-5">${price}</h1>
//         <button className="text-white text-center text-xl font-bold leading-5 justify-center items-center bg-black self-stretch mt-7 px-5 py-7 rounded-[47.273px]">{buttonText}</button>
//       </header>
//       <form className="flex w-full flex-col items-stretch mt-10 mb-6 px-11 max-md:px-5">
//         {features.map(feature => (
//           <div key={feature.id} className="items-stretch flex justify-between gap-3.5 mt-4">
//             <img loading="lazy" src={feature.imageUrl} className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//             <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">{feature.description}</div>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// }

function PricingComponentCard({ planName, planDescription, price, features, buttonText }) {
  // Common checkmark image URL
  const checkmarkImageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/da0d5466-3e37-4d98-a524-0095dfc74b78?apiKey=d281bd051822428daa150eb2eda86050&"; // Replace with actual URL

  return (
    <div className="border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white flex flex-col items-stretch pb-12 rounded-3xl border-solid">
      <header className="bg-slate-50 flex w-full flex-col px-10 py-12 rounded-3xl max-md:px-5">
        <h1 className="text-black text-center text-3xl font-bold leading-10 self-center mt-1.5">{planName}</h1>
        <h2 className="text-black text-center text-xl font-medium leading-6 mt-7">{planDescription}</h2>
       { price && <h1 className="text-black text-center text-4xl font-bold leading-[66px] self-center mt-5">${price}</h1> }
        <button className="text-white text-center text-xl font-bold leading-5 justify-center items-center bg-black self-stretch mt-7 px-5 py-7 rounded-[47.273px]">{buttonText}</button>
      </header>
      <form className="flex w-full flex-col items-stretch mt-10 mb-6 px-11 max-md:px-5">
        {features.map((feature, index) => (
          <div key={index} className="items-stretch flex justify-between gap-3.5 mt-4">
            <img loading="lazy" src={checkmarkImageUrl} alt="Check" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
            <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">{feature}</div>
          </div>
        ))}
      </form>
    </div>
  );
}




// function PricingComponentCard(props) {
//   return (
//     <div className="border border-[color:var(--neutral-colors-color-600,#D4D2E3)] bg-white flex flex-col items-stretch pb-12 rounded-3xl border-solid">
//       <header className="bg-slate-50 flex w-full flex-col px-10 py-12 rounded-3xl max-md:px-5">
//         <h1 className="text-black text-center text-3xl font-bold leading-10 self-center mt-1.5">Basic</h1>
//         <h2 className="text-black text-center text-xl font-medium leading-6 mt-7">ideal for individuals</h2>
//         <h1 className="text-black text-center text-4xl font-bold leading-[66px] self-center mt-5">$0</h1>
//         <button className="text-white text-center text-xl font-bold leading-5 justify-center items-center bg-black self-stretch mt-7 px-5 py-7 rounded-[47.273px]">Get started</button>
//       </header>
//       <form className="flex w-full flex-col items-stretch mt-10 mb-6 px-11 max-md:px-5">
//         <div className="items-stretch flex justify-between gap-3.5">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a56fc00-b8dd-4b26-b0ef-93b77806db3e?apiKey=d281bd051822428daa150eb2eda86050&" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//           <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">All analytics features</div>
//         </div>
//         <div className="items-stretch flex justify-between gap-3.5 mt-4">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3344ff-b198-4d37-a02f-0ca843f10776?apiKey=d281bd051822428daa150eb2eda86050&" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//           <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">Up to 250,000 tracked visits</div>
//         </div>
//         <div className="items-stretch flex justify-between gap-3.5 mt-4">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da0d5466-3e37-4d98-a524-0095dfc74b78?apiKey=d281bd051822428daa150eb2eda86050&" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//           <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">Normal support</div>
//         </div>
//         <div className="items-stretch flex justify-between gap-3.5 mt-4">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc6fb51a-84e3-42f0-ab11-8a7c46461cb0?apiKey=d281bd051822428daa150eb2eda86050&" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//           <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">Mobile app</div>
//         </div>
//         <div className="items-stretch flex justify-between gap-3.5 mt-4">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db4a653-bdda-4068-842e-af8ce1e53197?apiKey=d281bd051822428daa150eb2eda86050&" className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full" />
//           <div className="text-black text-lg font-bold leading-5 self-center grow shrink basis-auto my-auto">Up to 3 team members</div>
//         </div>
//       </form>
//     </div>
//   );
// }

function PricingComponent(props) {
  return (
    <div className="bg-white flex w-full flex-col justify-center items-center px-5 py-12 max-md:max-w-full">
      <header className="header text-gray-400 text-center text-lg font-bold leading-5 tracking-widest uppercase self-center">Pricing</header>
      <h1 className="text-black text-center text-6xl font-bold leading-[66px] max-w-[656px] self-center mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">Affordable pricing plans</h1>
      <p className="text-slate-400 text-center text-lg leading-8 self-center max-w-[703px] mt-6 max-md:max-w-full">We Provide Pricing to help you grow.</p>

      <form className="justify-center mt-7 mb-12 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch  align-middle">
        <PricingComponentCard planName={"Basic"} buttonText={"Get Started"} features={["All Analytics Features", "Upto 5 videos", "Normal Support", "3 Team members"]} planDescription={"Ideal For Individuals"} price={"0"} key={"individual"}/>
        <PricingComponentCard planName={"Growth"} buttonText={"Get Started"} features={["Everything on Basic Plan", "Premium Support", "Upto 50 Videos", "Upto 10 Team members"]} planDescription={"Idea For Small Business"} price={"50"} key={"growth"}/>
        <PricingComponentCard planName={"Enterprise"} buttonText={"Contact Us"} features={["Everything on Growth Plan", "Advanced Analytics", "Premium SUpport", "Upto 50 Team members"]} planDescription={"Ideal For Large Organization"} key={"enterprise"}/>
        </div>
      </form>
    </div>
  );
}