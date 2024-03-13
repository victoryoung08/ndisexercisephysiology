export default function LeadForm({ style }) {
  const formInputs = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your Email",
    },
    {
      label: "Location/Suburb",
      type: "text",
      placeholder: "Enter your location",
    },
    {
      label: "State",
      type: "select",
      placeholder: "Select State",
      options: [
        {
          label: "New South Wales",
          value: "NSW",
        },
        {
          label: "Victoria",
          value: "VIC",
        },
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4 justify-center mx-auto p-12 bg-slate-100 overflow-hidden rounded-xl">
      <h3 style={style}>Get in touch</h3>
      <form
        action=""
        className="flex flex-col items-start justify-center gap-6 w-full"
      >
        {formInputs.map((input) => (
          <div className="w-full" key={input.label}>
            <label htmlFor={input.label} className="block">
              {input.label}
            </label>
            {input.type === "select" ? (
              <select id={input.label} className="">
                {input.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={input.label}
                type={input.type}
                placeholder={input.placeholder}
              />
            )}
          </div>
        ))}
        <button className="is-large" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
}
