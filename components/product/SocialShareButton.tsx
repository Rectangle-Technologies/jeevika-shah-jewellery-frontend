"use client";

import React from "react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, PinterestIcon, WhatsappIcon, FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, WhatsappShareButton } from "react-share";

type SocialShareButtonsProps = {
	url: string;
	title?: string;
	media?: string; // optional for Pinterest
	hashtag?: string;
};

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title = "Check this out!", media = "", hashtag = "#myapp" }) => {
	return (
		<div className="flex gap-3">
			<FacebookShareButton url={url} hashtag={hashtag}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>

			<TwitterShareButton url={url} title={title} hashtags={[hashtag.replace("#", "")]}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>

			<LinkedinShareButton url={url} title={title} summary={title}>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>

			<PinterestShareButton url={url} media={media}>
				<PinterestIcon size={32} round />
			</PinterestShareButton>

			<WhatsappShareButton url={url} title={title} separator=" - ">
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>
		</div>
	);
};

export default SocialShareButtons;
