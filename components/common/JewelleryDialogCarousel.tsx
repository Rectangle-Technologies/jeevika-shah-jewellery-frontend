import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

interface JewelleryDialogProps {
    imageList: string[]
}

function JewelleryDialogCarousel({ imageList }: JewelleryDialogProps) {
    return (
        <Carousel className="w-full max-w-xs  md:max-w-md">
            <CarouselContent>
                {imageList.map((src, index) => (
                    <CarouselItem key={src + index.toString()}>
                        <Image
                            src={src}
                            width={400}
                            height={400}
                            alt="Jewellery"
                            className="relative p-1 h-[300px] w-[400px] mx-auto"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default JewelleryDialogCarousel