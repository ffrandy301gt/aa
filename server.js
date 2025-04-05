const NodeMediaServer = require('node-media-server');
const fs = require('fs');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    mediaRoot: './media',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: false
      }
    ]
  }
};

// Verificar y crear carpeta media si no existe
if (!fs.existsSync(config.trans.mediaRoot)) {
  console.log('[INFO] Creating media directory:', config.trans.mediaRoot);
  fs.mkdirSync(config.trans.mediaRoot, { recursive: true });
}

// Mostrar config para verificar mediaRoot
console.log('[INFO] Starting NodeMediaServer with config:', config);

const nms = new NodeMediaServer(config);
nms.run();
