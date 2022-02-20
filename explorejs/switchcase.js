var expr='Mangoes';
switch (expr) {
    case 'Oranges':
      console.log('Oranges are 220tk per kg.');
      break;
    case 'Apples':
      console.log('Apples are 160tk per kg.');
      break;
    case 'Bananas':
      console.log('Bananas are 48tk per dorzon.');
      break;
    case 'Cherries':
      console.log('Cherries are 630tk per kg.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are 170tk per kg.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  