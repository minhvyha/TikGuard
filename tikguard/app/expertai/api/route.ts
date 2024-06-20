'use server'

const https = require('https');
const querystring = require('querystring');
const fs = require("fs");
const { randomUUID } = require("crypto");
 
import { NextResponse } from "next/server";
export async function GET() {
  const fileResponse = await fs.promises.readFile('/Users/minhha/TikGuard/tikguard/asf.txt');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return NextResponse.json({user: fileResponse, test1: randomUUID()});
}