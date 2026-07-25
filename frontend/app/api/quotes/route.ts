import { NextResponse } from "next/server";

export async function POST(request: Request) {
try {
const data = await request.json();

const {
  name,
  company,
  email,
  phone,
  service,
  location,
  message,
  budget,
} = data;

if (!name || !email || !phone || !service || !location || !message) {
  return NextResponse.json(
    {
      success: false,
      message: "Please complete all required fields.",
    },
    { status: 400 }
  );
}

console.log("NEW QUOTE REQUEST:", {
  name,
  company,
  email,
  phone,
  service,
  location,
  message,
  budget,
  receivedAt: new Date().toISOString(),
});

return NextResponse.json({
  success: true,
  message: "Quote request received successfully.",
});

} catch (error) {
console.error("QUOTE REQUEST ERROR:", error);

return NextResponse.json(
  {
    success: false,
    message: "Something went wrong. Please try again.",
  },
  { status: 500 }
);

}
}
