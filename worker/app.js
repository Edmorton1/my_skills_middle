navigator.serviceWorker.register('./sw.js');

console.log('Страница запущена');

document.querySelector('#send').addEventListener('click', async () => {
  const registration = await navigator.serviceWorker.ready;

  registration.active.postMessage('Сообщение от страницы');
});

(async () => {
  console.log('controller:', navigator.serviceWorker.controller);

  const response = await fetch('/worker/data.json');

  console.log(await response.text());
})()
