import { CardItem } from '../types/card';

export const cardsData: CardItem[] = [
  // 모든 항목이 있는 경우
  {
    imageUrl: '/images/image-sample.png',
    label: 'Card Label',
    title: 'Card Title 1',
    crossText: 'Cross Out',
    highlight: 'Highlight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec porttitor leo, et sodales dolor. Suspendisse iaculis bibendum hendrerit. Morbi vitae blandit purus. Curabitur vitae felis leo. Fusce massa mi, mollis ut dolor ullamcorper, pretium gravida magna. Aenean sed ullamcorper magna. ',
    rating: 3,
  },
  // 하단 설명 항목이 없는 경우
  {
    imageUrl: '/images/image-sample.png',
    label: 'Card Label',
    title: 'Card Title 2',
    crossText: 'Cross Out',
    highlight: 'Highlight',
    rating: 5,
  },
  // 하단 설명 & 별점 항목이 둘다 없는 경우
  {
    imageUrl: '/images/image-sample.png',
    label: 'Card Label',
    title: 'Card Title 3',
    crossText: 'Cross Out',
    highlight: 'Highlight',
  },
  // 가로형
  {
    imageUrl: '/images/image-sample.png',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec porttitor leo, et sodales dolor. Suspendisse iaculis bibendum hendrerit. Morbi vitae blandit purus. Curabitur vitae felis leo. Fusce massa mi, mollis ut dolor ullamcorper, pretium gravida magna. Aenean sed ullamcorper magna. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec porttitor leo, et sodales dolor. Suspendisse iaculis bibendum hendrerit. Morbi vitae blandit purus. Curabitur vitae felis leo. Fusce massa mi, mollis ut dolor ullamcorper, pretium gravida magna. Aenean sed ullamcorper magna. ',
    rating: 4,
    name: 'John Doe',
    isRow: true,
  },
];
