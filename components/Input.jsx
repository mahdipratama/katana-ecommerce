/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { findInputError } from '@/lib/findInputError';
import { isFormInvalid } from '@/lib/isFormValid';

import { AnimatePresence, motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex justify-start items-center font-semibold text-[14px] gap-[8px] text-red-500  rounded-[8px]"
      {...framer_error}>
      <img
        className="w-[13px] h-[13px]"
        src="/assets/icons/exclamation.png"
        aria-hidden
      />
      {message}
    </motion.p>
  );
};

function Input({ name, label, type, id, placeholder, validation }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="flex flex-col w-full gap-1 ">
      <div className="min-h-[20px]">
        <label className="hidden" htmlFor={id}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      <input
        className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
}

export default Input;
