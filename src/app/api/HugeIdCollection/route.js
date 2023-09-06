import { NextResponse } from "next/server";
import UserData from '../../../../DataCollection.json'
export function GET(){

    return NextResponse.json(UserData,{status:200})
}

