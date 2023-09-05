import { NextResponse } from "next/server";

export async function POST(requst){
    const data=await requst.json()
    console.log(data);
    if(!data){
        return NextResponse.json({response:"There is no data"},{status:400})
    }
    return NextResponse.json({success:true},{status:200})
}