/* The Price of Peace | Explore, StandWithUs UK
   A standalone educational simulation. No libraries, account, tracking or server required.
   Negotiation confidence and trust are fictional teaching indicators, not historical measurements.
*/
'use strict';

const SOURCES = [
  {label:'Original Camp David Accords, 17 September 1978',url:'https://www.presidency.ucsb.edu/documents/camp-david-meeting-the-middle-east-documents-agreed-camp-david'},
  {label:'Egypt–Israel Peace Treaty, 26 March 1979, United Nations',url:'https://peacemaker.un.org/en/node/9427'},
  {label:'US Department of State historical overview',url:'https://history.state.gov/milestones/1977-1980/camp-david'},
  {label:'Jimmy Carter Presidential Library, thirteen days at Camp David',url:'https://www.jimmycarterlibrary.gov/research/additional-resources/camp-david-accords/thirteen-days-after-twenty-five-years'}
];
const ROLE = {
  israel:{name:'Israel',flag:'🇮🇱',leader:'Prime Minister Menachem Begin',lead:'Your responsibility is to secure a genuine end to the conflict while protecting Israel against another war.',objectives:[
    'Secure formal Egyptian recognition of Israel and an end to the state of war.',
    'Require credible security arrangements and limits on military deployments near the border.',
    'Protect freedom of navigation through the Suez Canal and the Straits of Tiran.',
    'Manage resistance at home to the removal of Israeli settlements and airfields in Sinai.'
  ],redlines:[
    'A peace agreement without full mutual recognition is not enough.',
    'Unrestricted Egyptian military deployment across Sinai would leave Israel exposed.'
  ],trade:'Israel might relinquish Sinai in exchange for binding peace and effective security arrangements.'},
  egypt:{name:'Egypt',flag:'🇪🇬',leader:'President Anwar Sadat',lead:'Your responsibility is to regain Egypt’s territory and sovereignty while securing a credible end to decades of war.',objectives:[
    'Restore Egyptian sovereignty over the entire Sinai Peninsula.',
    'Ensure Israeli military forces and settlements leave Sinai.',
    'Gain a realistic withdrawal timetable and restore Egyptian national pride.',
    'Ensure the Palestinian question is addressed in a wider peace framework.'
  ],redlines:[
    'Permanent Israeli control of any part of Sinai is unacceptable.',
    'Permanent Israeli military bases or settlements on Egyptian soil cannot form the final agreement.'
  ],trade:'Egypt might accept limited force zones, international observation and diplomatic normalisation in return for full withdrawal.'}
};
const ISSUES = [
  {
    id:'sinai',number:'01',title:'The Sinai Question',tag:'TERRITORY & SOVEREIGNTY',context:'Egypt wants Sinai back. Israel fears losing a vital security buffer.',
    positions:{israel:'Withdrawal means less strategic depth and removing settlements.',egypt:'All of Sinai must return to Egypt.'},
    telegram:'Israeli settlements are a major obstacle to agreement.',
    historic:'Israel agreed to withdraw its armed forces and civilians from the whole of Sinai, and Egypt regained sovereignty. Removing Israeli settlements was a difficult concession for Begin.',
    real:'Full return of Sinai and withdrawal of Israeli forces and civilians',historical:'full',
    choices:[
      {id:'full',title:'Return all of Sinai',desc:'Israel withdraws its troops and settlers. Egypt regains Sinai.',israel:-13,egypt:17,trust:8,reply:'Egypt gets Sinai. Israel faces opposition at home.'},
      {id:'settlements',title:'Keep Israeli settlements',desc:'Egypt takes Sinai, but Israeli settlements remain.',israel:6,egypt:-18,trust:-7,redline:['egypt'],reply:'Egypt will not accept Israeli settlements remaining in Sinai.'},
      {id:'corridor',title:'Israel keeps a border strip',desc:'Israel keeps permanent control of part of Sinai.',israel:15,egypt:-25,trust:-13,redline:['egypt'],reply:'Egypt insists on full sovereignty over Sinai.'}
    ]
  },
  {
    id:'timetable',number:'02',title:'The Withdrawal Timetable',tag:'TIMING & VERIFICATION',context:'Egypt wants a quick withdrawal. Israel needs time to move its forces.',
    positions:{israel:'Israel needs time to withdraw safely.',egypt:'Egypt needs a firm deadline.'},
    telegram:'Both sides argue over the withdrawal deadline.',
    historic:'The 1979 treaty provided for an interim Israeli withdrawal within nine months of ratification and full withdrawal within three years. The final withdrawal was completed in April 1982.',
    real:'Interim withdrawal within nine months, full withdrawal within three years',historical:'three',
    choices:[
      {id:'fast',title:'Leave within one year',desc:'Fast for Egypt, but difficult for Israel.',israel:-21,egypt:13,trust:1,reply:'Israel says one year is too fast.'},
      {id:'three',title:'Leave over three years',desc:'Begin early, then finish within three years.',israel:8,egypt:7,trust:9,reply:'A phased plan gives both sides time to prepare.'},
      {id:'slow',title:'Leave over five years',desc:'More time for Israel, but a long wait for Egypt.',israel:14,egypt:-19,trust:-7,reply:'Egypt says five years is too long.'}
    ]
  },
  {
    id:'security',number:'03',title:'Security on Both Sides',tag:'ARMED FORCES & MONITORING',context:'Israel fears another attack. Egypt wants control of its own land.',
    positions:{israel:'Withdrawal must come with security guarantees.',egypt:'Military limits must respect Egyptian sovereignty.'},
    telegram:'Poor security terms could put peace at risk.',
    historic:'The 1979 treaty set out limited force zones in Sinai and on the Israeli side of the border, with monitoring arrangements. It also protected freedom of navigation.',
    real:'Limited force zones, monitoring and agreed navigation rights',historical:'zones',
    choices:[
      {id:'unrestricted',title:'No limits on Egyptian forces',desc:'Egypt can move troops anywhere in Sinai.',israel:-24,egypt:12,trust:-11,redline:['israel'],reply:'Israel will not withdraw without security safeguards.'},
      {id:'zones',title:'Limited forces and monitors',desc:'Limit troop deployments and allow international checks.',israel:16,egypt:7,trust:10,reply:'Monitoring gives both sides more confidence.'},
      {id:'garrisons',title:'Keep Israeli bases in Sinai',desc:'Israeli troops remain at permanent bases in Sinai.',israel:13,egypt:-22,trust:-12,redline:['egypt'],reply:'Egypt will not accept permanent Israeli bases.'}
    ]
  },
  {
    id:'recognition',number:'04',title:'What Does Peace Mean?',tag:'RECOGNITION & NORMALISATION',context:'Israel wants real peace. Egypt fears backlash from other Arab states.',
    positions:{israel:'Peace means recognition and an end to war.',egypt:'Diplomatic ties must come with Israeli withdrawal.'},
    telegram:'Egypt fears isolation. Israel fears an empty promise.',
    historic:'The treaty ended the state of war and required full diplomatic, economic and cultural relations. Ambassadors were exchanged after the interim Sinai withdrawal.',
    real:'Mutual recognition and full relations, phased alongside withdrawal',historical:'full',
    choices:[
      {id:'full',title:'Full peace and embassies',desc:'End the war and open embassies as Israel withdraws.',israel:19,egypt:-7,trust:11,reply:'Egypt risks criticism to gain peace and Sinai.'},
      {id:'limited',title:'Recognition without embassies',desc:'Recognise each other but delay full relations indefinitely.',israel:-18,egypt:9,trust:-5,redline:['israel'],reply:'Israel wants full diplomatic relations.'},
      {id:'ceasefire',title:'Ceasefire only',desc:'Stop fighting, without recognising each other.',israel:-26,egypt:12,trust:-12,redline:['israel'],reply:'Israel will not accept another temporary ceasefire.'}
    ]
  },
  {
    id:'palestinians',number:'05',title:'The Wider Peace',tag:'WEST BANK & GAZA',context:'Sadat wants wider peace. The future of Palestinians remains disputed.',
    positions:{israel:'Begin supports autonomy, not a promise of statehood.',egypt:'Sadat wants the Palestinian issue addressed.'},
    telegram:'A framework will not settle every question.',
    historic:'The separate 1978 Camp David framework envisaged transitional Palestinian self government and further talks concerning the West Bank and Gaza. It did not resolve Palestinian sovereignty or produce a final settlement.',
    real:'A separate framework for transitional Palestinian autonomy and further negotiations',historical:'framework',
    choices:[
      {id:'state',title:'Promise Palestinian statehood',desc:'Make statehood a condition of the agreement.',israel:-24,egypt:17,trust:-8,reply:'Israel rejects a binding statehood commitment.'},
      {id:'framework',title:'Agree autonomy talks',desc:'Propose temporary self government and further talks.',israel:3,egypt:9,trust:7,reply:'This opens talks, but leaves final status unresolved.'},
      {id:'exclude',title:'Exclude the Palestinian issue',desc:'Only discuss peace between Israel and Egypt.',israel:11,egypt:-20,trust:-8,reply:'Egypt refuses to ignore the Palestinian question.'}
    ]
  }
];
const clamp=(n,min=0,max=100)=>Math.max(min,Math.min(max,n));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const offerFor=(issue,id)=>issue.choices.find(o=>o.id===id);
const qs=id=>document.getElementById(id);
const newState=()=>({screen:'home',mode:'solo',side:'israel',playerName:'',briefStep:0,briefVisible:false,round:0,selected:null,activeOffer:null,decisions:[],attempts:0,carter:2,carterOffer:false,carterBonus:false,votes:{israel:null,egypt:null},response:null,rejectedBy:null,feedback:null,stats:{israel:64,egypt:64,trust:52},seconds:420,started:false});
let S=newState();
let ticker=null;
const svgMap=`<svg viewBox="0 0 450 220" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="220" fill="#e6dac0"/><path d="M0 85c65-29 124-22 172-53m0 0 53 60 39 15 34 110M370 0 332 94 298 217" fill="none" stroke="#aea486" stroke-width="2" stroke-dasharray="3 8"/><path d="M195 20 304 42 279 87 307 192 267 212 220 175 208 119 166 79Z" fill="#aaad91" stroke="#556b5e" stroke-width="3"/><path d="M164 90 223 175 267 212" fill="none" stroke="#6d8379" stroke-width="3"/><path d="M267 212 280 86" fill="none" stroke="#3e5864" stroke-width="1"/><text x="220" y="97" font-family="Georgia" font-size="15" fill="#475b54">SINAI</text><text x="18" y="192" font-family="Georgia" font-size="14" letter-spacing="3" fill="#7c796b">EGYPT</text><text x="355" y="155" font-family="Georgia" font-size="14" letter-spacing="2" fill="#7c796b">ISRAEL</text><text x="288" y="16" font-family="Georgia" font-size="12" fill="#7d806e">MEDITERRANEAN SEA</text><path d="M215 175 261 175M250 166l11 9-11 8" stroke="#a75048" stroke-width="3" fill="none"/><circle cx="244" cy="150" r="5" fill="#a75048"/></svg>`;

