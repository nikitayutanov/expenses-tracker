import { TextInput, Button, NumberInput, Checkbox } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useEffect, useRef, useState } from 'react';
import { isValueExists } from 'utils';
import styles from './AddExpenseForm.module.scss';

const FIELD = {
  NAME: 'name',
  AMOUNT: 'amount',
  DATE: 'date'
};

const INITIAL_VALUES = { [FIELD.NAME]: '', [FIELD.AMOUNT]: '', [FIELD.DATE]: new Date() };
const VALIDATE = { [FIELD.NAME]: isValueExists, [FIELD.AMOUNT]: isValueExists, [FIELD.DATE]: isValueExists };

function AddExpenseForm() {
  const { getInputProps, setFieldValue, onSubmit } = useForm({ initialValues: INITIAL_VALUES, validate: VALIDATE });

  const [isCustomDateChecked, setIsCustomDateChecked] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const toggleIsCustomDateChecked = () => setIsCustomDateChecked((prevValue) => !prevValue);

  const resetDateValue = () => setFieldValue(FIELD.DATE, INITIAL_VALUES[FIELD.DATE]);

  useEffect(() => {
    if (!isCustomDateChecked) return resetDateValue();

    dateInputRef.current?.focus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustomDateChecked]);

  const handleSubmit = onSubmit((values) => {
    const dateValue = values[FIELD.DATE] as Date;

    const formattedValues = { ...values, [FIELD.DATE]: dateValue.getTime() };

    console.log(formattedValues);
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput label="Name:" {...getInputProps(FIELD.NAME)} />
      <NumberInput label="Amount:" {...getInputProps(FIELD.AMOUNT)} />

      <div className={styles.date}>
        <Checkbox label="Custom date" checked={isCustomDateChecked} onChange={toggleIsCustomDateChecked} />
        <DateInput label="Date:" ref={dateInputRef} disabled={!isCustomDateChecked} {...getInputProps(FIELD.DATE)} />
      </div>

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
}

export { AddExpenseForm };
