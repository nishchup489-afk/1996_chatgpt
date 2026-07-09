import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about_page">
      <h1>About ChatGPT 1996</h1>

      <p>
        ChatGPT 1996 is a retro-styled AI chatbot experience inspired by the
        early web era, old-school homepages, typewriter fonts, chunky buttons,
        and beautiful internet chaos.
      </p>

      <h2>The Story</h2>

      <p>
        Somebody in the future invented a time travel machine.
      </p>

      <p>
        He went back to 1996. While living between tons of AGI running on local
        computers, he saw the 1996 version of a Microsoft browser and got an
        idea.
      </p>

      <p>
        What if ChatGPT existed in 1996?
      </p>

      <p>
        So he built a 1996 version of ChatGPT and hosted it in that timeline.
        It became really, really famous.
      </p>

      <p>
        But time travel is dangerous. If you travel through time and change
        something, it creates a whole different timeline.
      </p>

      <p>
        So in that other timeline, people started using ChatGPT in 1996.
      </p>

      <p>
        In our timeline, we started using it around 2020.
      </p>

      <p>
        Curious how those timeline people are doing.
      </p>

      <h2>How It Was Built</h2>

      <p>
        This project was built with Next.js and an AI API to imagine what a
        modern chatbot might have looked like if it existed during the classic
        1990s web.
      </p>

      <ul>
        <li>
          <strong>LLM Used:</strong> gpt-oss-20B
        </li>
        <li>
          <strong>API Used:</strong> Groq Console
        </li>
        <li>
          <strong>Frontend:</strong> Next.js
        </li>
      </ul>

      <p>
        It is not trying to look modern. It is trying to look legendary.
      </p>

      <p>
        Have an idea for updating this page? Go on{" "}
        <a
          href="https://github.com/nishchup489-afk/1996_chatgpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <div className="about_links">
        <Link href="/">← Back to Chat</Link>
      </div>
    </main>
  );
}