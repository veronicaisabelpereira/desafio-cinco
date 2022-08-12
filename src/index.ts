import { handleRoute } from "./handle-route";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

/**/

function findAndProcessLinks() {
  const els = document.querySelectorAll(".link-interno");
  for (const link of els) {
    link.addEventListener("click", (e) => {
      e.preventDefault(); /*previene lo que pasa por defecto: recargar pagina*/
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }
}

(function () {
  findAndProcessLinks();

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
