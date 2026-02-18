export interface MenuCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
  config: {
    icon: string;
    colorCode: string;
  };
}

export interface MenuItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string; // ID de la categoría
  assets: {
    thumbnailUrl: string;
    imageUrl: string;
  };
  metadata: {
    tags: string[];
    isAvailable: boolean;
  };
}