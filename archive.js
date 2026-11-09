/* Public educational archive and the historical delegations.
   Names and roles are grounded in the Jimmy Carter Presidential Library
   list of the 1978 Camp David delegations. Profiles are paraphrased, not quotes.
*/
'use strict';
const PEACE_DELEGATIONS = [
  {group:'ISRAEL',flag:'🇮🇱',intro:'The Israeli delegation sought a binding peace treaty and credible security arrangements.',people:[
    {key:'begin',name:'Menachem Begin',role:'Prime Minister',bio:'Led the Israeli delegation. Faced the politically difficult question of withdrawing Israeli forces and settlements from Sinai.',initials:'MB'},
    {key:'dayan',name:'Moshe Dayan',role:'Foreign Minister',bio:'An experienced military leader and diplomat who helped negotiate the political terms.',initials:'MD'},
    {key:'weizman',name:'Ezer Weizman',role:'Defence Minister',bio:'Brought military and security experience to discussions of Sinai and future relations.',initials:'EW'},
    {key:'barak',name:'Aharon Barak',role:'Attorney General',bio:'Provided legal expertise as the delegations worked through difficult wording and commitments.',initials:'AB'}
  ]},
  {group:'EGYPT',flag:'🇪🇬',intro:'The Egyptian delegation prioritised full sovereignty over Sinai and a wider framework for regional peace.',people:[
    {key:'sadat',name:'Anwar Sadat',role:'President',bio:'Took the major political risk of pursuing direct negotiations and securing a return of Sinai.',initials:'AS'},
    {key:'kamel',name:'Mohamed Ibrahim Kamel',role:'Foreign Minister',bio:'Took part in the summit and expressed serious concerns over its compromises. He resigned following the signing ceremony, in protest at the accords.',initials:'MK'},
    {key:'ghali',name:'Boutros Boutros Ghali',role:'Minister of State for Foreign Affairs',bio:'Helped represent Egypt in high level discussions over the diplomatic framework.',initials:'BG'},
    {key:'elbaz',name:'Osama el Baz',role:'Under Secretary of Foreign Affairs',bio:'An important diplomatic adviser in Egypt’s delegation at Camp David.',initials:'OB'}
  ]},
  {group:'UNITED STATES',flag:'🇺🇸',intro:'The American delegation mediated between the governments and developed successive draft agreements.',people:[
    {key:'carter',name:'Jimmy Carter',role:'President and mediator',bio:'Hosted the summit, worked separately with the leaders and helped forge the two 1978 frameworks.',initials:'JC'},
    {key:'vance',name:'Cyrus Vance',role:'Secretary of State',bio:'Led important diplomatic drafting work and coordinated American negotiating efforts.',initials:'CV'},
    {key:'brzezinski',name:'Zbigniew Brzezinski',role:'National Security Adviser',bio:'Advised Carter on the negotiations and participated in the American team.',initials:'ZB'},
    {key:'atherton',name:'Alfred Atherton',role:'Ambassador at Large',bio:'A specialist in Middle East diplomacy who contributed to the American negotiating work.',initials:'AA'}
  ]}
];
const PEACE_ARCHIVE_ITEMS = [
 {key:'sinaiMap',title:'Sinai after the 1967 war',caption:'A modern reference map showing territory under Israeli control after 1967. Source details to be confirmed.',type:'MAP'},
 {key:'sinaiDetail',title:'The Sinai Peninsula',caption:'A more detailed map for examining the territory at the centre of the talks.',type:'MAP'},
 {key:'withdrawalMap',title:'Sinai withdrawal and security arrangements',caption:'A later illustration of areas and arrangements associated with the 1979 treaty. This is not an original 1978 negotiating map.',type:'MAP'},
 {key:'securityMap',title:'Security zones after the treaty',caption:'A reference map illustrating the military limitations agreed in the peace treaty.',type:'MAP'},
 {key:'leaders',title:'Begin, Sadat and Carter',caption:'The three political leaders whose decisions made an agreement possible.',type:'PHOTOGRAPH'},
 {key:'discussion',title:'Begin and Sadat in discussion',caption:'A photograph illustrating the direct political dialogue between the leaders.',type:'PHOTOGRAPH'},
 {key:'chess',title:'A moment at Camp David',caption:'An informal photograph of Begin and Brzezinski during the summit.',type:'PHOTOGRAPH'},
 {key:'summit',title:'The Camp David negotiating teams',caption:'The assembled participants in the diplomatic discussions.',type:'PHOTOGRAPH'},
 {key:'meetingRoom',title:'Inside a negotiating room',caption:'A supplied meeting photograph. Original photo credit and date need verification.',type:'PHOTOGRAPH'},
 {key:'meetingTable',title:'Negotiators around the table',caption:'Diplomats working through the details of an agreement.',type:'PHOTOGRAPH'},
 {key:'accordsPhoto',title:'Signing the Camp David Accords, 1978',caption:'The September 1978 framework was a major breakthrough, but it was not yet the final peace treaty.',type:'PHOTOGRAPH'},
 {key:'signing',title:'The peace treaty signing, 1979',caption:'The White House ceremony on 26 March 1979.',type:'PHOTOGRAPH'},
 {key:'document',title:'Camp David Accords, 1978',caption:'The text of the frameworks agreed in September 1978.',type:'DOCUMENT'},
 {key:'treatyDoc',title:'Peace Treaty, 1979',caption:'The historic treaty document signed on 26 March 1979.',type:'DOCUMENT'}
];
function peaceSafe(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function peacePicture(key,initials,alt,shape='portrait'){
  const src=PEACE_MEDIA[key];
  if(key==='sinaiMap'&&!src){return `<div class="archive-image ${shape}"><div class="archive-map-preview">${svgMap}</div></div>`;}
  if(src){return `<div class="archive-image ${shape}"><img src="${peaceSafe(src)}" alt="${peaceSafe(alt)}" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('missing')"><span class="archive-initials">${peaceSafe(initials)}</span></div>`;}
  return `<div class="archive-image ${shape} empty"><span class="archive-initials">${peaceSafe(initials)}</span><small>${shape==='portrait'?'PORTRAIT SPACE':'IMAGE SPACE'}</small></div>`;
}
function peacePeople(){return PEACE_DELEGATIONS.map(d=>`<section class="archive-delegation"><div class="archive-team-head"><div><span>${d.flag} ${d.group}</span><p>${peaceSafe(d.intro)}</p></div><small>SEPTEMBER 1978</small></div><div class="archive-people">${d.people.map(p=>`<article class="archive-person">${peacePicture(p.key,p.initials,p.name)}<div><h4>${peaceSafe(p.name)}</h4><strong>${peaceSafe(p.role)}</strong><p>${peaceSafe(p.bio)}</p></div></article>`).join('')}</div></section>`).join('');}
function peaceGallery(){return `<p class="archive-hint">Explore the archival material supplied for this learning activity. The maps are teaching references and some show arrangements finalised after 1978. Please confirm photographers, sources and reproduction permission before public publication.</p><div class="archive-gallery">${PEACE_ARCHIVE_ITEMS.map(p=>`<article class="archive-gallery-item">${peacePicture(p.key,p.type==='MAP'?'⌖':p.type==='PHOTO'?'▣':'✦',p.title,'landscape')}<div><small>${p.type}</small><h4>${peaceSafe(p.title)}</h4><p>${peaceSafe(p.caption)}</p></div></article>`).join('')}</div>`;}
function peaceArchiveContent(page){return `<div class="archive-overline">EXPLORE • HISTORICAL RESEARCH ROOM</div><h2 id="peaceArchiveTitle">The people behind the peace</h2><p class="archive-intro">Meet the delegations that took part in the 1978 Camp David summit. These are real historical figures. Our short profiles summarise their public roles rather than reproducing private discussions.</p><div class="archive-tabs" role="group" aria-label="Archive sections"><button class="archive-tab ${page==='people'?'active':''}" data-archive-tab="people" aria-pressed="${page==='people'}">Negotiation teams</button><button class="archive-tab ${page==='gallery'?'active':''}" data-archive-tab="gallery" aria-pressed="${page==='gallery'}">Maps and photographs</button></div>${page==='people'?peacePeople():peaceGallery()}<div class="archive-footnote">Source: <a href="https://www.jimmycarterlibrary.gov/research/additional-resources/camp-david-accords/thirteen-days-after-twenty-five-years" target="_blank" rel="noopener noreferrer">Jimmy Carter Presidential Library, Camp David delegations</a>. The proposals in the game are simplified teaching scenarios. <a href="image_credits.html" target="_blank" rel="noopener noreferrer">Image credits and permissions</a>.</div>`;}
const peaceDialog=document.getElementById('peaceArchiveDialog');
const peaceArchiveBody=document.getElementById('peaceArchiveBody');
let peaceTab='people';
function peaceOpen(tab='people'){
  peaceTab=tab;
  peaceArchiveBody.innerHTML=peaceArchiveContent(peaceTab);
  if(!peaceDialog.open)peaceDialog.showModal();
  peaceDialog.querySelector('.archive-close').focus();
}
document.addEventListener('click',event=>{
  const open=event.target.closest('[data-action="openArchive"]');
  if(open){peaceOpen(open.dataset.tab||'people');return;}
  const tab=event.target.closest('[data-archive-tab]');
  if(tab){peaceTab=tab.dataset.archiveTab;peaceArchiveBody.innerHTML=peaceArchiveContent(peaceTab);return;}
});
peaceDialog.addEventListener('click',event=>{if(event.target===peaceDialog)peaceDialog.close();});
