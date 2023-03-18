import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { Header, Footer, AddExpenseForm } from 'components';

function App() {
  const openAddExpenseModal = () => modals.open({ title: 'Add expense', children: <AddExpenseForm />, centered: true });

  return (
    <>
      <Header />
      <main>
        <ActionIcon color="teal" variant="filled" onClick={openAddExpenseModal}>
          <IconPlus size="1rem" />
        </ActionIcon>
      </main>
      <Footer />
    </>
  );
}

export { App };
