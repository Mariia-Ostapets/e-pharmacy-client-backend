import { SORT_ORDER } from '../constants/index.js';
import { NearestStoresSchemaCollection } from '../db/models/nearestStore.js';
import { StoresCollection } from '../db/models/store.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllStores = async ({
  userId,
  page = 1,
  perPage = 9,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const storesQuery = StoresCollection.find({ userId });

  const [storesCount, stores] = await Promise.all([
    StoresCollection.find().merge(storesQuery).countDocuments(),
    storesQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(storesCount, perPage, page);

  return {
    data: stores,
    ...paginationData,
  };
};

export const getNearestStores = async () => {
  try {
    const stores = await NearestStoresSchemaCollection.find();

    return stores;
  } catch (error) {
    throw new Error('Error fetching nearest stores, error: ', error);
  }
};
