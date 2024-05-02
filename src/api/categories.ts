export const categories = [
  {
    slug: 'acao',
    displayName: 'Luz, Câmera, Ação !',
    path: 'filters[categories][slug][$eqi]=acao&populate=*',
  },
  {
    slug: 'comedia',
    displayName:
      'Caia na gargalhada com piadas hilárias e com clássicos do humor!',
    path: 'filters[categories][slug][$eqi]=comedia&populate=*',
  },
  {
    slug: 'shounen',
    displayName: 'Vibrando com os shounen',
    path: 'filters[categories][slug][$eqi]=shounen&populate=*',
  },
  {
    slug: 'romance',
    displayName: 'Se jogando no amor',
    path: 'filters[categories][slug][$eqi]=romance&populate=*',
  },
];

export const secondaryCategories = [
  {
    slug: 'drama',
    displayName: 'É hora de mergulhar numa história cheia de sentimentos!',
    path: 'filters[categories][slug][$eqi]=drama&populate=*',
  },
  {
    slug: 'sobrenatural',
    displayName:
      'Fantasmas, demônios, espíritos, e todas as criaturas que assombram a noite!',
    path: 'filters[categories][slug][$eqi]=sobrenatural&populate=*',
  },
];
