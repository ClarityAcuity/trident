const items = ["白頭翁的特性", "白頭翁的故事", "白頭翁的美照", "白頭翁的危機"];
const title = "白頭翁 (Chinese bulbul)";
const descritpion =
  "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。";
const sections = [
  {
    title: "外觀",
    descritpion:
      "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
  },
  {
    title: "特性",
    descritpion:
      "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
  },
  {
    title: "食性",
    descritpion:
      "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
  },
];

export type Item = string[];
export type Data = {
  intro: { title: string; descritpion: string };
  sections: { title: string; descritpion: string }[];
};

async function delay() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

export async function getItems() {
  await delay();
  return Promise.resolve(items);
}

export async function getData() {
  await delay();
  return Promise.resolve({
    intro: { title, descritpion },
    sections,
  });
}
