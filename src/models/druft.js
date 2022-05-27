/* async readRunningOrders(custID) {
  let record = [];
  try {
    let max = await this.parent3Model.max('id');
    record = await this.model.findAll({ where: { custID: custID, statusID: { [Op.lt]: max } }, include: [{ model: this.parent1Model, include: [{ model: this.parent2Model, include: this.parent4Model }] }, { model: this.parent3Model }, { model: this.parent5Model }] })
    return record;
  }
  catch (e) {
    console.error('error in reading record/s for model', this.model)
  }}

 
async readItemByResId(id) {
  let record = [];
  try {
    record = await this.model.findAll({ include: this.parent1Model, where: { restaID: id } })
    if (!record[0])
      record[0] = `there is no record with id of ${id}`
    return record;
  } catch (e) {
    console.error('error in reading record/s for model', this.model)
  }}
  async readDriverOrders(driverid) {
    let record = [];
    try {
      if (driverid) {
        record = await this.model.findAll({ where: { driverid: driverid }, include: [{ model: this.parent1Model, include: [{ model: this.parent2Model, include: this.parent4Model }] }, { model: this.parent3Model }, { model: this.parent5Model }], order: ['id'] })
        return record;
      } else {
        record = await this.model.findAll({ include: [{ model: this.parent1Model, include: [{ model: this.parent2Model, include: this.parent4Model }] }, { model: this.parent3Model }, { model: this.parent5Model }], order: ['id'] })
        return record;
      }
    }
    catch (e) {
      console.error('error in reading record/s for model (84)', this.model)
    }

  }










  
  */