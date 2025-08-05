import { imgSrcModifier } from "@/utils/functions/image";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
interface PinchZoomImageProps {
    src: string;
}

function PinchZoomImage({ src }: PinchZoomImageProps) {
	return (
		<div className="relative w-full">
			<TransformWrapper>
				<TransformComponent>
					<img src={imgSrcModifier(src)} alt="test" />
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
}

export default PinchZoomImage;
