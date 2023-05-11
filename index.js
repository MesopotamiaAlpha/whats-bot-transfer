const venom = require('venom-bot');
const qrcode = require('qrcode-terminal');
const setTimeout = require('timers').setTimeout;

let started = false;
let client;

venom.create().then((venomClient) => {
  client = venomClient;

  client.onStateChange((state) => {
    console.log('State changed:', state);
    if (state.qrCode) {
      qrcode.generate(state.qrCode, { small: true });
    }
  });

  let started = false;
  let waitingForMessage = false;
  
  let state = 'start';

  client.onMessage(async (message) => {
    switch (state) {
      case 'start':
        client.sendText(message.from, 'Olá, vamos iniciar. Escolha 1 para sim e 2 para não.');
        state = 'waiting_for_answer';
        break;
      case 'waiting_for_answer':
        if (message.body === '1') {
          client.sendText(message.from, 'Sim');
          state = 'start';
        } else if (message.body === '2') {
          client.sendText(message.from, 'Não');
          state = 'start';
        } else {
          client.sendText(message.from, 'Vamos finalizar o seu atendimento');
          state = 'start';
          setTimeout(() => {
            state = 'start';
          }, 5000);
        }
        break;
    }
  });
  
  
  client.onStateChanged((state) => {
    if (state === 'CONFLICT' || state === 'UNPAIRED') {
      console.log('Bot desconectado');
      client.close();
    } else if (waitingForMessage && state === 'CONNECTED') {
      client.sendText(
        client.session.user.jid,
        'Olá, estou pronto para receber sua próxima mensagem.'
      );
    }
  });
  
  
}).catch((error) => {
  console.log('Error:', error);
});


