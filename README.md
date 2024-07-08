## About TikGuard

TikGuard is a frontend interface developed using [Next.js](https://nextjs.org/) and deployed via [Vercel](https://vercel.com/). It demonstrates a potential machine learning model for detecting hate speech and offensive content in TikTok posts, captions, and comments.

TikGuard features a chatbot-like interface where users can upload text or media. The app then uses the selected API to identify and detect hateful, offensive, and inappropriate content in the uploaded attachments.

### Supported Analyses

TikGuard supports the following types of analysis:
- **Text Analysis**: Using [Azure Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety), [Expert.ai](https://docs.expert.ai/nlapi/v2/), [HateHoundAPI](https://hate-hound-api.vercel.app/?ref=taaft&utm_source=taaft&utm_medium=referral), and [Sightengine](https://sightengine.com/docs/) APIs.
- **Image Analysis**: Using [Azure Content Moderator](https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview) and [Sightengine](https://sightengine.com/docs/) APIs.
- **Video/Audio Analysis**: Using [Sightengine](https://sightengine.com/docs/) API. Videos and audios are first transcribed into text using [AssemblyAI](https://www.assemblyai.com/discover/products/speech-to-text?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_term=assemblyai&gad_source=1&gclid=EAIaIQobChMIl7ee28iOhwMV6RiDAx3DTgF6EAAYASABEgJwJfD_BwE) and [Speechflow](https://speechflow.io/) APIs before analysis.

## Quick Start

To access TikGuard, simply launch your preferred browser and enter the following URL:

```
https://tikguard.vercel.app/
```

You will see a landing page similar to this:

#TODO [Insert an image of the landing page here]



## Text Analysis 

As mentioned earlier, we use 4 different APIs to analyze the severity of text in different ways: 

 - #### Expert.ai 
	 - Expert.ai measures the severity of text based on the frequency count of inappropriate words used in the context, these counts are also categorized as follows:
		 - Personal Insults 
		 - Racism
		 - Sexism
		 - Ableism
		 - Religous Hatred 
		 - Homophobia
		 - Classism 
		 - Body Shaming 
		 - Threat and Violence
- #### Azure AI content safety
	- Azure AI content safety works similarly to Expert.ai however with a different categorization:
		- Hate 
		- Self-harm
		- Sexual
		- Violence
- #### HateHoundAPI
	- HateHoundapi is different from the other APIs and measures the severity based on the probability of hateful and offensive content. Content is categorized as follows:
   		- Toxic
        	- Severe toxicity
        	- Obscene words
           	- Threats
           	- Insults
           	- Discrimination
- #### Sightengine
  	- Sightengine also provides a probability however it is a much more robust API than hatehound. Content in the Sightengine API is categorized as follows:
  	  	- Sexual based words
  	  	- Discrimination
  	  	- Self-harm statements
  	  	- Insulting words
  	  	- Violent words
  	  	- Toxic words

## Image Analysis 

## Video Analysis 

## Our Machine Learning Model
