import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Бефстроганов',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    price: 549,
                    items: [{ price: 549 }],
                  },
                  {
                    id: 2,
                    name: 'Мясная с аджикой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 549,
                    items: [{ price: 549 }],
                  },
                  {
                    id: 3,
                    name: 'Креветки со сладким чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif',
                    price: 589,
                    items: [{ price: 589 }],
                  },
                  {
                    id: 4,
                    name: 'Пепперони фреш',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 329,
                    items: [{ price: 329 }],
                  },
                  {
                    id: 5,
                    name: 'Сырная 🌱👶',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 299,
                    items: [{ price: 299 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Четыре в одном',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif',
                    price: 649,
                    items: [{ price: 649 }],
                  },
                  {
                    id: 2,
                    name: '3 пиццы 25 см',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEB07EB1D19D15AF2389C1567FC88C.avif',
                    price: 849,
                    items: [{ price: 849 }],
                  },
                  {
                    id: 3,
                    name: '2 пиццы',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7E21971194BA8CD8A49301256FC4.avif',
                    price: 1099,
                    items: [{ price: 1099 }],
                  },
                  {
                    id: 4,
                    name: '3 пиццы',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7E219680B50B85AD6F6813EA1902.avif',
                    price: 1239,
                    items: [{ price: 1239 }],
                  },
                  {
                    id: 5,
                    name: '2 пиццы и напиток',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7E219288C341B5C27167329C2C9A.avif',
                    price: 839,
                    items: [{ price: 839 }],
                  },
                ]}
                categoryId={2}
              />

              <ProductsGroupList
                title='Закуски'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={3}
              />

              <ProductsGroupList
                title='Напитки'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EECF75D8792640A28A2BEF37367897.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={4}
              />

              <ProductsGroupList
                title='Десерты'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE79700C641CDFA7205D59209744E3.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={5}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
