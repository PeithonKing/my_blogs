---
layout: ../../layouts/post.astro
title: "LLaMA 3 vs ChatGPT: My Experience With the Two"
pubDate: 2024-05-27
# description: "Comparing LLaMA 3 and ChatGPT: My hands-on experience with the two conversational AI models, highlighting their strengths, weaknesses, and surprises."
author: "Aritra Mukhopadyay"
excerpt: "Comparing LLaMA 3 and ChatGPT: My hands-on experience with the two conversational AI models, highlighting their strengths, weaknesses, and surprises."
image:
  src:
  alt:
tags: ["llms", "prompts", "chatbots"]
---

Many struggle to express themselves in writing, often feeling confined by formal language structures. This is especially true for those who prefer conversational tones, but need to adapt to more professional settings. Some find solace in brainstorming with AI models, which can help spark innovative ideas. By providing minimal context, these interactions can lead to unexpected and fascinating tangents - a phenomenon many have experienced. One such individual is me. Hi! I am Aritra, and this is my first blog post. As someone who's eager to refine their writing style, I embarked on a journey to explore the capabilities of models like ChatGPT (GPT 3.5), LLaMA 3, Mixtral etc, seeking to uncover the strengths of each model.

The AI models I'll be comparing are ChatGPT, built on the <ht>GPT-3.5</ht> architecture and released in 2022 with approximately <ht>175 billion</ht> parameters; <ht>LLaMA 3</ht>, launched in April 2024, which comes in two sizes: <ht>8B and 70B</ht>; and <ht>Mixtral8x7b</ht>, which debuted in December 2023 with <ht>56 billion</ht> parameters, but boasts impressive speed due to its innovative Mixture of Experts architecture, making it almost as fast as a 7B parameter model.

For *ChatGPT*, I used the openai web interface available, but for the rest of the models I used [Ollama](https://ollama.com/) to self host the models. Before starting the comparizons, let us first state the rules made for the comparison:

- **<ht>Judgement Criteria</ht>**: We will judge the models solely based on their generated texts, language understanding, how accuractely they simulate emotions etc. **The judgements will be completely based on my personal opinions and expectations from the model.** My expectations for this blog is to see how good the model can simulate human like conversations.
- **<ht>No Speed Comparison</ht>**: We will not compare the speed of the models, as they were run on different systems (ChatGPT on OpenAI's web interface and the others self-hosted).
- **<ht>Temperature</ht>**: We will keep the temperature at <ht>0.2</ht> for all the ollama models.
- **<ht>Knowledge Cutoff Time</ht>**: The knowledge cutoff time for the updated chatGPT is January 2022 and Llama 3 and Mixtral are more recent models. So, we will not judge chatGPT if it fails to answer questions about recent events.

Now let us jump into the comparison.


## Vibe

Here we would be comparing the vibes of the models. By vibe, I mean the general tone of the model. Whether it is more professional or casual. If it values emotions and acts as friend or won't budge from ethics and would never forget to lecture you on the importance of ethical behavior.

To test this we described a fictional scenario to the model where the user does over speeding on a highway. Fortunately they remain unnoticed by the police and reach home safe. In this scenario although he is feeling a bit guilty, he also acknowledges that he had fun. We asked the models to respond to this scenario. The results from all the models are listed in the Appendix section.

1. **<ht>ChatGPT</ht>**: ChatGPT has a more professional vibe to it. It is more likely to give you a formal response to your queries. Generally it is not very good at simulating emotions.


## Knowledge

chatgpt slightly more for extremely niche topics


# Appendix

Just for reference I am adding these specifc outputs from the models. The **judgements of the models stated above are not just based on these outputs**. Those judgements are based on multiple interactions with the models over a prolonged period of time.

## Vibe

> **PROMPT:** Hey! You know what happened that day? I'm a bit ashamed/guilty to tell you this, but I'm also very excited... So, it was 5 am, national highway, totally empty... just me and my girlfriend on the bike. And, yeah, I took it up to 120 kmph in a 50 zone... I know, I know, it was stupid, but man, it was exhilarating! My girlfriend was a bit afraid, she hugged me tight, I could feel her heartbeat on my back... but she did enjoy it... I know it was stupid, but hey! we enjoyed it, we won't do that again (or would we?)

**OUPUTS**

- **ChatGPT**:
  > It sounds like quite the adrenaline rush! It's understandable to feel excited about the thrill of speeding, especially on an empty road. However, it's also essential to recognize the risks involved. Speed limits are set for a reason, primarily for safety. Even though the road was empty at that time, unexpected situations can arise, and speeding increases the likelihood of accidents. Your girlfriend's fear is a clear indicator that it was a risky move.
  >
  >That said, it's great that you're reflecting on the experience and acknowledging both the excitement and the potential dangers. Perhaps in the future, you can find safer ways to experience thrills together without compromising safety. Maybe exploring adventure sports or trying out exciting activities that provide an adrenaline rush in controlled environments could be alternatives worth considering!

- **LLaMA 3 70B**: