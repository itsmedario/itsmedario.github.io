const views: Array<{
  id: number;
  path: string;
  title: string;
  img: string;
  view: string;
  component: string;
}> = [
  {
    id: 1,
    path: '/weights/check',
    title: 'Ladungen überprüfen',
    img: 'transport/wood.png',
    view: 'CheckWeights',
    component: 'CheckWeights',
  },
  {
    id: 2,
    path: '/bridges/check',
    title: 'Brücken überprüfen',
    img: 'bridges/bridge_long.png',
    view: 'CheckWeights',
    component: 'CheckWeights',
  },
  {
    id: 3,
    path: '/towers/check',
    title: 'Türme überprüfen',
    img: 'bridges/tower.png',
    view: 'CheckTowers',
    component: 'CheckWeights',
  },
  {
    id: 4,
    path: '/boats/load',
    title: 'Boote laden',
    img: 'wood.png',
    view: 'LoadBoats',
    component: 'LoadBoats',
  },
  {
    id: 5,
    path: '/bridges/build',
    title: 'Brücken bauen',
    img: 'wood.png',
    view: 'BuildBridges',
    component: 'BuildBridges',
  },
  {
    id: 6,
    path: '/towers/build',
    title: 'Türme bauen',
    img: 'wood.png',
    view: 'BuildTowers',
    component: 'BuildTowers',
  },
];

export default views;
