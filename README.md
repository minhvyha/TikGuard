<h1 align="center">TikGuard</h1>

<p align="center">
  <img src="https://github.com/minhvyha/TikGuard/assets/120470330/2650af17-0349-4e15-a44d-ad21b6c4e858" />
</p>

# About

TikGuard is a frontend interface developed using [Next.js](https://nextjs.org/) and deployed via [Vercel](https://vercel.com/). It demonstrates a potential machine learning model for detecting hate speech and offensive content in TikTok posts, captions, and comments.

TikGuard features a chatbot-like interface where users can upload text or media. The app then uses the selected API to identify and detect hateful, offensive, and inappropriate content in the uploaded attachments.

# Demo

To access TikGuard, simply launch your preferred browser and enter the following [URL](https://tikguard.vercel.app/):

```
https://tikguard.vercel.app/
```

You will see a landing page similar to this (Dark Mode):

![TikGuardLanding](https://github.com/minhvyha/TikGuard/assets/132450443/c3c61eb9-6b4d-4541-8bba-a04593a3ae6d)


# Supported Analysis

TikGuard supports the following types of analysis:
- **Text Analysis**: Using [Azure Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety), [Expert.ai](https://docs.expert.ai/nlapi/v2/), [HateHoundAPI](https://hate-hound-api.vercel.app/?ref=taaft&utm_source=taaft&utm_medium=referral), and [Sightengine](https://sightengine.com/docs/) APIs.
- **Image Analysis**: Using [Azure Content Moderator](https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview) and [Sightengine](https://sightengine.com/docs/) APIs.
- **Video Analysis**: Using [Sightengine](https://sightengine.com/docs/) API. This API is used for text analysis as it turns the audio in the video to text and for that text to be analyzed. 


## [Our Machine Learning Model](https://github.com/minhvyha/TikGuardAPI)
TikGuard uses a machine learning model built with Scikit-learn to determine the level of hate speech in a given text. This model leverages natural language processing techniques to analyze and classify text inputs, providing an effective tool for detecting and mitigating harmful content on social media platforms. You can find the code for the ML model [here](https://github.com/minhvyha/TikGuardAPI).

## Text Analysis 

As mentioned earlier, we use 4 different APIs to analyze the severity of text in different ways: 
### [Expert.ai](https://www.expert.ai/) 

Expert.ai measures the severity of text based on the frequency count of inappropriate words used in the context, these counts are also categorized as follows:
- Personal Insults 
- Racism
- Sexism
- Ableism
- Religous Hatred 
- Homophobia
- Classism 
- Body Shaming 
- Threat and Violence

### [Azure AI content safety](https://azure.microsoft.com/en-au/products/ai-services/ai-content-safety)

Azure AI content safety works similarly to Expert.ai however with a different categorization:
- Hate 
- Self-harm
- Sexual
- Violence
  
### [HateHoundAPI](https://hate-hound-api.vercel.app/)

HateHoundApi is different from the other APIs and measures the severity based on the probability of hateful and offensive content. Content is categorized as follows:
- Toxic
- Severe toxicity
- Obscene words
- Threats
- Insults
- Discrimination

### [Sightengine](https://sightengine.com/)

Sightengine also provides a probability however it is a much more robust API than hatehound. Content in the Sightengine API is categorized as follows:
- Sexual based words
- Discrimination
- Self-harm statements
- Insulting words
- Violent words
- Toxic words

## Image Analysis 
We use two kinds of APIs for image analysis:

### [Sightengine](https://sightengine.com/)
Sightengine provides a probability between 0-1 for images. Content in the Sightengine API is categorized as follows:
- Nudity
- Recreational drug usage
- Offensive
- Tobacco
- Self-harm
- Gambling
- Weaponry
- Alcohol
- Gore
- Violence
- Money

### [Azure Content Moderator](https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview)
Azure AI content moderator works with a percentage on two measures:
- Racism
- Sexual Content

## Video Analysis 

We only provide one kind of API for video analysis:

### [Sightengine](https://sightengine.com/)
Sightengine provides a probability between 0-1 for videos. This also turns the audio in videos into text to be analysed. Content in the Sightengine API is categorized as follows:
- Nudity
- Recreational drug usage
- Offensive
- Tobacco
- Self-harm
- Gambling
- Weaponry
- Alcohol
- Gore
- Violence
- Money

