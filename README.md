# Netlify
https://kriben-portfolio.netlify.app/

# Sammafattning och reflektion
Jag har skapat en portfolio som jag i framtiden kommer att kunna använda när jag söker LIA samt arbete efter avslutad utbildning. I Dagsläget är det ganska stramt på innehåll men min tanke är att kontinuerligt bygga vidare på den allt eftersom jag lär mig mer inom Fullstack-utveckling. Jag valde att lägga det mesta av min tid på grupparbetet vi jobbade på parallelt vilket ledde till att jag endast uppfyllde kraven för godkänt. Hade jag planerat bättre skulle jag kunnat ha levererat en mer komplett uppgift. Med det sagt är jag ändå nöjd över vad jag åstakommit, framförallt med tanke på tiden jag allokerat till arbetet.

# Vad kan man utveckla med hjälp av JavaScript inom frontend?
Med JavaScript kan man skapa funktioner och funktionalitet. Tack vare queryselectors kan man komma åt DOM och manipulera innehåll, stil och beteende direkt. Genom att använda eventlisteners går det att registrera och hantera användarens händelser, som exempelvis ett knapptryck eller resizing av fönstrets storlek, och därefter uppdatera innehållet på sidan utan att behöva ladda om den. Ett annat exempel är en funktion som visar eller döljer en meny vid klick. Via DOMen kan man även manipulera, skapa och ta bort HTML-element och CSS-styling. Det är också via JavaScript som man anropar APIer som exepelvis Fetch.

# Vad är JSON och hur används det inom frontend?
JSON står för JavaScript Object Notation och skrivs som ett objekt i JavaScript, vilket gör det smidigt att arbeta med inom webbutveckling. En förde med JSON över XML är att JSON är lättare för att läsa för oss människor. En av de vanligste användningsområdena för JSON är att kommunicera mellan en webbapplikation och en server. Till exempel kan en webbapplikation skicka en förfrågan till ett API och få tillbaka data i JSON-format.

JSON används också för att lagra information lokalt i webbläsaren. Genom att konvertera ett JavaScript-objekt till JSON med hjälp av JSON.stringify kan man lagra det i webbläsarens localStorage eller sessionStorage. När man behöver använda datan igen kan man hämta och omvandla den tillbaka till ett JavaScript-objekt med JSON.parse.

# Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HTTP står för Hypertext Transfer Protocol och är grunden för kommunikationen mellan klient och server på webben. När en användare öppnar en webbsida skickar webbläsaren en HTTP-förfrågan till servern, och servern svarar med den data som behövs för att visa sidan, som HTML, CSS, JavaScript och andra resurser.

Som frontendutvecklare arbetar man ofta med att hämta och skicka data mellan klienten och servern, till exempel via API:er. För att kunna göra detta effektivt behöver man förstå hur HTTP-requests fungerar. Det finns flera metoder som används vid förfrågningar, som GET för att hämta data eller POST för att skicka data. Det är också bra att kunna hantera svar från servern, som ofta kommer med en statuskod som visar om begäran lyckades eller om det uppstod ett fel.