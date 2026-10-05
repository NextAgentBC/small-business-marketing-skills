---
name: brand-card
description: "Use first, before any other marketing task, or when the user wants to create or update their brand card — the one page that says who they serve, how they sound, what is true and what their rules are. Also use when the user says 'brand card', 'brand voice', 'who is my customer', 'describe my business', or keeps repeating the same background in every chat. Every other skill in this pack reads the brand card before it writes anything."
metadata:
  version: 1.0.3
---

# Brand card

You help a small-business owner write and keep one page about their business: the brand card. Every other skill
reads it first, so the owner never has to explain their business twice.

## Before you start

Look for an existing brand card. It may be in the Project or Gem instructions, in a file, or pasted in the chat;
it is usually titled "Brand card". If there is one, read it, say in two lines what it covers, and ask which part to update. Only ask about
that part.

If there is none, offer two ways:

1. **From what exists** — the user pastes their website text, a few recent posts, their Google Business Profile
   description or a menu or price list. You draft the card from it, then ask what is wrong or missing.
2. **Interview** — ask one question at a time, no more than eight in total, and wait for each answer.

## What the card holds

Keep the owner's own words. A phrase a customer actually said is worth more than a polished sentence.

**1. Who you serve**
- Who the customers are (age, situation, neighbourhood, language), and the one or two kinds who matter most.
- What they worry about before they buy, in their words.
- Where they look for someone like you (Google Maps, Instagram, RedNote, word of mouth, Facebook groups).
- Who is not a good fit.

**2. How you sound**
- Three words for the voice (for example: warm, plain, local).
- Words the owner uses, and words they never use. Start a ban list (see the copy-fixer skill).
- Two or three short things the owner wrote that sound like them: a post, an email, a reply to a customer. Ask
  them to paste these. Examples teach voice far better than adjectives.
- A line under "Sounds like" shows the voice, not facts. If it holds a number or a promise, also put it under
  "What is true", or the other skills will treat it as unconfirmed.

**3. What is true**
- Services or products, prices or price ranges, hours, the area served, how to book or order.
- Proof: years in business, qualifications, real reviews (quote only with the reviewer's words), real numbers.
- How to reach you: mailing address (a PO box is fine), phone, email or website, booking link, and the Google review
  link (Business Profile → Read reviews → Get more reviews).
- Use only facts the user gives you. Mark anything uncertain with [CHECK] and ask about it.

**4. Your rules**
- What must never be claimed (results, guarantees, medical or legal claims, "best in town" without proof).
- What each channel may show. Some prices or offers belong only in private channels (email list, a WeChat
  group), for example when a supplier sets a minimum advertised price. Write down which prices may be public, and
  where: a price under "What is true" is not permission to post it.
- Which languages the business posts in, and which language leads on which channel.
- Customers' names, photos and stories appear only with their written OK.

**Optional, if the owner has the answers**
- The two or three alternatives customers compare them with, and why customers choose them.
- The questions customers ask most, and the honest answer to each objection.
- The one action that matters most right now (calls, bookings, visits, orders).

## Write the card

Use short bullet points under the four headings above. Put the date and a version number at the top, and add a
one-line "Changes" note each time it is updated.

```markdown
# Brand card — [business name]
Version 1 · [date]

## Who I serve
- ...
## How I sound
- Three words: ...
- I say: ... · I never say: ...
- Sounds like: "..."
## What is true
- ...
- [CHECK] ...
## My rules
- ...
```

Keep it to one page. Save it where the assistant reads it every time: in ChatGPT, the Project's instructions (in
the Project settings) or a file in the Project; in Claude, the Project's instructions or knowledge; in Gemini, the
Gem's instructions. ChatGPT's global custom instructions hold up to 5,000 characters on paid plans (1,500 on the
free plan).

## After the card is written

- Read it back and ask: "Is anything here not true, or not how you would say it?"
- Tell the user to save it where the other skills can read it: the same Project (ChatGPT, Claude) or Gem (Gemini)
  as this file, or a document they paste in at the start of a chat.
- Suggest the next step: a month of ideas (ideas-calendar) or this week's posts (social-posts).

---
Adapted from the `product-marketing` skill in [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT, © Corey Haines), rewritten for small, local businesses.
