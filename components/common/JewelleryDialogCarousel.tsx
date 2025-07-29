import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imgSrcModifier } from "@/utils/functions/image";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";

interface JewelleryDialogProps {
	imageList: string[];
}

function JewelleryDialogCarousel({ imageList }: JewelleryDialogProps) {
	const [videoThumbs, setVideoThumbs] = useState<Record<string, string>>({});

	useEffect(() => {
		imageList.forEach((src) => {
			if ((src.includes("mp4") || src.includes("mov")) && !videoThumbs[src]) {
				const video = document.createElement("video");
				video.src = `/api/video-proxy?url=${encodeURIComponent(src)}`;
				video.crossOrigin = "anonymous";
				video.muted = true;
				video.currentTime = 0;

				video.addEventListener("loadeddata", () => {
					const canvas = document.createElement("canvas");
					canvas.width = video.videoWidth;
					canvas.height = video.videoHeight;

					const ctx = canvas.getContext("2d");
					if (ctx) {
						ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
						const thumbnail = canvas.toDataURL("image/jpeg");
						setVideoThumbs((prev) => ({ ...prev, [src]: thumbnail }));
					}
				});
			}
		});
	}, [imageList, videoThumbs]);

	return (
		<Carousel
			className="w-full md:w-[90%]"
			showThumbs={true}
			renderThumbs={() =>
				imageList.map((src, index) => {
					const isVideo = src.includes("mp4") || src.includes("mov");
					const thumbSrc = isVideo
						? videoThumbs[src] || "" // fallback to blank or loading spinner
						: imgSrcModifier(src);

					return (
						<div key={"thumb-" + src + index.toString()} className="relative w-16 h-16 bg-gray-200">
							{thumbSrc ? <Image src={thumbSrc} alt="Jewellery thumbnail" fill sizes="64px" className="object-cover rounded mx-auto" /> : <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">Loading...</div>}
						</div>
					);
				})
			}
		>
			{imageList.map((src, index) => {
				const isVideo = src.includes("mp4") || src.includes("mov");

				if (isVideo) {
					return (
						<div key={src + index.toString()} className="relative w-full h-full flex items-center">
							<video src={imgSrcModifier(src)} controls autoPlay muted loop playsInline className="w-full h-full mx-auto rounded-xl shadow-md" />
						</div>
					);
				} else {
					return (
						<div key={src + index.toString()} className="relative w-full">
							<InnerImageZoom src={imgSrcModifier(src)} zoomSrc={imgSrcModifier(src)} zoomType="hover" fullscreenOnMobile={true} />
						</div>
					);
				}
			})}
		</Carousel>
	);
}

export default JewelleryDialogCarousel;
