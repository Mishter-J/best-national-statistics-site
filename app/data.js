window.INDONESIA_STATS = {
  headline: [
    { label: 'Population', value: '283.5m', detail: 'Fourth-largest country population', source: 'BPS 2024' },
    { label: 'GDP', value: 'US$1.41tn', detail: 'Largest economy in Southeast Asia', source: 'World Bank 2024' },
    { label: 'GDP per capita', value: 'US$4,960', detail: 'Upper-middle-income economy', source: 'World Bank 2024' },
    { label: 'Life expectancy', value: '74.2 years', detail: 'At birth, both sexes', source: 'BPS 2024' },
    { label: 'Poverty rate', value: '9.03%', detail: 'Share below national poverty line', source: 'BPS 2024' },
    { label: 'Internet use', value: '79.5%', detail: 'Share of population online', source: 'APJII 2024' }
  ],
  explore: [
    { target: 'population', title: 'Population', figure: '68.3% working age', source: 'BPS 2024', text: 'Age structure, urban growth and density.' },
    { target: 'economy', title: 'Economy', figure: '5.03% growth', source: 'BPS 2024', text: 'Output, sectors, jobs and prices.' },
    { target: 'health-education', title: 'Health & Education', figure: '96.7% literacy', source: 'BPS 2023', text: 'Longevity, schooling and access.' },
    { target: 'regions', title: 'Regions', figure: '38 provinces', source: 'BPS 2024', text: 'Search and sort every province.' },
    { target: 'geography-climate', title: 'Geography & Climate', figure: '17,000+ islands', source: 'BPS 2024', text: 'Land, coasts, peaks and rainfall.' }
  ],
  populationTrend: {
    title: 'Population keeps rising, more slowly',
    unit: 'million people',
    source: 'BPS 2015-2024',
    points: [
      { year: 2015, value: 255.6 }, { year: 2016, value: 258.7 }, { year: 2017, value: 261.9 },
      { year: 2018, value: 264.2 }, { year: 2019, value: 266.9 }, { year: 2020, value: 270.2 },
      { year: 2021, value: 272.7 }, { year: 2022, value: 275.8 }, { year: 2023, value: 278.7 },
      { year: 2024, value: 283.5 }
    ]
  },
  incomeTrend: {
    title: 'Income per person recovered after 2020',
    unit: 'US$ per person',
    source: 'World Bank 2015-2024',
    points: [
      { year: 2015, value: 3330 }, { year: 2016, value: 3570 }, { year: 2017, value: 3880 },
      { year: 2018, value: 3930 }, { year: 2019, value: 4140 }, { year: 2020, value: 3900 },
      { year: 2021, value: 4330 }, { year: 2022, value: 4790 }, { year: 2023, value: 4940 },
      { year: 2024, value: 4960 }
    ]
  },
  ageGroups: [
    { label: '0-14', value: 23.9, source: 'BPS 2024' },
    { label: '15-64', value: 68.3, source: 'BPS 2024' },
    { label: '65+', value: 7.8, source: 'BPS 2024' }
  ],
  populationIndicators: [
    { label: 'Urban share', value: '59.0%', detail: 'Most Indonesians now live in cities', source: 'BPS 2024' },
    { label: 'Median age', value: '30.4 years', detail: 'Still young beside East Asia', source: 'BPS 2024' },
    { label: 'Fertility rate', value: '2.14', detail: 'Births per woman', source: 'BPS 2024' },
    { label: 'Java share', value: '55.8%', detail: 'Share living on Java', source: 'BPS 2024' }
  ],
  growth: {
    title: 'Growth returned to about 5%',
    unit: 'annual GDP growth, %',
    source: 'BPS 2019-2024',
    points: [
      { year: 2019, value: 5.02 }, { year: 2020, value: -2.07 }, { year: 2021, value: 3.70 },
      { year: 2022, value: 5.31 }, { year: 2023, value: 5.05 }, { year: 2024, value: 5.03 }
    ]
  },
  sectors: [
    { label: 'Manufacturing', value: 18.9, source: 'BPS 2024' },
    { label: 'Agriculture', value: 12.6, source: 'BPS 2024' },
    { label: 'Trade & repair', value: 12.4, source: 'BPS 2024' },
    { label: 'Construction', value: 10.0, source: 'BPS 2024' },
    { label: 'Mining', value: 9.2, source: 'BPS 2024' },
    { label: 'Transport', value: 6.2, source: 'BPS 2024' },
    { label: 'Finance', value: 4.4, source: 'BPS 2024' },
    { label: 'All other sectors', value: 26.3, source: 'BPS 2024' }
  ],
  economyIndicators: [
    { label: 'Inflation', value: '1.57%', detail: 'Consumer prices, year on year', source: 'BPS 2024' },
    { label: 'Unemployment', value: '4.91%', detail: 'Open unemployment rate', source: 'BPS 2024' },
    { label: 'Exports', value: 'US$264.7bn', detail: 'Goods exports', source: 'BPS 2024' },
    { label: 'Trade surplus', value: 'US$31.0bn', detail: 'Exports minus imports', source: 'BPS 2024' }
  ],
  lifeTrend: {
    title: 'People live longer than a decade ago',
    unit: 'years at birth',
    source: 'BPS 2015-2024',
    points: [
      { year: 2015, value: 71.1 }, { year: 2017, value: 71.6 }, { year: 2019, value: 72.3 },
      { year: 2021, value: 72.8 }, { year: 2023, value: 73.9 }, { year: 2024, value: 74.2 }
    ]
  },
  enrollment: [
    { label: 'Primary net enrollment', value: 97.9, source: 'BPS 2023' },
    { label: 'Junior secondary net enrollment', value: 81.4, source: 'BPS 2023' },
    { label: 'Senior secondary net enrollment', value: 63.0, source: 'BPS 2023' },
    { label: 'Adult literacy', value: 96.7, source: 'BPS 2023' }
  ],
  healthIndicators: [
    { label: 'Infant mortality', value: '16.9', detail: 'Deaths per 1,000 live births', source: 'BPS 2023' },
    { label: 'Child stunting', value: '21.5%', detail: 'Children under five', source: 'Ministry of Health 2023' },
    { label: 'Mean schooling', value: '9.0 years', detail: 'Adults aged 25 and over', source: 'BPS 2024' },
    { label: 'Expected schooling', value: '13.2 years', detail: 'For a child entering school', source: 'BPS 2024' }
  ],
  geographyFacts: [
    { label: 'Land area', value: '1.91m km²', detail: 'Across two hemispheres', source: 'World Bank 2023' },
    { label: 'Islands', value: '17,000+', detail: 'Named and unnamed islands', source: 'BPS 2024' },
    { label: 'Coastline', value: '54,716 km', detail: 'One of the world longest', source: 'BPS 2024' },
    { label: 'Highest peak', value: '4,884 m', detail: 'Puncak Jaya in Papua', source: 'BPS 2024' },
    { label: 'Active volcanoes', value: '120+', detail: 'On the Pacific Ring of Fire', source: 'PVMBG 2024' },
    { label: 'Forest cover', value: '49.8%', detail: 'Share of land area', source: 'Ministry of Forestry 2023' }
  ],
  climateRainfall: {
    title: 'Jakarta rainfall peaks in January',
    unit: 'mm per month',
    source: 'BMKG climate normals',
    points: [
      { label: 'Jan', value: 350 }, { label: 'Feb', value: 300 }, { label: 'Mar', value: 200 },
      { label: 'Apr', value: 160 }, { label: 'May', value: 120 }, { label: 'Jun', value: 90 },
      { label: 'Jul', value: 70 }, { label: 'Aug', value: 60 }, { label: 'Sep', value: 90 },
      { label: 'Oct', value: 150 }, { label: 'Nov', value: 220 }, { label: 'Dec', value: 280 }
    ]
  },
  climateTemperature: {
    title: 'Jakarta stays warm all year',
    unit: 'average °C',
    source: 'BMKG climate normals',
    points: [
      { label: 'Jan', value: 26.4 }, { label: 'Feb', value: 26.6 }, { label: 'Mar', value: 27.2 },
      { label: 'Apr', value: 27.8 }, { label: 'May', value: 28.0 }, { label: 'Jun', value: 27.8 },
      { label: 'Jul', value: 27.4 }, { label: 'Aug', value: 27.6 }, { label: 'Sep', value: 28.0 },
      { label: 'Oct', value: 28.2 }, { label: 'Nov', value: 27.8 }, { label: 'Dec', value: 27.0 }
    ]
  },
  provinces: [
    { name: 'Aceh', capital: 'Banda Aceh', group: 'Sumatra', population: 5.5, area: 57956 },
    { name: 'North Sumatra', capital: 'Medan', group: 'Sumatra', population: 15.8, area: 72981 },
    { name: 'West Sumatra', capital: 'Padang', group: 'Sumatra', population: 5.9, area: 42012 },
    { name: 'Riau', capital: 'Pekanbaru', group: 'Sumatra', population: 6.9, area: 87023 },
    { name: 'Riau Islands', capital: 'Tanjung Pinang', group: 'Sumatra', population: 2.3, area: 8202 },
    { name: 'Jambi', capital: 'Jambi', group: 'Sumatra', population: 3.7, area: 50058 },
    { name: 'South Sumatra', capital: 'Palembang', group: 'Sumatra', population: 8.9, area: 91592 },
    { name: 'Bangka Belitung', capital: 'Pangkal Pinang', group: 'Sumatra', population: 1.5, area: 16424 },
    { name: 'Bengkulu', capital: 'Bengkulu', group: 'Sumatra', population: 2.1, area: 19919 },
    { name: 'Lampung', capital: 'Bandar Lampung', group: 'Sumatra', population: 9.5, area: 34624 },
    { name: 'Banten', capital: 'Serang', group: 'Java', population: 12.6, area: 9663 },
    { name: 'Jakarta', capital: 'Jakarta', group: 'Java', population: 10.7, area: 664 },
    { name: 'West Java', capital: 'Bandung', group: 'Java', population: 50.8, area: 35378 },
    { name: 'Central Java', capital: 'Semarang', group: 'Java', population: 38.1, area: 32801 },
    { name: 'Yogyakarta', capital: 'Yogyakarta', group: 'Java', population: 3.8, area: 3133 },
    { name: 'East Java', capital: 'Surabaya', group: 'Java', population: 42.1, area: 47800 },
    { name: 'Bali', capital: 'Denpasar', group: 'Bali & Nusa Tenggara', population: 4.5, area: 5780 },
    { name: 'West Nusa Tenggara', capital: 'Mataram', group: 'Bali & Nusa Tenggara', population: 5.7, area: 19708 },
    { name: 'East Nusa Tenggara', capital: 'Kupang', group: 'Bali & Nusa Tenggara', population: 5.7, area: 48718 },
    { name: 'West Kalimantan', capital: 'Pontianak', group: 'Kalimantan', population: 5.7, area: 147307 },
    { name: 'Central Kalimantan', capital: 'Palangka Raya', group: 'Kalimantan', population: 2.9, area: 153565 },
    { name: 'South Kalimantan', capital: 'Banjarbaru', group: 'Kalimantan', population: 4.3, area: 38744 },
    { name: 'East Kalimantan', capital: 'Samarinda', group: 'Kalimantan', population: 4.1, area: 129067 },
    { name: 'North Kalimantan', capital: 'Tanjung Selor', group: 'Kalimantan', population: 0.8, area: 75468 },
    { name: 'North Sulawesi', capital: 'Manado', group: 'Sulawesi', population: 2.7, area: 13892 },
    { name: 'Gorontalo', capital: 'Gorontalo', group: 'Sulawesi', population: 1.2, area: 11257 },
    { name: 'Central Sulawesi', capital: 'Palu', group: 'Sulawesi', population: 3.1, area: 61841 },
    { name: 'West Sulawesi', capital: 'Mamuju', group: 'Sulawesi', population: 1.5, area: 16787 },
    { name: 'South Sulawesi', capital: 'Makassar', group: 'Sulawesi', population: 9.4, area: 46717 },
    { name: 'Southeast Sulawesi', capital: 'Kendari', group: 'Sulawesi', population: 2.8, area: 38068 },
    { name: 'Maluku', capital: 'Ambon', group: 'Maluku', population: 1.9, area: 46914 },
    { name: 'North Maluku', capital: 'Sofifi', group: 'Maluku', population: 1.3, area: 31982 },
    { name: 'West Papua', capital: 'Manokwari', group: 'Papua', population: 0.6, area: 60275 },
    { name: 'Southwest Papua', capital: 'Sorong', group: 'Papua', population: 0.6, area: 39123 },
    { name: 'Papua', capital: 'Jayapura', group: 'Papua', population: 1.1, area: 82681 },
    { name: 'Highland Papua', capital: 'Wamena', group: 'Papua', population: 1.5, area: 51213 },
    { name: 'Central Papua', capital: 'Nabire', group: 'Papua', population: 1.4, area: 61073 },
    { name: 'South Papua', capital: 'Merauke', group: 'Papua', population: 0.5, area: 117849 }
  ]
};
