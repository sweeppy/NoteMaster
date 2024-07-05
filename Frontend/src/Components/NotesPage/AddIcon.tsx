const AddIcon = () => {
  return (
    <svg
      className="add-icon"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#F5F7F8" />
      <rect x="14" y="9" width="4" height="14" rx="2" fill="#45474B" />
      <rect
        x="9"
        y="18.4"
        width="4"
        height="14"
        rx="2"
        transform="rotate(-90 9 18.4)"
        fill="#45474B"
      />
    </svg>
  );
};

export default AddIcon;
