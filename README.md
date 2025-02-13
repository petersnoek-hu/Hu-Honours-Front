# 🚀 HU Honours - Frontend  

Dit is de frontend van de HU Honours leerplatform-app, gebouwd met **Expo (React Native)**. Deze app biedt een interactieve leerervaring, vergelijkbaar met Duolingo.  

## 📂 Projectstructuur  

Hier is een overzicht van de belangrijkste mappen en bestanden in deze repository en hun functies:  

| Map / Bestand      | Beschrijving |
|--------------------|-------------|
| `app/`            | Bevat de schermen (pages) als je Expo Router gebruikt. |
| `assets/`         | Afbeeldingen, iconen, lettertypes en andere statische bestanden. |
| `components/`     | Herbruikbare React Native componenten zoals knoppen en kaarten. |
| `constants/`      | Globale constante waarden zoals API-URL's en standaardinstellingen. |
| `hooks/`          | Custom React hooks voor state management en logica. |
| `scripts/`        | Handige scripts voor automatisering en tools. |
| `styles/`         | Alle gestandaardiseerde stijlen (kleuren, typografie, spacing, etc.). |
| `node_modules/`   | Automatisch gegenereerde map met projectdependencies (niet bewerken). |
| `.gitignore`      | Bestanden en mappen die niet in Git moeten worden opgenomen. |
| `app.json`        | Configuratiebestand voor Expo. |
| `package.json`    | Bevat projectmetadata en afhankelijkheden. |
| `tsconfig.json`   | TypeScript-configuratie. |
| `LICENSE`         | Licentie-informatie voor dit project. |
| `README.md`       | Dit bestand! Uitleg over de structuur en werking van de app. |

---

## 📦 Installatie  

1. **Repo clonen**  
   ```sh
   git clone https://github.com/jouw-gebruikersnaam/hu-front.git
   cd hu-front
2. **Dependencies instaleren**  
   ```sh
   npm install
3. **Expo CLI installeren (indien nog niet geïnstalleerd)**  
   ```sh
   npm install -g expo-cli
4. **App starten**  
   ```sh
   expo start

# Branch Strategie  

Deze repository gebruikt een gestructureerde branching-strategie om samenwerking soepel te laten verlopen.  

---

## 🚀 Branch Overzicht  

| Branch         | Doel |
|---------------|------|
| `main`        | Stabiele productiecode. Alleen goedgekeurde code komt hier terecht. |
| `dev`         | Hoofdbranch voor actieve ontwikkeling. Nieuwe features en bugfixes worden hier samengevoegd. |
| `feature/*`   | Branches voor nieuwe functionaliteiten. Worden uiteindelijk in `dev` gemerged. |
| `bugfix/*`    | Branches voor bugfixes. Worden snel in `dev` en indien nodig in `main` gemerged. |
| `hotfix/*`    | Spoedfixes voor kritieke bugs in `main`. Worden direct na fix terug gemerged. |

Bij het maken van je commit vergeet niet een text te schrijven van wat het is + een titel
