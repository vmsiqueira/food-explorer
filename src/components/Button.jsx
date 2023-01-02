export function Button({ type, title, size }) {
  return (
    <button 
      className="w-[348px] h-12 bg-red-500 hover:bg-red-800 transition-colors rounded-md font-heading font-medium text-sm"
      type={type}
    >
      {title}
    </button>
  )
}