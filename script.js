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
const pullquote = dialog.querySelector('.article-pullquote');
// Artikelteksten. Regels die met '## ' beginnen worden tussenkopjes; `quote` verschijnt halverwege als streamer.
const articleText = {
  'De verzorgingsstaat is van ons allemaal geworden': {
    quote: '“De overheid belooft niet meer alles. Ze belooft dat niemand buiten de boot valt.”',
    body: [
      'Wie vanochtend om kwart over acht de wijkhub aan de Javastraat in Amsterdam-Oost binnenliep, zag in het klein hoe Nederland in 2040 werkt. Aan de ene tafel helpt een vrijwilliger een oudere buurman met zijn zorgbudget in de overheidsassistent. Aan de andere tafel volgt een schoonmaker van 58 een module tot praktijkondersteuner, betaald uit haar loopbaanrekening. In de keuken zet een wijkverpleegkundige koffie voor het teamoverleg. Loket, buurthuis en spreekkamer zijn één ruimte geworden.',
      'Dat is geen toeval. Sinds het Samenlevingsakkoord van 2034 is de verzorgingsstaat anders ingericht. De overheid garandeert een wettelijk vastgelegde basis: een bestaansbudget, basiszorg, onderwijs tot achttien jaar en een leven lang recht op scholing. Alles daarboven — extra huishoudelijke hulp, een eenpersoonskamer in het verpleeghuis, een tweede opleiding — regelen mensen steeds vaker zelf, via hun werkgever, een coöperatie of hun buurt.',
      '## Minder handen, meer vraag',
      'De cijfers achter die omslag kent inmiddels iedere Nederlander. Een kwart van de bevolking is 65 jaar of ouder. Het aantal 85-plussers is sinds 2020 bijna verdubbeld. Tegelijk groeit de beroepsbevolking nauwelijks. Eind jaren twintig werd al voorgerekend dat bij ongewijzigd beleid één op de vier werkenden in de zorg zou moeten werken. Dat scenario werd nooit werkelijkheid — maar alleen omdat Nederland de zorg anders ging organiseren.',
      'In de praktijk betekent dat: wie kan, werkt langer. De AOW-leeftijd ligt nu op 69 jaar en drie maanden, maar steeds meer mensen bouwen hun werk af in plaats van in één keer te stoppen. Een kwart van de 70-jarigen heeft nog een betaalde baan van een paar uur per week, vaak als mentor, gastouder of begeleider in de wijk.',
      'Digitale hulpmiddelen doen het terugkerende werk. Declaraties, indicaties en herhaalrecepten worden grotendeels automatisch verwerkt. Uitvoeringsorganisaties die in de jaren twintig nog kampten met achterstanden van honderdduizenden dossiers, handelen een gewone aanvraag nu binnen twee werkdagen af.',
      '## De buurt als tweede vangnet',
      'Het meest zichtbare verschil zit in de wijk. In bijna elke gemeente zijn buurtcoöperaties actief die maaltijden, vervoer en lichte zorg regelen. Leden betalen een kleine maandelijkse bijdrage of doneren uren: wie vandaag boodschappen doet voor een buurvrouw, kan later zelf hulp krijgen. In Deventer telt coöperatie Samen Zandweerd inmiddels ruim negenhonderd leden.',
      '‘Het voelt minder als liefdadigheid en meer als een verzekering die je met elkaar afsluit,’ zegt coördinator Ilse Brouwer. ‘Mensen kennen elkaar weer. Dat was vijftien jaar geleden wel anders.’',
      'Maar de buurt kan ook uitsluiten. Onderzoek van het Sociaal en Cultureel Planbureau liet dit voorjaar zien dat coöperaties het best werken in wijken waar mensen tijd, geld en een netwerk hebben. In buurten met veel ploegendiensten, eenoudergezinnen of nieuwkomers is het aanbod dunner. Juist daar is de publieke basis het belangrijkst.',
      '## Wie valt ertussen?',
      'Dat maakt de discussie in Den Haag scherp. Minister Eva van den Berg van Samenleving noemt het stelsel ‘een samenlevingsstaat’: de overheid als vangnet, de samenleving als eerste steun. Critici spreken liever van een ‘tweesporenstaat’, waarin de basis overeind blijft maar het verschil groeit tussen wat je krijgt en wat je zelf kunt bijkopen.',
      'Ook de digitale overheid blijft schuren. De Nationale ombudsman ontving vorig jaar ruim twaalfduizend klachten over geautomatiseerde besluiten, minder dan in 2037 maar nog altijd fors. Sinds de Wet menselijke maat van 2032 heeft iedere burger recht op een gesprek met een medewerker bij een besluit dat zijn inkomen raakt. Dat recht bestaat op papier; in drukke gemeenten duurt het soms weken voordat dat gesprek er komt.',
      'Vanavond debatteert de Tweede Kamer over een extra zorgbijdrage voor hogere inkomens. Het is het zoveelste debat over dezelfde vraag die Nederland al een generatie bezighoudt: hoeveel solidariteit organiseren we samen, en hoeveel laten we aan ieder zelf over? De verzorgingsstaat is niet verdwenen. Hij is van ons allemaal geworden — met alle rechten, en alle plichten, die daarbij horen.'
    ]
  },
  'Een persoonlijk bestaansbudget, maar wie kijkt er mee?': {
    quote: '“Het systeem wist precies wat ik verdiende. Het wist alleen niet waarom.”',
    body: [
      'Op de eerste werkdag van elke maand staat bij ruim 2,1 miljoen Nederlanders het persoonlijk bestaansbudget op de rekening. Het bedrag is afgestemd op de vaste lasten van een huishouden: huur of hypotheek, energie, eten en de eigen bijdrage in de zorg. Wie werkt, ziet het budget geleidelijk afnemen naarmate het inkomen stijgt. Wie niet kan werken, houdt de volledige basis.',
      'Het bestaansbudget verving in 2035 het lappendeken van toeslagen, bijstand en kortingen dat Nederland decennialang kende. Het idee was simpel: één regeling, één loket, één bedrag. Na de toeslagenaffaire wilde de politiek een stelsel waarin mensen niet achteraf duizenden euro’s hoeven terug te betalen.',
      '## Automatisch, en meestal goed',
      'Voor de meeste ontvangers werkt het. Belastingdienst, UWV en gemeenten delen via het Burgerdatahuis de gegevens die al bekend zijn — inkomen, huishoudsamenstelling, woonlasten — en het budget wordt maandelijks bijgesteld. Een aanvraag kost gemiddeld elf minuten. Terugvorderingen boven de vijfhonderd euro zijn in vijf jaar met driekwart gedaald.',
      '‘Toen ik in 2029 bijstand aanvroeg, ben ik drie maanden bezig geweest met papieren,’ vertelt Ruud Hendriks (61) uit Heerlen, die na een bedrijfssluiting wordt omgeschoold tot installateur van warmtepompen. ‘Nu had ik binnen een week bericht. En het bedrag klopte.’',
      'Tegenover de snelheid staat een tegenprestatie. Wie kan werken, heeft een bijdrageplan: minimaal zestien uur per week werk, opleiding, mantelzorg of vrijwilligerswerk. De buurtcoach van de gemeente beoordeelt of het plan redelijk is. Wie zich er niet aan houdt, krijgt eerst een gesprek en pas daarna een korting.',
      '## Als het algoritme misgrijpt',
      'Juist bij onregelmatige levens loopt het systeem vast. Zzp’ers met wisselende opdrachten, seizoenswerkers in de Westlandse kassen en mensen die tussen twee adressen leven, krijgen vaker onverwachte aanpassingen. Het risicomodel dat fraude moet opsporen, markeert schommelende inkomens sneller als ‘afwijkend’.',
      'Dat overkwam Fatma Yıldız (34) uit Rotterdam-Zuid. Ze werkt als freelance tolk voor ziekenhuizen en rechtbanken. In maart werd haar budget stopgezet omdat haar inkomen in februari ineens hoog was — twee grote opdrachten in één maand. ‘Het systeem wist precies wat ik verdiende. Het wist alleen niet waarom. Ik heb drie weken zonder budget gezeten, met twee kinderen.’',
      'Volgens de Wet menselijke maat mag geen besluit dat iemands inkomen met meer dan tien procent verlaagt volledig automatisch worden genomen; een medewerker moet meekijken. Maar uit een steekproef van de Algemene Rekenkamer bleek dit jaar dat die controle in drukke periodes soms neerkomt op een klik op ‘akkoord’.',
      '## Inzage als grondrecht',
      'Burgers kunnen in hun Datakluis zien welke gegevens de overheid over hen gebruikt en wie die heeft opgevraagd. Het is een van de meest gebruikte functies van de overheidsapp: ruim veertig procent van de ontvangers keek er het afgelopen jaar minstens één keer in. Een verkeerd adres of een onjuiste inkomensmelding kan met één knop worden betwist.',
      'Privacyorganisaties willen verder gaan. Zij pleiten voor een ‘datarem’: gemeenten zouden alleen gegevens mogen combineren die strikt nodig zijn voor één besluit, en koppelingen daarna moeten verwijderen. Het ministerie van Samenleving vreest dat dat de automatische verwerking vertraagt — en daarmee het grootste voordeel van het stelsel.',
      'Buurtcoach Dennis Vermeulen uit Tilburg ziet beide kanten. ‘Het bestaansbudget heeft voor de meeste mensen rust gebracht. Maar ik zie ook de mensen voor wie het systeem niet is gebouwd. Mijn werk is om die zichtbaar te houden.’ Voor hem is de vraag niet óf de overheid meekijkt, maar of er iemand terugkijkt als het misgaat.'
    ]
  },
  'De wijkverpleegkundige heeft er een collega bij: een robot op wielen': {
    quote: '“Kees brengt de medicijnen. Wij brengen de aandacht.”',
    body: [
      'Om tien over zeven rijdt Kees de lift uit op de derde verdieping van woonzorgcentrum De Kade in Amsterdam-Noord. Hij is een meter twintig hoog, heeft een ronde witte kap en een klep aan de voorkant waarachter de medicijnen van zestien bewoners zitten, per persoon verzegeld. Bij elke deur stopt hij, piept twee keer zacht en wacht tot een verzorgende de klep met haar pas opent.',
      'Officieel heet Kees ZR-4, maar niemand noemt hem zo. De bewoners kozen de naam bij zijn komst in 2038, na een stemming in de huiskamer. ‘Hij lijkt op mijn zwager,’ zegt mevrouw Bakker (91) van kamer 312. ‘Ook altijd op tijd, ook nooit iets te zeggen.’',
      '## Twaalf kilometer minder lopen',
      'Zorgrobots zijn in 2040 geen nieuwigheid meer. In ruim zestig procent van de verpleeghuizen rijden logistieke robots die medicijnen, maaltijden en linnengoed rondbrengen. In De Kade zijn het er drie. Samen leggen ze per dag zo’n twaalf kilometer af — kilometers die verzorgenden vroeger zelf liepen.',
      '‘Dat klinkt klein, maar het scheelt me een uur per dienst,’ zegt Noor de Vries, die als wijkverpleegkundige ook de thuiswonende ouderen in de buurt begeleidt. ‘Dat uur zit ik nu bij iemand aan bed.’',
      'Naast de rijdende robots draagt bijna iedere bewoner een dunne sensorpleister op de bovenarm. Die meet hartslag, temperatuur, vochtbalans en beweging. Valt iemand ’s nachts of krijgt iemand koorts, dan gaat er een melding naar de nachtdienst. Het aantal ziekenhuisopnames na een val is in De Kade sinds 2037 met een derde gedaald.',
      '## Wat de robot níét doet',
      'Kees wast niemand, tilt niemand en beslist niets. Dat is een bewuste keuze. De Kade experimenteerde in 2036 met een tilrobot die bewoners uit bed hielp, maar stopte na een half jaar. ‘Technisch werkte het,’ zegt teamleider Priya Ramdin. ‘Maar mensen voelden zich een pakketje. Opstaan is voor veel bewoners het moment waarop ze even met iemand praten. Dat haal je niet weg.’',
      'Ook de sensoren zijn onderwerp van gesprek. Bij de intake bespreekt het team met iedere nieuwe bewoner en diens familie welke metingen aan staan. Eén op de vijf bewoners kiest voor minder monitoring. Meneer Pinas (84) draagt de pleister alleen ’s nachts. ‘Overdag wil ik gewoon mezelf zijn, geen grafiek.’',
      '## Een krap rooster blijft krap',
      'Het personeelstekort is door de robots niet verdwenen. De Kade heeft nog zeven openstaande vacatures en vult weekenddiensten met krachten uit de regionale zorgpool. De robots kosten bovendien geld: het leasecontract voor drie exemplaren kost jaarlijks ongeveer evenveel als anderhalve fulltime verzorgende.',
      'Toch wil vrijwel niemand terug. ‘Ik weet nog dat ik tien keer per dienst naar de medicijnkast liep,’ zegt Ramdin. ‘Nu zie ik mijn team vaker zitten, praten, lachen met bewoners. Daar zijn we ooit voor de zorg in gegaan.’',
      'Om half negen rijdt Kees terug naar zijn laadplek naast de lift. Op de gang is het stil. In de huiskamer schenkt een verzorgende thee in en vraagt mevrouw Bakker hoe ze heeft geslapen. Het antwoord duurt tien minuten. Niemand kijkt op de klok.'
    ]
  },
  'Een eigen voordeur, een gedeelde keuken: zo woont generatie 2040': {
    quote: '“Als ik gezelschap wil, loop ik naar beneden. Als ik rust wil, doe ik mijn deur dicht.”',
    body: [
      'De Werf staat aan het Merwedekanaal in Utrecht: negen verdiepingen hout en glas, een daktuin vol zonnepanelen en een fietsenkelder voor vierhonderd fietsen. Parkeerplaatsen zijn er niet; wie een auto nodig heeft, reserveert een deelauto via de buurtapp. Deze week werd het gebouw officieel geopend, al wonen de eerste bewoners er sinds juni.',
      'In De Werf wonen 186 mensen in 142 woningen. Elke bewoner heeft een eigen voordeur, badkamer en kookhoek, op 28 tot 42 vierkante meter. Wat ontbreekt, staat beneden: een grote keuken met drie kookeilanden, een werkruimte met twintig bureaus, een wasserette, een logeerkamer en een klusplaats met gereedschap dat iedereen kan lenen.',
      '## Wonen op kleinere voet',
      'Het concept is in 2040 niet meer uitzonderlijk. Sinds de herziene Woningwet van 2031 moeten gemeenten bij nieuwbouw minimaal een vijfde reserveren voor ‘gedeeld zelfstandig wonen’. Ruim zes procent van de Nederlanders woont inmiddels in zo’n complex, vooral in de Randstad. Voor gemeenten is de rekensom helder: met gedeelde voorzieningen passen er op dezelfde grond veertig procent meer huishoudens.',
      'De Werf is gebouwd uit fabrieksmodules die in vijf maanden op elkaar werden gestapeld. Wanden zijn verplaatsbaar: een studio kan in een weekend met die van de buren worden samengevoegd tot een gezinswoning. Het gebouw verbruikt netto geen energie; de warmte komt uit het warmtenet, dat restwarmte van een datacentrum in Lage Weide gebruikt.',
      '## Samira, Henk en het schoonmaakrooster',
      'Samira Benali (23) studeert verpleegkunde en woont op de vijfde verdieping. Ze betaalt 690 euro per maand, inclusief energie en internet. ‘Voor een studio in de stad is dat normaal geworden. Maar hier krijg ik er een werkplek, een tuin en mensen bij.’ Ze kookt twee keer per week beneden, meestal met dezelfde vier buren.',
      'Twee deuren verderop woont Henk Scholten (74), weduwnaar en oud-machinist. Hij verkocht vorig jaar zijn eengezinswoning in Overvecht. ‘Te groot, te stil,’ zegt hij. ‘Hier vraagt iemand of ik mee-eet. En ik repareer fietsen voor de studenten. Dat houdt me scherp.’',
      'Samen wonen gaat niet vanzelf. Iedere verdieping heeft eens per maand een bewonersoverleg, de schoonmaak van de gedeelde keuken gaat via een rooster, en de logeerkamer is voor december al volgeboekt. ‘Er is altijd iemand die zijn pan laat staan,’ zegt Samira. ‘Dan stuur ik een foto in de groepsapp. Meestal is hij binnen een uur weg.’',
      'Een woonbeheerder is twee dagen per week aanwezig, maar de bewonerscommissie beslist over de huisregels. Over één punt werd fel gediscussieerd: huisdieren. Na drie avonden vergaderen mogen katten wel, honden niet. ‘Democratie in het klein,’ zegt Henk.',
      '## Het tekort is kleiner, niet weg',
      'Nederland kwam halverwege de jaren twintig zo’n 400.000 woningen tekort. Dat is teruggebracht tot ongeveer 180.000, maar de druk blijft hoog. Het aantal eenpersoonshuishoudens groeit, en vooral in de grote steden blijft een gezinswoning buiten bereik van middeninkomens.',
      'Critici waarschuwen dat compact wonen de norm wordt voor wie geen keuze heeft. ‘Het is een prima woonvorm voor wie het wil,’ zegt woononderzoeker Marloes Kuipers. ‘Maar een jong gezin met twee kinderen moet ook een betaalbare woning met een tuin kunnen vinden. Daar zijn we nog lang niet.’',
      'Op de daktuin van De Werf staan deze avond een stuk of dertig bewoners rond de barbecue. Iemand heeft een speaker meegenomen. Henk legt twee studenten uit hoe je een fietsketting vervangt. Samira zegt dat ze hier voorlopig niet weggaat.'
    ]
  },
  'Drie dagen klas, één dag online. Wat leren kinderen samen?': {
    quote: '“De computer weet wat ze niet snappen. Ik weet waarom.”',
    body: [
      'Maandagochtend, half negen, basisschool De Horizon in Zwolle-Stadshagen. Groep 6 zit in een kring. Juf Anouk Wessels vraagt wie in het weekend iets heeft gemeten. Een jongen heeft de regenton van zijn opa gemeten na de stortbui van zaterdag: 84 liter. Binnen vijf minuten rekent de hele klas uit hoeveel regen dat per vierkante meter dak is.',
      'Daarna gaan de tablets open. Ieder kind werkt twintig minuten aan rekenen op eigen niveau. De leeromgeving ziet wie vastloopt bij breuken en schuift een uitlegfilmpje of een extra oefening naar voren. Wessels ziet op haar scherm welke vier kinderen dezelfde fout maken en neemt ze apart aan de instructietafel.',
      '## Het ritme van de week',
      'Sinds de invoering van de flexibele schoolweek in 2033 bepalen scholen zelf hoe ze de lesuren over het jaar verdelen. De meeste kiezen het model dat De Horizon ook hanteert: drie dagen op school, één dag online vanuit huis of een studieplek, en één projectdag in de wijk. Voor de groepen 1 tot en met 4 geldt geen online dag; zij zijn vier dagen op school.',
      'De keuze kwam voort uit nood. Het lerarentekort liep eind jaren twintig op tot ruim tienduizend volledige banen. Met een vierdaagse bezetting en een online dag die grotendeels door leerplatforms wordt begeleid, konden scholen hun leraren anders inzetten. Op de online dag geeft Wessels geen les; ze houdt twee digitale spreekuren en bereidt de projectdag voor.',
      '## Wat een platform niet ziet',
      'De adaptieve software heeft verschillen tussen leerlingen beter zichtbaar gemaakt. Volgens de Inspectie van het Onderwijs lezen en rekenen leerlingen in groep 8 gemiddeld weer op het niveau van 2015, na jaren van daling. Maar de inspectie waarschuwt ook dat de kloof tussen kinderen met en zonder hulp thuis op de online dag groter wordt.',
      '‘De computer weet precies wat ze niet snappen,’ zegt Wessels. ‘Maar ik weet waarom. Dat een leerling vandaag slecht rekent, komt soms niet door breuken maar doordat het thuis onrustig is.’ Ze leest de analyses van het platform elke ochtend, maar past ze regelmatig aan. ‘Het advies is een startpunt, geen oordeel.’',
      'Daarom houdt De Horizon op de online dag de schoolbibliotheek open. Twintig leerlingen komen er vast; voor hen is er thuis geen rustige plek of geen volwassene die kan helpen. Een onderwijsassistent en twee vrijwillige opa’s zijn aanwezig. ‘Online dag betekent niet: thuis of niks,’ zegt directeur Bas Kok.',
      '## Samen leren, buiten de muren',
      'Op woensdag, de projectdag, is groep 6 in het park van Stadshagen. Samen met het waterschap onderzoeken de kinderen waar het regenwater blijft na een hoosbui — een actueel onderwerp na de natte zomer van dit jaar. Ze meten, fotograferen en tekenen een kaart van de plassen. Over drie weken presenteren ze hun advies aan de wijkraad.',
      '‘Op de projectdag zie ik kinderen die in de klas nauwelijks iets zeggen ineens de leiding nemen,’ zegt Wessels. ‘Ze moeten taken verdelen, ruzies oplossen en iets uitleggen aan een volwassene die ze niet kennen. Dat leer je niet van een scherm.’',
      'Ouders zijn overwegend positief, maar een derde van de werkende ouders noemt de online dag ‘logistiek lastig’. En op ouderavonden komt steeds dezelfde vraag terug: wat bewaart het platform over mijn kind, en hoe lang? Sinds dit schooljaar moeten scholen dat jaarlijks per leerling kunnen laten zien.',
      'Om kwart over drie gaat de bel. Buiten wachten ouders met bakfietsen. De jongen van de regenton roept naar zijn opa dat de klas ook het dak van de school gaat opmeten. ‘Tweehonderd vierkante meter, opa. Reken maar uit.’'
    ]
  },
  '“Een robot kan helpen opstaan. Maar niet vragen hoe het écht gaat.”': {
    quote: '“Als een scherm bepaalt wie zorg krijgt en niemand vraagt hoe het thuis gaat, zijn we verkeerd bezig.”',
    body: [
      'Noor de Vries (44) begint haar dag niet meer met een stapel overdrachtsformulieren, maar met een kop koffie en een scherm vol lijntjes. Voordat ze om acht uur op haar e-bike stapt, heeft ze de nachtelijke metingen van haar 38 cliënten in Amsterdam-Noord al bekeken. Twee lijntjes zijn oranje. Daar gaat ze als eerste naartoe.',
      'Ze werkt zestien jaar in de wijkzorg. Toen ze begon, in 2024, ging naar eigen schatting een derde van haar tijd op aan registreren. ‘Ik schreef op wat ik deed, zodat iemand anders kon controleren dát ik het had gedaan. Nu legt het systeem vast wat ik doe. Ik hoef alleen te zeggen wat ik ervan vind.’',
      '## ‘Een melding is geen diagnose’',
      'Wat is er het meest veranderd? ‘De rust in mijn hoofd. Vroeger ging ik naar huis met het gevoel dat ik iets was vergeten in te vullen. Nu loopt de spraakassistent mee tijdens mijn bezoek: ik zeg hardop wat ik zie, en het verslag staat klaar als ik de deur uitloop. Ik lees het na en keur het goed. Dat kost me twee minuten in plaats van twintig.’',
      'Hoeveel vertrouwt ze op de meldingen? ‘Ik neem ze serieus, maar ik geloof ze niet blind. Vorige maand kreeg ik ’s nachts een alarm over een lage hartslag bij een cliënt. Bleek dat hij zijn pleister op de verwarming had gelegd. Andersom heb ik mensen gehad die volgens alle waarden prima gingen, terwijl ik bij binnenkomst zag dat er iets niet klopte. Een blik, de manier waarop iemand de deur opendoet. Een melding is geen diagnose.’',
      '## Robots in de wijk',
      'In De Kade, het woonzorgcentrum waar Noor een deel van haar week werkt, rijden bezorgrobots rond. Bij cliënten thuis staan slimme medicijndispensers die met een stem aan de pillen herinneren. ‘Voor mensen die alleen wonen en vergeetachtig worden, zijn die fantastisch. Het aantal medicatiefouten in mijn wijk is gehalveerd.’',
      'Toch is ze kritisch op het idee dat technologie het personeelstekort oplost. ‘Een robot kan iemand helpen opstaan. Maar niet vragen hoe het écht gaat. En dat is vaak de belangrijkste vraag. Eenzaamheid, schulden, een zoon die niet meer belt — dat zie je niet in een grafiek.’',
      '## Wie buiten de lijntjes valt',
      'Haar grootste zorg zijn cliënten die de techniek niet vertrouwen of niet begrijpen. ‘Ik heb een meneer van 88 die de pleister iedere avond afhaalt omdat hij denkt dat hij wordt afgeluisterd. Dat is zijn goed recht. Dan ga ik gewoon vaker langs.’ Maar die extra bezoeken moeten ergens vandaan komen. ‘Het systeem rekent met gemiddelden. Mensen zijn geen gemiddelde.’',
      'Ze ziet de wijk ook veranderen. Er wonen meer ouderen alleen, en hun kinderen wonen vaker ver weg. De buurtcoöperatie in Noord helpt met boodschappen en vervoer, maar niet iedereen vindt de weg ernaartoe. ‘De mensen die het hardst hulp nodig hebben, vragen er het minst om.’',
      'Blijft ze dit werk doen? ‘Zeker. Het vak is mooier geworden, niet saaier. Ik doe meer van wat ik ooit wilde doen: kijken, luisteren, beslissen. Maar dan moet de politiek begrijpen dat de tijd die technologie vrijmaakt, bij de patiënt moet blijven. Niet bij de begroting. Als een scherm bepaalt wie zorg krijgt en niemand meer vraagt hoe het thuis gaat, zijn we verkeerd bezig.’',
      'Om half vijf fietst ze naar haar laatste cliënt van de dag, mevrouw Tjon (79), die net uit het ziekenhuis is. Het oranje lijntje van vanochtend is groen geworden. Noor blijft toch drie kwartier. ‘Ze wilde vertellen over haar kleinzoon. Dat hoort erbij.’'
    ]
  },
  'Kabinet verdeeld over extra zorgbijdrage vanaf 2041': {
    quote: '“We vragen de sterkste schouders om een klein stuk extra. Niet meer, niet minder.”',
    body: [
      'Binnen de coalitie is onenigheid ontstaan over de extra zorgbijdrage die het kabinet vanaf 1 januari 2041 wil invoeren. Minister Eva van den Berg van Samenleving presenteerde het voorstel vorige week op Prinsjesdag als ‘het sluitstuk van het Zorgakkoord 2040’. Een week later wankelt de steun al.',
      'Het plan: huishoudens met een belastbaar inkomen boven 1,8 keer modaal betalen een aanvullende premie van 1,2 procent over het deel van hun inkomen daarboven. Het kabinet verwacht een opbrengst van 3,4 miljard euro per jaar. Dat geld gaat naar een Opleidingsfonds Zorg, hogere salarissen in de wijkverpleging en het landelijk koppelen van zorgsystemen.',
      '## Scheur in de coalitie',
      'Coalitiepartner De Liberalen noemt de bijdrage ‘een verkapte belastingverhoging’ en wil eerst onderzoek naar de effectiviteit van de bestaande zorguitgaven. ‘We geven nu al een zesde van ons nationaal inkomen uit aan zorg,’ zegt fractieleider Pieter de Haan. ‘Laat eerst zien dat elke euro goed wordt besteed.’',
      'De andere coalitiepartijen steunen het voorstel, maar willen aanpassingen. Het Christen-Sociaal Appèl vraagt een vrijstelling voor mantelzorgers die minder zijn gaan werken. GroenSamen wil dat een deel van het geld naar preventie gaat, zoals hitteplannen voor ouderen — na de zomer van 2039, toen de lange hittegolf tot honderden extra sterfgevallen leidde.',
      'Oppositiepartij Vooruit, onder leiding van Jamal El Idrissi, steunt het principe maar vindt het plan te voorzichtig. ‘Een aparte bijdrage is een pleister. We hebben een eerlijk belastingstelsel nodig waarin vermogen net zo zwaar weegt als arbeid.’',
      '## Waarom nu?',
      'De achtergrond is bekend. De zorguitgaven zijn sinds 2020 bijna verdubbeld, terwijl het aantal zorgmedewerkers de afgelopen vijf jaar nauwelijks groeide. Er staan ruim 38.000 vacatures open. De wachttijd voor een verpleeghuisplek is in de Randstad opgelopen tot gemiddeld veertien maanden.',
      '‘Zonder extra investering gaan we de komende jaren achteruit,’ zei Van den Berg op de persconferentie. ‘We vragen de sterkste schouders om een klein stuk extra. Niet meer, niet minder.’ Volgens het ministerie betaalt een huishouden met twee keer modaal ongeveer 190 euro per jaar extra; bij vijf keer modaal is dat ruim 2.300 euro.',
      '## Wat zeggen patiënten en zorgverleners?',
      'De Patiëntenfederatie steunt het plan onder voorwaarden. Directeur Sanne Oosterhuis wil een wettelijke garantie dat de opbrengst geoormerkt blijft voor zorg. ‘We hebben eerder gezien dat zorggeld ongemerkt naar andere gaten vloeide. Wij willen elk jaar openbaar kunnen zien wat het heeft opgeleverd: kortere wachttijden, meer opleidingsplaatsen, meer handen aan het bed.’',
      'Verpleegkundigen zijn positief over het opleidingsfonds, maar waarschuwen dat hogere salarissen alleen niet genoeg zijn. ‘Mensen vertrekken uit de zorg door werkdruk en gebrek aan zeggenschap,’ zegt een woordvoerder van de beroepsvereniging. ‘Geld helpt, maar autonomie houdt mensen vast.’',
      '## Hoe nu verder',
      'Vanavond om half negen debatteert de Tweede Kamer over het voorstel. Een stemming volgt op zijn vroegst over twee weken, na de Algemene Financiële Beschouwingen. Draaien De Liberalen niet bij, dan heeft het kabinet steun nodig van een deel van de oppositie. Vooruit laat weten ‘te willen praten, maar niet voor niets’.',
      'Het debat is live te volgen via onze site en de 2040-app. Lezers kunnen vragen insturen; de redactie legt een selectie voor aan de woordvoerders.'
    ]
  },
  'Woningtekort daalt, maar jongeren blijven langer thuis': {
    quote: '“Er zijn meer woningen dan ooit. Alleen niet voor mij.”',
    body: [
      'Het woningtekort in Nederland is voor het vijfde jaar op rij gedaald. Dat blijkt uit de jaarlijkse Staat van de Volkshuisvesting die vandaag verschijnt. Het tekort bedraagt nu ongeveer 180.000 woningen, tegen ruim 400.000 halverwege de jaren twintig. Toch wonen jongeren langer thuis dan ooit: gemiddeld verlaten ze het ouderlijk huis pas op 25,4-jarige leeftijd.',
      '## Meer gebouwd dan in een halve eeuw',
      'Tussen 2030 en 2040 zijn gemiddeld 96.000 woningen per jaar opgeleverd, het hoogste aantal sinds de jaren zeventig. Een groot deel is in fabrieken gebouwd: modulaire woningen die in weken in plaats van maanden worden neergezet. Leegstaande kantoren in onder meer Amersfoort, Den Haag en Eindhoven zijn omgebouwd tot tienduizenden woningen.',
      'Ook de manier van wonen verandert. Compacte appartementen met gedeelde voorzieningen, zoals het deze week geopende De Werf in Utrecht, zijn een vast onderdeel van de nieuwbouw. Het aantal ouderen dat de gezinswoning verruilt voor een kleiner appartement is verdubbeld sinds de invoering van de doorstroompremie in 2033.',
      '## Waarom jongeren toch thuis blijven',
      'Dat jongeren daar weinig van merken, heeft meerdere oorzaken. Het aantal huishoudens groeit harder dan verwacht, vooral door eenpersoonshuishoudens en migratie. Nieuwe woningen verrijzen niet altijd waar werk en opleidingen zijn. En zelfs een compacte studio kost in de grote steden al snel 650 tot 850 euro per maand.',
      '‘Er zijn meer woningen dan ooit. Alleen niet voor mij,’ zegt Lotte van Dijk (24), die als laborant in Leiden werkt en nog bij haar ouders in Oegstgeest woont. Ze staat zeven jaar ingeschreven voor sociale huur. ‘Mijn inkomen is te hoog voor de korte wachtlijst en te laag voor de vrije sector. Ik zit precies in het gat.’',
      'Uit het rapport blijkt dat ruim een op de drie jongeren tussen 23 en 30 jaar uit geldnood nog thuis woont of met vrienden een woning deelt. Onder jongeren met een mbo-opleiding ligt dat aandeel hoger dan onder hbo- en wo-afgestudeerden.',
      '## Tijdelijk als nieuwe norm',
      'Een ander knelpunt zijn tijdelijke contracten. Ruim de helft van de jongeren die zelfstandig huurt, heeft een contract van maximaal vijf jaar, vaak in een getransformeerd kantoorpand dat later een andere bestemming krijgt. ‘Je bouwt geen leven op als je weet dat je over drie jaar weer weg moet,’ zegt Jesse Mulder van jongerenhuurdersvereniging Thuis Nu.',
      'Gemeenten lopen daarnaast tegen de grenzen van de ruimte aan. Nieuwe wijken hebben ook scholen, zorgposten, tramlijnen en waterberging nodig — dat laatste is na de wateroverlast van 2036 een harde eis. In Almere en Zoetermeer liggen daarom duizenden bouwplannen stil totdat de infrastructuur klaar is.',
      '## Wat moet er gebeuren?',
      'Het ministerie van Volkshuisvesting wil het aandeel betaalbare huurwoningen voor jongeren vergroten en overweegt een ‘startersrecht’: iedereen onder de dertig zou voorrang krijgen op een deel van de nieuwbouw in de eigen regio. Verhuurders waarschuwen dat andere groepen, zoals gezinnen en statushouders, daardoor in de knel komen.',
      'Voor Lotte zijn de cijfers weinig troostrijk. ‘Ik geloof best dat het beter gaat. Maar mijn vrienden en ik plannen ons leven rond een woning die er nog niet is. Dat voelt niet als vooruitgang.’'
    ]
  },
  'Scholen zoeken balans tussen AI en aandacht': {
    quote: '“We hebben meer data over leerlingen dan ooit. Ik wil vooral meer tijd.”',
    body: [
      'Negen op de tien Nederlandse scholen werken met een AI-leerassistent die oefeningen afstemt op het niveau van iedere leerling. Dat staat in de Staat van het Onderwijs die de Inspectie vandaag publiceert. Tegelijk waarschuwt de Inspectie dat scholen de techniek te vaak inzetten om tekorten op te vangen, in plaats van om het onderwijs beter te maken.',
      '## Van hulpmiddel tot ruggengraat',
      'In tien jaar tijd is de rol van AI in het klaslokaal sterk gegroeid. Leerplatforms maken oefeningen, corrigeren opstellen, vertalen uitleg voor nieuwkomers in hun moedertaal en geven docenten ’s ochtends een overzicht van wat de klas lastig vond. Een leraar in het voortgezet onderwijs bespaart daarmee volgens de Inspectie gemiddeld zes uur per week aan nakijk- en voorbereidingswerk.',
      'Waar die tijd blijft, verschilt sterk per school. Op ongeveer de helft van de scholen gaat hij naar kleine begeleidingsgroepen, mentorgesprekken en extra ondersteuning. Op de andere helft wordt hij ‘teruggeboekt’: klassen worden groter of leraren krijgen extra lesuren om vacatures op te vangen.',
      '‘We hebben meer data over leerlingen dan ooit,’ zegt Mustafa Aydın, docent wiskunde op een scholengemeenschap in Almere. ‘Ik wil vooral meer tijd. Het platform vertelt me dat een leerling moeite heeft met vergelijkingen. Wat ik wil weten, is waarom hij sinds de kerstvakantie niet meer lacht.’',
      '## Achter het cijfer',
      'De Inspectie stelt vast dat adaptieve systemen goed zijn in het signaleren van achterstanden, maar minder goed in het begrijpen ervan. Leerlingen met stress, een taalachterstand of een onrustige thuissituatie krijgen soms eindeloos dezelfde oefeningen, terwijl het probleem ergens anders zit.',
      'Sinds de onderwijsregels voor AI van 2034 mag een systeem geen zelfstandig besluit nemen over schoolniveau, doorstroom of extra ondersteuning. Dat besluit ligt altijd bij een docent of zorgcoördinator. In de praktijk wegen de adviezen van de software wel zwaar. ‘Als het systeem havo zegt en jij denkt vwo, moet je het goed kunnen onderbouwen,’ zegt Aydın. ‘Dat voelt soms als een omgekeerde bewijslast.’',
      '## Ouders willen meekijken',
      'Ook ouders stellen vragen. Twee derde van hen weet niet precies welke gegevens over hun kind worden opgeslagen. Sinds dit schooljaar moeten scholen dat jaarlijks per leerling kunnen tonen, maar die overzichten zijn volgens ouders vaak technisch en moeilijk te lezen.',
      'De grootste leerplatforms zijn in handen van drie bedrijven, waarvan twee buiten Europa. Het ministerie van Onderwijs laat daarom een publiek alternatief ontwikkelen, het Nationaal Leerplatform, dat in 2042 beschikbaar moet zijn. Critici betwijfelen of de overheid die achterstand nog kan inlopen.',
      '## De leraar blijft onmisbaar',
      'Het lerarentekort is iets gedaald, maar bedraagt nog altijd ruim zevenduizend volledige banen. Vooral op scholen in de grote steden en in krimpregio’s is de druk groot. Daar zijn AI-assistenten eerder een noodoplossing dan een verrijking.',
      'De Inspectie roept scholen op tot een ‘tijdsbelofte’: vastleggen hoeveel van de tijd die AI bespaart terugvloeit naar persoonlijke aandacht voor leerlingen. ‘Techniek kan een leraar ontlasten,’ aldus inspecteur-generaal Karin Dekker. ‘Maar alleen een mens kan een kind het gevoel geven dat het gezien wordt.’'
    ]
  },
  'Wie betaalt de zorg van morgen?': {
    quote: '“Toegang tot goede zorg mag niet afhangen van je postcode of je portemonnee.”',
    body: [
      'Vanavond om half negen voert de Tweede Kamer een van de belangrijkste debatten van dit parlementaire jaar. Op de agenda: het kabinetsvoorstel voor een extra zorgbijdrage voor hogere inkomens vanaf 2041. De vraag eronder is ouder dan het voorstel zelf. Wie betaalt de zorg in een land waarin steeds meer mensen zorg nodig hebben en steeds minder mensen die kunnen geven?',
      '## De minister: ‘Wie meer kan, draagt meer’',
      'Minister Eva van den Berg van Samenleving verdedigt het plan als een kwestie van eerlijkheid. ‘Wie meer kan bijdragen, moet dat doen. Anders houden we de basis voor niemand overeind,’ zei ze gisteren tegen deze krant. Ze wijst erop dat de zorgpremie sinds 2030 voor iedereen fors is gestegen, ook voor lage inkomens. ‘Aan de onderkant is de rek eruit. Dan moet je naar de bovenkant kijken.’',
      'Volgens Van den Berg is de bijdrage geen blanco cheque. Het geld komt in een apart fonds, met een jaarlijkse verantwoording aan de Kamer. ‘Over vijf jaar wil ik kunnen laten zien: dit zijn de verpleegkundigen die we extra hebben opgeleid. Dit zijn de wachtlijsten die korter zijn geworden.’',
      '## De oppositie: ‘Een pleister op een open wond’',
      'Jamal El Idrissi, fractievoorzitter van Vooruit, deelt het doel maar niet de route. ‘Toegang tot goede zorg mag niet afhangen van je postcode of je portemonnee,’ zegt hij. ‘Maar dat is nu al zo. In Zeeland wacht je twee keer zo lang op een verpleeghuisplek als in Utrecht. Wie het kan betalen, gaat naar een privékliniek. Een extra bijdrage verandert daar niets aan.’',
      'El Idrissi wil in plaats daarvan het hele belastingstelsel hervormen, met een hogere belasting op grote vermogens en erfenissen. ‘De grootste vermogens in dit land zijn in twintig jaar verdrievoudigd. De zorgmedewerkers die voor hun ouders zorgen, zijn er amper op vooruitgegaan.’',
      '## Waar gaat het echt om?',
      'Achter de politieke posities liggen drie vragen die het debat vanavond bepalen. Waar ligt de grens van de publieke basis: welke zorg garanderen we voor iedereen, en wat mag je zelf bijkopen? Hoe voorkomen we dat middeninkomens net boven de grens onevenredig hard worden geraakt? En hoe zorgen we dat extra geld ook echt extra handen oplevert, op een arbeidsmarkt die al jaren krap is?',
      'Economen zijn verdeeld. Volgens het Centraal Planbureau heeft de bijdrage ‘een beperkt effect op de arbeidsdeelname van hogere inkomens’. Andere onderzoekers wijzen erop dat de grootste winst niet in geld zit, maar in minder administratie, betere preventie en het behouden van zorgpersoneel.',
      '## Wat betekent het voor jou?',
      'Voor de meeste huishoudens verandert er weinig: de bijdrage geldt pas boven 1,8 keer modaal, ongeveer 92.000 euro bruto per jaar per huishouden. Wie daarboven zit, betaalt 1,2 procent over het meerdere. Voor patiënten en mantelzorgers is de belangrijkste vraag of wachttijden en werkdruk daadwerkelijk afnemen.',
      'Het debat is vanaf 20.30 uur live te volgen. Onze redactie is in de Kamer aanwezig en beantwoordt tijdens het debat vragen van lezers. Stuur je vraag in via de 2040-app. Morgenochtend in de Morgenbrief: de belangrijkste uitkomsten, en wat er nu echt verandert.'
    ]
  },
  'De klas is overal. De school blijft van iedereen.': {
    quote: '“Een kind leert niet alleen van uitleg. Het leert van de mensen om zich heen.”',
    body: [
      'In het Groningse dorp Ulrum gaan elf kinderen naar school in een lokaal dat ooit drie klassen telde. Hun leraar heet Jan-Willem Pot, maar drie keer per week krijgen ze ook les van een docent in Leeuwarden, die via een groot scherm aan de wand meekijkt. Op vrijdag rijden ze met een elektrisch busje naar Winsum, waar ze met zestig andere kinderen een projectdag hebben. De kleinste school van de provincie bestaat nog. Tien jaar geleden stond ze op de sluitingslijst.',
      'Het Nederlandse onderwijs heeft zich de afgelopen vijftien jaar opnieuw uitgevonden. De klas is niet langer één lokaal, één leraar en dertig kinderen. Leren gebeurt op school, thuis, in de bibliotheek, in de wijk en online. Toch — en dat is misschien de grootste verrassing — is de school als plek belangrijker geworden, niet minder belangrijk.',
      '## Onderwijs op maat',
      'De technologische basis van die verandering is de persoonlijke leerassistent. Iedere leerling vanaf groep 5 heeft een digitaal leerdossier dat bijhoudt wat hij beheerst en waar hij moeite mee heeft. De assistent biedt uitleg in verschillende vormen — tekst, beeld, gesproken, als spel — en past het tempo aan.',
      'Voor sommige leerlingen is dat een doorbraak. De dyslectische Yara (12) uit Rotterdam-Delfshaven leest haar geschiedenisboek nu grotendeels met haar oren. ‘Vroeger was ik de hele les bezig met de eerste bladzijde. Nu weet ik waar het over gaat en kan ik meepraten.’ Haar doorstroomtoets viel een niveau hoger uit dan haar leerkracht had verwacht.',
      'Maar een leerassistent is geen leraar. Onderzoekers die vijf jaar lang tweeduizend leerlingen volgden, concludeerden dat kinderen het meest vooruitgaan als digitale oefening wordt gecombineerd met korte, frequente gesprekken met een leerkracht. Zonder die gesprekken vlakt de winst na een jaar af.',
      '## Waarom samen belangrijk blijft',
      'Een school leert kinderen meer dan lezen en rekenen. Ze leren er samenwerken, ruziemaken en het weer goedmaken, en omgaan met kinderen die anders zijn dan zij. In een samenleving waarin volwassenen vaak thuis werken en hun buren nauwelijks kennen, is de school voor veel kinderen de belangrijkste plek waar ze verschil tegenkomen.',
      '‘Een kind leert niet alleen van uitleg. Het leert van de mensen om zich heen,’ zegt onderwijssocioloog Hanneke Visscher. ‘Als we alles personaliseren, verliezen we het gedeelde. Dan weet ieder kind wat bij hem past, maar niet meer wat hij met anderen deelt.’',
      'Daarom hebben de meeste scholen vaste momenten ingebouwd die bewust níét gepersonaliseerd zijn: de ochtendkring, de gezamenlijke leesles, de schoolkrant, het schoolorkest. En de projectdag, waarop kinderen buiten de school met echte opdrachtgevers werken.',
      '## De wijk als klaslokaal',
      'Op die projectdagen komen de lessen tot leven. In Eindhoven ontwerpen leerlingen van groep 8 met ouderen uit het wijkcentrum een app voor buurtboodschappen. In Zeeland onderzoeken kinderen met het waterschap hoe hun dorp zich kan beschermen tegen de stijgende zeespiegel. In Amsterdam Nieuw-West maken leerlingen een podcast over de geschiedenis van hun straat, met interviews met de eerste bewoners.',
      '‘Kinderen merken dat wat ze leren ertoe doet,’ zegt Pot in Ulrum. ‘Vorig jaar hebben mijn leerlingen de gemeente overtuigd om een oversteekplaats bij de bushalte aan te leggen. Ze hebben zelf de verkeerstellingen gedaan. Dat vergeten ze nooit.’',
      '## Gelijke kansen, of niet?',
      'Hybride onderwijs heeft ook een schaduwkant. Op de online dag hangt veel af van thuis: een rustige plek, goede apparatuur, een ouder die kan helpen. De Inspectie ziet dat de verschillen tussen leerlingen op die dag groter worden. Scholen houden daarom studieplekken open, en sinds 2037 betaalt de overheid laptops en internet voor alle leerlingen uit gezinnen met een bestaansbudget.',
      'De echte belofte van het onderwijs zit volgens Visscher niet in technologie, maar in keuzes. ‘De techniek kan veel. Maar of een kind in Ulrum dezelfde kansen krijgt als een kind in Amsterdam-Zuid, hangt af van hoe we leraren, geld en aandacht verdelen. Dat is geen technische vraag. Dat is een politieke.’',
      'In Ulrum gaat om drie uur de deur open en rennen elf kinderen naar buiten. Op het scherm zwaait de leraar uit Leeuwarden nog even. Jan-Willem Pot ruimt de tafels op. Morgen zijn ze met z’n twaalven: er komt een jongen bij wiens ouders net in het dorp zijn komen wonen. ‘Dat is het mooie van een kleine school,’ zegt Pot. ‘Iedereen wordt gezien.’'
    ]
  },
  'Hoe zorgen we dat vernieuwing niet leidt tot meer ongelijkheid?': {
    quote: '“Technologie helpt vooruit. Solidariteit bepaalt wie er meekomt.”',
    body: [
      'Wie door de verhalen in deze krant bladert, ziet een land dat veel heeft bereikt. De wachttijd voor een uitkering is van maanden naar dagen gegaan. Verpleegkundigen besteden hun tijd weer aan patiënten in plaats van aan formulieren. Kinderen leren op hun eigen niveau. Er worden meer woningen gebouwd dan in een halve eeuw. Nederland heeft de vergrijzing, het personeelstekort en de klimaatopgave niet opgelost, maar het land is ook niet vastgelopen, zoals zoveel analisten in de jaren twintig voorspelden.',
      'Wie beter kijkt, ziet ook een land dat uit elkaar dreigt te groeien. Niet tussen jong en oud, zoals lang werd gevreesd, maar tussen mensen die de nieuwe systemen kunnen bijbenen en mensen die dat niet kunnen.',
      '## Drie kloven',
      'De eerste kloof is digitaal. Ruim een miljoen Nederlanders heeft moeite met de apps en assistenten waarlangs overheid, zorg en school hun diensten aanbieden. Het gaat niet alleen om ouderen, maar ook om mensen met een licht verstandelijke beperking, laaggeletterden en nieuwkomers. Voor hen is een overheid die ‘digitaal eerst’ werkt soms een overheid die onbereikbaar is.',
      'De tweede kloof is financieel. Een stelsel van een publieke basis met private aanvullingen werkt goed voor wie die aanvulling kan betalen. Wie een extra zorgverzekering heeft, een loopbaanrekening die de werkgever aanvult en een netwerk in de buurtcoöperatie, krijgt meer dan de basis. Wie dat niet heeft, moet het doen met wat er publiek overblijft — en dat wordt onder druk van de begroting steeds scherper afgebakend.',
      'De derde kloof is die van zeggenschap. Algoritmes bepalen niet wie hulp krijgt, maar wel wie als eerste wordt gezien, wie een extra controle krijgt en welk schooladvies op tafel ligt. De regels waarmee dat gebeurt, zijn voor de meeste burgers onzichtbaar. Wie de weg kent naar de Datakluis, een advocaat of een Kamerlid, kan een fout laten herstellen. Wie die weg niet kent, blijft zitten met een besluit dat hij niet begrijpt.',
      '## Wat er nodig is',
      'Deze krant is niet tegen vernieuwing. Zonder robots, leerassistenten en slimme loketten zou Nederland de vergrijzing niet aankunnen. Maar vernieuwing is geen natuurkracht. Ze volgt de keuzes die we maken. En die keuzes kunnen anders.',
      'Houd allereerst de analoge deur open. Elke dienst die digitaal wordt aangeboden, moet ook bereikbaar zijn via een mens — aan de balie, aan de telefoon of aan de keukentafel. Dat kost geld, maar het is de prijs van een overheid die voor iedereen werkt.',
      'Maak daarnaast de publieke basis stevig genoeg. Een samenlevingsstaat werkt alleen als de basis zo goed is dat niemand zich gedwongen voelt om bij te kopen. Dat betekent investeren in wijkverpleging, in scholen in kwetsbare wijken en in sociale huurwoningen, ook als de begroting krap is.',
      'Geef burgers ten slotte zeggenschap over de systemen die over hen oordelen. De Wet menselijke maat was een goed begin. Maar een recht op uitleg is weinig waard als die uitleg onbegrijpelijk is, of als het gesprek met een medewerker weken op zich laat wachten. Laat bewoners, patiënten en ouders meebeslissen over hoe algoritmes worden ingezet, en maak de uitkomsten openbaar.',
      '## Solidariteit is een keuze',
      'Het debat over de zorgbijdrage dat vanavond in de Kamer wordt gevoerd, gaat over geld. Maar het gaat ook over de vraag wat voor land we willen zijn. De verzorgingsstaat van de twintigste eeuw was gebouwd op het idee dat we samen de risico’s van het leven dragen. Dat idee is niet verouderd. Het vraagt alleen om nieuwe vormen.',
      'Technologie helpt vooruit. Solidariteit bepaalt wie er meekomt. Die zin hangt al jaren boven de deur van onze redactie. Hij was nooit zo actueel als vandaag.'
    ]
  }
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
  const article = articleText[title] || {
    quote: '“Technologie helpt vooruit. Solidariteit bepaalt wie er meekomt.”',
    body: [
      'Wie vandaag door Nederland reist, ziet een land dat zichzelf opnieuw heeft ingericht. Wijkhubs vervangen loketten, zorgrobots rijden door de gangen van verpleeghuizen en kinderen leren drie dagen in de klas en één dag online. Onze redactie volgt hoe die veranderingen uitpakken voor de mensen die ermee leven.',
      '## Wat werkt, en wat schuurt',
      'In buurten, scholen en zorginstellingen proberen bewoners en professionals nieuwe afspraken uit. Hun ervaringen laten zien waar de samenlevingsstaat werkt en waar beleid moet worden bijgesteld.',
      'De redactie blijft de ontwikkelingen volgen en komt terug bij de mensen die ermee te maken hebben.'
    ]
  };
  const paragraphs = article.body.filter((line) => !line.startsWith('## '));
  const articleTextBox = dialog.querySelector('.article-text');
  articleTextBox.replaceChildren();
  pullquote.textContent = article.quote;
  const quoteAfter = Math.floor(paragraphs.length / 2);
  let paragraphCount = 0;
  article.body.forEach((line) => {
    if (line.startsWith('## ')) {
      const subheading = document.createElement('h2');
      subheading.textContent = line.slice(3);
      articleTextBox.append(subheading);
      return;
    }
    const p = document.createElement('p');
    p.textContent = line;
    articleTextBox.append(p);
    paragraphCount += 1;
    if (paragraphCount === quoteAfter) articleTextBox.append(pullquote);
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
