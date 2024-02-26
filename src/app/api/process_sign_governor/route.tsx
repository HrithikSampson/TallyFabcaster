import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import { headers } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
export const runtime = "edge";
export const dynamic = 'force-dynamic';
export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  
  return {
    title: 'Total Value Locked Homepage',
    openGraph: {
      images: [{
        url: `${protocol}://${host}/api/governors`,
        width: 1200,
        height: 630
      }],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': `${protocol}://${host}/api/governors`,
    }
  }
}//return new NextResponse(`<div></div>`,{status:200, headers: { 'content-type': 'text/html' } });
  
export async function POST(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const data = await req.json();
  console.log(data);
  return NextResponse.redirect(`${protocol}://${host}/governor`,302);
  //return new ImageResponse(<div></div>,{width: 1200, height: 630});
  
}
