const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/errors");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });

    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if(!response){
        throw new AppError('Airplane is not found with the following id',StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    console.log("id",id,data);
    
    const response = await this.model.update(data, {
      where: {
        id,
      },
    });

    if(!response){
        throw new AppError('The airplane is found to update',StatusCodes.NOT_FOUND);
    }

    return response;
  }
}

module.exports = CrudRepository;
