import { Controller, Get } from '@nestjs/common';

type Items = {
  img: string;
  location: string;
  distance: string;
}[];

type Places = {
  img: string;
  title: string;
}[];

@Controller({})
export class AppController {
  @Get('/tiny-cards')
  getUser(): Items {
    return [
      {
        img: 'https://links.papareact.com/5j2',
        location: 'London',
        distance: '45 minutes drive',
      },
      {
        img: 'https://links.papareact.com/1to',
        location: 'Manchester',
        distance: '4.5-hour drive',
      },
      {
        img: 'https://links.papareact.com/40m',
        location: 'Liverpool',
        distance: '4.5-hour drive',
      },
      {
        img: 'https://links.papareact.com/msp',
        location: 'York',
        distance: '4-hour drive',
      },
      {
        img: 'https://links.papareact.com/2k3',
        location: 'Cardiff',
        distance: '45 minutes drive',
      },
      {
        img: 'https://links.papareact.com/ynx',
        location: 'Birkenhead',
        distance: '4-hour drive',
      },
      {
        img: 'https://links.papareact.com/kji',
        location: 'Newquay',
        distance: '6-hour drive',
      },
      {
        img: 'https://links.papareact.com/41m',
        location: 'Hove',
        distance: '45 minutes',
      },
      {
        img: 'https://links.papareact.com/5j2',
        location: 'Bristol',
        distance: '1-hour drive',
      },
      {
        img: 'https://links.papareact.com/ynx',
        location: 'Plymouth',
        distance: '2.5-hour drive',
      },
    ];
  }

  @Get('/medium-cards')
  getPlaces(): Places {
    return [
      {
        img: 'https://links.papareact.com/2io',
        title: 'Outdoor getways',
      },
      {
        img: 'https://links.papareact.com/q7j',
        title: 'Unique stays',
      },
      {
        img: 'https://links.papareact.com/s03',
        title: 'Entire homes',
      },
      {
        img: 'https://links.papareact.com/8ix',
        title: 'Pet Allowed',
      },
    ];
  }
}
