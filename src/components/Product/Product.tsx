import { StarIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/assets/hero.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export const Product = () => {
  const params = useParams();

  return (
    <>
      <div className="flex flex-col min-h-[100dvh] mt-20">
        <main className="flex-1">
          {/* Product Details Section */}
          <section className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] gap-8 items-start max-w-6xl px-4 mx-auto py-8">
            {/* Left Side: Product Image */}
            <div className="relative w-full">
              <Carousel
                className="flex flex-col w-full aspect-square object-cover shadow-lg rounded-md"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <Card>
                          <CardContent className="relative flex aspect-square items-center justify-center rounded-md">
                            <img
                              src={BackgroundImage}
                              alt="image"
                              className="object-cover object-left-top absolute  h-full w-full inset-0 rounded-md"
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
            </div>

            {/* Right Side: Product Description and Details */}
            <div className="grid gap-6 ml-8">
              {/* Product Header */}
              <div className="grid gap-2">
                <h1 className="text-4xl font-bold text-blue-600">
                  Acme Prism T-Shirt
                </h1>
                <p className="text-orange-600">
                  60% combed ringspun cotton/40% polyester jersey tee.
                </p>
              </div>

              {/* Ratings and Price */}
              <div className="grid gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 text-blue-500 " fill="blue" />
                  <StarIcon className="w-5 h-5 text-blue-500" />
                  <StarIcon className="w-5 h-5 text-blue-500" />
                  <StarIcon className="w-5 h-5 text-gray-400" />
                  <StarIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="text-4xl font-bold text-orange-500">$99</div>
              </div>

              {/* Add to Cart Button */}
              <form className="grid gap-4">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Add to cart
                </Button>
              </form>
              <div className="grid gap-6 text-sm leading-loose">
                <p>
                  Introducing the Acme Prism T-Shirt, a perfect blend of style
                  and comfort for the modern individual. This tee is crafted
                  with a meticulous composition of 60% combed ringspun cotton
                  and 40% polyester jersey, ensuring a soft and breathable
                  fabric that feels gentle against the skin.
                </p>
                <p>
                  The design of the Acme Prism T-Shirt is as striking as it is
                  comfortable. The shirt features a unique prism-inspired
                  pattern that adds a modern and eye-catching touch to your
                  ensemble.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
