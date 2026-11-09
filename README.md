# The Price of Peace

An interactive diplomacy simulation for StandWithUs UK's Explore programme, designed for students aged 16 and 17.

## Launch

Open `index.html` in a modern browser. The entire game works without an internet connection. No installation, data collection, account or external library is required.

## Included

* `index.html`: main web page and branding
* `style.css`: immersive 1970s negotiation room design, responsive layout and print styles
* `game.js`: game engine, computer negotiation, classroom voting, Carter mediation, scoring and historical reveal
* `assets/favicon.svg`: original game icon
* `archive.js`: historical team profiles and interactive research room
* `media.js`: image file configuration, ready for future photographs and maps
* `teacher_guide.html`: readable Teacher Guide linked from every game screen
* `historical_sources.html`: readable Historical Sources page linked from every game screen
* `Teacher_Guide.pdf` and `Historical_Sources.pdf`: printable documents
* `IMAGE_GUIDE.md`: list of photographs, maps and specifications for future uploads
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

Click **Teacher Guide** or **Historical Sources** in the top navigation from any game screen. Both documents also have printable PDF versions. The final results screen contains historical comparisons and class discussion prompts. It can be printed or saved as a local text file.

## Historical note

The simulation combines issues from the September 1978 Camp David frameworks and the detailed 1979 Egypt–Israel Peace Treaty for an accessible learning experience. These were **different documents signed at different times**. Students are not reproducing a verbatim negotiating session.

The fictional political confidence, trust figures, alternative proposals and branching outcomes are educational devices. The original agreements are documented in `SOURCES.md`.

## Privacy and accessibility

No cookies, tracking, API calls, logins, external assets or server access. The optional negotiator name is used only in the current browser session. Keyboard controls, accessible labels, responsive content and reduced motion preferences are supported.

## Branding

The game includes the supplied StandWithUs UK and Explore graphical logos.

## Meet the negotiators and historical image archive

Use **Meet the teams** to explore twelve negotiator profiles. Supplied maps and photographs are embedded in the research room, on the negotiation table and in the historical reveal. See `IMAGE_CREDITS.md` for known sources and rights checks.


## Supplied historical images and branding

The game now includes 12 delegation portraits, Sinai maps, historical photographs, document images and the supplied StandWithUs UK and Explore logos. The images are locally embedded, so the site works without a connection to external image hosts. The negotiation dossiers and final historical reveal also use these photographs.

Please review `IMAGE_CREDITS.md` and `image_credits.html` before placing the site online. Image copyrights, photographers and publication permissions have not been confirmed. Some agency watermarks remain visible.


## Seated negotiator view (latest update)

The game now uses a first person, tabletop view throughout the five rounds, voting, rejected offers, Carter mediation and agreement recording. The relevant historical portraits, dossiers, maps and telegrams appear in the room. Tap or click the map/document on the table, or the evidence button underneath, to inspect the material at full size. The players remain seated from their own delegation's viewpoint in Single Player mode. Classroom mode displays the two delegations together. The historic room photograph is used as an atmospheric background and the arrangement is illustrative, not a reconstruction of the exact 1978 seating positions.

The Teacher Guide, Historical Sources, image credits and both programmes' logos are still included. The game works offline after download and does not require a server to run.


## Concise Classroom Edition (November 2026)
The negotiating table now presents one question at a time, two short delegation positions and three brief choices. Students can open additional background if needed. All five rounds, computer negotiation, classroom voting, two Carter interventions, political trust scores and the historical comparison remain in place.

**Teacher tip:** Allow 30 seconds to read each dossier, 45 to 60 seconds to debate, and then select an offer. Use the historical reveal at the end for reflection.
