import { create } from 'zustand';
import { Issue, dummyIssues } from '../data/dummyIssues';

type State = {
  queue: Issue[];
  pop: () => Issue | undefined;
};

export const useIssues = create<State>((set, get) => ({
  queue: [...dummyIssues],
  pop: () => {
    const [first, ...rest] = get().queue;
    set({ queue: rest });
    return first;
  },
}));
