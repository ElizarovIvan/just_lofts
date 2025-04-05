export async function GET() {
    console.log("✅ API route '/api/debug-test' работает");
  
    return new Response("✅ API работает", {
      status: 200,
    });
  }
  