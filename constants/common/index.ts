// IMAGE CROM ASPECT RATIO UNITS
interface IIMAGE_CROP_ASPECT_RATIO {
  title: string;
  key: string;
  ratio: number;
}
export const IMAGE_CROP_ASPECT_RATIO: IIMAGE_CROP_ASPECT_RATIO[] = [
  { title: "Square", key: "1:1", ratio: 1 / 1 },
  { title: "Standard", key: "4:3", ratio: 4 / 3 },
  { title: "Classic 35mm", key: "3:2", ratio: 3 / 2 },
  { title: "Widescreen", key: "16:9", ratio: 16 / 9 },
  { title: "Medium format", key: "5:4", ratio: 5 / 4 },
  { title: "Photograph print", key: "7:5", ratio: 7 / 5 },
  { title: "Common in computer displays", key: "8:5", ratio: 8 / 5 },
  { title: "8x10 (Common print size)", key: "4:5", ratio: 4 / 5 },
  { title: "6x8 (Common print size)", key: "3:4", ratio: 3 / 4 },
  { title: " 4x6 (Common print size)", key: "2:3", ratio: 2 / 3 },
];

type FallbackProps = {
  notFound: string;
  nSlashA: string;
  amount: string;
  quantity: string;
};
export const fallback: FallbackProps = {
  notFound: "Not found",
  nSlashA: "N/A",
  amount: "0.00",
  quantity: "0",
};
