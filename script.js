const form = document.querySelector('#signup');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email');
  const message = document.querySelector('.form-message');
  message.textContent = `Je staat op de lijst. Tot morgenochtend, ${email.value}!`;
  form.reset();
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const nav = document.querySelector('.masthead nav');
  const open = nav.classList.toggle('nav-open');
  menu.setAttribute('aria-expanded', String(open));
});

const dialog = document.querySelector('.article-dialog');
const articleText = {
  'De verzorgingsstaat is van ons allemaal geworden': [
    'Nederland houdt in 2040 een publiek vangnet voor onderwijs, inkomen en gezondheidszorg. De belofte is herkenbaar, maar de uitvoering is veranderd. De overheid garandeert een basisniveau; voor extra ondersteuning betalen mensen vaker zelf of verzekeren zij zich aanvullend.',
    'De omslag komt niet uit het niets. Een kwart van de bevolking is 65 jaar of ouder, terwijl er relatief minder werkenden zijn om belasting te betalen en zorg te verlenen. Zonder andere keuzes zou een op de vier werkenden in de zorg nodig zijn om de zorg van vandaag op hetzelfde niveau te houden.',
    'Daarom verschuift de verantwoordelijkheid. Mensen werken langer als dat kan, volgen tijdens hun loopbaan korte opleidingen en helpen vaker in hun buurt. Werkgevers betalen mee aan scholing en digitale hulpmiddelen nemen terugkerende administratie over. De overheid probeert zo de basis overeind te houden met minder beschikbare handen.',
    'Die nieuwe afspraken pakken niet voor iedereen hetzelfde uit. Wie geld, tijd en digitale vaardigheden heeft, vindt makkelijker aanvullende zorg of een opleiding. Mensen met zwaar werk, een laag inkomen of weinig netwerk kunnen juist eerder vastlopen. Een digitaal loket maakt aanvragen sneller, maar een fout besluit kan ook sneller gevolgen hebben.',
    'De discussie in Den Haag gaat daarom over meer dan de begroting. Welke hulp is een recht, en waar begint de eigen verantwoordelijkheid? De verzorgingsstaat is niet verdwenen, maar wordt steeds meer een samenlevingsstaat. Of dat eerlijk voelt, hangt af van wie mee kan doen en wie achterblijft.'
  ],
  'Een persoonlijk bestaansbudget, maar wie kijkt er mee?': [
    'Iedereen heeft in 2040 recht op een persoonlijk bestaansbudget voor de noodzakelijke kosten van wonen, eten en zorg. Het is geen volledig basisinkomen: mensen die kunnen werken, leveren een bijdrage via werk, een opleiding of vrijwilligerswerk. Extra toeslagen zijn er voor lage inkomens en hoge zorgkosten.',
    'De aanvraag loopt meestal digitaal. Overheidsdiensten combineren gegevens die iemand eerder al heeft aangeleverd, zodat er minder formulieren nodig zijn en steun sneller kan worden toegekend. Voor mensen die moeite hebben met online dienstverlening blijven gemeentebalies, wijkteams en bibliotheken belangrijk.',
    'Juist de snelheid baart sommige hulpverleners zorgen. Een systeem kan een inkomen verkeerd inschatten, een adreswijziging missen of een onregelmatig werkpatroon als fraude aanmerken. Als een aanvraag automatisch wordt afgewezen, is het voor een burger niet altijd duidelijk welke informatie de doorslag gaf.',
    'Gemeenten hebben daarom menselijke controle ingebouwd bij besluiten die direct invloed hebben op iemands inkomen. Aanvragers moeten kunnen zien welke gegevens zijn gebruikt, een fout laten herstellen en met een medewerker spreken. Privacyorganisaties willen bovendien dat overheden niet meer gegevens verzamelen dan noodzakelijk.',
    'Het bestaansbudget laat zien waar de digitale overheid voor staat: minder wachttijd en papierwerk, maar ook nieuwe vragen over toezicht en vertrouwen. De belofte van een vangnet werkt alleen wanneer mensen een beslissing kunnen begrijpen én aanvechten.'
  ],
  'De wijkverpleegkundige heeft er een collega bij: een robot op wielen': [
    'De kleine bezorgrobot rijdt op vaste tijden door de gangen van woonzorgcentrum De Kade. Hij brengt medicijnen naar afdelingen, haalt linnengoed op en waarschuwt medewerkers wanneer een deur open blijft staan. Bewoners herkennen inmiddels het zachte piepje waarmee hij om een vrije doorgang vraagt.',
    'Voor verpleegkundigen zit de winst vooral in de praktische taken. Noor de Vries zegt dat ze minder vaak materialen hoeft te halen en meer tijd heeft voor controles en gesprekken. “Ik kan nu even blijven zitten als iemand ergens mee zit, in plaats van alvast naar mijn volgende taak te kijken.”',
    'De robot verzorgt niemand zelfstandig. Bij het opstaan, wassen of innemen van medicijnen blijft een medewerker betrokken. Sensoren kunnen een afwijkende hartslag signaleren, maar een verpleegkundige beoordeelt wat die meting betekent en bespreekt met de patiënt wat er nodig is.',
    'Niet iedere bewoner is meteen gerust op de nieuwe collega. Sommige mensen vinden het prettig dat medicijnen op tijd komen; anderen willen liever niet voortdurend worden gemeten. Het zorgteam bespreekt daarom vooraf welke gegevens worden verzameld en zet sensoren uit wanneer daar geen medische reden voor is.',
    'Technologie kan een krap rooster iets meer lucht geven, maar lost het personeelstekort niet op. Volgens De Vries is de belangrijkste vraag of hulpmiddelen de aandacht voor mensen vergroten. “Een robot kan iemand helpen opstaan. Troosten en vertrouwen winnen blijft mensenwerk.”'
  ],
  'Een eigen voordeur, een gedeelde keuken: zo woont generatie 2040': [
    'In woongebouw De Werf in Utrecht heeft iedere bewoner een eigen voordeur, badkamer en kleine keuken. Op de begane grond delen bewoners een grote kookruimte, een werkplek en een logeerkamer. Studenten, alleenstaanden en ouderen wonen er naast elkaar.',
    'De compacte woningen zijn sneller te bouwen en vragen minder energie dan ruime appartementen. Flexibele wanden maken het mogelijk om een kamer anders in te delen wanneer een huishouden verandert. De gedeelde ruimten bieden bewoners extra plek zonder dat ieder appartement groot hoeft te zijn.',
    'Voor de 23-jarige Samira is de gedeelde keuken vooral praktisch: “Mijn studio is betaalbaar en ik heb plek om thuis te werken. Als ik zin heb in gezelschap, loop ik naar beneden. Als ik rust wil, doe ik mijn eigen deur dicht.” Die keuzevrijheid is voor veel bewoners een belangrijke voorwaarde.',
    'Samen wonen vraagt ook om afspraken. Bewoners verdelen schoonmaakdiensten, reserveren de logeerkamer via een buurtapp en spreken elkaar aan op geluid. Een woonbeheerder helpt bij conflicten, maar de bewonerscommissie beslist zelf over het gebruik van gezamenlijke ruimten.',
    'Het woningtekort is kleiner geworden, maar niet verdwenen. Het aantal huishoudens groeit nog steeds en niet iedereen wil voorzieningen delen. De nieuwe woonvormen bieden een extra mogelijkheid; betaalbare woningen voor mensen die zelfstandig willen wonen blijven hard nodig.'
  ],
  'Drie dagen klas, één dag online. Wat leren kinderen samen?': [
    'Op basisschool De Horizon begint de maandag met een korte klassikale les. Daarna oefent iedere leerling rekenen op het eigen niveau. De leeromgeving ziet waar iemand vastloopt en geeft extra uitleg. De docent loopt rond, bespreekt strategieën en helpt leerlingen hun werk te plannen.',
    'De meeste scholen verdelen de week over drie dagen op school, een online dag en een projectdag. Op die laatste dag werken leerlingen bijvoorbeeld met een buurtcentrum, een werkplaats of een natuurorganisatie. De precieze indeling verschilt per school en per leeftijdsgroep.',
    'Digitale programma’s maken het eenvoudiger om verschillen tussen leerlingen op te vangen. Een leerling die extra oefening nodig heeft, krijgt die meteen; iemand die de stof beheerst kan verder. Leraren blijven verantwoordelijk voor de lesstof en controleren of de aanbevelingen passen bij wat zij in de klas zien.',
    'De online dag vraagt wel om goede begeleiding thuis. Niet ieder gezin heeft een rustige werkplek of iemand die kan helpen als de techniek uitvalt. Daarom blijven scholen werkplekken openstellen en kunnen leerlingen op school terecht voor extra uitleg.',
    'Docenten merken dat leerlingen elkaar op projectdagen anders leren kennen. Ze verdelen taken, leggen hun ideeën uit en lossen meningsverschillen op. Juist die sociale vaardigheden zijn moeilijk in een individueel leerprogramma te oefenen. De klas blijft dus een belangrijke plek, ook wanneer een deel van het leren online gebeurt.'
  ],
  '“Een robot kan helpen opstaan. Maar niet vragen hoe het écht gaat.”': [
    'Wanneer Noor de Vries bij een patiënt aanbelt, heeft ze de metingen van die ochtend al bekeken. Een polsbandje registreert hartslag en bloeddruk. Als waarden afwijken, ontvangt ze een melding en kan ze besluiten iemand eerder te bezoeken of de huisarts te raadplegen.',
    'Het systeem heeft haar werk veranderd. Medicatieoverzichten worden bijgewerkt en standaardcontroles kosten minder tijd. Daardoor hoeft Noor minder achter een scherm te zitten. Ze zegt dat ze haar patiënten vaker echt kan aankijken, al blijft ze iedere automatische melding zelf beoordelen.',
    'Robots helpen met spullen brengen en met sommige fysieke handelingen. Ze kunnen een patiënt ondersteunen bij het opstaan, maar zijn geen vervanging voor een verpleegkundige. Bij pijn, onzekerheid of een ingewikkelde verandering in iemands gezondheid is professioneel oordeel nodig.',
    'Noor maakt zich vooral zorgen om mensen die moeilijk met digitale apparaten omgaan. Een patiënt kan een meting verkeerd uitvoeren of een melding niet begrijpen. Daarom komt er nog steeds iemand thuis langs en kunnen bewoners met vragen terecht bij het wijkteam en het buurthuis.',
    '“Technologie is goed als ze ruimte maakt voor aandacht,” zegt Noor. “Maar als een scherm bepaalt wie zorg krijgt en niemand meer vraagt hoe het thuis gaat, zijn we verkeerd bezig.” Voor haar zit betere zorg niet alleen in snellere signalen, maar ook in tijd voor een moeilijk gesprek.'
  ],
  'Kabinet verdeeld over extra zorgbijdrage vanaf 2041': [
    'Het kabinet wil vanaf 2041 een extra zorgbijdrage invoeren voor mensen met een hoog inkomen. De opbrengst moet gaan naar het opleiden van zorgmedewerkers en het verbeteren van digitale zorgsystemen. De precieze inkomensgrens en hoogte van de bijdrage liggen nog niet vast.',
    'Volgens de minister stijgen de zorgkosten sneller dan het aantal beschikbare medewerkers. Zonder extra geld dreigen wachtlijsten verder op te lopen en komen opleidingen en wijkzorg onder druk te staan. Een bijdrage naar draagkracht moet volgens het kabinet voorkomen dat de rekening voor iedereen even zwaar wordt.',
    'De oppositie vraagt zich af of een aparte bijdrage de beste oplossing is. Hogere belastingen kunnen volgens tegenstanders eerlijker zijn, omdat ze onderdeel zijn van het algemene belastingstelsel. Ook vrezen zij dat mensen met een hoger inkomen aanvullende privézorg gaan gebruiken, waardoor de druk op publieke zorg nauwelijks afneemt.',
    'Patiëntenorganisaties willen garanties dat het geld daadwerkelijk naar zorg gaat. Zij vragen om jaarlijkse openbare cijfers over wachttijden, personeel en opleidingsplaatsen. Ook moet duidelijk blijven welke behandelingen onder de basisverzekering vallen en wanneer een eigen bijdrage geldt.',
    'De Kamer stemt vanavond nog niet over het voorstel, maar bespreekt eerst de voorwaarden. De kern van het debat: hoe houden we de zorg toegankelijk terwijl de vraag groeit? Het kabinet verwacht later dit jaar een uitgewerkt plan te presenteren.'
  ],
  'Woningtekort daalt, maar jongeren blijven langer thuis': [
    'De bouw van compacte appartementen en gedeelde wooncomplexen heeft het woningtekort verkleind. Toch merken veel jongeren daar nog weinig van. Het aantal huishoudens blijft groeien en betaalbare woningen komen niet altijd terecht bij de mensen die ze het hardst nodig hebben.',
    'In verschillende steden zijn voormalige kantoren en parkeerterreinen omgebouwd tot woongebouwen. Kleine appartementen combineren een eigen badkamer en kookhoek met gedeelde werkplekken, wasruimtes en binnentuinen. Studenten en starters kunnen daardoor eerder zelfstandig wonen dan voorheen.',
    'Toch blijven jongeren gemiddeld langer thuis of delen ze een woning met vrienden. Een zelfstandige woning is vaak duurder dan een kamer, en voor sociale huur bestaan nog steeds wachtlijsten. Flexibele huurcontracten geven bewoners bovendien minder zekerheid over hoe lang ze ergens kunnen blijven.',
    'Woningbouwers wijzen erop dat niet iedere locatie geschikt is voor hoogbouw. Nieuwe wijken hebben ook scholen, zorg, openbaar vervoer en groen nodig. Gemeenten proberen bouwtempo te combineren met voorzieningen, maar die infrastructuur kost tijd en ruimte.',
    'De cijfers laten een verbetering zien, maar het dagelijkse gevoel van schaarste blijft bestaan. Voor jongeren is de vraag niet alleen hoeveel woningen er zijn, maar ook of ze betaalbaar zijn, op een bereikbare plek staan en ruimte bieden om een leven op te bouwen.'
  ],
  'Scholen zoeken balans tussen AI en aandacht': [
    'AI maakt voor iedere leerling extra oefeningen en geeft leraren een overzicht van onderwerpen waar de klas moeite mee heeft. Ook helpen digitale assistenten bij het nakijken van opdrachten en het voorbereiden van lessen. Scholen zeggen dat dit tijd kan vrijmaken voor begeleiding.',
    'Maar een overzicht op een scherm vertelt niet het hele verhaal. Een leerling kan een lage score halen door stress, een taalprobleem of een slechte internetverbinding. Leraren controleren daarom de uitkomsten en bespreken met leerlingen wat er achter een resultaat zit.',
    'Ouders vragen ondertussen welke gegevens worden opgeslagen en wie ze kan bekijken. Scholen moeten uitleggen hoe een systeem tot aanbevelingen komt en hoe lang informatie wordt bewaard. Bij beslissingen over niveau of extra ondersteuning blijft een docent verantwoordelijk.',
    'Het lerarentekort maakt de keuze extra ingewikkeld. Digitale hulpmiddelen kunnen werk uit handen nemen, maar vervangen geen docent voor een volle klas. Sommige scholen gebruiken de bespaarde tijd voor kleine begeleidingsgroepen; andere worstelen nog met grotere klassen en minder contacturen.',
    'De vraag is dus niet alleen of AI goed lesmateriaal kan maken. Scholen willen weten of leerlingen er beter door leren en of leraren meer tijd krijgen voor persoonlijke aandacht. Dat vraagt om duidelijke afspraken, scholing voor docenten en regelmatige controle van de systemen.'
  ],
  'Wie betaalt de zorg van morgen?': [
    'De Tweede Kamer bespreekt vanavond het kabinetsplan voor een extra zorgbijdrage vanaf 2041. Mensen met een hoog inkomen zouden meer betalen om opleidingen voor zorgpersoneel en digitale zorgvoorzieningen te financieren. De regering heeft nog geen definitieve tarieven voorgesteld.',
    'Voorstanders zeggen dat de zorgvraag sneller groeit dan het aantal beschikbare medewerkers. Zonder nieuwe inkomsten kan het moeilijker worden om thuiszorg, wijkverpleging en ziekenhuisbehandelingen op peil te houden. Een hogere bijdrage voor hogere inkomens zou volgens hen de lasten eerlijker verdelen.',
    'Tegenstanders willen de basiszorg voor iedereen gelijk houden. Zij waarschuwen dat aanvullende verzekeringen en privéklinieken een grotere rol krijgen als publieke wachttijden oplopen. Volgens hen moet de overheid eerst laten zien dat bestaande middelen doelmatig worden besteed.',
    'Ook de uitvoering roept vragen op. Hoe voorkomt het kabinet dat mensen met een middeninkomen onverwacht veel gaan betalen? En hoe wordt gecontroleerd dat de opbrengst terechtkomt bij opleidingen en betere zorg, in plaats van bij algemene begrotingsposten?',
    'De uitkomst raakt iedereen: patiënten, mantelzorgers, zorgmedewerkers en belastingbetalers. Tijdens het debat kunnen kijkers vragen insturen. De redactie verzamelt de reacties en zet na afloop de belangrijkste voorstellen en openstaande vragen op een rij.'
  ],
  'De klas is overal. De school blijft van iedereen.': [
    'De schooldag speelt zich in 2040 op meer plekken af. Leerlingen volgen lessen in het klaslokaal, werken thuis aan online opdrachten en gaan voor projecten de wijk in. Scholen gebruiken die afwisseling om leerlingen zelfstandiger te laten leren en de lesstof aan hun niveau aan te passen.',
    'Een persoonlijke leerassistent kan extra uitleg geven bij rekenen of taal. De docent ziet welke oefeningen zijn gemaakt en waar leerlingen blijven hangen. Dat helpt bij de voorbereiding, maar de leraar bepaalt nog steeds welke doelen centraal staan en wanneer een leerling persoonlijke hulp nodig heeft.',
    'Voor kinderen is school ook de plek waar ze leren samenwerken, omgaan met verschil en vriendschappen opbouwen. Die vaardigheden ontstaan niet vanzelf achter een scherm. Daarom plannen scholen gezamenlijke lessen en projecten waarin leerlingen verantwoordelijkheid delen.',
    'De projectdag brengt lessen in contact met de praktijk. Een klas kan bijvoorbeeld met een buurtcentrum een ontmoetingsplek ontwerpen of met een lokale boer onderzoeken hoe voedsel wordt verbouwd. Leerlingen presenteren hun werk aan bewoners en krijgen feedback buiten de gebruikelijke toets om.',
    'Hybride onderwijs werkt alleen als ieder kind mee kan doen. Scholen houden apparaten beschikbaar en bieden een rustige werkplek voor leerlingen die thuis niet goed kunnen leren. De digitale mogelijkheden zijn groot, maar de belofte van goed onderwijs blijft afhankelijk van mensen die leerlingen kennen en begeleiden.'
  ],
  'Hoe zorgen we dat vernieuwing niet leidt tot meer ongelijkheid?': [
    'Nederland gebruikt in 2040 technologie om personeelstekorten op te vangen en publieke diensten toegankelijk te houden. Digitale zorgassistenten beantwoorden eenvoudige vragen, leerprogramma’s passen zich aan leerlingen aan en overheidsdiensten verwerken aanvragen sneller.',
    'Die vernieuwing heeft voordelen, maar de toegang is niet vanzelf gelijk. Sommige mensen kunnen een aanvullende verzekering betalen, hebben thuis goede apparatuur en weten hoe ze digitale diensten moeten gebruiken. Anderen zijn afhankelijk van publieke voorzieningen en persoonlijke hulp.',
    'Ook algoritmes kunnen bestaande verschillen versterken. Als een systeem is getraind op onvolledige gegevens, kan het bepaalde groepen minder goed herkennen. Daarom vragen bewonersorganisaties om begrijpelijke uitleg, menselijke controle en een eenvoudige manier om een besluit aan te vechten.',
    'De overheid kan technologie toegankelijker maken door alternatieven open te houden: een medewerker aan de balie, een wijkverpleegkundige aan huis en scholen met apparaten en werkplekken. Dat kost geld, maar voorkomt dat toegang tot basisvoorzieningen afhangt van digitale handigheid.',
    'De grootste keuze is uiteindelijk politiek. Welke diensten garanderen we voor iedereen, en welke laten we afhangen van wat iemand zelf kan betalen? Vernieuwing kan de verzorgingsstaat versterken, maar alleen wanneer de opbrengsten breed worden gedeeld en mensen meepraten over de regels.'
  ]
};

