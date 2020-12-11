define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Pruebe a cargar código específico de la plataforma desde la carpeta /merges.
    // Más información en http://taco.visualstudio.com/es-es/docs/configure-app/#Content.
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map