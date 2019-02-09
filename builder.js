var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '/questions',
    outputDirectory: '/output',
    authors: 'My App Inc.',
    exe: 'questions.exe',
    description: 'electrop app build with angular 7 made by jhovanymb.info@gmail.com'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));