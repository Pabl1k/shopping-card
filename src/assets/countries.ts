type Country = {
  [key: string]: string[];
};

export const Countries: Country = {
  'United States': [
    'California',
    'Texas',
    'Florida',
    'New York',
    'Illinois',
    'Pennsylvania',
    'Ohio',
    'Georgia',
    'North Carolina',
    'Michigan'
  ],
  Canada: [
    'Ontario',
    'Quebec',
    'British Columbia',
    'Alberta',
    'Manitoba',
    'Saskatchewan',
    'Nova Scotia',
    'New Brunswick',
    'Prince Edward Island',
    'Newfoundland and Labrador'
  ],
  Australia: [
    'New South Wales',
    'Victoria',
    'Queensland',
    'Western Australia',
    'South Australia',
    'Tasmania',
    'Northern Territory',
    'Australian Capital Territory',
    'Norfolk Island',
    'Christmas Island'
  ],
  Germany: [
    'Bavaria',
    'Baden-Württemberg',
    'North Rhine-Westphalia',
    'Hesse',
    'Lower Saxony',
    'Saxony',
    'Rhineland-Palatinate',
    'Thuringia',
    'Brandenburg',
    'Saxony-Anhalt'
  ],
  India: [
    'Maharashtra',
    'Uttar Pradesh',
    'Tamil Nadu',
    'West Bengal',
    'Rajasthan',
    'Karnataka',
    'Gujarat',
    'Madhya Pradesh',
    'Bihar',
    'Punjab'
  ],
  Brazil: [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Bahia',
    'Paraná',
    'Rio Grande do Sul',
    'Pernambuco',
    'Ceará',
    'Santa Catarina',
    'Amazonas'
  ],
  China: [
    'Guangdong',
    'Shandong',
    'Henan',
    'Sichuan',
    'Jiangsu',
    'Hebei',
    'Hunan',
    'Anhui',
    'Hubei',
    'Zhejiang'
  ],
  Mexico: [
    'Jalisco',
    'Mexico City',
    'Nuevo León',
    'Veracruz',
    'Puebla',
    'Guanajuato',
    'Chiapas',
    'Michoacán',
    'Yucatán',
    'Tabasco'
  ],
  Lithuania: [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevėžys',
    'Alytus',
    'Marijampolė',
    'Tauragė',
    'Telšiai',
    'Utena'
  ],
  'South Africa': [
    'Gauteng',
    'Western Cape',
    'Eastern Cape',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Free State',
    'Northern Cape',
    'Zululand'
  ]
} as const;
