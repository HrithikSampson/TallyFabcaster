import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import { headers } from "next/headers";

export const runtime = "edge";
export const dynamic = "force-dynamic";

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
      'fc:frame:input:text': 'hi',
    }
  }
}
 
export default function Home() {
  
  return <main />
}
