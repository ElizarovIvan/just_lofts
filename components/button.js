export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  