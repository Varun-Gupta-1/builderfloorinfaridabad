const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const outDirs = [
  path.join(process.cwd(), 'public', 'assets', 'images'),
  path.join(process.cwd(), 'assets', 'images'),
];
for (const dir of outDirs) {
  fs.mkdirSync(dir, { recursive: true });
}

const logoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="32" fill="#FFFFFF"/>
  <path d="M44 144V90L70 72L96 90V144H80V106L70 100L60 106V144H44Z" fill="#2C3E50"/>
  <path d="M112 144V82H146V100H132V118H146V144H112Z" fill="#2C3E50"/>
  <rect x="64" y="62" width="72" height="18" rx="9" fill="#D4AF37"/>
  <path d="M46 144H154" stroke="#D4AF37" stroke-width="14" stroke-linecap="round"/>
  <text x="100" y="184" font-family="Montserrat, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#2C3E50">Metro Floors</text>
</svg>`;

for (const dir of outDirs) {
  fs.writeFileSync(path.join(dir, 'logo.svg'), logoSvg, 'utf8');
}

function crc32(buffer) {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buffer.length; i++) {
    crc = table[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writePng(filePath, width, height, drawPixel) {
  const pixels = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const rgba = drawPixel(x, y, width, height);
      pixels[idx] = rgba[0];
      pixels[idx + 1] = rgba[1];
      pixels[idx + 2] = rgba[2];
      pixels[idx + 3] = rgba[3];
    }
  }

  const chunks = [];
  function pushChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const crc = Buffer.alloc(4);
    const chunkData = Buffer.concat([typeBuf, data]);
    crc.writeUInt32BE(crc32(chunkData), 0);
    chunks.push(Buffer.concat([len, chunkData, crc]));
  }

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  pushChunk('IHDR', ihdr);

  const scanlines = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 4 + 1);
    scanlines[rowStart] = 0;
    pixels.copy(scanlines, rowStart + 1, y * width * 4, y * width * 4 + width * 4);
  }

  pushChunk('IDAT', zlib.deflateSync(scanlines));
  pushChunk('IEND', Buffer.alloc(0));
  fs.writeFileSync(filePath, Buffer.concat([signature, ...chunks]));
}

const charcoal = [44, 62, 80, 255];
const gold = [212, 175, 55, 255];
const white = [255, 255, 255, 255];
const dark = [36, 47, 64, 255];

function drawAppleTouch(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const radius = w * 0.4;
  const dx = x - cx;
  const dy = y - cy;
  if (dx * dx + dy * dy < radius * radius) return dark;
  const letterArea = x > w * 0.24 && x < w * 0.76 && y > w * 0.26 && y < w * 0.74;
  if (!letterArea) return white;
  const mx = x - w * 0.5;
  const my = y - w * 0.4;
  const leftBar = x > w * 0.27 && x < w * 0.36 && y > w * 0.38 && y < w * 0.72;
  const rightBar = x > w * 0.52 && x < w * 0.61 && y > w * 0.38 && y < w * 0.72;
  const cross = x > w * 0.36 && x < w * 0.52 && y > w * 0.48 && y < w * 0.58;
  if (leftBar || rightBar || cross) return gold;
  return dark;
}

function drawFavicon(x, y, w, h) {
  const bg = dark;
  const box = w * 0.7;
  const start = (w - box) / 2;
  if (x < start || x >= start + box || y < start || y >= start + box) return bg;
  const px = x - start;
  const py = y - start;
  const bar = Math.max(2, Math.floor(box * 0.16));
  if ((px >= 0 && px < bar && py >= box * 0.2 && py <= box * 0.9) ||
      (px >= bar && px < bar * 2 && py >= box * 0.2 && py <= box * 0.4) ||
      (px >= bar && px < bar * 2 && py >= box * 0.56 && py <= box * 0.68) ||
      (px >= box * 0.45 && px < box * 0.45 + bar && py >= box * 0.2 && py <= box * 0.68) ||
      (px >= bar && px < box * 0.45 && py >= box * 0.68 && py <= box * 0.84)) {
    return gold;
  }
  return bg;
}

const applePath = path.join(process.cwd(), 'public', 'assets', 'images', 'apple-touch-icon.png');
const faviconPngPath = path.join(process.cwd(), 'public', 'assets', 'images', 'favicon-32.png');
const faviconIcoPath = path.join(process.cwd(), 'public', 'assets', 'images', 'favicon.ico');

writePng(applePath, 180, 180, drawAppleTouch);
writePng(faviconPngPath, 32, 32, drawFavicon);

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt8(0, 2);
entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
const pngStat = fs.statSync(faviconPngPath);
entry.writeUInt32LE(pngStat.size, 8);
entry.writeUInt32LE(6 + 16, 12);
fs.writeFileSync(faviconIcoPath, Buffer.concat([icoHeader, entry, fs.readFileSync(faviconPngPath)]));

for (const dir of outDirs) {
  fs.copyFileSync(applePath, path.join(dir, 'apple-touch-icon.png'));
  fs.copyFileSync(faviconIcoPath, path.join(dir, 'favicon.ico'));
}

console.log('Brand assets generated: logo.svg, apple-touch-icon.png, favicon.ico');
