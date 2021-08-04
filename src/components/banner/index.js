const buttonsConfig = [
  {
    title: 'SHOP MEN',
    url: '/shop-category/men',
  },
  {
    title: 'SHOP WOMEN',
    url: '/shop-category/women',
  },
];

const Banner = ({}) => {
  return (
    <div>
      <div
        role='img'
        className='w-full flex flex-col justify-center h-full bg-center bg-cover bg-no-repeat h-screen'
        style={{
          backgroundImage: `url(
              "/images/banner.jpeg"
            )`,
        }}
      >
        <div className='flex flex-col items-center py-10 px-10'>
          <h1 className='text-white text-4xl whitespace-pre-line	font-bold leading-snug'>
            Earth-Friendly.
          </h1>
          <h1 className='text-white text-4xl whitespace-pre-line	font-bold leading-snug'>
            Run-Ready.
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-end py-10 px-10'>
          {buttonsConfig.map((btn, idx) => {
            return (
              <div className='px-5 py-5' key={idx}>
                <button className='btn btn-wide rounded-sm bg-white border-none text-black hover:text-white'>
                  {btn.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Banner;
