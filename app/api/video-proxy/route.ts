// app/api/video-proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');
    if (!url) {
        return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
    }

    try {
        const videoRes = await fetch(url);
        if (!videoRes.ok) {
            return NextResponse.json({ error: 'Failed to fetch video' }, { status: videoRes.status });
        }

        const contentType = videoRes.headers.get("content-type") || "video/mp4";
        const buffer = await videoRes.arrayBuffer();

        return new NextResponse(Buffer.from(buffer), {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch (err) {
        return NextResponse.json({ error: "Error fetching video" }, { status: 500 });
    }
}
