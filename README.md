# Aufgabe: JUNE Loginpage bauen

## Aufgabenstellung: 
Baue eine Loginseite für den JUNE Editor mit React. Du kannst für die Basis gerne die create-react-app benutzen. Um möglichst nahe an einer echten Arbeitssituation zu sein wirst du unsere echten Login und Projekt Endpunkte benutzen.

### Umfang: 
+ Loginseite in React bauen
+ Projektliste in React bauen
+ API Endpunkt zum Login einbinden 
+ Serverantwort (JWT Token) speichern
+ API Endpunkt für die Projekte einbinden (hier wird der JWT Token aus dem Login benötigt)

### Bereitstellung:
Bitte dokumentiere deine Schritte im Code.

### Abgabe:
Erstelle einen Fork von diesem Github Projekt und schicke uns dein geforktes Repository.


## Daten:
Hier sind alle relevanten Daten für das Probeprojekt.

### Software
+ Node v14.16.0 

### Start:
- `npm install` um alle relevanten Packages zu installieren
- `npm start` um den webpack prozess zu starten

### Endpunkte: 
Login: `http://dev.june.local:8008/api/auth/login_check`
-> Credentials als JSON im Body übergeben

Projekte: `http://dev.june.local:8008/api/v2/project`
-> Authorisation Header als Bearer Token übergeben 

### Credentials: 
User: `june.trial`
Password: `Vowac#Uwiwi278`


### JUNE Farbcodes:
+ `20C6AF`    Main Color
+ `FA9F85`    E-Mail Product Color
+ `B872EF`    Landing Page Product Color
+ `FDBE41`    Automation Product Color
+ `262626`    Paragraph, Headlines Color
