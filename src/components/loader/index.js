export default function Loader({ show }) {
  return (
    <>
      {show ? (
        <section className='loader-wrapper'>
          <div className='loader-flex'>
            <span className='circle-1'></span>
            <span className='circle-2'></span>
            <span className='circle-3'></span>
            <span className='circle-4'></span>
            <span className='circle-5'></span>
          </div>
        </section>
      ) : null}
    </>
  );
}
