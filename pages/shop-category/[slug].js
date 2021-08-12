import { useRouter } from 'next/router';
import Title from 'components/title';
import { ShopCategoryList } from 'components/list';
export default function ProductCategory() {
  const router = useRouter();
  const title = router.query.slug ? router.query.slug.split('-').join(' ') : '';
  const category = router.query.slug ? router.query.slug : '';
  return (
    <div>
      <Title title={title} />
      <ShopCategoryList category={category} />
    </div>
  );
}
