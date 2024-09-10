<<<<<<< HEAD
Dit project is een Vue.js applicatie ontworpen voor het beheren van inspecties, gebruikersinstellingen en authenticatie. De applicatie gebruikt Vuetify voor de gebruikersinterface, Pinia voor statusbeheer en Vue Router voor navigatie. Hieronder beschrijf ik het installatieproces, de functies van de applicatie en verbeterpunten. 

Kenmerken 

Authenticatie: Gebruikers kunnen inloggen en hun identiteit verifiëren met behulp van twee-factor authenticatie (2FA). 

Inspecties: Openstaande en voltooide inspecties bekijken en beheren. 

Kennisbank: Toegang tot en downloaden van bestanden georganiseerd per categorie. 

Instellingen: Gebruikersprofiel en toepassingsvoorkeuren bijwerken. 

Succespagina: Bevestig succesvolle inzendingen en acties. 

Installatie 

Kloon de repository van Github met git clone https://github.com/Emily879/real-estate-care

Installeer de vereiste packages met npm install 

Start de development server met npm run dev 

Live link: https://real-estate-care-prog.netlify.app

Inloggegevens 

Gebruikersnaam: testuser 

Wachtwoord: password 

2FA Verificatie Code: 123456 

Technologieën 

Vue.js 

Vue.js maakt het mogelijk om een reactieve en component-gebaseerde gebruikersinterface te bouwen. Het zorgt voor een gestructureerde en onderhoudbare codebasis door het gebruik van herbruikbare componenten. 

Vuetify 

Vuetify biedt een uitgebreide set van Material Design componenten die zorgen voor een consistente en moderne uitstraling van de applicatie. Het maakt het gemakkelijk om een responsieve en esthetisch aantrekkelijke UI te creëren zonder veel eigen CSS te schrijven. 

Pinia 

Pinia is gekozen voor state management omdat het een eenvoudige en efficiënte manier biedt om applicatiestatus te beheren en delen tussen verschillende componenten. Dit helpt bij het centraliseren van gegevens en zorgt voor een consistente gebruikerservaring. 

Vue Router 

Vue Router is essentieel voor het beheren van de navigatie binnen de applicatie. Het maakt het mogelijk om verschillende pagina’s en routes te beheren, wat cruciaal is voor een multi-page applicatie. 

Vuetify 

Het themabeheer van Vuetify maakt het eenvoudig om de visuele stijl van de applicatie aan te passen, zoals kleuren en thema's. Dit draagt bij aan een consistente uitstraling en zorgt ervoor dat de applicatie kan schakelen tussen verschillende thema’s, zoals dark en light mode. 

Style guides 

In elk Vue-componentbestand heb ik de indeling gevolgd waarbij de <script setup> tag voor de script-inhoud staat, gevolgd door de <template> tag voor de template-inhoud en tenslotte de reguliere <script> tag voor imports, variabelen, methods, en exports. 

Componentnamen zijn consistent in PascalCase benoemd om te voldoen aan Vue.js conventies en om duidelijk onderscheid te maken tussen componenten. 

Gebruikersinstellingen worden beheerd met Pinia, waarbij ik de Pinia-richtlijnen heb gevolgd voor state management.  

Waar nodig heb ik scoped slots gebruikt in componenten om context-afhankelijke inhoud op een flexibele manier te tonen. Dit zorgt ervoor dat icons en andere specifieke elementen alleen worden geladen waar ze daadwerkelijk nodig zijn. 

Externe libraries zoals Pinia voor state management en Vue Router voor routing zijn op een correcte manier geïntegreerd en gebruikt. Dit helpt bij het structureren van de applicatie en het beheer van routes en staat op een gescheiden en georganiseerde manier. 

Er is een CSS-framework Vueitfy gebruikt om de layout consistent te houden door de hele applicatie. Dit zorgt voor een uniforme uitstraling en helpt bij het handhaven van een responsieve en esthetisch aantrekkelijke interface. 

Gebruiksvriendelijkheid 

1. Basisfeedback via UI-elementen zoals v-alert voor foutmeldingen en bevestigingsdialogen voor succesvolle acties. Gebruikers krijgen bijvoorbeeld feedback wanneer inloggegevens onjuist zijn of wanneer voorkeuren met succes zijn opgeslagen. 

2. De applicatie gebruikt algemene terminologie en concepten met betrekking tot inspecties, instellingen en gebruikersbeheer. Labels als “Open inspecties” en “Voltooide inspecties” sluiten aan bij de verwachtingen van de gebruiker en de industrienormen. 

3. Gebruikers kunnen heen en weer navigeren tussen verschillende weergaven, zoals schakelen tussen inspecties en instellingen. Bovendien kunnen gebruikers acties annuleren, zoals het indienen van formulieren. 

4. De applicatie hanteert consistente layout, met behulp van Vuetify componenten voor knoppen, kaarten en formulierelementen. Consistente styling wordt toegepast op alle componenten met behulp van branding.css. 

5. Basale validatie is voorzien voor formulierinvoer (bijv. verplichte velden in aanmeldings- en instellingenformulieren). Gebruikers worden begeleid om fouten te corrigeren voordat ze het formulier indienen. Geavanceerde mechanismen om fouten te voorkomen ontbreken. Er is geen real-time validatie of begeleiding om gebruikers te helpen fouten te vermijden voordat ze optreden. 

