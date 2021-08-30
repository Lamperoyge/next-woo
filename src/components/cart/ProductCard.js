import Link from 'next/link';
import { urlExtractor } from 'utils/extractUrl';

export default function ProductCard({ product }) {
  return (
    <div>
      <div>
        <div>
          <Link
            href={{
              pathname: urlExtractor(product.permalink),
              query: { id: product.id },
            }}
          >
            {product.image ? (
              <img src={product.image.src} alt={product.image.alt} />
            ) : (
              <img src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </Link>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
