import classNames from 'classnames';

const Button = ({ children, primary, secondary, shadow, ...rest }) => {
  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 rounded-[3px]',
    {
      'bg-primary text-white text-[16px] sm:text-[18px] font-semibold w-full inline-flex justify-center py-2':
        primary && !shadow,
      'bg-secondary text-white px-[32px] py-[12px] uppercase tracking-widest':
        secondary && !shadow,
      'bg-accent2 text-black': shadow,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, shadow }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!shadow);

    if (count > 1) {
      return new Error('Please select once');
    }
  },
};

export default Button;