function openArticle(card) {
  const heading = card.querySelector('h1,h2,h3');
  if (!heading) return;
  const title = heading.textContent.trim();
  const category = card.querySelector('.tag, .latest article span')?.textContent.trim() || 'NEDERLAND 2040';
  const image = card.querySelector('img') || card.closest('.front-grid')?.querySelector('.hero-art img') || card.closest('.feature-story')?.querySelector('img');
  dialog.querySelector('#dialog-title').textContent = title;
  dialog.querySelector('.dialog-category').textContent = category;
  dialog.querySelector('.dialog-lead').textContent = card.querySelector('.dek, p')?.textContent.trim() || 'Nederland verandert. Dit is wat er speelt.';
  const paragraphs = articleText[title] || [
    'De veranderingen in Nederland raken ons dagelijks leven. Onze redactie volgt de ontwikkelingen en spreekt met de mensen die ermee te maken hebben. Lees hier hoe de keuzes van vandaag het land van 2040 vormgeven.',
    'In buurten, scholen en zorginstellingen proberen bewoners en professionals nieuwe afspraken uit. Hun ervaringen laten zien wat werkt en waar beleid nog moet worden aangepast.',
    'De komende jaren wordt duidelijk welke keuzes standhouden. De redactie blijft de ontwikkelingen volgen en komt terug bij de mensen die ermee te maken hebben.'
  ];
  const articleTextBox = dialog.querySelector('.article-text');
  articleTextBox.replaceChildren();
  paragraphs.forEach((paragraph, index) => {
    if (index === 2) {
      const subheading = document.createElement('h2');
      subheading.textContent = 'Wat staat er op het spel?';
      articleTextBox.append(subheading);
    }
    const p = document.createElement('p');
    p.textContent = paragraph;
    articleTextBox.append(p);
  });
  const author = card.querySelector('.byline b')?.textContent || 'Redactie 2040';
  dialog.querySelector('.article-author').textContent = author;
  const readingTime = Math.max(2, Math.ceil((paragraphs.join(' ') + dialog.querySelector('.dialog-lead').textContent).split(/\s+/).length / 200));
  dialog.querySelector('.article-meta').textContent = `24 september 2040 · ${readingTime} min leestijd`;
  const dialogImage = dialog.querySelector('.dialog-image');
  if (image) {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt || '';
    dialog.querySelector('.article-photo-caption').textContent = image.alt || 'Beeld: 2040';
    dialog.querySelector('.article-cover').hidden = false;
  } else dialog.querySelector('.article-cover').hidden = true;
  dialog.scrollTop = 0;
  dialog.showModal();
}

document.querySelectorAll('.hero-copy,.brief-feature,.brief-card,.story-copy,.latest article,.voice,.longread,.quote-card').forEach((card) => {
  card.classList.add('clickable-article');
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) event.preventDefault();
    openArticle(card);
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openArticle(card); }
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.article-back').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

const toast = document.querySelector('.easter-toast');
let toastTimer;
function revealEasterEgg(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3600);
}

let logoClicks = 0;
document.querySelectorAll('.brand').forEach((brand) => brand.addEventListener('click', (event) => {
  event.preventDefault();
  logoClicks += 1;
  if (logoClicks === 5) {
    revealEasterEgg('🔮 2040 voorspelling: de koffie is nog steeds op maandag op.');
    logoClicks = 0;
  }
}));

let statClicks = 0;
document.querySelector('.numbers-intro').addEventListener('click', () => {
  statClicks += 1;
  if (statClicks === 3) {
    revealEasterEgg('📡 Geheime melding: er zijn vandaag 1.284 buurtmaaltijden gedeeld.');
    statClicks = 0;
  }
});

const secretKeys = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let keyProgress = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === secretKeys[keyProgress]) keyProgress += 1;
  else keyProgress = event.key === secretKeys[0] ? 1 : 0;
  if (keyProgress === secretKeys.length) {
    revealEasterEgg('🛸 Je hebt de geheime toekomstredactie gevonden. Fijne dag, tijdreiziger.');
    keyProgress = 0;
  }
});

