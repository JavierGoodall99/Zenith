export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  aspect: string;
  isMotion: boolean;
  category: string;
  details?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "The Structural Trench",
    price: "$2,400",
    description: "Gabardine Wool • Midnight Black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhAgWxl5g4-jr38iyo0j9aROWkj2xUykZfnpahIdunM1kTo69mFhtKjxd9Qcw7LKbNNBq1n4P_TAOG3N6yVOJvkYgdXfvIdSmeB0ALL_-ODJAxo6LuTxYb9pXrElnioYw1AabpMpxgR-dHoan5jeKIH0b2_y9HAV-ab0jcBBO6-LhnhN3uXNbEpbZnqWGVyd0dWTPVMm7zRg0luZqdv2gvfnIsqQ6cyx1vlpx23cad0hH6cWwWjYubNCa-b4q3yBs9f16hDbDkO5E",
    aspect: "aspect-[3/4]",
    isMotion: true,
    category: "Outerwear",
    details: [
      "100% Heavyweight Gabardine Wool",
      "Oversized architectural lapels",
      "Hidden button placket",
      "Belted waist with chrome hardware",
      "Made in Italy"
    ]
  },
  {
    id: 2,
    title: "Obsidian Silk",
    price: "$450",
    description: "100% Mulberry Silk • Scarf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtfDM5J5AFIf79iug35ytLyLprcdoHlH42wlTCHeloxmqaTQ6DvFdgI_pOhIQnk2Hd9rz90BE7FOxKW5JlGRThCOzNpdVPpAjcy0rg9SWPiIXjVCetLm0mo4-TDW4lAg1x4TyecRltkBcs1QB7a9u3UlEtym1lCOnDbt_txtZr_LRsSLx-1foF5v6D5UnCZPfypd9BD7OHpi44H5ZVVQLzrEXTOijU4_93ORT_kO_yDvtHwEF1rV6d0pQBOAhWFl1Qv5gpDqV2stg",
    aspect: "aspect-video",
    isMotion: false,
    category: "Accessories",
    details: [
        "100% Mulberry Silk",
        "Hand-rolled edges",
        "90cm x 90cm",
        "Dry clean only"
    ]
  },
  {
    id: 3,
    title: "Chrome Cuff",
    price: "$350",
    description: "Polished Silver • One Size",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3YdTXpkZvxEZUXGSXE0zfWHBkeaSN222wrLYm0e0gYv1A8Yy9P-7fUcIQALxVqiRtk3wb8ogAQA0qeqHVFXDOEjGiYj4VWO1cXpzpbe7N2nEAm0Qi_lEHDRElW3ZHpPwIIuqKWuq_Kblshpth0-yPuyUFQv6Qyt2CDV2IR76QRW5B_KvYRcfoN0pmuCnHun5tYKAb6Kr6SL7nCl5PSIgmL0MdJ6ai3FglZV6tb3yInfQuVsSI365N2ZbG5uPV_RrmWpsB99dBfwI",
    aspect: "aspect-square",
    isMotion: false,
    category: "Accessories",
    details: [
        "Solid Sterling Silver",
        "High-polish finish",
        "Engraved logo interior",
        "Adjustable fit"
    ]
  },
  {
    id: 4,
    title: "Cyber-Luxe Boots",
    price: "$1,200",
    description: "Calfskin Leather • Platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXDYtEw9rEoy_9Xr4MBm3Vx-7jstcibIcqFPTTpRBNP4e3u23lCH-S8FHa6xXMbWHquoVzI1fJdcGbWKJODx5Omy1V7OS8_07ZNA4Oov32k6cKh4QrLmN3apTKBcy0IuXb5T9kSqgwwFSDxkBFFYJyZpRiEd-c7itL8XcG0uNZOHl-TcNhGhXGLNDiIdl0nU1aOTjqfJ24U5P_5C04r-mpq-VLVlWK5k99vuuD5QEGx6XPMFv_t7hQ743bFnd4Aipgx7cfwdafgpI",
    aspect: "aspect-[2/3]",
    isMotion: true,
    category: "Footwear",
    details: [
        "Italian Calfskin Leather",
        "3-inch geometric platform",
        "Side zip closure",
        "Rubber lug sole"
    ]
  },
  {
    id: 5,
    title: "Void Gown",
    price: "$3,800",
    description: "Chiffon & Velvet • Evening",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSgKfOW_oxaHQ7RrWU8ieuOYtnjCqoF4oj12f1bro-GzhdmKvSB1fB2bQSCdgaAF58d7KWwf0T7eQEMvrqu_vPvN4fbvJ9EDSB0WgO0F1NwutmyxHnf5JQQqsYqMK-BVBassoc_eZ19UOvSbpSuYxBTXfq543_QtSwYiCg8TIHa6pY5NPw6GyiT_yQmEA8NUoeKOQedCil56oSy9FLLEw_sM_GWCRR3tyBnmgUPUJRWpuGCdhmua3U7gKoABksSR1bq2lM3OJy6zo",
    aspect: "aspect-[9/16]",
    isMotion: false,
    category: "Dresses",
    details: [
        "Silk Chiffon and Velvet blend",
        "Plunging back",
        "Floor-length with train",
        "Invisible side zip"
    ]
  },
  {
    id: 6,
    title: "Editorial Vol. 4",
    price: "$80",
    description: "Print Edition • Hardcover",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3gvpA9Fxqko4SyCYbdfv3G5qx_1h2jf92YLyXSw1JcCyGb1rLPnrzBgFwldQ0UyZsyhjro_avY0rqRf-vD2tc-K3PAOVvh9IDwSoHRk5oOjzcdhwHNerMFkAHM25FDuBDeZe3S2oq76dbew91pxkia03zAofOR8Zzwn47M5qaxoJEbf_rqoy8B4KujaJ-iuusYZDZSNkJfkvW14k2VMzyFRnuHpKvY5aufUM0mdDiLXGA9DgJkg_v8wVy6hpZqWSVvmCEGd7tu8c",
    aspect: "aspect-[4/3]",
    isMotion: false,
    category: "Objects",
    details: [
        "300 pages",
        "High-gloss photography",
        "Limited edition print run",
        "Includes poster"
    ]
  },
  {
    id: 7,
    title: "Silver Geo",
    price: "$280",
    description: "Set of 3 • Sterling Silver",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKKuWgCPBjZRWoC2q8MYtKUcBoG34MU6eMoJhq4HAgKUCmHzBDIMaYAk_-jhwPIXYclGYn6Wiy57HFynsGW1mAbjX5tJPd__usjNLxKkBUSel6RFHVBT2M8138yEvonu7Ki2ISfiJLj8O-kZHDjfld2WXlfL-o2pCI8pV8Bm5k3_3nDp9je1EfBxQ3Gg1whJVfGLxy8wrqB6Lkmf7wF-cb5ZpIqSMl3-WlQPsAD9XX0lmYyRPf3-mns-cDu3s5G63jY5N4hADzIA",
    aspect: "aspect-square",
    isMotion: false,
    category: "Accessories",
    details: [
        "Sterling Silver",
        "Geometric shapes",
        "Stackable design",
        "Polished finish"
    ]
  }
];