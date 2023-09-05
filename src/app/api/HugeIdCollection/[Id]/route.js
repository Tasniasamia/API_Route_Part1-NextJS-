import { NextResponse } from "next/server";
import UserData from '../../../../../DataCollection.json'
export function GET(req,res){
    console.log(res.params.Id);
    const id=res.params.Id;
    const filterdata=UserData.filter(index=>index.id == id)

    return NextResponse.json(filterdata,{status:200})
}