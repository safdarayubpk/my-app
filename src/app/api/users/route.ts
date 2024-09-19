import {NextResponse, NextRequest} from "next/server";

const userData=[
    {
        "name":"Safdar Ayub",
        "contact": "1234567890",
    },
    {
        "name":"gul",
        "contact": "322222",
    }
]

export function GET() {
    return NextResponse.json(userData);
}

export async function POST(request:NextRequest) {
    const formData = await request.json();

    return NextResponse.json({"form data sucessfully submitted": formData});
}