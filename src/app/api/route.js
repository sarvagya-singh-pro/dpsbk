import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
export async function GET(request) {
    console.log("hello")
    const posters=await prisma.user.findMany()
    posters.forEach(element => {
        console.log(element.name)
    });
    return NextResponse.json({ message: 'Hello, API!' });
  }