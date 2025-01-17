// routes/index.tsx
import CursorGlow from "../islands/CursorGlow.tsx";

export default function Home() {
  return (
    <div class="relative min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center overflow-hidden z-0">
      <CursorGlow />
      <div class="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div class="text-center">
          <img
            src="/img/joey.jpg"
            alt="Profile Picture"
            class="w-32 h-32 rounded-full mx-auto border-4 border-gray-600"
          />
          <h1 class="text-2xl font-bold mt-4">Joey Crowley</h1>
          <p class="text-gray-400">Web Developer | Designer | Creator</p>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold">About Me</h2>
          <p class="mt-2 text-gray-300">
            Websites, games, apps. Crafting elegant user experiences and
            creating modern web applications. Let’s build something amazing
            together!
          </p>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold">Links</h2>
          <div class="mt-2 flex flex-col space-y-2">
            <a
              href="https://github.com/crowlsyong"
              class="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josephwcrowley/"
              class="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:j&#111;s&#101;&#112;h&#119;&#105;l&#108;&#105;&#97;&#109;&#99;&#114;&#111;&#119;&#108;&#101;y&#64;&#103;&#109;a&#105;l&#46;c&#111;&#109;"
              class="text-blue-400 hover:text-blue-300"
            >
              Email Me
            </a>

            <a
              href="https://web.archive.org/web/20240814021836/https://adventurerock.com/"
              class="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adventure Rock
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
