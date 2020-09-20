const fs = require('fs')
// const youtubedl = require('youtube-dl')

// const video = youtubedl('https://www.youtube.com/watch?v=c_cwqbPNg-Y',
//   // Optional arguments passed to youtube-dl.
//   ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//   { cwd: __dirname })

// // Will be called when the download starts.
// video.on('info', function(info) {
//   console.log('Download started')
//   console.log('filename: ' + info._filename)
//   console.log('size: ' + info.size)
// })

// video.pipe(fs.createWriteStream('myvideo.mp4'))
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
var URL = 'https://www.youtube.com/watch?v=mC-25B4B0VA';
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4',
    quality: 'lowestvideo',
    }).pipe(res);
});

// ytdl https://www.youtube.com/watch?v=mC-25B4B0VA -o Log4NetTutorial.mp4
