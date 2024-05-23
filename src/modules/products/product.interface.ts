export interface VariantType {
  type: string;
  value: string;
}

export interface InventoryType {
  quantity: number;
  inStock: boolean;
}

// Main Product Interface
export interface ProductType {
  name: string; 
  description: string; 
  price: number; 
  category: string; 
  tags?: string[]; 
  variants?: VariantType[]; 
  inventory: InventoryType[];
}

