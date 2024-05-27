type ComponentTypes = {
  htmlFor?: string | number;
  children?: any;
};
const CustomLabel = ({ htmlFor, children }: ComponentTypes) => {
  const htmlForString = htmlFor?.toString();
  return (
    <label
      style={{
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '24px',
        color: '#000',
      }}
      htmlFor={htmlForString}
    >
      {children}
    </label>
  );
};

export default CustomLabel;