// Kleine pixel-liquid achtergrond in de hoofdfoto, zonder WebGL of extra packages.
const heroArt = document.querySelector('.hero-art');
if (heroArt) {
  const liquid = document.createElement('canvas');
  liquid.className = 'pixel-liquid';
  liquid.setAttribute('aria-hidden', 'true');
  heroArt.append(liquid);
  const ctx = liquid.getContext('2d', { alpha: true });
  const compact = matchMedia('(max-width: 650px)').matches;
  const width = compact ? 96 : 144;
  const height = compact ? 64 : 96;
  liquid.width = width;
  liquid.height = height;
  const pixels = ctx.createImageData(width, height);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const palette = [[69, 202, 157], [101, 185, 235], [160, 126, 230], [246, 145, 119], [250, 255, 252]];
  const bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
  let pointer = { x: .5, y: .5, active: false };
  let frame = 0;
  let lastPaint = 0;

  heroArt.addEventListener('pointermove', (event) => {
    const box = heroArt.getBoundingClientRect();
    pointer = { x: (event.clientX - box.left) / box.width, y: (event.clientY - box.top) / box.height, active: true };
  });
  heroArt.addEventListener('pointerleave', () => { pointer.active = false; });

  function paintLiquid(time) {
    if (time - lastPaint < (compact ? 52 : 38) && !reducedMotion) { frame = requestAnimationFrame(paintLiquid); return; }
    lastPaint = time;
    const t = reducedMotion ? 0 : time * .00032;
    const mouseX = pointer.active ? pointer.x : .5 + Math.sin(t * 1.2) * .2;
    const mouseY = pointer.active ? pointer.y : .5 + Math.cos(t * .9) * .18;
    const blobs = [
      [mouseX, mouseY, .24],
      [.25 + Math.sin(t + 1) * .12, .35 + Math.cos(t * .8) * .12, .2],
      [.73 + Math.cos(t * .7) * .13, .62 + Math.sin(t * 1.1) * .12, .24],
      [.48 + Math.sin(t * .6 + 2) * .2, .8 + Math.cos(t * .8 + 1) * .08, .17]
    ];
    for (let y = 0; y < height; y += 1) for (let x = 0; x < width; x += 1) {
      const nx = x / width;
      const ny = y / height;
      let field = 0;
      for (const [bx, by, radius] of blobs) {
        const dx = (nx - bx) * 1.05;
        const dy = (ny - by) * .92;
        field += Math.exp(-(dx * dx + dy * dy) / (radius * radius));
      }
      const dither = (bayer[y % 4][x % 4] / 16 - .5) * .13;
      const edge = .64 + dither;
      const index = (y * width + x) * 4;
      if (field > edge) {
        const shade = Math.max(0, Math.min(1, (field - .64) / .62));
        const stop = Math.min(palette.length - 2, Math.floor(shade * (palette.length - 1)));
        const mix = shade * (palette.length - 1) - stop;
        const color = palette[stop].map((channel, i) => Math.round(channel + (palette[stop + 1][i] - channel) * mix));
        pixels.data[index] = color[0];
        pixels.data[index + 1] = color[1];
        pixels.data[index + 2] = color[2];
        pixels.data[index + 3] = Math.round(175 + Math.min(75, shade * 75));
      } else pixels.data[index + 3] = 0;
    }
    ctx.putImageData(pixels, 0, 0);
    if (!reducedMotion) frame = requestAnimationFrame(paintLiquid);
  }
  paintLiquid(0);
  window.addEventListener('pagehide', () => cancelAnimationFrame(frame), { once: true });
}

// Kaarten reageren licht op aanwijzen met muis; touchschermen houden de vaste lay-out.
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.brief-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      const rx = ((event.clientY - box.top) / box.height - .5) * -3;
      const ry = ((event.clientX - box.left) / box.width - .5) * 3;
      card.style.setProperty('--tilt-x', `${ry}deg`);
      card.style.setProperty('--tilt-y', `${rx}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

document.querySelectorAll('.masthead nav a').forEach((link) => link.addEventListener('click', () => {
  const nav = document.querySelector('.masthead nav');
  nav.classList.remove('nav-open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.masthead nav').classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