function startTicker(){stopTicker();ticker=setInterval(()=>{if(!S.started)return;S.seconds=Math.max(0,S.seconds-1);const el=qs('timerValue');if(el){el.textContent=formatTime(S.seconds);el.classList.toggle('urgent',S.seconds<=60)}},1000)}
function stopTicker(){if(ticker)clearInterval(ticker);ticker=null}
function formatTime(sec){return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`}
function render(scroll=true){const app=qs('app');if(!app)return;let html='';switch(S.screen){case 'home':html=home();break;case 'setup':html=setup();break;case 'briefing':html=briefing();break;case 'negotiation':html=negotiation();break;case 'vote':html=votePage();break;case 'counter':html=counterPage();break;case 'mediator':html=mediatorPage();break;case 'feedback':html=feedbackPage();break;case 'result':html=resultPage();break;default:html=home();}
app.innerHTML=html;qs('restartTop').hidden=(S.screen==='home'||S.screen==='setup');if(scroll)window.scrollTo({top:0,behavior:'instant'});}
// The photograph library is public to both delegations. Confidential briefings remain separate.
function peaceMediaFigure(key,caption,cls=''){
  const src=typeof PEACE_MEDIA!=='undefined'?PEACE_MEDIA[key]:'';
  if(!src)return '';
  return `<figure class="peace-figure ${cls}"><img src="${esc(src)}" alt="${esc(caption)}" loading="lazy"><figcaption>${esc(caption)}</figcaption></figure>`;
}
function peaceDelegatePortrait(side){
 const key=side==='egypt'?'sadat':'begin';
 const name=side==='egypt'?'President Anwar Sadat':'Prime Minister Menachem Begin';
 const src=typeof PEACE_MEDIA!=='undefined'?PEACE_MEDIA[key]:'';
 return src?`<div class="delegate-portrait"><img src="${esc(src)}" alt="${esc(name)}" loading="lazy"><small>${esc(name)}</small></div>`:'';
}
function peaceRoundImage(issue){
  const k=({sinai:'sinaiMap',timetable:'withdrawalMap',security:'securityMap',recognition:'leaders',palestinians:'document'})[issue.id];
  const cap=({sinai:'Sinai after 1967',timetable:'Sinai withdrawal and security areas',security:'Military limitations in Sinai',recognition:'Begin, Sadat and Carter',palestinians:'The Camp David framework document'})[issue.id];
  return peaceMediaFigure(k,cap,'dossier-image');
}
/* Immersive negotiation room. The portraits and room are an interpretative
   interface, not a photographic claim about precisely who sat where. */
const TABLE_CAST = {
  sinai:{israel:['begin','Menachem Begin','Prime Minister'],egypt:['sadat','Anwar Sadat','President'],us:['carter','Jimmy Carter','Mediator'],evidence:'sinaiMap',secondary:'sinaiDetail',caption:'Territory after the 1967 war',stamp:'SOVEREIGNTY',prompt:'Who will control the whole of Sinai?'},
  timetable:{israel:['dayan','Moshe Dayan','Foreign Minister'],egypt:['elbaz','Osama el Baz','Diplomatic adviser'],us:['carter','Jimmy Carter','Mediator'],evidence:'withdrawalMap',secondary:'sinaiDetail',caption:'Withdrawal and security zones',stamp:'WITHDRAWAL',prompt:'How quickly can Israel leave Sinai?'},
  security:{israel:['weizman','Ezer Weizman','Defence Minister'],egypt:['kamel','Mohamed Ibrahim Kamel','Foreign Minister'],us:['carter','Jimmy Carter','Mediator'],evidence:'securityMap',secondary:'withdrawalMap',caption:'Proposed military limitation zones',stamp:'SECURITY',prompt:'Can both governments feel safe?'},
  recognition:{israel:['dayan','Moshe Dayan','Foreign Minister'],egypt:['sadat','Anwar Sadat','President'],us:['carter','Jimmy Carter','Mediator'],evidence:'leaders',secondary:'accordsPhoto',caption:'Begin, Sadat and Carter',stamp:'RECOGNITION',prompt:'What would genuine peace require?'},
  palestinians:{israel:['barak','Aharon Barak','Legal adviser'],egypt:['ghali','Boutros Boutros Ghali','Diplomat'],us:['carter','Jimmy Carter','Mediator'],evidence:'document',secondary:'treatyDoc',caption:'A framework for further discussions',stamp:'WIDER PEACE',prompt:'Can a wider framework be agreed?'}
};
function photoSrc(key){return typeof PEACE_MEDIA!=='undefined'&&PEACE_MEDIA[key]?PEACE_MEDIA[key]:''}
function seatCard(person,tag,side,active=false){
 const [key,name,title]=person;
 const src=photoSrc(key);
 return `<div class="pov-delegate pov-delegate-${side} ${active?'pov-delegate-active':''}"><div class="pov-headshot">${src?`<img src="${esc(src)}" alt="Historical portrait of ${esc(name)}" loading="lazy">`:''}</div><div class="pov-nameplate"><small>${esc(tag)}</small><strong>${esc(name)}</strong><span>${esc(title)}</span></div></div>`;
}
function roomStage(issue,phase='negotiation'){
 const c=TABLE_CAST[issue.id];
 const arrival=phase==='arrival';
 const chosen=offerFor(issue,S.activeOffer||S.selected||issue.historical);
 const classMode=S.mode==='class';
 let first=c.israel,third=c.egypt;
 let firstLabel='ISRAELI DELEGATION',thirdLabel='EGYPTIAN DELEGATION';
 if(!classMode&&!arrival){
   first=S.side==='israel'?c.israel:c.egypt;
   third=S.side==='israel'?c.egypt:c.israel;
   firstLabel='YOUR DELEGATION'; thirdLabel='ACROSS THE TABLE';
 }
 const stateText={arrival:'YOUR CHAIR IS READY',negotiation:'NEW FILE ON THE TABLE',vote:'JOINT DELEGATION VOTE',counter:'TALKS AT AN IMPASSE',mediator:'THE PRESIDENT INTERVENES',feedback:'TERMS AGREED'}[phase]||'NEGOTIATION ROOM';
 const fileTitle=arrival?'The Price of Peace':phase==='vote'?'Both sides must decide':phase==='counter'?'The offer failed':phase==='mediator'?"Carter’s offer":phase==='feedback'?'Terms agreed':issue.title;
 const fileText=arrival?'September 1978. Five decisions could change history.':phase==='vote'?`Your proposal: ${chosen.title}.`:phase==='counter'?`No deal yet. Change your terms or ask Carter for help.`:phase==='mediator'?`Carter offers a compromise.`:phase==='feedback'?`Accepted: ${chosen.title}. Next: another difficult decision.`:issue.context;
 const evidence=c.evidence;
 const img=photoSrc(evidence);
 const highlighted=phase==='mediator'?'us':phase==='counter'?'third':phase==='feedback'?'first':'';
 return `<section class="pov-view pov-phase-${esc(phase)}" aria-label="Illustrative view from your seat at the Camp David negotiation table">
   <div class="pov-room-photo" aria-hidden="true"></div>
   <div class="pov-room-grain" aria-hidden="true"></div>
   <div class="pov-era"><span>THE PRESIDENTIAL RETREAT</span><b>CAMP DAVID · SEPTEMBER 1978</b></div>
   <div class="pov-scenelabel">${esc(stateText)} <span class="pov-pulse" aria-hidden="true"></span></div>
   <div class="pov-delegates">
     ${seatCard(first,firstLabel,'first',highlighted==='first')}
     ${seatCard(c.us,'UNITED STATES · MEDIATOR','middle',highlighted==='us')}
     ${seatCard(third,thirdLabel,'third',highlighted==='third')}
   </div>
   <div class="pov-table-surface" aria-hidden="true"><div class="pov-table-edge"></div></div>
   <button class="pov-map-prop" type="button" data-action="openEvidence" data-value="${esc(issue.id)}" title="View document at full size">
     ${img?`<img src="${esc(img)}" alt="${esc(c.caption)}" loading="lazy">`:svgMap}
     <span>VIEW ${issue.id==='recognition'?'PHOTOGRAPH':issue.id==='palestinians'?'DOCUMENT':'MAP'} <b>↗</b></span>
   </button>
   <div class="pov-live-file" aria-label="Negotiation file ${issue.number}">
     <div class="pov-file-meta"><span>${arrival?'CONFIDENTIAL BRIEFING':`DOSSIER ${issue.number} / ${c.stamp}`}</span><span>1978</span></div>
     <h2>${esc(fileTitle)}</h2>
     <p>${esc(fileText)}</p>
     ${phase==='negotiation'?`<div class="pov-file-question">${esc(c.prompt)}</div>`:''}
     <div class="pov-file-seal" aria-hidden="true">CD</div>
   </div>
   <div class="pov-telegram-prop"><span>WASHINGTON / PRIORITY</span><strong>${phase==='mediator'?'CARTER CALLS THE DELEGATIONS':phase==='counter'?'NEGOTIATIONS HAVE STALLED':phase==='feedback'?'THE SECRETARY RECORDS AGREEMENT':'A DIPLOMATIC BREAKTHROUGH IS POSSIBLE'}</strong><div class="pov-telegram-lines" aria-hidden="true"></div></div>
   <div class="pov-placecard"><span>${arrival?'TAKE YOUR SEAT':classMode?'YOUR TABLE · BOTH DELEGATIONS':`YOUR SEAT · ${ROLE[S.side].name.toUpperCase()}`}</span></div>
   <div class="pov-caption">Illustrative reconstruction using archival portraits and historical material. Not an exact seating plan.</div>
 </section>`;
}
function openingView(){return `<div class="shell pov-shell"><section class="pov-opening"><span class="pov-opening-kicker">EXPLORE · STANDWITHUS UK · 1978</span><h1>The Price <em>of Peace.</em></h1><p>Five tough decisions. Two nations. Can you make peace?</p><div class="pov-opening-actions"><button class="gold-button" data-action="setup">TAKE YOUR SEAT <span aria-hidden="true">→</span></button><button class="outline-button" data-action="openArchive" data-tab="people">MEET THE DELEGATIONS</button></div><div class="pov-opening-facts"><span>5 NEGOTIATING ROUNDS</span><span>5 TO 8 MINUTES</span><span>SINGLE PLAYER OR CLASSROOM</span></div></section>${roomStage(ISSUES[0],'arrival')}<div class="pov-opening-bottom">Based on the 1978 Camp David Accords and the 1979 Egypt and Israel peace treaty. The negotiation options are educational scenarios, not authentic verbatim offers.</div></div>`}
function home(){return openingView()}
function setup(){return `<div class="shell"><section class="panel-paper setup-box"><div class="panel-head"><span>PREPARE FOR CAMP DAVID</span><span>1978</span></div><div class="section-inner"><h1 class="section-title">Choose your side.</h1><p class="section-description">Your mission: agree terms that <strong>both Israel and Egypt</strong> will accept.</p><div class="quick-steps"><span><b>1</b> Read your brief</span><span><b>2</b> Make offers</span><span><b>3</b> Secure agreement</span></div><div class="hero-portraits" aria-label="The principal negotiators"><div><img src="assets/media/begin.webp" alt="Menachem Begin" loading="lazy"><span>MENACHEM BEGIN</span></div><div><img src="assets/media/sadat.webp" alt="Anwar Sadat" loading="lazy"><span>ANWAR SADAT</span></div><div><img src="assets/media/carter.webp" alt="Jimmy Carter" loading="lazy"><span>JIMMY CARTER</span></div></div><div class="mode-grid"><button data-action="setMode" data-value="solo" class="choice-mode ${S.mode==='solo'?'active':''}" aria-pressed="${S.mode==='solo'}"><span class="mode-tick">✓</span><span class="mode-icon">♟</span><strong>Single Player</strong><small>Face a computer negotiator.</small></button><button data-action="setMode" data-value="class" class="choice-mode ${S.mode==='class'?'active':''}" aria-pressed="${S.mode==='class'}"><span class="mode-tick">✓</span><span class="mode-icon">⚖</span><strong>Classroom</strong><small>Two teams debate and vote.</small></button></div>${S.mode==='solo'?`<p class="subsection-label">WHO WILL YOU REPRESENT?</p><div class="role-grid">${['israel','egypt'].map(k=>`<button class="role-card ${S.side===k?'active':''}" data-action="setSide" data-value="${k}" aria-pressed="${S.side===k}"><span class="mode-tick">✓</span><span class="flag">${ROLE[k].flag}</span><strong>${ROLE[k].name}</strong><small>${ROLE[k].leader}</small></button>`).join('')}</div><div class="form-row"><label for="playerName">Your name (optional)</label><input id="playerName" name="playerName" maxlength="35" placeholder="Name or initials" value="${esc(S.playerName)}"></div>`:`<div class="brief-note"><strong>Two teams, one table.</strong> Each team gets a private brief. Discuss each offer, then vote.</div><div class="actions-row"><button class="outline-button" data-action="printBrief" data-value="israel" style="color:#26313a;border-color:#a2947b">PRINT ISRAEL BRIEF</button><button class="outline-button" data-action="printBrief" data-value="egypt" style="color:#26313a;border-color:#a2947b">PRINT EGYPT BRIEF</button></div>`}<div class="actions-row"><button class="paper-button" data-action="showBriefing">READ YOUR BRIEF →</button><button class="outline-button" data-action="home" style="color:#46545a;border-color:#c4b599">BACK</button></div><details class="learn-more"><summary>How does the game work?</summary><p>Each round shows a new diplomatic problem. Pick an offer. Both delegations must agree. Carter can help if talks stall.</p><p>Confidence and trust are <strong>fictional game scores</strong>.</p></details></div></section></div>`}
function briefing(){const role=S.mode==='solo'?S.side:(S.briefStep===0?'israel':'egypt');const r=ROLE[role];const isClass=S.mode==='class';return `<div class="shell"><section class="panel-paper setup-box"><div class="panel-head"><span>CONFIDENTIAL BRIEFING</span><span>${isClass?`TEAM ${S.briefStep+1} OF 2`:'YOUR DELEGATION'}</span></div><div class="section-inner"><h1 class="section-title">${isClass?`${r.flag} ${r.name}: your private brief`:`${r.flag} Represent ${r.name}`}</h1><p class="section-description">${isClass?'Only this team should read the screen.':'These are your priorities. Do not give everything away.'}</p>${isClass&&!S.briefVisible?`<div class="brief-cover"><div class="seal">${r.flag}</div><h3>${r.name} delegation</h3><p>Make sure the other team cannot see your brief.</p><button class="gold-button" data-action="revealBrief">OPEN PRIVATE BRIEF</button></div>`:`<div class="brief-layout"><div class="brief-file brief-simple">${peaceDelegatePortrait(role)}<span class="eyebrow dark">${esc(r.leader)}</span><h2>Your top priorities</h2><ul>${r.objectives.slice(0,3).map(t=>`<li>${esc(t)}</li>`).join('')}</ul><h3>What you cannot accept</h3><ul>${r.redlines.map(t=>`<li><strong>${esc(t)}</strong></li>`).join('')}</ul><details class="learn-more"><summary>One more priority</summary><p>${esc(r.objectives[3])}</p></details></div><div class="brief-side"><div class="brief-note"><strong>Possible trade</strong><p>${esc(r.trade)}</p></div><div class="mediator-card card-margin"><div class="portrait-symbol portrait-photo"><img src="assets/media/carter.webp" alt="Jimmy Carter" loading="lazy"></div><div><h3>Carter can help</h3><p>You have <strong>two chances</strong> to request a compromise.</p></div></div><p class="note-line">The priorities are simplified from historical negotiations.</p></div></div>`}<div class="actions-row">${isClass?(!S.briefVisible?'':S.briefStep===0?`<button class="paper-button" data-action="nextBrief">PASS TO EGYPT →</button>`:`<button class="paper-button" data-action="startGame">START NEGOTIATIONS →</button>`):`<button class="paper-button" data-action="startGame">TAKE YOUR SEAT →</button>`}<button class="outline-button" data-action="setup" style="color:#354a4f;border-color:#b5a68c">BACK</button></div></div></section></div>`}
function statBar(key,label){return `<div class="stat"><div class="stat-top"><span>${label}</span><span>${S.stats[key]} / 100</span></div><div class="bar"><span class="${key}" style="width:${S.stats[key]}%"></span></div></div>`}
const ROUND_ADVISERS={sinai:['Ezer Weizman','Mohamed Ibrahim Kamel'],timetable:['Moshe Dayan','Osama el Baz'],security:['Ezer Weizman','Alfred Atherton'],recognition:['Moshe Dayan','Cyrus Vance'],palestinians:['Aharon Barak','Boutros Boutros Ghali']};
function sidebar(issue){return `<aside class="sidebar"><div class="status-card status-simple"><h3>How are talks going?</h3>${statBar('israel','🇮🇱 Israel')}${statBar('egypt','🇪🇬 Egypt')}${statBar('trust','🤝 Trust')}<p class="stat-explain">Fictional scores for this game.</p><div class="carter-count">✦ Carter: <strong>${S.carter}</strong> interventions left</div></div><details class="table-context"><summary>More background <span>＋</span></summary><p>${esc(issue.telegram)}</p><p><strong>Who is advising?</strong> ${ROUND_ADVISERS[issue.id].map(esc).join(' and ')}.</p><button data-action="openArchive" data-tab="people">Meet the full teams ↗</button></details></aside>`}
function progress(){return `<div class="round-head"><span class="round-numbers">ROUND ${S.round+1} OF ${ISSUES.length} &nbsp; / &nbsp; CAMP DAVID</span><span id="timerValue" class="timer ${S.seconds<=60?'urgent':''}" aria-label="Time remaining">${formatTime(S.seconds)}</span></div><div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="5" aria-valuenow="${S.round}">${ISSUES.map((_,i)=>`<span class="${i<S.round?'past':i===S.round?'current':''}"></span>`).join('')}</div>`}
function negotiation(){const issue=ISSUES[S.round];return `<div class="shell pov-shell">${progress()}${roomStage(issue,'negotiation')}<div class="pov-below"><section class="panel-paper pov-choices-paper"><div class="panel-head"><span>YOUR NEXT MOVE</span><span>ROUND ${issue.number} OF 05</span></div><div class="pov-choices-head"><h2>What will you offer?</h2></div><div class="pov-positions"><div class="position-card israel"><strong>🇮🇱 ISRAEL NEEDS</strong><p>${esc(issue.positions.israel)}</p></div><div class="position-card egypt"><strong>🇪🇬 EGYPT NEEDS</strong><p>${esc(issue.positions.egypt)}</p></div></div><div class="proposals pov-proposals"><p class="subsection-label">CHOOSE ONE PROPOSAL</p><div class="proposal-grid">${issue.choices.map((o,n)=>`<button class="proposal ${S.selected===o.id?'selected':''}" aria-pressed="${S.selected===o.id}" data-action="offer" data-value="${o.id}"><span class="offer-number">${String.fromCharCode(65+n)}</span><strong>${esc(o.title)}</strong><small>${esc(o.desc)}</small><span class="proposal-radio" aria-hidden="true">${S.selected===o.id?'✓':''}</span></button>`).join('')}</div></div><div class="offer-footer pov-offer-footer"><span>${S.mode==='solo'?'The other side may say no.':'Both teams must vote yes.'}</span><button class="paper-button" data-action="submit" ${!S.selected?'disabled':''}>PRESENT OFFER →</button></div></section>${sidebar(issue)}</div><div class="actions-row pov-utility"><button class="outline-button" data-action="openEvidence" data-value="${esc(issue.id)}">VIEW MAP OR DOCUMENT</button><button class="outline-button" data-action="viewBrief">MY BRIEF</button><button class="outline-button" data-action="endTalks">END TALKS</button></div></div>`}
function votePage(){const issue=ISSUES[S.round],offer=offerFor(issue,S.activeOffer);return `<div class="shell pov-shell">${progress()}${roomStage(issue,'vote')}<div class="dialog-shell pov-followup"><section class="panel-paper"><div class="panel-head"><span>CLASSROOM VOTE</span><span>BOTH TEAMS DECIDE</span></div><div class="dialog-paper"><h1 class="dialog-title">Can both sides agree?</h1><div class="dialog-note"><strong>${esc(offer.title)}</strong><p>${esc(offer.desc)}</p></div><p class="dialog-lead">Discuss your reasons, then cast each team's vote.</p><div class="vote-grid">${['israel','egypt'].map(k=>`<div class="vote-card"><h3>${ROLE[k].flag} ${ROLE[k].name}</h3><div class="vote-actions"><button class="yes ${S.votes[k]===true?'active':''}" data-action="castVote" data-side="${k}" data-value="yes" aria-pressed="${S.votes[k]===true}">✓ YES</button><button class="no ${S.votes[k]===false?'active':''}" data-action="castVote" data-side="${k}" data-value="no" aria-pressed="${S.votes[k]===false}">✕ NO</button></div><div class="pending">${S.votes[k]===null?'AWAITING VOTE':S.votes[k]?'ACCEPTS':'REJECTS'}</div></div>`).join('')}</div><div class="actions-row"><button class="paper-button" data-action="finaliseVote" ${S.votes.israel===null||S.votes.egypt===null?'disabled':''}>CONFIRM VOTES →</button><button class="outline-button" data-action="revise" style="color:#364a50;border-color:#b9a784">CHANGE OFFER</button></div></div></section></div></div>`}
function counterPage(){const issue=ISSUES[S.round];const chosen=offerFor(issue,S.activeOffer);const counter=offerFor(issue,issue.historical);const who=S.mode==='solo'?(S.side==='israel'?'Egypt':'Israel'):'the other side';const reason=S.response||chosen.reply;const isCounter=S.mode==='solo'&&S.activeOffer!==issue.historical;return `<div class="shell pov-shell">${progress()}${roomStage(issue,'counter')}<div class="dialog-shell pov-followup"><section class="panel-paper"><div class="panel-head"><span>NEGOTIATIONS STALLED</span><span>REJECTED</span></div><div class="dialog-paper"><h1 class="dialog-title">No deal yet.</h1><p class="dialog-lead">${esc(reason)}</p><div class="impact-message">⚠ Trust falls by 6 points. <strong>Now ${S.stats.trust}/100.</strong></div>${isCounter?`<div class="mediator-card"><div class="portrait-symbol">${S.rejectedBy==='self'?ROLE[S.side].flag:S.side==='israel'?'🇪🇬':'🇮🇱'}</div><div><h3>${S.rejectedBy==='self'?'Your advisers suggest':who+' suggests'}</h3><p><strong>${esc(counter.title)}</strong>. ${esc(counter.desc)}</p></div></div>`:''}<div class="actions-row">${isCounter?`<button class="paper-button" data-action="acceptCounter">ACCEPT COUNTEROFFER →</button>`:''}<button class="outline-button" data-action="revise" style="color:#334a51;border-color:#b2a488">TRY AGAIN</button>${S.carter>0?`<button class="gold-button" data-action="callCarter">ASK CARTER (${S.carter})</button>`:''}<button class="outline-button" data-action="endTalks" style="color:#8f4640;border-color:#c1a294">END TALKS</button></div></div></section></div></div>`}
function mediatorPage(){const issue=ISSUES[S.round],historic=offerFor(issue,issue.historical);return `<div class="shell pov-shell">${progress()}${roomStage(issue,'mediator')}<div class="dialog-shell pov-followup"><section class="panel-paper"><div class="panel-head"><span>AMERICAN MEDIATION</span><span>JIMMY CARTER</span></div><div class="dialog-paper"><h1 class="dialog-title">Carter offers a compromise.</h1><div class="mediator-card"><div class="portrait-symbol portrait-photo"><img src="assets/media/carter.webp" alt="Jimmy Carter" loading="lazy"></div><div><h3>${esc(historic.title)}</h3><p>${esc(historic.desc)}</p></div></div><p class="dialog-lead">This uses one of your ${S.carter} remaining interventions and boosts trust.</p><div class="actions-row"><button class="paper-button" data-action="useCarter">${S.mode==='solo'?'ACCEPT COMPROMISE':'VOTE ON COMPROMISE'} →</button><button class="outline-button" data-action="revise" style="color:#334a51;border-color:#b2a488">BACK TO TALKS</button></div></div></section></div></div>`}
function feedbackPage(){const f=S.feedback;const issue=ISSUES[S.round];const boost=f.mediated?3:0;const impact=(n)=>`${n>=0?'+':''}${n}`;return `<div class="shell pov-shell">${progress()}${roomStage(issue,'feedback')}<div class="dialog-shell pov-followup"><section class="panel-paper"><div class="panel-head"><span>ROUND ${S.round+1} COMPLETE</span><span>AGREEMENT</span></div><div class="dialog-paper"><span class="success-tag">✓ BOTH SIDES SAID YES</span><h1 class="dialog-title">Deal agreed.</h1><p class="dialog-lead"><strong>${esc(f.offer.title)}.</strong> ${esc(f.offer.reply)}</p><div class="impact-grid"><div><small>🇮🇱 Israel</small><strong>${impact(f.offer.israel+boost)}</strong></div><div><small>🇪🇬 Egypt</small><strong>${impact(f.offer.egypt+boost)}</strong></div><div><small>🤝 Trust</small><strong>${impact(f.offer.trust+(f.mediated?7:0))}</strong></div></div>${f.redline.length?`<div class="dialog-note red">⚠ ${f.redline.map(x=>ROLE[x].name).join(' and ')} accepted a major red line. The final deal may not last.</div>`:''}<details class="learn-more"><summary>Why does this matter?</summary><p>${esc(issue.context)} Every deal needs support from both governments.</p></details><div class="actions-row"><button class="paper-button" data-action="nextRound">${S.round===ISSUES.length-1?'SEE WHAT REALLY HAPPENED':'NEXT ROUND'} →</button></div></div></section></div></div>`}
function realCompare(){return ISSUES.map(issue=>{const selected=S.decisions.find(d=>d.issue===issue.id),mine=selected?offerFor(issue,selected.choice):null;return `<tr><td>${esc(issue.title)}</td><td>${mine?esc(mine.title):'<em>No agreement</em>'}</td><td>${esc(issue.real)}</td></tr>`}).join('')}
function evaluate(){const deal=S.decisions.length===ISSUES.length;const broken=S.decisions.filter(x=>x.redline.length);const sustainable=deal&&!broken.length&&S.stats.israel>=30&&S.stats.egypt>=30&&S.stats.trust>=30;const faithful=S.decisions.filter(d=>d.choice===ISSUES.find(i=>i.id===d.issue).historical).length;return {deal,broken,sustainable,faithful}}
function resultPage(){const out=evaluate();const title=out.sustainable?'You reached an agreement.':out.deal?'A deal, but a fragile one.':'Talks ended without a deal.';const intro=out.sustainable?'Both sides accepted your terms. Could this peace last?':out.deal?'Some terms cross important limits. Your peace may not last.':'Not every issue was settled. Peace was never guaranteed.';return `<div class="shell"><section class="panel-paper"><div class="panel-head"><span>THE HISTORICAL REVEAL</span><span>CAMP DAVID • 1978 TO 1979</span></div><div class="result-hero result-hero-simple"><span class="${out.sustainable?'success-tag':out.deal?'mixed-tag':'failure-tag'}">${out.sustainable?'AGREEMENT REACHED':out.deal?'FRAGILE DEAL':'NO AGREEMENT'}</span><h1>${title}</h1><p>${intro}</p><div class="final-summary"><span><b>${S.decisions.length}/5</b> issues agreed</span><span><b>${out.faithful}/5</b> match history</span></div></div><div class="result-photo-band">${peaceMediaFigure('accordsPhoto','Camp David Accords signed, 1978','reveal-photo')}${peaceMediaFigure('signing','Egypt and Israel peace treaty signed, 1979','reveal-photo')}</div><div class="result-short"><h2>What really happened?</h2><div class="reveal-facts"><article><small>SEPTEMBER 1978</small><h3>Camp David Accords</h3><p>Begin, Sadat and Carter agreed a framework for peace.</p></article><article><small>MARCH 1979</small><h3>Peace treaty signed</h3><p>Egypt recognised Israel. Israel agreed to leave Sinai, with security limits.</p></article><article><small>APRIL 1982</small><h3>Sinai returned</h3><p>Israel completed its main withdrawal from Sinai.</p></article></div><div class="unresolved-box"><strong>What was not resolved?</strong><p>The Palestinian autonomy framework did not settle Palestinian statehood or final borders.</p></div><details class="learn-more comparison-details" open><summary>Compare your five decisions with history</summary><div class="comparison-scroll"><table class="result-table"><thead><tr><th>Issue</th><th>Your choice</th><th>What happened</th></tr></thead><tbody>${realCompare()}</tbody></table></div></details><details class="learn-more"><summary>What did Begin, Sadat and Carter achieve?</summary><p><strong>Begin</strong> agreed to leave Sinai, including its settlements. <strong>Sadat</strong> accepted peace and diplomatic ties with Israel. <strong>Carter</strong> helped bridge major disagreements.</p><p>Egypt faced criticism from other Arab states. The wider conflict remained unresolved.</p></details><div class="discussion-card"><strong>DISCUSS</strong><p>Which concession was hardest? Why did each side accept it?</p></div><div class="actions-row"><button class="paper-button" data-action="downloadRecord">SAVE YOUR RESULTS ↓</button><button class="outline-button" data-action="printResult" style="color:#334a51;border-color:#b2a488">PRINT</button><button class="gold-button" data-action="restart">PLAY AGAIN ↺</button></div><p class="result-disclaimer">The 1978 accords and 1979 treaty were separate agreements. Scores and alternative offers are fictional teaching tools. <a href="historical_sources.html" target="_blank" rel="noopener">View sources ↗</a></p></div></section></div>`}
function applyDecision(choiceId,mediated=false){const issue=ISSUES[S.round];const offer=offerFor(issue,choiceId);if(!offer)return;S.stats.israel=clamp(S.stats.israel+offer.israel+(mediated?3:0));S.stats.egypt=clamp(S.stats.egypt+offer.egypt+(mediated?3:0));S.stats.trust=clamp(S.stats.trust+offer.trust+(mediated?7:0));S.decisions.push({issue:issue.id,choice:choiceId,redline:offer.redline||[],mediated});S.feedback={offer,redline:offer.redline||[],mediated};S.screen='feedback';render()}
function canOpponentAccept(offer){const opposite=S.side==='israel'?'egypt':'israel';return !(offer.redline||[]).includes(opposite)&&offer[opposite]>=-16&&(S.stats[opposite]+offer[opposite]>=30)}
function submit(){const issue=ISSUES[S.round];if(!S.selected)return;const offer=offerFor(issue,S.selected);S.activeOffer=offer.id;S.attempts++;
  if(S.mode==='class'){S.votes={israel:null,egypt:null};S.screen='vote';render();return}
  if((offer.redline||[]).includes(S.side)||offer[S.side]<-16||S.stats[S.side]+offer[S.side]<30){S.stats.trust=clamp(S.stats.trust-6);S.rejectedBy='self';S.response=`Your own government would struggle to approve these terms. ${offer.reply}`;S.screen='counter';render();return}
  if(canOpponentAccept(offer)){applyDecision(offer.id,false);return}
  S.stats.trust=clamp(S.stats.trust-6);S.rejectedBy='other';S.response=offer.reply;S.screen='counter';render();}
function finaliseVote(){if(S.votes.israel===null||S.votes.egypt===null)return;if(S.votes.israel&&S.votes.egypt){applyDecision(S.activeOffer,S.carterBonus);S.carterBonus=false;return}const offer=offerFor(ISSUES[S.round],S.activeOffer);const rejecters=['israel','egypt'].filter(k=>S.votes[k]===false).map(k=>ROLE[k].name).join(' and ');S.stats.trust=clamp(S.stats.trust-6);S.rejectedBy='class';S.response=`${rejecters} ${rejecters.includes(' and ')?'have':'has'} rejected the proposal. ${offer.reply}`;S.screen='counter';render()}
function acceptCounter(){const issue=ISSUES[S.round];const offer=offerFor(issue,issue.historical);if((offer.redline||[]).includes(S.side)){S.response='This offer crosses your government’s red line.';render();return}applyDecision(offer.id,false)}
function callCarter(){if(S.carter<=0)return;S.screen='mediator';render()}
function useCarter(){if(S.carter<=0)return;S.carter--;S.carterBonus=true;const issue=ISSUES[S.round];S.activeOffer=issue.historical;S.selected=issue.historical;if(S.mode==='solo'){applyDecision(issue.historical,true);S.carterBonus=false}else{S.votes={israel:null,egypt:null};S.screen='vote';render()}}
function revise(){S.carterBonus=false;S.votes={israel:null,egypt:null};S.selected=null;S.screen='negotiation';render()}
function nextRound(){S.round++;S.activeOffer=null;S.selected=null;S.attempts=0;S.votes={israel:null,egypt:null};S.feedback=null;S.carterBonus=false;if(S.round>=ISSUES.length){S.screen='result';S.started=false;stopTicker()}else S.screen='negotiation';render()}
function showBrief(){if(S.screen!=='negotiation')return;const side=S.mode==='solo'?S.side:'israel';const role=ROLE[side];const html=`<div class="shell"><section class="panel-paper setup-box"><div class="panel-head"><span>REFERENCE DOSSIER</span><span>BACK TO NEGOTIATIONS</span></div><div class="section-inner"><h1 class="section-title">${S.mode==='solo'?'Your negotiation priorities':'Confidential delegation briefs'}</h1>${S.mode==='class'?`<p class="section-description">Use printed briefs to preserve each team's private priorities. The key public positions are visible on the negotiating table.</p>`:`<div class="brief-file"><h2>${role.flag} ${role.name}</h2><ul>${role.objectives.concat(role.redlines).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`}<div class="actions-row"><button class="paper-button" data-action="backToRound">RETURN TO THE TABLE →</button>${S.mode==='class'?`<button class="outline-button" data-action="printBrief" data-value="israel" style="color:#24343b">PRINT ISRAEL BRIEF</button><button class="outline-button" data-action="printBrief" data-value="egypt" style="color:#24343b">PRINT EGYPT BRIEF</button>`:''}</div></div></section></div>`;S.screen='reference';qs('app').innerHTML=html;window.scrollTo({top:0,behavior:'instant'})}
function printPage(content){const printArea=qs('printArea');printArea.innerHTML=content;printArea.setAttribute('aria-hidden','false');window.print();setTimeout(()=>{printArea.innerHTML='';printArea.setAttribute('aria-hidden','true')},650)}
function printBrief(side){const r=ROLE[side];printPage(`<div class="print-confidential">CONFIDENTIAL • DELEGATION ONLY</div><div class="print-title">The Price of Peace</div><p class="print-small">EXPLORE • STANDWITHUS UK • CAMP DAVID 1978</p><h1>${r.flag} ${r.name} Delegation</h1><p>${esc(r.lead)}</p><h2>Objectives</h2><ul>${r.objectives.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h2>Private red lines</h2><ul>${r.redlines.map(x=>`<li><b>${esc(x)}</b></li>`).join('')}</ul><h2>Possible compromise</h2><p>${esc(r.trade)}</p><p class="print-small">Do not show this briefing to the other delegation until the debrief. These priorities are simplified from the historical record.</p>`)}
function printResult(){const out=evaluate();printPage(`<div class="print-title">The Price of Peace</div><p class="print-small">EXPLORE • STANDWITHUS UK • NEGOTIATION RECORD</p><h1>${out.sustainable?'Agreement reached':'Negotiation report'}</h1><p>Issues: ${S.decisions.length}/5. Main historical outcomes matched: ${out.faithful}/5.</p>${ISSUES.map(i=>{const d=S.decisions.find(x=>x.issue===i.id);return `<div class="print-section"><b>${esc(i.title)}</b><p>Our decision: ${d?esc(offerFor(i,d.choice).title):'Not agreed'}<br>Actual historical result: ${esc(i.real)}</p></div>`}).join('')}<h2>Reflection</h2><p>Which concession was hardest? What role did mediation play? What problems remained after the treaty?</p>`)}
function downloadRecord(){const out=evaluate();const text=[`THE PRICE OF PEACE | EXPLORE | STANDWITHUS UK`,`Diplomatic negotiation record`,`Mode: ${S.mode==='solo'?'Single Player':'Classroom'}`,`Delegation: ${S.mode==='solo'?ROLE[S.side].name:'Israel and Egypt'}`,`Negotiator: ${S.playerName||'Not specified'}`,`Outcome: ${out.sustainable?'Potential durable framework':out.deal?'Fragile agreement':'No signed agreement'}`,`Historical outcomes matched: ${out.faithful}/5`,'',...ISSUES.flatMap(issue=>{const choice=S.decisions.find(d=>d.issue===issue.id);const offer=choice?offerFor(issue,choice.choice):null;return [issue.title,`Our terms: ${offer?offer.title:'No agreement'}`,`Historical result: ${issue.real}`,`Historical note: ${issue.historic}`,'']}),'Historical sources:',...SOURCES.map(s=>`${s.label}: ${s.url}`),'','Scores shown in the game are fictional teaching indicators.'];const blob=new Blob([text.join('\r\n')],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='The_Price_of_Peace_Record.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function openTableEvidence(issueId){const issue=ISSUES.find(i=>i.id===issueId);if(!issue)return;const cast=TABLE_CAST[issue.id];const primary=photoSrc(cast.evidence),secondary=photoSrc(cast.secondary);const d=qs('tableEvidenceDialog'),holder=qs('tableEvidenceBody');if(!d||!holder)return;holder.innerHTML=`<div class="pov-evidence-title"><span>ON THE TABLE</span><h2>${esc(issue.title)}</h2><p>${esc(issue.context)}</p></div><div class="pov-evidence-images">${primary?`<figure><img src="${esc(primary)}" alt="${esc(cast.caption)}"><figcaption>${esc(cast.caption)}</figcaption></figure>`:''}${secondary?`<figure><img src="${esc(secondary)}" alt="Supporting historical material for ${esc(issue.title)}"><figcaption>Additional source material. See image credits.</figcaption></figure>`:''}</div><div class="pov-evidence-history"><strong>Think like a negotiator</strong><p>What does this evidence tell you about the stakes for each side?</p></div>`;d.showModal();}
function reset(){stopTicker();S=newState();render()}

// All user actions stay on the device. The game does not send information to any service.
document.addEventListener('click',e=>{const btn=e.target.closest('[data-action]');if(!btn)return;const action=btn.dataset.action;const value=btn.dataset.value;switch(action){
  case 'openEvidence':openTableEvidence(value);break;
  case 'home':reset();break;
  case 'setup':S.screen='setup';render();break;
  case 'setMode':S.mode=value;render(false);break;
  case 'setSide':S.side=value;render(false);break;
  case 'showBriefing':{const inp=qs('playerName');if(inp)S.playerName=inp.value.trim().slice(0,35);S.briefStep=0;S.briefVisible=S.mode==='solo';S.screen='briefing';render();break}
  case 'revealBrief':S.briefVisible=true;render();break;
  case 'nextBrief':S.briefStep=1;S.briefVisible=false;render();break;
  case 'startGame':S.screen='negotiation';S.started=true;S.seconds=S.mode==='solo'?420:480;startTicker();render();break;
  case 'offer':S.selected=value;render(false);break;
  case 'submit':submit();break;
  case 'castVote':S.votes[btn.dataset.side]=value==='yes';render(false);break;
  case 'finaliseVote':finaliseVote();break;
  case 'acceptCounter':acceptCounter();break;
  case 'callCarter':callCarter();break;
  case 'useCarter':useCarter();break;
  case 'revise':revise();break;
  case 'nextRound':nextRound();break;
  case 'viewBrief':showBrief();break;
  case 'backToRound':S.screen='negotiation';render();break;
  case 'printBrief':printBrief(value);break;
  case 'printResult':printResult();break;
  case 'downloadRecord':downloadRecord();break;
  case 'endTalks':if(window.confirm('End the negotiations without a complete agreement and reveal the historical outcome?')){S.started=false;stopTicker();S.screen='result';render()}break;
  case 'restart':reset();break;
}});
qs('restartTop').addEventListener('click',()=>{if(window.confirm('Start a new negotiation? Your current agreement will not be saved.'))reset()});
render();
