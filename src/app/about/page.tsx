import Image from "next/image";
import image from "../../../about.jpeg"

export default function About() {
    return (

      <>
  <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    <div data-aos="fade-left" data-aos-duration="3000" className="w-full h-64 lg:w-1/2 lg:h-auto">

      <Image src={image} alt="image" className="h-full w-full object-cover"      />
    </div>
    <div data-aos="fade-right" data-aos-duration="1500" className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
      <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase text-red-700 lg:text-4xl">
          About Us
        </h2>
        <p className="mt-4 ">
        We have a passion for bikes! Our journey began with the aim of creating a platform for bike enthusiasts where they can share their passion, expand their knowledge, and enhance their riding experience. Our mission is to provide our customers with best-in-class bike accessories and services. We design our products for quality, durability, and style, ensuring our customers enjoy every aspect of their riding experience.        </p>
        <div className="mt-8">
          <a
            href="/contect"
            className="inline-block w-full text-center text-lg font-medium text-black bg-gray-100 border-solid border rounded-md border-gray-600 py-4 px-10 hover:bg-red-700 hover:text-white duration-700 hover:shadow-md md:w-48"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  </div>

      </>
    );
  }