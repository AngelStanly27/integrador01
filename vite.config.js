import { resolve } from "node:path";

export default {
    server: {
        port: 3333,
    },
    css: {
        devSourceMap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                alta: resolve('pag/alta.html'),
                contacto: resolve('pag/contacto.html'),
                nosotros: resolve('pag/nosotros.html'),
                
                inicio: resolve('index.html'), /* D:\_course\7170.bootcamp.fulltack\clase-23\bc-71350-integrador-etapa-1 */
            }
        }
    }
}
console.log(resolve())