// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/my-service-worker.js', { scope: '/' })
//   .then(function(reg) {
//     console.log('登録に成功しました。 Scope は ' + reg.scope);
//   }).catch(function(error) {
//     console.log('登録に失敗しました。' + error);
//   });
// }



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // 登録成功
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // 登録失敗 :(
    console.log('ServiceWorker registration failed: ', err);
  });
}