import { Container } from '@/shared/components/shared';

export default function Product({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Container className='mt-10'>Product {id}</Container>
    </>
  );
}
