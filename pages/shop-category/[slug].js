import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Title = dynamic(() => import('components/title'));
const ShopCategoryList = dynamic(() => import('components/list'));
const Newsletter = dynamic(() => import('components/newsletter'));
export default function ProductCategory() {
  const router = useRouter();
  const title = router.query.slug ? router.query.slug.split('-').join(' ') : '';
  const category = router.query.slug ? router.query.slug : '';
  return (
    <div>
      <Title title={title} />
      <ShopCategoryList category={category} />
      <Newsletter />
    </div>
  );
}
