import { textApiPage, defaultValue, header, languageCode } from './api/text';
import { imageApiPage, imageHeader, defaultImageApi } from './api/image';
import { aiApiPage } from './api/ai';
import { videoApiPage } from './api/video';

let navLink = [
  {
    name: 'Text',
    href: '#text',
  },
  {
    name: 'Image',
    href: '#image',
  },
  {
    name: 'Video',
    href: '#video',
  },
  {
    name: 'AI',
    href: '#ai',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
  {
    name: 'GitHub Repo',
    href: 'https://github.com/minhvyha/TikGuard',
  },
];

export {
  textApiPage,
  videoApiPage,
  defaultValue,
  header,
  imageHeader,
  defaultImageApi,
  imageApiPage,
  aiApiPage,
  navLink,
  languageCode,
};
