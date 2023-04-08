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

  verifyIdProduct(product: typeof Product) {
    const id = product.id;
    const productId = this.products.find((product) => product.id === id);
    const sorted = this.products.sort((a, b) => a.id - b.id);
    if (productId !== undefined) {
      console.info("ID já existe, adicionando um novo ID");
      const newID = {
        id: sorted[sorted.length - 1].id + 1,
        description: product.description,
        img: product.img,
        price: product.price,
        quantity: product.quantity,
      };
      console.log(newID);
      return newID;
    } else {
      return product;
    }
  }
}

export default new ProductService();
