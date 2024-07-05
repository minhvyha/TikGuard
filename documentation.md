
## About TikGuard
TikGuard is a frontend interface developed using [NextJS](https://nextjs.org/) and deployed via [vercel](https://vercel.com/), to demonstrate a potential Machine Learning model for detecting hate speech and offensive content in TikTok posts, captions and comments. 

More specifically, TikGuard has a chatbot like interface wherein you can upload any text or media in the chatbox. TikGuard will then use your chosen API  to identify and detect hateful, offensive and inappropriate content in the uploaded attachement. 

Our app supports the following types of analysis:
- Text Analysis using [Azure content safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety), [Expert.ai](https://docs.expert.ai/nlapi/v2/), [HateHoundAPI](https://hate-hound-api.vercel.app/?ref=taaft&utm_source=taaft&utm_medium=referral) and [sightengine](https://sightengine.com/docs/)  APIs
- Image Analysis using [Azure Content Moderator](https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview) and [sightengine](https://sightengine.com/docs/) APIs
- Video/audio Analysis using [sightengine](https://sightengine.com/docs/) API
	- Video and audio are first transcribed into text using [AssemblyAI](https://www.assemblyai.com/discover/products/speech-to-text?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_term=assemblyai&gad_source=1&gclid=EAIaIQobChMIl7ee28iOhwMV6RiDAx3DTgF6EAAYASABEgJwJfD_BwE)  and [Speechflow](https://speechflow.io/)APIs before analysis.  
## Quick Start

To access TikGuard, simply launch your preferred browser and enter the following URL: 

```
tik-guard.vercel.app 
```

You will find a landing page similar to this: 

#TODO [Insert an image of the landing page here]

Each option in the landing page represents a different API: 

#TODO [ExpertAI] 
#TODO [hatehound] 
#TODO [sightengine] 
#TODO [AzureContent]







