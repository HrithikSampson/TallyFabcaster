import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import { headers } from "next/headers";
export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  
  return {
    title: 'Tally',
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
      'fc:frame:input:text': 'hello',
      'fc:frame:button:1': 'View chart',
      'fc:frame:button:1:action': 'post',
      'fc:frame:button:1:target': `${protocol}://${host}/api/process_sign_governor`,
      'fc:frame:post_url': `${protocol}://${host}/api/process_sign_governor`,
    }
  }
}

export default function Home() {
  
  return <main />
}
