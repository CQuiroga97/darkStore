export class Ingreso {
  id?: number;
  incomeDate: string;
  incomeCode: string;
  brandId?: number;
  incomeDetails: IngresoDetalle[];
}

export class IngresoDetalle {
  productId: number;
  quantity: number;
  incomeId?: number;
}
