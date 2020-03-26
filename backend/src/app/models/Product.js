import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        quantity: Sequelize.INTEGER,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
  }
}

export default Product;
