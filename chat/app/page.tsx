// app/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChatGPT() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) return;

    setReply("");
    setIsLoading(true);

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get reply");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No response body");
      }

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        setReply((currentReply) => currentReply + chunk);
      }
    } catch (error) {
      console.error(error);
      setReply("Something went wrong. Check your API key or server route.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleExample(example: string) {
    setMessage(example);
    setReply("");
  }

  function handleNewChat() {
    setMessage("");
    setReply("");
  }

  function handleClearConversation() {
    setReply("");
  }

  return (
    <div className="m-3 lg:m-5 p-2 lg:p-3">
      <header className="flex flex-col">
      <div className="title">
        <Image
          className="title_icon"
          src="/mainlogo.png"
          alt="ChatGPT main logo"
          width={80}
          height={80}
          priority
        />

        <h1 className="retro_logo_text">
          ChatGPT
        </h1>
      </div>

        <div className="subtitle  ">
          <hr />

          <span >THE AI CHATBOT BY OPENAI</span>

          <hr />
        </div>

        <hr />
      </header>

      <main className="pt-4">
        <section className="hero">
          <div className="hero_header">
            <span>ASK ANYTHING, GET ANSWERS!</span>
          </div>

          <div className="hero_text">
            ChatGPT is a large language model trained by OpenAI.
            <br />
            It can help you with a wide range of tasks including answering
            questions,
            <br />
            writing essays, brainstorming ideas, and much more.
          </div>
        </section>

        <hr />

        <section className="message">
          <div className="finger">☞</div>

          <div className="rest_input">
            <div className="head_text">TYPE YOUR QUESTION OR MESSAGE BELOW:</div>

            <div className="message_input">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="chat_input"
                  id="chatinput"
                  placeholder="Ask me anything..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  disabled={isLoading}
                  required
                />

                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="examples">
              TRY EXAMPLES:{" "}
              <button
                type="button"
                className="example_link"
                onClick={() => handleExample("Make me a GeoCities homepage")}
              >
                Make me a GeoCities homepage
              </button>{" "}
              |{" "}
              <button
                type="button"
                className="example_link"
                onClick={() => handleExample("Write me an AOL away message")}
              >
                Write me an AOL away message
              </button>{" "}
              |{" "}
              <button
                type="button"
                className="example_link"
                onClick={() => handleExample("Add a visitor counter")}
              >
                Add a visitor counter
              </button>
            </div>

            {reply && <div className="reply">{reply}</div>}
          </div>
        </section>

        <div className="more_options">
          MORE OPTIONS:{" "}
          <button type="button" className="option_link" onClick={handleNewChat}>
            NEW CHAT
          </button>{" "}
          |{" "}
          <button
            type="button"
            className="option_link"
            onClick={handleClearConversation}
          >
            CLEAR CONVERSATION
          </button>{" "}
          | <Link href="/about">ABOUT ChatGPT</Link>
        </div>
      </main>

      <footer>
        <div className="powered_by">
          <div className="black">Powered by</div>

          <div className="white">O P E N A I</div>
        </div>

        <div className="view">
          View ChatGPT on:{" "}
          <a href="#mobile">Mobile</a> |{" "}
          <a
            href="https://console.groq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/nishchup489-afk/1996_chatgpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="view socials">
          Follow me on:{" "}
          <a
            href="https://x.com/Nishchup489"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/sadnan-nishthup-7405273a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/__nish489___/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className="footer_note">
          &copy; 2026 Retro ChatGPT Demo. Made for the ancient web.
        </div>
      </footer>
    </div>
  );
}