import { Product } from "../models/product.model";

class ProductRepository {
  getAll() {
    return Product.find();
  }
  getById(id: number) {
    return Product.findOne({ _id: id });
  }
  create(product: typeof Product) {
    return Product.create(product);
  }
  update(id: number, product: Partial<typeof Product>) {
    return Product.updateOne({ _id: id }, { $set: product });
  }
  delete(id: number) {
    return Product.deleteOne({ _id: id });
  }
}
export default new ProductRepository();
