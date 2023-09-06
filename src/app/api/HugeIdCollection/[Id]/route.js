import { NextResponse } from "next/server";
import UserData from '../../../../../DataCollection.json'
export function GET(req,res){
    console.log(res.params.Id);
    const id=res.params.Id;
    const filterdata=UserData.filter(index=>index.id == id)

    return NextResponse.json(filterdata,{status:200})
}

export async function PUT(request,content){
    const data=await request.json();
    const id=content.params.Id;
        console.log("Updates",data ,id);
    
    return NextResponse.json({success:true},{status:200})
}

export async function DELETE(request,content){
    const id =content.params.Id;
    if(id){
        console.log("Delete Id", id);
    }
    return NextResponse.json({result:"True ! Data Deleted"},{status:200})
}