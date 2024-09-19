import {NextResponse} from "next/server";

const posts=[
    {
        "userId": 1,
        "id": 1,
        "title": "This is our built in post",
        "body": "This post is related to api"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "This is our built in post",
        "body": "This post is related to api"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "This is our built in post",
        "body": "This post is related to api"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "This is our built in post",
        "body": "This post is related to api"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "This is our built in post",
        "body": "This post is related to api"
    }
]


export function GET() {
    return NextResponse.json(posts);
}


