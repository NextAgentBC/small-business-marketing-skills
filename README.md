# Small-business marketing skills

Six AI marketing skills for small, local businesses: a brand card, a month of ideas, social posts for every
platform, a fix for drafts that sound like AI, short emails within Canada's anti-spam law, and pictures and
30-second videos. They work in ChatGPT, Claude and Gemini, with no terminal. For a business we recommend one paid
plan: ChatGPT Plus, Claude Pro or Google AI Pro (about CA$25–30 a month); the free plans limit uploads, images and
usage.

[中文说明](README.zh.md)

A skill is a plain text file of know-how: when to use it, and how a professional would do the job, step by step.
Give it to your AI assistant once, and it follows the method every time.

## The six skills

| Skill | Use it for |
|---|---|
| [brand-card](skills/brand-card/SKILL.md) | Your one-page brand card. Every other skill reads it first. |
| [ideas-calendar](skills/ideas-calendar/SKILL.md) | A month of post ideas, the dates ahead, and low-cost local ideas. |
| [social-posts](skills/social-posts/SKILL.md) | Posts for Facebook, Instagram, Reels, Google, LinkedIn, RedNote and WeChat: one idea, every platform. |
| [copy-fixer](skills/copy-fixer/SKILL.md) | Turn a draft that sounds like AI into words you would actually say. |
| [email-casl](skills/email-casl/SKILL.md) | Short emails with one button, within Canada's anti-spam law. |
| [pictures-video](skills/pictures-video/SKILL.md) | Picture prompts and sizes, and a 30-second video filmed on a phone. |

## Install in five minutes, without a terminal

All six skills are in one plain text file. It is not a program.

1. **Download it:** [small-business-marketing-skills.txt](https://github.com/NextAgentBC/small-business-marketing-skills/releases/latest/download/small-business-marketing-skills.txt)
   works in ChatGPT, Claude and Gemini. (The same file as Markdown: [.md](https://github.com/NextAgentBC/small-business-marketing-skills/releases/latest/download/small-business-marketing-skills.md).)
2. **Make a Project or a Gem, and add the file to it.** Upload only this file.
   - **ChatGPT:** New project (in the sidebar), then add the file to the Project's files.
   - **Claude:** Projects, then upload the file to the project knowledge.
   - **Gemini:** Gems, then make or edit a Gem and add the file under Knowledge. (Google is moving Gems to "skills"
     from November 2026; keep a copy of the file.)
3. **Check it:** in a new chat in that Project or Gem, ask "List the six skills in my skills file." You should see six
   names.
4. **Make your brand card:** "Use the brand-card skill in my skills file to interview me and write my brand card."
   Save the card in the Project's or Gem's instructions (ChatGPT: Project settings).
5. **Use it:**
   - "Use the ideas-calendar skill in my skills file: give me 12 post ideas for the next four weeks."
   - "Use the social-posts skill: turn this idea into a Facebook post, an Instagram carousel and a Google post."
   - "Use the copy-fixer skill on this draft: [paste it]."

Menus move now and then. If a button has a different name, look for "Files", "Knowledge" or a "+".

## For developers: install as agent skills

The `skills/` folder follows the [Agent Skills](https://agentskills.io) format, one folder per skill with a
`SKILL.md`. Copy the folders into your agent's skills directory (for Claude Code, `.claude/skills/`), or use the
[skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add NextAgentBC/small-business-marketing-skills
```

## Rules built into every skill

- **AI drafts, you approve.** Nothing is posted or sent without the owner reading it.
- **Facts only from you.** Anything the AI is unsure of is marked [CHECK]; missing proof is asked for, never invented.
- **No fake reviews, quotes or customers.** Real customers appear only with their written OK.
- **Canada's rules:** email follows CASL; staff who review their employer say so; no prices in public posts unless
  the brand card says they may be shown.

## What changed from the original

These skills are adapted from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) by
Corey Haines (MIT). The original has about 50 skills for technical marketers and software companies, installed from a
terminal. This edition:

- keeps six skills a local business uses every week, and rewrites them in plain language with local examples;
- adds a brand card in place of the original's product-marketing document;
- adds Google Business Profile, RedNote (Xiaohongshu) and WeChat, and a platform cheat sheet checked in October 2026;
- adds Canada's anti-spam law (CASL), the Competition Bureau's guidance on reviews, and Canadian dates;
- adds a Chinese ban list to the AI-tells check, and asks the AI to reply in the user's language;
- ships all six skills in one file, so they work in free chat apps without a terminal.

Platform limits, prices and menus change. Facts were checked on October 4, 2026; corrections are welcome as issues
or pull requests.

## Build

The all-in-one file is generated from `skills/*/SKILL.md`. After editing a skill, bump the version in
`package.json` and in each skill, then:

```bash
node scripts/build.mjs
```

Releases attach the built file as both `.md` and `.txt`; the steps are at the top of `scripts/build.mjs`.

## Licence

MIT. Original skills © 2025 Corey Haines; this edition © 2026 NextAgent. See [LICENSE](LICENSE). Not affiliated with
or endorsed by Corey Haines.
