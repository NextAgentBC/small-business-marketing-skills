# 小生意营销技能包

给本地小生意用的六个 AI 营销技能：品牌卡、一个月选题、各平台帖子、改掉 AI 腔、符合加拿大反垃圾邮件法的短邮件、海报和 30 秒手机视频。**免费版**的 ChatGPT、Claude、Gemini 都能用，不需要终端。

[English](README.md)

"技能"就是一个文本文件，写着某件事什么时候该用、专业的人会怎么一步步做。把它交给你的 AI 助手一次，以后它每次都照这个方法做。

## 六个技能

| 技能 | 用来做什么 |
|---|---|
| [brand-card](skills/brand-card/SKILL.md) | 一页品牌卡。其他技能都先读它。 |
| [ideas-calendar](skills/ideas-calendar/SKILL.md) | 一个月的发帖点子、接下来的节日，以及花钱少的本地点子。 |
| [social-posts](skills/social-posts/SKILL.md) | Facebook、Instagram、Reels、Google、LinkedIn、小红书、微信的帖子：一个想法，所有平台。 |
| [copy-fixer](skills/copy-fixer/SKILL.md) | 把一股 AI 味的草稿，改成你自己会说的话。 |
| [email-casl](skills/email-casl/SKILL.md) | 只有一个按钮的短邮件，符合加拿大反垃圾邮件法。 |
| [pictures-video](skills/pictures-video/SKILL.md) | 海报提示词和尺寸，以及用手机拍的 30 秒视频。 |

## 五分钟装好，不用终端

六个技能都在一个纯文本文件里，它不是程序。

1. **下载：** [small-business-marketing-skills.txt](https://github.com/NextAgentBC/small-business-marketing-skills/releases/latest/download/small-business-marketing-skills.txt)，ChatGPT、Claude、Gemini 都能用。（同一个文件的 Markdown 版：[.md](https://github.com/NextAgentBC/small-business-marketing-skills/releases/latest/download/small-business-marketing-skills.md)。）
2. **建一个项目或 Gem，把文件加进去。** 只上传这一个文件：免费版 ChatGPT 每天只能上传 3 个文件，每个项目最多 5 个。
   - **ChatGPT：** 侧边栏点"新项目"（New project），再把文件添加到项目的文件里。
   - **Claude：** 点 Projects，再上传到项目知识（Project knowledge）里。
   - **Gemini：** 点 Gems，新建或编辑一个 Gem，在知识（Knowledge）里添加文件。（Google 从 2026 年 11 月起要把 Gem 改成"技能"，文件请自己留一份。）
3. **检查一下：** 在这个项目或 Gem 里开新对话，问"列出我技能文件里的六个技能。"应该能看到六个名字。
4. **做品牌卡：** "用我技能文件里的 brand-card 技能采访我，写我的品牌卡。"写好后，把品牌卡存进项目或 Gem 的说明里（ChatGPT 在项目设置里）。
5. **开始用：**
   - "用我技能文件里的 ideas-calendar 技能，给我接下来四周的 12 个发帖点子。"
   - "用 social-posts 技能，把这个想法写成一条 Facebook 帖子、一组 Instagram 轮播和一条 Google 动态。"
   - "用 copy-fixer 技能改这份草稿：【粘贴进来】"

技能文件是英文的，但你用中文提问，AI 就用中文回答。菜单名称偶尔会变，找"Files""Knowledge"或者一个"+"就对了。

## 写进每个技能的规矩

- **AI 起草，你来批准。** 你没读过的东西不会发出去。
- **事实只来自你。** AI 拿不准的地方标【CHECK】，缺的证据会问你，不会编。
- **不编好评、引言或客户。** 真实客人的名字和照片，要有书面同意。
- **加拿大的规矩：** 邮件遵守 CASL；员工给自己公司写评价要说明身份；品牌卡没写明可以公开的价格，公开帖子里就不放。

## 和原版的区别

改编自 Corey Haines 的 [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)（MIT 协议）。原版约 50 个技能，面向懂技术的营销人和软件公司，要用终端安装。这个版本：

- 只留本地小生意每周都用得上的六个，用大白话重写，例子换成本地小店；
- 用"品牌卡"代替原版的产品营销文档；
- 加上 Google 商家资料、小红书和微信，以及 2026 年 10 月核实过的平台速查表；
- 加上加拿大反垃圾邮件法（CASL）、竞争局关于评价的指引和加拿大的节日；
- AI 腔检查加了中文禁用词表，并要求 AI 用提问者的语言回答；
- 六个技能合成一个文件，免费聊天工具不用终端也能用。

平台规则、价格和菜单会变。以上事实核实于 2026 年 10 月 4 日；发现过时的地方，欢迎提 issue 或 pull request。

## 许可

MIT。原版技能 © 2025 Corey Haines；本版本 © 2026 NextAgent。见 [LICENSE](LICENSE)。与 Corey Haines 无隶属关系，也未经其背书。
