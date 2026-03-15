const fs = require('fs');
const { FFmpeg } = require('@ffmpeg/ffmpeg');

async function test() {
  const ff = new FFmpeg();
  try {
    await ff.load();
    await ff.writeFile('test.txt', new TextEncoder().encode('hello'));
    await ff.exec(['-f', 'lavfi', '-i', 'color=c=red:s=16x16:d=1', '-c:v', 'libx264', 'test.mp4']);
    const data = await ff.readFile('test.mp4');
    console.log('Read data type:', typeof data, ArrayBuffer.isView(data));
  } catch (e) {
    console.error('Error:', e);
  }
}
test();
