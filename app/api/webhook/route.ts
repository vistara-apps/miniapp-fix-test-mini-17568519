import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the webhook event for debugging
    console.log('Webhook received:', body);
    
    // Process different event types
    switch (body.event) {
      case 'frame_action':
        return handleFrameAction(body.data);
      case 'user_connection':
        return handleUserConnection(body.data);
      default:
        return NextResponse.json(
          { success: true, message: 'Webhook received but no handler for this event type' },
          { status: 200 }
        );
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: true, message: 'Error processing webhook', details: (error as Error).message },
      { status: 500 }
    );
  }
}

// Handler for frame action events
function handleFrameAction(data: any) {
  // Process frame action data
  // This would typically involve storing the action, updating state, etc.
  
  return NextResponse.json(
    { success: true, message: 'Frame action processed successfully' },
    { status: 200 }
  );
}

// Handler for user connection events
function handleUserConnection(data: any) {
  // Process user connection data
  // This would typically involve storing user information, updating state, etc.
  
  return NextResponse.json(
    { success: true, message: 'User connection processed successfully' },
    { status: 200 }
  );
}

// GET method for testing the webhook endpoint
export async function GET() {
  return NextResponse.json(
    { success: true, message: 'Webhook endpoint is active' },
    { status: 200 }
  );
}

