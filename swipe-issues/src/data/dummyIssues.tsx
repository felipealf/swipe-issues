export interface Issue {
    id: string;
    title: string;
    number: number;
    repo: string;
    language: string;
    url: string;
  }
  
  export const dummyIssues: Issue[] = [
    {
      id: 'MDU6SXNzdWU1ODc3OTk=',
      title: 'Improve dark-mode contrast',
      number: 42,
      repo: 'vercel/next.js',
      language: 'TypeScript',
      url: 'https://github.com/vercel/next.js/issues/12345',
    },
    {
      id: 'MDU6SXNzdWU1ODc4MDA=',
      title: 'Add Czech localisation',
      number: 17,
      repo: 'facebook/react-native',
      language: 'JavaScript',
      url: 'https://github.com/facebook/react-native/issues/54321',
    },
    // … add 3-4 more
  ];
  