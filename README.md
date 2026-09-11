# Eventprofil portal

Dette er en ferdig visuell førsteversjon av eventprofil.no, inspirert av produktstrukturen på Promostar: kategorioversikt, produktgrid, produktdetaljer og kampanjeflater.

## Innholdsadministrasjon

Klikk **Forhandlerinnlogging** i toppmenyen. Adminområdet bruker Supabase-innlogging, og produkter lagres i Supabase slik at endringer vises på nettsiden uten at filer må lastes opp på nytt.

Her kan du legge til, redigere og slette produkter, laste opp produktbilder direkte fra datamaskinen, endre produkttekst, velge kategori, legge inn leveringstid, minimumsantall og velge mellom **Prismatrise** eller **Be om tilbud**. Bildene lastes opp til Supabase Storage.

## Produksjonsklar backend

For lansering anbefales Supabase (database, bildelagring og innlogging) eller et lett CMS som Sanity. Adminskjermen i denne prototypen er lagt opp som produktredaktør, og kan kobles mot en slik løsning slik at endringer deles med hele organisasjonen og fungerer på tvers av enheter.

Supabase-prosjektet for Eventprofil er nå opprettet. Offentlig prosjektkonfigurasjon ligger i `supabase-config.js`; denne inneholder bare den publiserbare klientnøkkelen. Ikke legg inn eller del Supabase `service_role`-nøkkelen i nettsiden.

Hvis Supabase-tabellen ble opprettet før prisfeltene kom inn, kjør denne migreringen i Supabase SQL Editor:

```sql
alter table public.products
  add column if not exists price_mode text not null default 'quote' check (price_mode in ('matrix','quote')),
  add column if not exists price_rows jsonb not null default '[]'::jsonb;
```

## Publisering

Siden består av `index.html`, `styles.css` og `app.js`, og kan forhåndsvises ved å åpne `index.html` i en nettleser eller publiseres som en statisk nettside. Før offentlig lansering må demo-innloggingen erstattes med ekte tilgangsstyring og den lokale lagringen med database/API.
