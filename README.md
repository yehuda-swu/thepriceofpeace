# The Price of Peace

An interactive diplomacy simulation for StandWithUs UK's Explore programme, designed for students aged 16 and 17.

## Launch

Open `index.html` in a modern browser. The entire game works without an internet connection. No installation, data collection, account or external library is required.

## Included

* `index.html`: main web page and branding
* `style.css`: immersive 1970s negotiation room design, responsive layout and print styles
* `game.js`: game engine, computer negotiation, classroom voting, Carter mediation, scoring and historical reveal
* `assets/favicon.svg`: original game icon
* `TEACHER_GUIDE.md`: teaching plan, briefings and classroom tips
* `SOURCES.md`: historical references and explanation of simulation choices

## Gameplay

**Single Player:** Choose Israel or Egypt. View your confidential objectives and negotiate five issues with a computer delegation. It will reject proposals that cross its core red lines or impose heavy political costs. It can also offer a counterproposal. Carter can help twice.

**Classroom:** Divide students into two teams. Use the printable confidential briefing sheets or reveal them privately on a device. Each round involves a negotiated proposal and a separate acceptance decision by both sides. A rejected offer can be revised, or Carter can propose a compromise. Use one device connected to a projector or placed between the teams. No server or separate accounts are required.

Each mode is designed for roughly five to eight minutes of play. The clock adds urgency but does not automatically close the session. Teachers can extend discussion.

## Hosting on GitHub Pages

1. Create a public GitHub repository. For example, `the-price-of-peace`.
2. Extract the ZIP on your computer.
3. Upload `index.html`, `style.css`, `game.js`, the `assets` folder and the documentation to the repository root. Do not upload the ZIP itself as the site.
4. Commit your files with the message `Add The Price of Peace diplomatic simulator`.
5. In the repository, go to **Settings**, then **Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/ (root)`, then save.
6. Your site will appear at `https://YOUR_USERNAME.github.io/the-price-of-peace/` if you use the suggested repository name. Use the live link shown in your Pages settings to confirm.

Alternatively, inside an existing local Git repository, copy in the extracted files and run:

```bash
git add .
git commit -m "Add The Price of Peace diplomatic simulator"
git push origin main
```

## Teacher guidance

See `TEACHER_GUIDE.md`. The final results screen contains historical comparisons and class discussion prompts. It can be printed or saved as a local text file.

## Historical note

The simulation combines issues from the September 1978 Camp David frameworks and the detailed 1979 Egypt–Israel Peace Treaty for an accessible learning experience. These were **different documents signed at different times**. Students are not reproducing a verbatim negotiating session.

The fictional political confidence, trust figures, alternative proposals and branching outcomes are educational devices. The original agreements are documented in `SOURCES.md`.

## Privacy and accessibility

No cookies, tracking, API calls, logins, external assets or server access. The optional negotiator name is used only in the current browser session. Keyboard controls, accessible labels, responsive content and reduced motion preferences are supported.

## Branding

The header includes typographic StandWithUs UK and Explore branding, and the design uses original game illustrations. The project does not contain copies of the official graphical logos. The wordmarks can be replaced with official artwork supplied by the organisation without changing gameplay.
