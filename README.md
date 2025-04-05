# RTMP Server for OBS (Render Deployment)

Este servidor RTMP permite transmitir desde OBS y genera una salida HLS accesible desde cualquier navegador.

## 🚀 Instrucciones

1. **Clona este repositorio** en GitHub.
2. **Conéctalo a Render.com** como un Web Service.
3. Usa `npm install` como build command.
4. Usa `npm start` como start command.
5. El puerto debe ser `8000`.

## 🎥 Configura OBS

- URL del servidor: `rtmp://<tu-app-en-render>.onrender.com/live`
- Nombre del stream (Stream Key): `test` (puede ser cualquier nombre)

## 🔗 Ver stream en el navegador

Después de comenzar a transmitir, accede a:

```
http://<tu-app-en-render>.onrender.com/live/test/index.m3u8
```

Puedes usar `hls.js`, `video.js` o un `<video>` para reproducirlo.
