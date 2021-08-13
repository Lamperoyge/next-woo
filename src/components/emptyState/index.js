import Title from 'components/title';
export default function EmptyState({ condition }) {
  if (condition) {
    return (
      <Title title='Oh no, nothing was found. Be sure to come check later' />
    );
  } else return null;
}
