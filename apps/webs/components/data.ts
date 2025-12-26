export type Prosecutor = {
  index:number;
  slug: string;      
  nameZh: string;     
  address: string;     
  lat: number;
  lng: number;
  xPct: number;       
  yPct: number;
};

export const PROSECUTORS: Prosecutor[] = [
  { index:1, slug: "taipei",    nameZh: "台北",   address: "台北市中正區博愛路 131 號", lat: 25.036767, lng: 121.511596, xPct: 56.3, yPct: 8.5 },
  { index:2, slug: "shilin",    nameZh: "士林",   address: "台北市士林區士東路 190 號", lat: 25.110863, lng: 121.533342, xPct: 59, yPct: 5 },
  { index:3, slug: "newtaipei", nameZh: "新北",   address: "新北市土城區金城路二段 249 號", lat: 24.984441, lng: 121.457992, xPct: 60.6, yPct: 11.9  },
  { index:4, slug: "taoyuan",   nameZh: "桃園",   address: "桃園市桃園區正光路 898 號", lat: 25.006094, lng: 121.288360, xPct: 50, yPct: 10.5 },
  { index:5, slug: "hsinchu",   nameZh: "新竹",   address: "新竹縣竹北市興隆路二段 161 號", lat: 24.813507, lng: 121.017754, xPct: 48.9, yPct: 17.9 },
  { index:6, slug: "yilan",     nameZh: "宜蘭",   address: "宜蘭縣宜蘭市縣政西路 3 號", lat: 24.728053, lng: 121.759259, xPct: 61, yPct: 22 },
  { index:7, slug: "keelung",   nameZh: "基隆",   address: "基隆市信義區東信路 178 號", lat: 25.127815, lng: 121.758066, xPct: 61, yPct: 22 },
  { index:8, slug: "miaoli",    nameZh: "苗栗",   address: "苗栗縣苗栗市中正路 1149 號", lat: 24.563063, lng: 120.822818, xPct: 43, yPct: 23},
  { index:9, slug: "taichung",  nameZh: "台中",   address: "台中市西區自由路一段 91 號", lat: 24.135031, lng: 120.675765, xPct: 40, yPct: 31.8 },
  { index:10,slug: "changhua",  nameZh: "彰化",   address: "彰化縣員林市員林大道二段 100 號", lat: 23.948457, lng: 120.579096, xPct: 34, yPct: 38},
  { index:11,slug: "nantou",    nameZh: "南投",   address: "南投縣南投市中興路 757 號", lat: 23.903823, lng: 120.693457, xPct: 34, yPct: 38},
  { index:12,slug: "yunlin",    nameZh: "雲林",   address: "雲林縣虎尾鎮明正路 38 號", lat: 23.715298, lng: 120.433071, xPct: 31, yPct: 45 },
  { index:13,slug: "chiayi",    nameZh: "嘉義",   address: "嘉義市東區林森東路 286 號", lat: 23.487657, lng: 120.462732, xPct: 36.5, yPct: 51.9 },
  { index:14,slug: "tainan",    nameZh: "台南",   address: "台南市安平區健康路三段 15 號", lat: 22.992683, lng: 120.165147, xPct: 31, yPct: 60},
  { index:15,slug: "kaohsiung", nameZh: "高雄",   address: "高雄市前金區河東路 188 號", lat: 22.626124, lng: 120.289684, xPct: 31, yPct: 72 },
  { index:16,slug: "qiaotou",   nameZh: "橋頭",   address: "高雄市橋頭區經武路 868 號", lat: 22.739073, lng: 120.304629, xPct: 38.6, yPct: 64 },
  { index:17,slug: "pingtung",  nameZh: "屏東",   address: "屏東縣屏東市棒球路 11 號", lat: 22.656268, lng: 120.482828, xPct: 37, yPct: 75 },
  { index:18,slug: "penghu",    nameZh: "澎湖",   address: "澎湖縣馬公市西文里西文澳 309 號", lat: 23.561578, lng: 119.584742, xPct: 37, yPct: 75 },
  { index:19,slug: "hualien",   nameZh: "花蓮",   address: "花蓮縣花蓮市府前路 15 號", lat: 23.989483, lng: 121.619761, xPct: 56.8, yPct: 33.5 },
  { index:20,slug: "taitung",   nameZh: "台東",   address: "台東縣台東市浙江路 310 號", lat: 22.762511, lng: 121.149990, xPct: 49, yPct: 65 },
  { index:21,slug: "kinmen",    nameZh: "金門",   address: "金門縣金城鎮民權路 178 號", lat: 24.436971, lng: 118.318353, xPct: 49, yPct: 65 },
  { index:22,slug: "lienchiang", nameZh: "連江",   address: "連江縣南竿鄉復興村 210 號", lat: 26.155708, lng: 119.951590, xPct: 49, yPct: 65 }
];


export  function findProsecutorBySlug(slug: string) {
  return PROSECUTORS.find(p => p.slug === slug) ?? null;
}
