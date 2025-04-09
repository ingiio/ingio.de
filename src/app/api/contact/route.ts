import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define a schema for input validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the input
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const { name, email, message } = result.data;
    
    // In a real application, you would:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Possibly integrate with a CRM or ticketing system
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Log the submission (for demonstration purposes)
    console.log('Contact form submission:', { name, email, message });
    
    // For now, just return a success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was a problem submitting your form. Please try again later.' 
      },
      { status: 500 }
    );
  }
} 