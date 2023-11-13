/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 
 * @param Model Wrapper for native Db API
 * @returns 
 */

export const dBApi = (Model: any) => {
  const findOne = async (options: any) => {
    return await Model.findOne(options);
  };

  const deleteOne = async (row: any) => {
    await Model.deleteOne(row);
  };

  // { "name": "", "email": "", "password": "[encrypted]" }
  const save = async (userObj: any) => {
    const newUser = new Model(userObj);
    return await newUser.save();
  };

  const findById = async (options: any) => {
    return await Model.findById(options.id);
  };

  const findOneAndUpdate = async (filter: any, update: any, flags: any) => {
    return await Model.findOneAndUpdate(filter, update, flags);
  };

  return {
    findById,
    findOne,
    findOneAndUpdate,
    deleteOne,
    save
  };
};