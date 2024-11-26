import { Loader2, StarIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import ServerDownSvg from "@/assets/server_down.svg";
import NoDataSvg from "@/assets/no_data.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import UseProduct from "@/hooks/UseProduct";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const Product = () => {
  const params = useParams();

  const { data, isLoading, isError } = UseProduct(params.id);
  return (
    <>
      {isLoading ? (
        <div className="flex h-full min-h-[100vh] items-center justify-center ">
          <Loader2
            className="w-28 h-28 animate-spin "
            style={{
              color: "#f57c00",
            }}
          />
        </div>
      ) : isError ? (
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={ServerDownSvg}
            alt="Server Down"
            className="w-1/2 max-w-md my-4"
          />
          <p className="text-2xl font-semibold text-orange-600">
            Oops! Error Occurred
          </p>
        </div>
      ) : data.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={NoDataSvg}
            alt="Server Down"
            className="w-1/2 max-w-md my-4"
          />
          <p className="text-2xl font-semibold text-orange-600">
            No Products Added Yet !!
          </p>
        </div>
      ) : (
        <div className="flex flex-col h-full overflow-auto py-20 px-10 w-full relative">
          {/* Product Details Section */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] gap-8 items-start max-w-6xl md:px-4 mx-auto py-6">
            {/* Left Side: Product Image */}
            <div className="w-full sticky top-4 z-20 px-3 md:px-0">
              {data.imageUrls && data.imageUrls?.length > 0 ? (
                <Carousel
                  className="flex flex-col w-full aspect-square object-cover shadow-lg rounded-md"
                  opts={{ loop: true }}
                >
                  <CarouselContent>
                    {data.imageUrls.map((img: string, index: number) => (
                      <CarouselItem key={index}>
                        <div>
                          <Card>
                            <CardContent className="relative flex aspect-square items-center justify-center rounded-md">
                              <img
                                src={img}
                                alt={`Product image ${index + 1}`}
                                className="object-cover object-left-top absolute h-full w-full inset-0 rounded-md"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div>
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              ) : (
                <div className="flex items-center justify-center h-full border border-dashed border-gray-300 rounded-md">
                  <p className="text-gray-500">No images available</p>
                </div>
              )}
            </div>

            {/* Right Side: Product Description and Details */}
            <div className="grid gap-6 md:ml-8 md:p-4 shadow-lg backdrop-blur-[3px] bg-blue-200/50 rounded-md">
              {/* Product Header */}
              <div className="grid gap-2">
                <h1 className="text-4xl pb-5 border-b-2 border-blue-900 font-bold text-blue-600">
                  {data.title || "Untitled Product"}
                </h1>
                <div className="flex gap-2 items-baseline">
                  <p className="text-orange-600">
                    {data.productType
                      ? `${data.productType} by ${
                          data.manufacturer || "Unknown"
                        }`
                      : "Product Details Unavailable"}
                  </p>
                  {data.status && (
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-md ${
                        data.status === "ACTIVE"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {data.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Ratings and Price */}
              <div className="grid gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 text-blue-500" />
                  <StarIcon className="w-5 h-5 text-blue-500" />
                  <StarIcon className="w-5 h-5 text-blue-500" />
                  <StarIcon className="w-5 h-5 text-gray-400" />
                  <StarIcon className="w-5 h-5 text-gray-400" />
                </div>
                {data.price ? (
                  <div className="text-4xl font-bold text-orange-500">
                    {data.currencyCode} {data.price.toFixed(2)}
                  </div>
                ) : (
                  <p className="text-gray-500">Price not available</p>
                )}
              </div>

              <div className="flex gap-3 flex-wrap py-2 font-serif font-bold text-blue-900 ">
                {data.keywords?.length > 0 &&
                  data.keywords.map((ele: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-base italic hover:scale-110 hover:bg-orange-400 p-1 hover:text-white"
                    >
                      #{ele}
                    </p>
                  ))}
              </div>

              <div className="space-y-4">
                <Accordion
                  type="single"
                  collapsible
                  className="bg-slate-500/40 shadow-md p-3 rounded-sm"
                >
                  {/* Product Description */}
                  {data.description && (
                    <AccordionItem value="description" className="">
                      <AccordionTrigger className="no-underline">
                        <h2 className="text-lg font-semibold text-blue-900 ">
                          Description
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent className="bg-slate-400/40 py-5 px-3">
                        <ul className="list-disc list-inside text-gray-900 space-y-1">
                          <div className="grid gap-6 text-md px-8 font-semibold italic leading-loose">
                            <p>{data.description}</p>
                          </div>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {/* Features Section */}
                  {data.bulletPoints?.length > 0 && (
                    <AccordionItem value="features" className="">
                      <AccordionTrigger>
                        <h2 className="text-lg font-semibold text-blue-900 ">
                          Features
                        </h2>
                      </AccordionTrigger>

                      <AccordionContent className="bg-slate-400/40 rounded-sm py-5 px-3 font-medium">
                        <ul className="list-disc list-inside  text-gray-900 space-y-1">
                          {data.bulletPoints.map(
                            (point: string, index: number) => (
                              <li className="px-8 py-1" key={index}>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {/* Variations Section */}
                  <AccordionItem value="variations">
                    <AccordionTrigger>
                      <h2 className="text-lg font-semibold text-blue-900 no-underline">
                        Variations
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      {data.variations?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-400/40 p-3">
                          {data.variations.map(
                            (variation: any, index: number) => (
                              <div
                                key={index}
                                className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-2 bg-white"
                              >
                                {/* Image */}
                                {variation.image_url ? (
                                  <img
                                    src={variation.image_url}
                                    alt={`${variation.option} ${variation.basis}`}
                                    className="w-16 h-16 object-cover rounded-md shadow-sm"
                                  />
                                ) : (
                                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-md text-gray-900">
                                    No Image
                                  </div>
                                )}

                                {/* Details */}
                                <div className="text-center">
                                  <p className="text-gray-800 text-sm font-semibold">
                                    {variation.basis}: {variation.option}
                                  </p>
                                  <p className="text-gray-700 text-xs">
                                    Additional Price:{" "}
                                  </p>
                                  <p className="text-gray-700 text-xs">
                                    {variation.additional_price > 0
                                      ? `+ ${
                                          data.currencyCode
                                        } ${variation.additional_price.toFixed(
                                          2
                                        )}`
                                      : "Included"}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-500">No variations available</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
