let header = {
  expertai :{
    title: 'ExpertAI',
    description: 'Advanced natural language API for understanding and analyzing text.',
  },
  azure :{
    title: 'Azure AI Content Safety',
    description: 'Safeguard user and AI-generated text and image content',
  },
  hatehoundapi :{
    title: 'HateHoundAPI',
    description: 'AI-powered API for detecting toxic comments swiftly and accurately.',
  },
  fukai :{
    title: 'Fuk.ai',
    description: 'Free AI-powered hate speech and profanity detection tool for content moderation.',
  },
}

let apiPage = [
  {
    name: 'expert.ai',
    url: 'https://developer.expert.ai',
    path: 'text/expertai',
    description:
      'Advanced natural language API for understanding and analyzing text.',
  },
  {
    name: 'Azure AI Content Safety',
    url: 'https://azure.microsoft.com/products/ai-services/ai-content-safety',
    path: 'text/azure',
    description: 'Safeguard user and AI-generated text and image content',
  },
  {
    name: 'HateHoundAPI',
    url: 'https://hate-hound-api.vercel.app/',
    path: 'text/hatehoundapi',
    description:
      'AI-powered API for detecting toxic comments swiftly and accurately.',
  },

  {
    name: 'Fuk.ai',
    url: 'https://fuk.ai',
    path: 'text/fukai',
    description:
      'Free AI-powered hate speech and profanity detection tool for content moderation.',
  },
];

let defaultValue = {
  expertai: [
    'Personal Insult',
    'Racism',
    'Sexism',
    'Ableism',
    'Religious Hatred',
    'Homophobia',
    'Classism',
    'Body Shaming',
    'Threat and Violence',
  ],
  azure: [
    'Hate',
    'SelfHarm',
    'Sexual',
    'Violence',
  ],
  hatehoundapi: [
    "toxic",
    "severe_toxic",
    "obscene",
    "threat",
    "insult",
    "identity_hate"
  ]
}

export { apiPage, defaultValue, header };
