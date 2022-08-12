import { inboxListComp } from "./inbox/list";

export function handleRoute(route) {
  console.log("en este handle route recibio una nueva ruta: ", route);

  /*const contenedorEl = document.querySelector(".contenedor") as HTMLDivElement;
  const routes = [
    {
      path: /\/inbox/,
      handler: inboxListComp,
    },
  ];
  for (const r of routes) {
    if (r.path.test(route)) {
      const el = r.handler();
      console.log(el);
    }
  }
  */
}
