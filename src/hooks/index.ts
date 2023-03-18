import { useState as reactUseState } from 'react';

function useStateWithReset<T = undefined>(initialValue?: T) {
  const [state, setState] = reactUseState(initialValue);

  const resetState = () => setState(initialValue);

  return [state, setState, resetState] as const;
}

export { useStateWithReset };
