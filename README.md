# Projet final webjs2

Ceci est le projet final de webjs2, présenté a Frédéric Thériault dans le cadre du cours 420-quelquechose-vm.

# Démarrer le projet

## Démarrer en mode développement

Il faut bundle le projet avant de commencer avec bundlejs.


On commence par initialiser les paquets NPM
```bash
npm install
```
et ensuite aller avec la commande
```bash
webpack
```
qui permettra de démarrer l`environnement bundled.
## Démarrer en mode visionnement

# Structure du projet

La structure du projet sera expliqué dans cette section. les détails seront également expliqués

## Localstorage (informations)

pour garder en memoire certains element en javascript, il faut utiliser *localstorage*
```js
localStorage.setItem(menuName, newState);
// le tout sera sauvegarde dans le appData et permettra de garder ces infos a la prochaine refresh
```
```js
sessionStorage.setItem(menuName, newState);
// sessionStorage sauvegarderas dans l'onglet ou la session actuelle
// TOUT sera sauvegarde en string
```