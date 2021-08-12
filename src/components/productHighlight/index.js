import Link from 'next/link';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getHighlights } from 'redux/highlights/highlights.actions';
import { urlExtractor } from 'utils/extractUrl';
function ProductHighlight({ highlights, getHighlights }) {
  useEffect(() => {
    getHighlights();
  }, []);

  const randomNumber = Math.floor(Math.random() * highlights.length);
  if (!highlights[randomNumber]) {
    return null;
  }
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-10'>
      <Link href='#'>
        <img
          className='max-w-lg'
          src={highlights[randomNumber].images[0].src}
          alt='higlighted product image'
        />
      </Link>
      <div>
        <div className='px-10 py-10 items-center md:flex-end'>
          <h1>{highlights[randomNumber].name}</h1>
          <div>
            <p>Discover the latest shades of our iconic handbag line.</p>
            <Link href={urlExtractor(highlights[randomNumber].permalink)}>
              <button className='flex items-center justify-center btn btn-wide rounded-sm border bg-white text-black hover:text-white'>
                <h5>SHOP NOW</h5>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ highlights: state.highlights.data });

const mapDispatchToProps = (dispatch) => ({
  getHighlights: () => dispatch(getHighlights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductHighlight);
