import { Product } from "../models/product.model";
import ProductRepository from "../repositories/product.repository";
class ProductService {
  getAll() {
    return ProductRepository.getAll();
  }

  getById(id: number) {
    return ProductRepository.getById(id);
  }

  createProduct(product: typeof Product) {
    return ProductRepository.create(product);
  }
  updateProduct(id: number, product: Partial<typeof Product>) {
    return ProductRepository.update(id, product);
  }

  deleteProduct(id: number) {
    return ProductRepository.delete(id);
  }
}

export default new ProductService();
