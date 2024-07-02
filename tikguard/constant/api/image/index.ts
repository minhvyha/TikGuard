let imageApiPage = [
  {
    name: 'Azure Content Moderator',
    url: 'https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview',
    path: 'image/azurecontentmoderator',
    description:
      'Azure Content Moderator is an AI service for detecting and flagging offensive or undesirable content',
    category: 'Image Analysis',
    },
  {
    name: 'Sightengine',
    url: 'https://sightengine.com/',
    path: 'image/sightengine',
    description:
      'APIs to automatically assess, filter and moderate images,',
      category: 'Image Analysis',
  },
];

let imageHeader = {
  azure :{
    title: 'Azure Content Moderator',
    description: 'Azure Content Moderator is an AI service for detecting and flagging offensive or undesirable content',
  },
  sightengine: {
    title: 'Sightengine',
    description: 'APIs to automatically assess, filter and moderate images,',
  },
}

export {imageApiPage, imageHeader}