6. De applicatie gebruikt herkenbare pictogrammen en labels voor navigatie en acties. Functies zoals knoppen om bestanden te downloaden en inspectiekaarten zijn duidelijk gelabeld. 

7. De applicatie stelt gebruikers in staat om veelvoorkomende taken met minimale inspanning uit te voeren, zoals navigeren tussen inspectieweergaven en het bijwerken van instellingen. 

8. Het ontwerp volgt een minimalistische aanpak, met eenvoudige lay-outs en gerichte inhoud. Belangrijke informatie wordt gepresenteerd zonder overbodige elementen. 

9. Er worden foutmeldingen gegeven bij ongeldige aanmeldingsgegevens en andere invoerfouten. Gebruikers ontvangen waarschuwingen en foutmeldingen als er iets fout gaat. 

10. Er wordt basishulp geboden via UI-elementen zoals formulierlabels en foutmeldingen. Gebruikers kunnen een leidraad vinden voor wat vereist is voor elk formulierveld. 

Toegankelijkheid  

1. Afbeeldingen en pictogrammen bevatten alt-attributen of beschrijvende aria-labels. Bijvoorbeeld, de v-avatar component voor gebruikersprofiel afbeeldingen en iconen gebruiken tekstbeschrijvingen of bieden zinvolle alternatieve tekst.  

2. De applicatie bevat geen op tijd gebaseerde media (video's of audio) waarvoor bijschriften of andere toegankelijkheidsfuncties nodig zijn. 

3. De toepassing gebruikt standaard HTML-elementen en Vuetify-componenten die zich aanpassen aan verschillende apparaten en schermformaten. Lay-outs en componenten passen zich responsief aan. 

4. Er is voldoende kleurcontrast tussen tekst- en achtergrondkleuren, conform het kleurenschema dat is gedefinieerd in branding.css. Interactieve elementen hebben duidelijke visuele focusindicatoren. 

5. Interactieve elementen zoals knoppen, links en formuliervelden zijn toegankelijk via toetsenbordnavigatie. Er zijn focusindicatoren aanwezig en gebruikers kunnen door de applicatie navigeren via het toetsenbord. 

6. De applicatie bevat geen tijdgerelateerde inhoud die interactie van de gebruiker vereist binnen een bepaald tijdsbestek. Er zijn geen specifieke functies die tijdslimieten beheren of gebruikers de mogelijkheid bieden om de tijd te verlengen. 

7. De applicatie bevat geen inhoud waarvan bekend is dat deze aanvallen of lichamelijke reacties veroorzaakt. Er zijn geen knipperende elementen of animaties die mogelijk aanvallen kunnen veroorzaken. 

8. De applicatie bevat duidelijke en consistente navigatieopties, met toegankelijke koppelingen en knoppen. Gebruikers kunnen door de applicatie navigeren met duidelijke aandachtsindicatoren en visuele aanwijzingen. 

9. De applicatie gebruikt duidelijke en eenvoudige taal, met leesbare tekst en duidelijke instructies. Labels en instructies zijn beknopt en gemakkelijk te begrijpen.  

10. De applicatie biedt basisassistentie voor invoer, zoals formulierlabels en foutmeldingen. Gebruikers worden door formulieren geleid met duidelijke instructies. 

11. De applicatie gebruikt semantische HTML en houdt zich aan de best practices voor ARIA rollen en attributen.  

12. Vuetify componenten zijn ontworpen om compatibel te zijn met ondersteunende technologieën. 

Veiligheid 

De applicatie maakt gebruik van een eenvoudige inlogfunctionaliteit met een testaccount voor demonstratiedoeleinden. Na succesvolle inlog worden gebruikers doorgestuurd naar een 2FA-pagina voor extra beveiliging. 

Bij het invoeren van een verificatiecode wordt de gebruiker verder geauthenticeerd en doorverwezen naar de hoofdpagina. Dit verhoogt de veiligheid door een extra verificatielaag toe te voegen. 

Gevoelige gegevens, zoals gebruikersauthenticatie-informatie, worden lokaal opgeslagen met behulp van localStorage in plaats van in de applicatiestate, wat helpt bij het minimaliseren van de blootstelling van gegevens aan andere delen van de applicatie. 

Formulieren en invoervelden worden gecontroleerd op geldigheid, maar de huidige implementatie is beperkt tot eenvoudige validatie (bijvoorbeeld vereisen van ingevulde velden). Verdere validatie en sanering zijn nodig om invoer van gebruikers te filteren op mogelijke beveiligingsrisico's zoals SQL-injecties of cross-site scripting (XSS). 

 

Verdere verbeteringen 

De huidige implementatie maakt geen gebruik van HTTPS in de lokale omgeving, wat belangrijk is voor de veilige overdracht van gegevens over netwerken. Dit moet worden geïmplementeerd bij de productie-uitrol. 

Het is belangrijk om externe libraries en dependencies regelmatig te controleren en bij te werken om bekende beveiligingslekken te vermijden.  

De applicatie maakt momenteel geen gebruik van server-side validatie. Voor een hogere veiligheid is het essentieel om server-side controles toe te passen om te voorkomen dat ongewenste gegevens worden opgeslagen of verwerkt. 

 

 
=======
# real-estate-care
>>>>>>> 9a5affe152e634b2cad661614dac0f987555dad0
