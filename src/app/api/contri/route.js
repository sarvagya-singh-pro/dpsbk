import { NextResponse } from "next/server";
import prisma from '../../../../lib/prisma'
export async function GET(request) {
    console.log("hello")
    const posters=await prisma.user.findMany()
    const data={}
    posters.forEach(element => {
        data[element.name]=element.posts
        console.log(element.name)
    });
    return NextResponse.json({ message: data });
  }