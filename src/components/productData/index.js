import Title from 'components/title';
import Attributes from 'components/attributes';
import { AddToCartButton } from 'components/cart';
import { useEffect, useState } from 'react';
import { getData, getProductsData } from 'utils/fetchData';
import { VARIATIONS_ENDPOINT } from 'endpoints/constants';
const fetchVariations = async (
  id,
  callback = (response) => {
    response;
  }
) => {
  const response = await getData(VARIATIONS_ENDPOINT, { id: id });
  return callback(response);
};

const includesAll = (arr, array_to_check) =>
  arr.reduce(
    (accumulator, current) => accumulator && array_to_check.includes(current),
    true
  );

export default function ProductData({ product = {} }) {
  const [variationsData, setVariationsData] = useState({});
  const [attrSelected, setSelectedAttrData] = useState({});

  const findProduct = () => {
    const product = variationsData.result.find((variation) =>
      includesAll(variation.attrCombination, Object.values(attrSelected))
    );
    return product;
  };

  useEffect(() => {
    fetchVariations(product.id, setVariationsData);
  }, []);

  const handleAttrSelect = (obj) => {
    let attrData = { ...attrSelected };
    setSelectedAttrData({ ...attrData, ...obj });
  };

  return (
    <>
      <Title title={product.name} size='text-3xl' />
      <Attributes
        handleAttrSelect={handleAttrSelect}
        options={product.attributes}
        variations={variationsData.result}
      />
      <AddToCartButton
        selections={attrSelected}
        findProduct={findProduct}
        variations={variationsData.result}
        variationsCount={variationsData.count}
      />
    </>
  );
}
