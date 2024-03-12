export type CardItem = {
  imageUrl: string; // 이미지 url
  label?: string; // 라벨
  title: string; // 제목
  crossText?: string;
  highlight?: string;
  name?: string;
  description?: string; // 설명
  rating?: number; // 별점
  isRow?: boolean; //가로형 여부
};
