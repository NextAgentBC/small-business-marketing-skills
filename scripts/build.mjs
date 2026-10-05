// Builds small-business-marketing-skills.md: all six skills in one file, for people who upload a file to a
// ChatGPT or Claude Project or a Gemini Gem instead of installing skills with a terminal.
// Run after editing any skills/*/SKILL.md:  node scripts/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
// In the order a new user needs them, with the one line each gets in the file's table of contents.
const ORDER = [
  ["brand-card", "Your one-page brand card. Every other skill reads it first."],
  ["ideas-calendar", "A month of post ideas, the dates ahead, and low-cost local ideas."],
  ["social-posts", "Posts for Facebook, Instagram, Reels, Google, LinkedIn, RedNote and WeChat: one idea, every platform."],
  ["copy-fixer", "Turn a draft that sounds like AI into words you would actually say."],
  ["email-casl", "Short emails with one button, within Canada's anti-spam law."],
  ["pictures-video", "Picture prompts and sizes, and a 30-second video filmed on a phone."]
];
const VERSION = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")).version;

// Splits a SKILL.md into its frontmatter description and its body, and moves the body's headings one level down
// (outside code fences) so each skill sits under its own "## Skill:" heading.
function load([name, summary]) {
  const text = readFileSync(join(ROOT, "skills", name, "SKILL.md"), "utf8");
  const [, front, body] = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const description = front.match(/^description: "(.*)"$/m)[1];
  let fenced = false;
  const lines = body.trim().split("\n").map((line) => {
    if (line.startsWith("```")) fenced = !fenced;
    return !fenced && /^#{1,5} /.test(line) ? "#" + line : line;
  });
  // The first heading is the skill's own title; "## Skill: name" replaces it.
  if (lines[0].startsWith("## ")) lines.shift();
  return { name, summary, description, body: lines.join("\n").trim() };
}

const skills = ORDER.map(load);
const out = `# Small-business marketing skills — all six in one file

Version ${VERSION} · https://github.com/NextAgentBC/small-business-marketing-skills · MIT licence

**For the person:** upload this file to a ChatGPT or Claude Project, or to a Gemini Gem, next to your brand card.
Then ask for what you need, for example "Use the ideas-calendar skill: give me next week's three posts."

**For the AI assistant:**
- This file holds six marketing skills for a small, local business. When the user asks for a marketing task, pick
  the skill below that fits and follow it. Say which skill you are using.
- Always read the user's brand card first (a file or text titled "Brand card"). If there is none, offer to make one
  with the brand-card skill.
- Reply in the language the user writes in.
- You draft; the owner approves. Never claim that anything was posted or sent.

| Skill | Use it for |
|---|---|
${skills.map((s) => `| ${s.name} | ${s.summary} |`).join("\n")}

${skills.map((s) => `---\n\n## Skill: ${s.name}\n\n**When to use:** ${s.description}\n\n${s.body}`).join("\n\n")}
`;

writeFileSync(join(ROOT, "small-business-marketing-skills.md"), out);
console.log(`wrote small-business-marketing-skills.md (${skills.length} skills, ${out.length} characters)`);
