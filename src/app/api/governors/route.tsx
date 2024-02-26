import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = 'force-dynamic';
const getGovernors = async () => {
    
}
export async function GET(req: NextRequest) {
    
    return new ImageResponse(
        (<div></div>),{ width: 1200, height: 630 }
    )
}