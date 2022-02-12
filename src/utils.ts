export const debounce = (func: (query: string) => void, wait: number) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(query: string) {
    const later = () => {
      clearTimeout(timeout);
      func(query);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
