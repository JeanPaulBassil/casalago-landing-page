import { Product } from './model/Product'
import { ApiResponse } from './utils'
import { AbstractApi, ApiRequestParams } from './utils/AbstractApi'

export class ProductApi extends AbstractApi<Product> {
  readonly path = 'products'
  constructor() {
    super('products')
  }

  async getProducts(params: ApiRequestParams): Promise<ApiResponse<Product[]>> {
    const response = (await this.doFetch({
      queries: params.queries,
      requestOptions: {
        method: 'GET',
      },
    })) as ApiResponse<Product[]>
    return response
  }
}
