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
  'De verzorgingsstaat is van ons allemaal geworden': 'Nederlanders houden recht op een basis van onderwijs, inkomen en zorg. Tegelijk vraagt de overheid meer van burgers, werkgevers en technologie. De vergrijzing en personeelstekorten zetten de oude afspraken onder druk. De vraag is hoe we de nieuwe afspraken eerlijk houden.',
  'Een persoonlijk bestaansbudget, maar wie kijkt er mee?': 'Digitale systemen kennen ondersteuning sneller toe en besparen mensen een stapel formulieren. Maar wanneer een algoritme een fout maakt, kan iemand juist buiten de boot vallen. Ombudsdiensten en lokale hulpteams pleiten daarom voor een menselijke controle bij elke ingrijpende beslissing.',
  'De wijkverpleegkundige heeft er een collega bij: een robot op wielen': 'In steeds meer buurten brengen kleine zorgrobots medicijnen rond en helpen ze met praktische taken. Verpleegkundigen houden daardoor meer tijd over voor persoonlijk contact. Zorgteams benadrukken dat technologie alleen werkt als bewoners ook hulp krijgen bij het gebruik ervan.',
  'Een eigen voordeur, een gedeelde keuken: zo woont generatie 2040': 'Compacte woningen en gedeelde voorzieningen maken wonen betaalbaarder voor jongeren en ouderen. In nieuwe wooncomplexen delen bewoners een keuken, werkruimte en soms kinderopvang. De belangstelling groeit, al blijft de zoektocht naar een eigen betaalbare woning voor veel mensen lastig.',
  'Drie dagen klas, één dag online. Wat leren kinderen samen?': 'Digitale leerprogramma’s passen oefeningen aan het niveau van een leerling aan. De schooldag draait daardoor vaker om samenwerken, projecten en begeleiding. Leraren zeggen dat technologie nuttig is, zolang er genoeg tijd en aandacht overblijft voor de klas als gemeenschap.',
  '“Een robot kan helpen opstaan. Maar niet vragen hoe het écht gaat.”': 'Noor de Vries ziet hoe digitale hulpmiddelen haar werk veranderen. Metingen en medicatieoverzichten staan klaar voordat ze bij een patiënt aanbelt. Het belangrijkste deel van haar werk blijft volgens haar het gesprek aan de keukentafel: luisteren, geruststellen en signaleren wanneer iemand extra hulp nodig heeft.',
  'Kabinet verdeeld over extra zorgbijdrage vanaf 2041': 'De regering wil hogere inkomens vanaf 2041 een extra bijdrage laten betalen om meer zorgmedewerkers op te leiden en digitale zorgsystemen te verbeteren. Voorstanders noemen de bijdrage nodig om de zorg toegankelijk te houden. Tegenstanders vrezen dat de rekening opnieuw bij burgers terechtkomt.',
  'Woningtekort daalt, maar jongeren blijven langer thuis': 'De bouw van compacte appartementen en gedeelde woonvormen heeft het woningtekort verkleind. Toch groeit het aantal huishoudens door. Veel jongeren blijven langer bij hun ouders wonen of delen een woning met vrienden.',
  'Scholen zoeken balans tussen AI en aandacht': 'AI helpt met lesvoorbereiding, oefenstof en nakijkwerk. Leraren houden meer ruimte voor begeleiding, maar waarschuwen dat grotere klassen niet vanzelf persoonlijker onderwijs opleveren.',
  'Wie betaalt de zorg van morgen?': 'De Tweede Kamer debatteert over een extra zorgbijdrage voor mensen met een hoog inkomen. De inzet: hoe houden we goede zorg bereikbaar voor iedereen, terwijl de vraag stijgt en er steeds minder zorgmedewerkers beschikbaar zijn?',
  'De klas is overal. De school blijft van iedereen.': 'Leerlingen krijgen les op school, online en in projecten buiten de klas. Persoonlijke leerassistenten bieden extra uitleg, maar docenten blijven onmisbaar voor sociale ontwikkeling en persoonlijke begeleiding.',
  'Hoe zorgen we dat vernieuwing niet leidt tot meer ongelijkheid?': 'Nieuwe technologie kan de druk op zorg en onderwijs verlichten, maar niet iedereen heeft dezelfde toegang tot digitale middelen of aanvullende diensten. De uitdaging voor Nederland is om innovatie samen te laten gaan met gelijke kansen.'
};

function openArticle(card) {
  const heading = card.querySelector('h1,h2,h3');
  if (!heading) return;
  const title = heading.textContent.trim();
  const category = card.querySelector('.tag, .latest article span')?.textContent.trim() || 'NEDERLAND 2040';
  const image = card.querySelector('img');
  dialog.querySelector('#dialog-title').textContent = title;
  dialog.querySelector('.dialog-category').textContent = category;
  dialog.querySelector('.dialog-lead').textContent = card.querySelector('.dek, p')?.textContent.trim() || 'Nederland verandert. Dit is wat er speelt.';
  dialog.querySelector('.dialog-body').textContent = articleText[title] || 'De veranderingen in Nederland raken ons dagelijks leven. Onze redactie volgt de ontwikkelingen en spreekt met de mensen die ermee te maken hebben. Lees hier hoe de keuzes van vandaag het land van 2040 vormgeven.';
  const dialogImage = dialog.querySelector('.dialog-image');
  if (image) { dialogImage.src = image.src; dialogImage.alt = image.alt || ''; dialogImage.hidden = false; }
  else dialogImage.hidden = true;
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
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
