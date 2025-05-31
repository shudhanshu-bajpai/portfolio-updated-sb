// // import { NextResponse } from 'next/server';
// // import OpenAI from 'openai';

// // const openai = new OpenAI({
// //   apiKey: process.env.API_KEY,
// // });

// // export async function POST(req: Request) {
// //   const { message } = await req.json();

// //   const prompt = `
// // You are a chatbot assistant for Shudhanshu Bajpai's portfolio.
// // Details:
// // - B.Tech in CS from ABES Engineering College
// // - Skills: HTML, CSS, JS, React, Node.js, Java, Web3, Cloud
// // - Projects: KuberVault using Sentry, Plaid, Dwolla
// // - Interests: Space, reading, documentaries

// // User: ${message}
// // Bot:
// //   `;

// //   try {
// //     const chatCompletion = await openai.chat.completions.create({
// //       model: 'gpt-4',
// //       messages: [{ role: "user", content: prompt }],
// //       max_tokens: 150,
// //     });

// //     return NextResponse.json({
// //       reply: chatCompletion.choices[0].message?.content?.trim() ?? '',
// //     });
// //   } catch (error) {
// //     return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
// //   }
// // }

// import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.API_KEY,
// });

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return NextResponse.json({ reply: 'No message provided' }, { status: 400 });
//     }

//     const prompt = `
// You are a chatbot assistant on the portfolio website of Shudhanshu Bajpai.

// About him:
// - Education: B.Tech in Computer Science from ABES Engineering College
// - Skills: HTML, CSS, JavaScript, React.js, Node.js, Java, Web3, Cloud
// - Projects: KuberVault (used Sentry, Plaid, Dwolla)
// - Interests: Space, scientific innovation, book reading, documentaries

// Answer user queries as if you're a smart assistant who knows this profile. Keep responses short and helpful.

// User: ${message}
// Bot:
//     `;

//     const completion = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: prompt }],
//       temperature: 0.7,
//     });

//     const reply = completion.choices[0]?.message?.content?.trim() || "I'm not sure how to respond.";

//     return NextResponse.json({ reply });
//   } catch (err: any) {
//     console.error('❌ OpenAI API Error:', err);
//     return NextResponse.json({ reply: 'Sorry, I could not respond now.' }, { status: 500 });
//   }
// }


// app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();


    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: "You are Shudhanshu Bajpai's AI assistant He is a MERN developer currently doing next js . Respond politely and accurately to questions about him, his projects, and portfolio. Always give short (2 to 3 lines) and smart replies to the questions asked Always reply like He is answering the questions not like a bot ...Do not write mern dev in every question before it is asked",
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Groq API Error:', data);
      return NextResponse.json({ reply: "Can't send messages now. I am going to sleep " }, { status: 500 });
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ reply: "I am not replying anymore ... Call me " }, { status: 500 });
  }
}
