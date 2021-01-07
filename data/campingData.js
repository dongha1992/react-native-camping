const campingData = [
  {
    id: 1,
    type: 'tent',
    name: '죽음의 계곡',
    description: 'Popular spot for trekkers.',
    rating: 4.9,
    distance: 2.9,
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130',
    latlng: {
      latitude: 37.51137,
      longitude: 127.05165,
    },
    bookmarked: false,
  },
  {
    id: 2,
    type: 'tent',
    name: '선릉 산책',
    description: 'This is for all sunset lovers.',
    rating: 3.4,
    distance: 5.1,
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?fit=crop&w=900&h=600&q=130',
    latlng: {
      latitude: 37.50637,
      longitude: 127.05365,
    },
    bookmarked: false,
  },
  {
    id: 3,
    type: 'rv',
    name: '캐러밴 나이트',
    description: 'This is for all sunset lovers.',
    rating: 3.2,
    distance: 5.2,
    price: '30000',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    latlng: {
      latitude: 37.50237,
      longitude: 127.05375,
    },
    bookmarked: false,
  },
  {
    id: 4,
    type: 'tent',
    name: '노마드 텐트',
    description: 'This is for all sunset lovers.',
    rating: 2.4,
    distance: 12.9,
    price: '50000',
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    latlng: {
      latitude: 37.51237,
      longitude: 127.05475,
    },
    bookmarked: false,
  },
  {
    id: 5,
    type: 'rv',
    name: '캠핑 윗 카',
    description: 'This is for all sunset lovers.',
    rating: 0.9,
    distance: 14.3,
    price: '100000',
    image:
      'https://images.unsplash.com/photo-1497492969993-1a263dc62b1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    latlng: {
      latitude: 37.51737,
      longitude: 127.05275,
    },
    bookmarked: false,
  },
  {
    id: 6,
    type: 'tent',
    name: '텐트 좋아',
    description: 'This is for all sunset lovers.',
    rating: 2.9,
    distance: 2.3,
    price: '1000',
    image:
      'https://images.unsplash.com/photo-1516361728389-998730856765?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    latlng: {
      latitude: 37.51337,
      longitude: 127.04375,
    },
    bookmarked: false,
  },
  {
    id: 7,
    type: 'tent',
    name: '코로나 싫어',
    description: 'This is for all sunset lovers.',
    rating: 4.1,
    distance: 4.3,
    price: '2000',
    image:
      'https://images.unsplash.com/photo-1536672717034-228c25f24a96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    latlng: {
      latitude: 37.51165,
      longitude: 127.04495,
    },
    bookmarked: false,
  },
  {
    id: 8,
    type: 'tent',
    name: '모로코 모로코 훌룰루',
    description: 'This is for all sunset lovers.',
    rating: 4.3,
    distance: 1.9,
    price: '200000',
    image:
      'https://images.unsplash.com/photo-1603693786884-5b8470742b83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    latlng: {
      latitude: 37.52131,
      longitude: 127.05175,
    },
    bookmarked: false,
  },
  {
    id: 9,
    type: 'rv',
    name: '우쥬라잌섬씽투드링?',
    description: 'This is for all sunset lovers.',
    rating: 2.9,
    distance: 5.9,
    price: '60000',
    image:
      'https://images.unsplash.com/photo-1493713838217-28e23b41b798?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    latlng: {
      latitude: 37.52439,
      longitude: 127.05375,
    },
    bookmarked: false,
  },
  {
    id: 10,
    type: 'rv',
    name: 'RVRV',
    description: 'This is for all sunset lovers.',
    rating: 2.9,
    distance: 5.9,
    price: '850000',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    latlng: {
      latitude: 37.52131,
      longitude: 127.05475,
    },
    bookmarked: false,
  },
  {
    id: 11,
    type: 'tent',
    name: '그냥 텐트',
    description: 'This is for all sunset lovers.',
    rating: 5.0,
    distance: 12.9,
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    latlng: {
      latitude: 37.51437,
      longitude: 127.04475,
    },
    bookmarked: false,
  },
];
export { campingData };
