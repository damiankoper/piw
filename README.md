# Projektowanie interfejsów webowych - Lab 1

- Node LTS
- Docker 19.06.6
- Chrome 80

Strona w procesie budowania wykorzystuje generator `lorem-ipsum`, bibliotekę `faker` i losowe obrazy ze strony [picsum.photos](https://picsum.photos/). Dlatego strona za każdym przebudowaniem i załadowaniem będzie miała inną treść.
Po zbudowaniu strona składa się tylko z plików HTML i CSS. Plik `js/bundle.js` został dołączony w procesie budowania i injectowania, ale nie pełni żadnej roli.

### Automatyczne przebudowanie. Dev server `localhost:9000`.

```bash
npm run watch
```

### Zbudowanie projektu. Pliki wynikowe w katalogu `/dist`

```bash
npm run build
```

### Zbudowanie obrazu i uruchomienie serwera na dockerze. `localhost:8080`.

```bash
docker build -f docker/Dockerfile -t damiankoper/piw:lab1 . && \
docker run -p 8080:8080 damiankoper/piw:lab1
```
