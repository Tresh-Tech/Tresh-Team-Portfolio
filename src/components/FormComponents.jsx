

const Form = ({ className = "", onSubmit, children , ...props }) => (
    <form {...props} onSubmit={onSubmit} className={` ${className}`}>
        {children}
    </form>
);

const Fieldset = ({ className = "", children, legend, message }) => (
  <>
    <fieldset
      className={`relative border border-black rounded-[10px] ${className}`}
    >
      <legend className="ml-4 px-4 poppins-400 text-l">{legend}</legend>
      {children}
    </fieldset>
    <p className="poppins-300-i text-l mt-2 text-[#000000b3]">{message}</p>
  </>
);

// Simple Input component
const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-2 rounded-[10px] bg-transparent outline-0 ${className}`}
  />
);

// Simple Textarea component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    className={`w-full px-4 py-2 border rounded-md outline-none min-h-32 bg-transparent ${className}`}
  />
);

// Simple Button component
const Button = ({ className = "", children, type, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-[12px] h-14 transition-colors w-full bg-blue-600 text-2xl poppins-500 text-white hover:bg-blue-700 ${className}`}
    type={type}
  >
    {children}
  </button>
);

const FieldInput = ({ className = "", legend, message, ...props }) => (
  <Fieldset className={`${className}`} legend={legend} message={message}>
    <Input {...props} />
  </Fieldset>
);

const FieldTextarea = ({ className = "", legend, message, ...props }) => (
  <Fieldset className={`${className}`} legend={legend} message={message}>
    <Textarea {...props} />
  </Fieldset>
);

export {FieldInput, FieldTextarea, Button, Form};