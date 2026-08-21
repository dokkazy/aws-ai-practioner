window.TESTS_DATA = [
  {
    "file": "practice-test-1.md",
    "title": "Practice Test 1",
    "questions": [
      {
        "id": 1,
        "text": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts. An AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders. What should the AI practitioner include in the report to meet the transparency and explainability requirements?",
        "options": [
          {
            "key": "A",
            "text": "Code for model training"
          },
          {
            "key": "B",
            "text": "Partial dependence plots (PDPs)"
          },
          {
            "key": "C",
            "text": "Sample data for training"
          },
          {
            "key": "D",
            "text": "Model convergence tables"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Partial Dependence Plots (PDPs) are a powerful tool for understanding and explaining how the features in a machine learning model impact predictions. They are often used to meet transparency and explainability requirements for stakeholders. Let's go over why this is the correct choice, along with why the other options are less suitable: Partial Dependence Plots (PDPs) Purpose: PDPs show the relationship between a feature (or multiple features) and the model's predicted output, which helps to explain the effect of each feature on the model’s predictions. Explainability: By visualizing how each feature influences the prediction, stakeholders can better understand how the model works and why it makes certain predictions. This level of interpretability is essential for gaining trust from non-technical stakeholders. Transparency: PDPs improve transparency by providing an intuitive way to analyze and present the effects of individual features."
      },
      {
        "id": 2,
        "text": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Build an automatic named entity recognition system."
          },
          {
            "key": "B",
            "text": "Create a recommendation engine."
          },
          {
            "key": "C",
            "text": "Develop a summarization chatbot."
          },
          {
            "key": "D",
            "text": "Develop a multi-language translation system."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "A summarization chatbot can effectively read legal documents and generate concise versions that highlight key points. This directly addresses the requirement of extracting essential information, unlike the other options, which focus on different tasks."
      },
      {
        "id": 3,
        "text": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output. Which ML algorithm meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Decision trees"
          },
          {
            "key": "B",
            "text": "Linear regression"
          },
          {
            "key": "C",
            "text": "Logistic regression"
          },
          {
            "key": "D",
            "text": "Neural networks"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Decision trees provide clear transparency into how the model makes decisions, allowing easy documentation of how the inner mechanism influences the output. The other options do not offer this level of interpretability."
      },
      {
        "id": 4,
        "text": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly. Which evaluation metric should the company use to measure the model's performance?",
        "options": [
          {
            "key": "A",
            "text": "R-squared score"
          },
          {
            "key": "B",
            "text": "Accuracy"
          },
          {
            "key": "C",
            "text": "Root mean squared error (RMSE)"
          },
          {
            "key": "D",
            "text": "Learning rate"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Accuracy measures how many images were correctly classified out of the total images, making it the appropriate metric for evaluating the performance of an image classification model. The other metrics are either not suitable for classification tasks or not used for performance evaluation."
      },
      {
        "id": 5,
        "text": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language. Which solution will align the LLM response quality with the company's expectations?",
        "options": [
          {
            "key": "A",
            "text": "Adjust the prompt."
          },
          {
            "key": "B",
            "text": "Choose an LLM of a different size."
          },
          {
            "key": "C",
            "text": "Increase the temperature."
          },
          {
            "key": "D",
            "text": "Increase the Top K value."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Adjusting the prompt allows you to specify the desired length and language of the LLM's responses, making it suitable for tailoring the output to meet the company's needs. The other options do not directly control response length or language."
      },
      {
        "id": 6,
        "text": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Real-time inference"
          },
          {
            "key": "B",
            "text": "Serverless inference"
          },
          {
            "key": "C",
            "text": "Asynchronous inference"
          },
          {
            "key": "D",
            "text": "Batch transform"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Asynchronous inference is suitable for handling large input data and long processing times while still providing responses without blocking other requests. It allows for near real-time latency, whereas the other options are less suitable given the input size and processing time constraints."
      },
      {
        "id": 7,
        "text": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks. Which ML strategy meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Increase the number of epochs."
          },
          {
            "key": "B",
            "text": "Use transfer learning."
          },
          {
            "key": "C",
            "text": "Decrease the number of epochs."
          },
          {
            "key": "D",
            "text": "Use unsupervised learning."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Transfer learning allows the company to adapt pre-trained models for new, related tasks, saving time and resources compared to training models from scratch. The other options do not address the goal of reusing existing models."
      },
      {
        "id": 8,
        "text": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus"
          },
          {
            "key": "B",
            "text": "Data augmentation by using an Amazon Bedrock knowledge base"
          },
          {
            "key": "C",
            "text": "Image recognition by using Amazon Rekognition"
          },
          {
            "key": "D",
            "text": "Data summarization by using Amazon QuickSight Q"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Human-in-the-loop validation ensures high accuracy by involving human reviewers to verify and correct annotations, minimizing the risk of errors in the generated images. The other options are not directly relevant for ensuring annotation accuracy in image generation."
      },
      {
        "id": 9,
        "text": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3). The FM encounters a failure when attempting to access the S3 bucket data. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key."
          },
          {
            "key": "B",
            "text": "Set the access permissions for the S3 buckets to allow public access to enable access over the internet."
          },
          {
            "key": "C",
            "text": "Use prompt engineering techniques to tell the model to look for information in Amazon S3."
          },
          {
            "key": "D",
            "text": "Ensure that the S3 data does not contain sensitive information."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The foundation model needs the appropriate permissions to decrypt the encrypted data in the S3 bucket. Ensuring that the role used by Amazon Bedrock has permission to access and decrypt the data will resolve the access failure. The other options are not suitable for addressing the encryption and permission issue."
      },
      {
        "id": 10,
        "text": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Deploy optimized small language models (SLMs) on edge devices."
          },
          {
            "key": "B",
            "text": "Deploy optimized large language models (LLMs) on edge devices."
          },
          {
            "key": "C",
            "text": "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge"
          },
          {
            "key": "D",
            "text": "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Deploying optimized small language models (SLMs) directly on edge devices provides low latency for inference since the computation happens locally, avoiding the delays associated with network communication. The other options either increase latency or are less suitable for edge deployment."
      },
      {
        "id": 11,
        "text": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams. Which SageMaker feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Feature Store"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Data Wrangler"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Clarify"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Model Cards"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Feature Store is a centralized repository for storing and managing features, allowing multiple teams to share and reuse variables (features) for model development. The other options serve different purposes, such as data preprocessing or model documentation."
      },
      {
        "id": 12,
        "text": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer. What can Amazon Q Developer do to help the company meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Create software snippets, reference tracking, and open source license tracking."
          },
          {
            "key": "B",
            "text": "Run an application without provisioning or managing servers."
          },
          {
            "key": "C",
            "text": "Enable voice commands for coding and providing natural language search."
          },
          {
            "key": "D",
            "text": "Convert audio files to text documents by using ML models."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Q Developer is designed to assist developers by generating software snippets, tracking references, and managing open source licenses, which aligns with the company's goal of increasing productivity in software development. The other options do not match the intended use of Amazon Q Developer."
      },
      {
        "id": 13,
        "text": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic. Which AWS service or feature will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "AWS PrivateLink"
          },
          {
            "key": "B",
            "text": "Amazon Macie"
          },
          {
            "key": "C",
            "text": "Amazon CloudFront"
          },
          {
            "key": "D",
            "text": "Internet gateway"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "AWS PrivateLink allows secure, private connectivity between VPCs and AWS services without needing internet access, making it suitable for meeting regulatory compliance standards. The other options either do not provide private connectivity or require internet access."
      },
      {
        "id": 14,
        "text": "A company wants to develop an educational game where users answer questions such as the following: \"A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?\" Which solution meets these requirements with the LEAST operational overhead?",
        "options": [
          {
            "key": "A",
            "text": "Use supervised learning to create a regression model that will predict probability."
          },
          {
            "key": "B",
            "text": "Use reinforcement learning to train a model to return the probability."
          },
          {
            "key": "C",
            "text": "Use code that will calculate probability by using simple rules and computations."
          },
          {
            "key": "D",
            "text": "Use unsupervised learning to create a model that will estimate probability density."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Calculating probability in this scenario involves straightforward arithmetic, making it most efficient to use simple rules and computations. This approach requires the least operational overhead compared to using complex ML models, which are unnecessary for such basic tasks."
      },
      {
        "id": 15,
        "text": "Which metric measures the runtime efficiency of operating AI models?",
        "options": [
          {
            "key": "A",
            "text": "Customer satisfaction score (CSAT)"
          },
          {
            "key": "B",
            "text": "Training time for each epoch"
          },
          {
            "key": "C",
            "text": "Average response time"
          },
          {
            "key": "D",
            "text": "Number of training instances"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Average response time measures how quickly an AI model produces an output, which reflects the runtime efficiency of the model. The other options do not directly measure the efficiency of operating AI models."
      },
      {
        "id": 16,
        "text": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Build a conversational chatbot by using Amazon Lex."
          },
          {
            "key": "B",
            "text": "Transcribe call recordings by using Amazon Transcribe."
          },
          {
            "key": "C",
            "text": "Extract information from call recordings by using Amazon SageMaker Model Monitor."
          },
          {
            "key": "D",
            "text": "Create classification labels by using Amazon Comprehend."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Transcribe converts audio recordings into text, which allows for further analysis and extraction of key information from customer conversations. The other options do not directly handle audio transcription or extraction of information from audio."
      },
      {
        "id": 17,
        "text": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products. Which methodology should the company use to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning"
          },
          {
            "key": "B",
            "text": "Unsupervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Reinforcement learning from human feedback (RLHF)"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Unsupervised learning is suitable for analyzing unlabeled data and grouping it into clusters or tiers, which aligns with the company’s goal of classifying customers. The other methods require labeled data or are used for different types of problems."
      },
      {
        "id": 18,
        "text": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images. Which type of FM should the AI practitioner use to power the search application?",
        "options": [
          {
            "key": "A",
            "text": "Multi-modal embedding model"
          },
          {
            "key": "B",
            "text": "Text embedding model"
          },
          {
            "key": "C",
            "text": "Multi-modal generation model"
          },
          {
            "key": "D",
            "text": "Image generation model"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "A multi-modal embedding model can handle both text and image queries by embedding them into a shared space, enabling the search application to process and relate different data types. The other options are not suitable for handling both text and image inputs effectively."
      },
      {
        "id": 19,
        "text": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data. Which strategy will successfully fine-tune the model?",
        "options": [
          {
            "key": "A",
            "text": "Provide labeled data with the prompt field and the completion field."
          },
          {
            "key": "B",
            "text": "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format."
          },
          {
            "key": "C",
            "text": "Purchase Provisioned Throughput for Amazon Bedrock."
          },
          {
            "key": "D",
            "text": "Train the model on journals and textbooks."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Fine-tuning a foundation model involves training it with labeled data that contains both input prompts and corresponding expected completions to adjust the model’s behavior to fit the company’s needs. The other options are not directly related to the fine-tuning process using specific labeled data."
      },
      {
        "id": 20,
        "text": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Build a speech recognition system."
          },
          {
            "key": "B",
            "text": "Create a natural language processing (NLP) named entity recognition system."
          },
          {
            "key": "C",
            "text": "Develop an anomaly detection system."
          },
          {
            "key": "D",
            "text": "Create a fraud forecasting system."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "An anomaly detection system can identify suspicious behavior, such as IP addresses that deviate from expected patterns, which helps in protecting the application from threats. The other options are not designed for detecting suspicious IP addresses."
      },
      {
        "id": 21,
        "text": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
        "options": [
          {
            "key": "A",
            "text": "Integration with Amazon S3 for object storage"
          },
          {
            "key": "B",
            "text": "Support for geospatial indexing and queries"
          },
          {
            "key": "C",
            "text": "Scalable index management and nearest neighbor search capability"
          },
          {
            "key": "D",
            "text": "Ability to perform real-time analysis on streaming data"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The scalable index management and nearest neighbor search capability in Amazon OpenSearch Service enables companies to build vector database applications, which are crucial for tasks like similarity search in AI models. The other options do not specifically provide the vector search functionality."
      },
      {
        "id": 22,
        "text": "Which option is a use case for generative AI models?",
        "options": [
          {
            "key": "A",
            "text": "Improving network security by using intrusion detection systems"
          },
          {
            "key": "B",
            "text": "Creating photorealistic images from text descriptions for digital marketing"
          },
          {
            "key": "C",
            "text": "Enhancing database performance by using optimized indexing"
          },
          {
            "key": "D",
            "text": "Analyzing financial data to forecast stock market trends"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Generative AI models are used to create new content, such as photorealistic images from text descriptions, which is useful for digital marketing. The other options involve tasks better suited for analytical or detection systems rather than generative models."
      },
      {
        "id": 23,
        "text": "A company wants to build a generative AI application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt.   Which consideration will inform the company's decision?",
        "options": [
          {
            "key": "A",
            "text": "Temperature"
          },
          {
            "key": "B",
            "text": "Context window"
          },
          {
            "key": "C",
            "text": "Batch size"
          },
          {
            "key": "D",
            "text": "Model size"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "The context window determines how much information can fit into a single prompt. It specifies the number of tokens the foundation model can process at once, affecting the length of input that can be provided. The other options do not directly relate to prompt size."
      },
      {
        "id": 24,
        "text": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention. The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Set a low limit on the number of tokens the FM can produce."
          },
          {
            "key": "B",
            "text": "Use batch inferencing to process detailed responses."
          },
          {
            "key": "C",
            "text": "Experiment and refine the prompt until the FM produces the desired responses."
          },
          {
            "key": "D",
            "text": "Define a higher number for the temperature parameter."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Experimenting and refining the prompt allows you to guide the FM to produce responses that align with the company's desired tone. This approach helps to shape the behavior of the chatbot. The other options do not directly ensure adherence to company tone."
      },
      {
        "id": 25,
        "text": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative. Which prompt engineering strategy meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Provide examples of text passages with corresponding positive or negative labels in the prompt followed"
          },
          {
            "key": "B",
            "text": "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt."
          },
          {
            "key": "C",
            "text": "Provide the new text passage to be classified without any additional context or examples."
          },
          {
            "key": "D",
            "text": "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Providing examples with labels in the prompt helps the LLM understand the context of sentiment analysis, improving its accuracy in classifying the new text passage as positive or negative. The other options do not effectively guide the LLM for sentiment analysis."
      },
      {
        "id": 26,
        "text": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs.   Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
        "options": [
          {
            "key": "A",
            "text": "AWS Audit Manager"
          },
          {
            "key": "B",
            "text": "AWS CloudTrail"
          },
          {
            "key": "C",
            "text": "Amazon Fraud Detector"
          },
          {
            "key": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "AWS CloudTrail records API activity and provides a log of access attempts, which helps identify unauthorized users trying to access Amazon Bedrock. The other services are not specifically used for tracking unauthorized access attempts in this context."
      },
      {
        "id": 27,
        "text": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model. The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon SageMaker Serverless Inference to deploy the model."
          },
          {
            "key": "B",
            "text": "Use Amazon CloudFront to deploy the model."
          },
          {
            "key": "C",
            "text": "Use Amazon API Gateway to host the model and serve predictions."
          },
          {
            "key": "D",
            "text": "Use AWS Batch to host the model and serve predictions."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Serverless Inference allows the company to deploy the ML model without managing any underlying infrastructure, making it suitable for hosting the model and serving predictions. The other options do not directly provide serverless model deployment capabilities."
      },
      {
        "id": 28,
        "text": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available. Which AWS service can the company use to meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "AWS Audit Manager"
          },
          {
            "key": "B",
            "text": "AWS Artifact"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "AWS Data Exchange"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "AWS Artifact provides access to compliance reports, including those from independent software vendors (ISVs). The company can use AWS Artifact to receive notifications when new compliance reports are available. The other services are not used for accessing and notifying about compliance reports."
      },
      {
        "id": 29,
        "text": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information. Which action will reduce these risks?",
        "options": [
          {
            "key": "A",
            "text": "Create a prompt template that teaches the LLM to detect attack patterns."
          },
          {
            "key": "B",
            "text": "Increase the temperature parameter on invocation requests to the LLM."
          },
          {
            "key": "C",
            "text": "Avoid using LLMs that are not listed in Amazon SageMaker."
          },
          {
            "key": "D",
            "text": "Decrease the number of input tokens on invocations of the LLM."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Creating a prompt template that helps the LLM detect common attack patterns can reduce the risk of prompt injection and other undesirable manipulations. The other options do not effectively address the risk of prompt manipulation or unauthorized use."
      },
      {
        "id": 30,
        "text": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix. Which solution scope gives the company the MOST ownership of security responsibilities?",
        "options": [
          {
            "key": "A",
            "text": "Using a third-party enterprise application that has embedded generative AI features."
          },
          {
            "key": "B",
            "text": "Building an application by using an existing third-party generative AI foundation model (FM)."
          },
          {
            "key": "C",
            "text": "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business."
          },
          {
            "key": "D",
            "text": "Building and training a generative AI model from scratch by using specific data that a customer owns."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Building and training a generative AI model from scratch gives the company the most ownership of security responsibilities, as it involves full control over data, training, deployment, and security measures. The other options involve varying levels of dependency on third-party tools and services, which reduces the company's ownership of security."
      },
      {
        "id": 31,
        "text": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort. Which strategy meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Object detection"
          },
          {
            "key": "B",
            "text": "Anomaly detection"
          },
          {
            "key": "C",
            "text": "Named entity recognition"
          },
          {
            "key": "D",
            "text": "Inpainting"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Object detection is used to automatically identify and categorize objects (in this case, animals) in photos. It can detect the presence of animals and classify them accordingly. The other strategies are not suitable for identifying and categorizing animals in images."
      },
      {
        "id": 32,
        "text": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment. Which Amazon Bedrock pricing model meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "On-Demand"
          },
          {
            "key": "B",
            "text": "Model customization"
          },
          {
            "key": "C",
            "text": "Provisioned Throughput"
          },
          {
            "key": "D",
            "text": "Spot Instance"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The On-Demand pricing model provides flexibility without requiring a long-term commitment, allowing the company to pay only for the resources used, which fits well with a limited budget. The other options are either not relevant to pricing flexibility or involve specific resource commitments."
      },
      {
        "id": 33,
        "text": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team's VPC?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Personalize"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker JumpStart"
          },
          {
            "key": "C",
            "text": "PartyRock, an Amazon Bedrock Playground"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker endpoints"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker JumpStart provides pre-built models, including foundation models, that can be quickly deployed and consumed within a VPC, helping teams get started faster. The other options are not designed for deploying foundation models in this context."
      },
      {
        "id": 34,
        "text": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
        "options": [
          {
            "key": "A",
            "text": "Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege"
          },
          {
            "key": "B",
            "text": "Enable AWS Audit Manager for automatic model evaluation jobs."
          },
          {
            "key": "C",
            "text": "Enable Amazon Bedrock automatic model evaluation jobs."
          },
          {
            "key": "D",
            "text": "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Designing clear prompts using IAM roles with least privilege access ensures secure LLMs on Amazon Bedrock by minimizing directly address securing the use of LLMs."
      },
      {
        "id": 35,
        "text": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Generative pre-trained transformers (GPT)"
          },
          {
            "key": "B",
            "text": "Residual neural network"
          },
          {
            "key": "C",
            "text": "Support vector machine"
          },
          {
            "key": "D",
            "text": "WaveNet"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "GPT models are well-suited for converting natural language input into structured queries like SQL, making them ideal for building an AI-based application that translates employee-provided text into SQL queries. The other options are not designed for natural language understanding and query generation tasks."
      },
      {
        "id": 36,
        "text": "A company built a deep learning model for object detection and deployed the model to production. Which AI process occurs when the model analyzes a new image to identify objects?",
        "options": [
          {
            "key": "A",
            "text": "Training"
          },
          {
            "key": "B",
            "text": "Inference"
          },
          {
            "key": "C",
            "text": "Model deployment"
          },
          {
            "key": "D",
            "text": "Bias correction"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Inference is the process where the model analyzes new data (in this case, a new image) to make predictions or identify objects. The other options are related to different stages of the AI lifecycle, such as building or preparing the model."
      },
      {
        "id": 37,
        "text": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model. Which technique will solve the problem?",
        "options": [
          {
            "key": "A",
            "text": "Data augmentation for imbalanced classes"
          },
          {
            "key": "B",
            "text": "Model monitoring for class distribution"
          },
          {
            "key": "C",
            "text": "Retrieval Augmented Generation (RAG)"
          },
          {
            "key": "D",
            "text": "Watermark detection for images"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Data augmentation forimbalanced classes helps address bias by creating a more balanced dataset, ensuring that different attributes The other options do not directly address data"
      },
      {
        "id": 38,
        "text": "A company is using an Amazon Titan foundation model (FM) in Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources. Which solution will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Use a different FM."
          },
          {
            "key": "B",
            "text": "Choose a lower temperature value."
          },
          {
            "key": "C",
            "text": "Create an Amazon Bedrock knowledge base."
          },
          {
            "key": "D",
            "text": "Enable model invocation logging."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Creating an Amazon Bedrock knowledge base allows the company to supplement the foundation model with relevant data from their private data sources. This ensures that the model has access to the additional, context-specific information needed. The other options do not directly address supplementing the model with private data."
      },
      {
        "id": 39,
        "text": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Configure the security and compliance by using Amazon Inspector."
          },
          {
            "key": "B",
            "text": "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify."
          },
          {
            "key": "C",
            "text": "Encrypt and secure training data by using Amazon Macie."
          },
          {
            "key": "D",
            "text": "Gather more data. Use Amazon Rekognition to add custom labels to the data."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Clarify helps with transparency and explainability by generating metrics, reports, and examples that show how the model makes decisions, which is essential for meeting regulatory requirements. The other options are not directly related to improving the model's transparency or explainability."
      },
      {
        "id": 40,
        "text": "A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks. Which capabilities can the company show compliance for? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Auto scaling inference endpoints"
          },
          {
            "key": "B",
            "text": "Threat detection"
          },
          {
            "key": "C",
            "text": "Data protection"
          },
          {
            "key": "D",
            "text": "Cost optimization"
          },
          {
            "key": "E",
            "text": "Loosely coupled microservices"
          }
        ],
        "answer_str": "B, C",
        "answers": [
          "B",
          "C"
        ],
        "explanation": "Threat detection: Ensuring security measures are in place to detect threats is important for compliance with regulatory frameworks. Data protection: Proper data handling and protection measures are key compliance aspects, especially in applications dealing with sensitive customer information. The other options (auto scaling, cost optimization, and loosely coupled microservices) are more related to performance and architecture rather than regulatory compliance."
      },
      {
        "id": 41,
        "text": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Decrease the batch size."
          },
          {
            "key": "B",
            "text": "Increase the epochs."
          },
          {
            "key": "C",
            "text": "Decrease the epochs."
          },
          {
            "key": "D",
            "text": "Increase the temperature parameter."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Increasing the number of epochs allows the model to train for more iterations, improving its accuracy until the model reaches an optimal level. The other options are either less effective or unrelated to improving accuracy."
      },
      {
        "id": 42,
        "text": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions. Which business objective should the company use to evaluate the effect of the LLM chatbot?",
        "options": [
          {
            "key": "A",
            "text": "Website engagement rate"
          },
          {
            "key": "B",
            "text": "Average call duration"
          },
          {
            "key": "C",
            "text": "Corporate social responsibility"
          },
          {
            "key": "D",
            "text": "Regulatory compliance"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Reducing the average call duration directly indicates how effectively the LLM chatbot is helping call center employees answer customer questions, thus reducing the number of actions needed. The other options are not directly related to the performance of a call center chatbot."
      },
      {
        "id": 43,
        "text": "Which functionality does Amazon SageMaker Clarify provide?",
        "options": [
          {
            "key": "A",
            "text": "Integrates a Retrieval Augmented Generation (RAG) workflow"
          },
          {
            "key": "B",
            "text": "Monitors the quality of ML models in production"
          },
          {
            "key": "C",
            "text": "Documents critical details about ML models"
          },
          {
            "key": "D",
            "text": "Identifies potential bias during data preparation"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon SageMaker Clarify helps detect potential bias in datasets and models during data preparation, training, and deployment. It also provides tools for explainability. The other options are functionalities that do not directly match SageMaker Clarify's core features."
      },
      {
        "id": 44,
        "text": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly. What should the company do to mitigate this problem?",
        "options": [
          {
            "key": "A",
            "text": "Reduce the volume of data that is used in training."
          },
          {
            "key": "B",
            "text": "Add hyperparameters to the model."
          },
          {
            "key": "C",
            "text": "Increase the volume of data that is used in training."
          },
          {
            "key": "D",
            "text": "Increase the model training time."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Increasing the volume of data used in training helps the model generalize better to new, unseen data, reducing overfitting and improving performance in production. The other options either do not address the issue of model generalization or are unlikely to effectively solve the problem."
      },
      {
        "id": 45,
        "text": "An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products. Which AWS services meet these requirements? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Amazon Lex"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Bedrock"
          },
          {
            "key": "E",
            "text": "Amazon Rekognition"
          }
        ],
        "answer_str": "B, D",
        "answers": [
          "B",
          "D"
        ],
        "explanation": "Amazon Comprehend: This service is specifically designed for natural language processing (NLP) tasks, including sentiment analysis, making it ideal for analyzing customer reviews. Amazon Bedrock: Bedrock can be used to leverage foundation models, which can also be employed for sentiment analysis tasks. The other options are not suitable for sentiment analysis of written customer reviews."
      },
      {
        "id": 46,
        "text": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files.  Which solution meets these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock."
          },
          {
            "key": "B",
            "text": "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock."
          },
          {
            "key": "C",
            "text": "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts."
          },
          {
            "key": "D",
            "text": "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Using an Amazon Bedrock knowledge base allows the model to efficiently access relevant information from the PDF manuals when needed, reducing the cost compared to continuously fine-tuning a model or providing all PDFs as context in each prompt. This approach ensures that only necessary context is provided, making it cost-effective."
      },
      {
        "id": 47,
        "text": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals. Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
        "options": [
          {
            "key": "A",
            "text": "User-generated content"
          },
          {
            "key": "B",
            "text": "Moderation logs"
          },
          {
            "key": "C",
            "text": "Content moderation guidelines"
          },
          {
            "key": "D",
            "text": "Benchmark datasets"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Benchmark datasets are standardized datasets specifically designed for evaluating models for bias and fairness, allowing for efficient assessment with minimal administrative effort. The other options would require more manual processing and might not provide a consistent basis for evaluating bias and discrimination."
      },
      {
        "id": 48,
        "text": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Optimize the model's architecture and hyperparameters to improve the model's overall performance."
          },
          {
            "key": "B",
            "text": "Increase the model's complexity by adding more layers to the model's architecture."
          },
          {
            "key": "C",
            "text": "Create effective prompts that provide clear instructions and context to guide the model's generation."
          },
          {
            "key": "D",
            "text": "Select a large, diverse dataset to pre-train a new generative model."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Creating effective prompts helps guide the pre-trained generative AI model to produce content that aligns with the company's brand voice and messaging. The other options either involve model architecture changes or require extensive training, which are not necessary for aligning content generation."
      },
      {
        "id": 49,
        "text": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers.     Which actions should the company take to meet these requirements? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Detect imbalances or disparities in the data."
          },
          {
            "key": "B",
            "text": "Ensure that the model runs frequently."
          },
          {
            "key": "C",
            "text": "Evaluate the model's behavior so that the company can provide transparency to stakeholders."
          },
          {
            "key": "D",
            "text": "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model"
          },
          {
            "key": "E",
            "text": "Ensure that the model's inference time is within the accepted limits."
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Detect imbalances or disparities in the data: Identifying and addressing data imbalances helps minimize biases that could negatively affect customers. Evaluate the model's behavior so that the company can provide transparency to stakeholders: Evaluating the model and ensuring transparency is important for responsible AI usage, as it helps stakeholders understand how decisions are made. The other options are either not directly related to minimizing bias or do not address responsible AI development."
      },
      {
        "id": 50,
        "text": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality. Which action must the company take to use the custom model through Amazon Bedrock?",
        "options": [
          {
            "key": "A",
            "text": "Purchase Provisioned Throughput for the custom model."
          },
          {
            "key": "B",
            "text": "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference."
          },
          {
            "key": "C",
            "text": "Register the model with the Amazon SageMaker Model Registry."
          },
          {
            "key": "D",
            "text": "Grant access to the custom model in Amazon Bedrock."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "<https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html?form=MG0AV3>"
      }
    ]
  },
  {
    "file": "practice-test-2.md",
    "title": "Practice Test 2",
    "questions": [
      {
        "id": 1,
        "text": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer. What should the company do to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Evaluate the models by using built-in prompt datasets."
          },
          {
            "key": "B",
            "text": "Evaluate the models by using a human workforce and custom prompt datasets."
          },
          {
            "key": "C",
            "text": "Use public model leaderboards to identify the model."
          },
          {
            "key": "D",
            "text": "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Evaluating models using a human workforce and custom prompt datasets ensures that the model generates responses in the style that aligns with the company’s preferences. The other options either do not provide direct feedback on style preferences or are not specific enough for determining suitability based on employee preferences."
      },
      {
        "id": 2,
        "text": "A student at a university is copying content from generative AI to write essays. Which challenge of responsible generative AI does this scenario represent?",
        "options": [
          {
            "key": "A",
            "text": "Toxicity"
          },
          {
            "key": "B",
            "text": "Hallucinations"
          },
          {
            "key": "C",
            "text": "Plagiarism"
          },
          {
            "key": "D",
            "text": "Privacy"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Copying content from generative AI to write essays without proper attribution constitutes plagiarism, which is a key challenge of responsible generative AI. The other options are unrelated to this specific issue."
      },
      {
        "id": 3,
        "text": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process. Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EC2 C series"
          },
          {
            "key": "B",
            "text": "Amazon EC2 G series"
          },
          {
            "key": "C",
            "text": "Amazon EC2 P series"
          },
          {
            "key": "D",
            "text": "Amazon EC2 Trn series"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon EC2 Trn series instances (powered by AWS Trainium chips) are designed to provide efficient and environmentally friendly training of large machine learning models. They are optimized for energy efficiency, which reduces the environmental impact of the training process. The other instance types are not specifically optimized for minimizing environmental effects during training."
      },
      {
        "id": 4,
        "text": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children. Which AWS service or feature will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Rekognition"
          },
          {
            "key": "B",
            "text": "Amazon Bedrock playgrounds"
          },
          {
            "key": "C",
            "text": "Guardrails for Amazon Bedrock"
          },
          {
            "key": "D",
            "text": "Agents for Amazon Bedrock"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Guardrails for Amazon Bedrock can help ensure that the output generated by Amazon Bedrock is appropriate for children. Guardrails are used to apply content moderation, guidelines, and ensure safety by filtering potentially harmful or inappropriate content, which is essential when building an interactive application for children."
      },
      {
        "id": 5,
        "text": "A company is building an application that needs to generate synthetic data that is based on existing data. Which type of model can the company use to meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Generative adversarial network (GAN)"
          },
          {
            "key": "B",
            "text": "XGBoost"
          },
          {
            "key": "C",
            "text": "Residual neural network"
          },
          {
            "key": "D",
            "text": "WaveNet"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "GANs are specifically designed for generating synthetic data. They consist of two neural networks: a generator and a discriminator. The generator creates synthetic data that resembles the real data, and the discriminator tries to distinguish between real and generated data. This process enables GANs to generate realistic synthetic data, making them ideal for use cases where synthetic data is needed based on existing data."
      },
      {
        "id": 6,
        "text": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon"
          },
          {
            "key": "B",
            "text": "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast"
          },
          {
            "key": "C",
            "text": "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast"
          },
          {
            "key": "D",
            "text": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon SageMaker Canvas is a no-code tool that allows users to build ML models and make predictions without requiring programming knowledge. It is ideal for users with no coding experience, providing an easy interface for importing data and generating predictive models. The other options require more technical expertise or are not designed for no-code model building."
      },
      {
        "id": 7,
        "text": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group. Which type of bias is affecting the model output?",
        "options": [
          {
            "key": "A",
            "text": "Measurement bias"
          },
          {
            "key": "B",
            "text": "Sampling bias"
          },
          {
            "key": "C",
            "text": "Observer bias"
          },
          {
            "key": "D",
            "text": "Confirmation bias"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Sampling bias occurs when the training data is not representative of the overall population, leading to disproportionate flagging of specific groups. In this case, the model may have been trained on biased data that did not adequately represent all ethnic groups, resulting in skewed predictions. The other types of bias do not directly apply to the selection of training data or its representativeness."
      },
      {
        "id": 8,
        "text": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources. Which AI learning strategy provides this self-improvement capability?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning with a manually curated dataset of good responses and bad responses"
          },
          {
            "key": "B",
            "text": "Reinforcement learning with rewards for positive customer feedback"
          },
          {
            "key": "C",
            "text": "Unsupervised learning to find clusters of similar customer inquiries"
          },
          {
            "key": "D",
            "text": "Supervised learning with a continuously updated FAQ database"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Reinforcement learning allows the chatbot to learn from interactions by receiving rewards for positive customer feedback, which helps the model self-improve over time. The other options do not directly provide a mechanism for continuous self-improvement based on interactions."
      },
      {
        "id": 9,
        "text": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance. Which metric will help the AI practitioner evaluate the performance of the model?",
        "options": [
          {
            "key": "A",
            "text": "Confusion matrix"
          },
          {
            "key": "B",
            "text": "Correlation matrix"
          },
          {
            "key": "C",
            "text": "R2 score"
          },
          {
            "key": "D",
            "text": "Mean squared error (MSE)"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "A confusion matrix provides detailed insights into the performance of a classification model by showing the true positives, false positives, true negatives, and false negatives. This metric helps evaluate how well the model classifies the different types of materials in images. The other metrics are not as suitable for evaluating a classification model."
      },
      {
        "id": 10,
        "text": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Implement moderation APIs."
          },
          {
            "key": "B",
            "text": "Retrain the model with a general public dataset."
          },
          {
            "key": "C",
            "text": "Perform model validation."
          },
          {
            "key": "D",
            "text": "Automate user feedback integration."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Implementing moderation APIs can help filter and block inappropriate or unwanted images before they are returned by the chatbot. The other options do not directly address ensuring that the chatbot avoids returning inappropriate images."
      },
      {
        "id": 11,
        "text": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
        "options": [
          {
            "key": "A",
            "text": "Configure AWS CloudTrail as the logs destination for the model."
          },
          {
            "key": "B",
            "text": "Enable model invocation logging in Amazon Bedrock."
          },
          {
            "key": "C",
            "text": "Configure AWS Audit Manager as the logs destination for the model."
          },
          {
            "key": "D",
            "text": "Configure model invocation logging in Amazon EventBridge."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Enabling invocation logging in Amazon Bedrock allows the AI practitioner to monitor and store the input and output data for model invocations. The other options are not directly used for logging model invocations in Amazon Bedrock."
      },
      {
        "id": 12,
        "text": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Batch transform"
          },
          {
            "key": "B",
            "text": "Real-time inference"
          },
          {
            "key": "C",
            "text": "Serverless inference"
          },
          {
            "key": "D",
            "text": "Asynchronous inference"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Batch transform is ideal for processing large datasets that do not require real-time predictions. It allows the company to perform inference on multiple GBs of data efficiently without needing immediate results. The other options are more suitable for scenarios requiring real-time or near real-time access."
      },
      {
        "id": 13,
        "text": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
        "options": [
          {
            "key": "A",
            "text": "Embeddings"
          },
          {
            "key": "B",
            "text": "Tokens"
          },
          {
            "key": "C",
            "text": "Models"
          },
          {
            "key": "D",
            "text": "Binaries"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Embeddings are numerical representations of real-world objects and concepts that help AI and NLP models understand and work with textual information more effectively by capturing relationships and similarities between words or phrases. The other options do not describe this concept."
      },
      {
        "id": 14,
        "text": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
        "options": [
          {
            "key": "A",
            "text": "Use few-shot prompting to define how the FM can answer the questions."
          },
          {
            "key": "B",
            "text": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms."
          },
          {
            "key": "C",
            "text": "Change the FM inference parameters."
          },
          {
            "key": "D",
            "text": "Clean the research paper data to remove complex scientific terms."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Domain adaptation fine-tuning allows the FM to better understand the complex scientific terms by training it with domain-specific data, improving its performance on such specialized content. The other options are either insufficient or not directly related to handling complex terminology effectively."
      },
      {
        "id": 15,
        "text": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Decrease the temperature value."
          },
          {
            "key": "B",
            "text": "Increase the temperature value."
          },
          {
            "key": "C",
            "text": "Decrease the length of output tokens."
          },
          {
            "key": "D",
            "text": "Increase the maximum generation length."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Decreasing the temperature value makes the model's output more deterministic and consistent by reducing randomness in response generation. The other adjustments do not directly ensure consistent responses."
      },
      {
        "id": 16,
        "text": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data."
          },
          {
            "key": "B",
            "text": "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request."
          },
          {
            "key": "C",
            "text": "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data."
          },
          {
            "key": "D",
            "text": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Creating a custom Amazon Bedrock service role for each team with restricted access to only the team's customer data ensures compliance with the security policy, providing the necessary data segregation and access control. The other options do not effectively enforce team-specific access or may pose risks of broader access than allowed by the policy."
      },
      {
        "id": 17,
        "text": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential"
          },
          {
            "key": "B",
            "text": "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal"
          },
          {
            "key": "C",
            "text": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification"
          },
          {
            "key": "D",
            "text": "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Guardrails for Amazon Bedrock can be used to filter content and ensure that personal patient information is not included in model responses. Setting up Amazon CloudWatch alarms allows the company to receive notifications when policy violations occur. The other options are not specifically designed for filtering model output and monitoring policy compliance."
      },
      {
        "id": 18,
        "text": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing. Which AWS service meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Textract"
          },
          {
            "key": "B",
            "text": "Amazon Personalize"
          },
          {
            "key": "C",
            "text": "Amazon Lex"
          },
          {
            "key": "D",
            "text": "Amazon Transcribe"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Textract can extract text from PDF documents, making it suitable for converting resumes into plain text for further processing. The other services do not provide functionality to extract text from PDFs."
      },
      {
        "id": 19,
        "text": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question.     Which solution meets these requirements with the LEAST implementation effort?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tune the model by using additional training data that is representative of the various age ranges"
          },
          {
            "key": "B",
            "text": "Add a role description to the prompt context that instructs the model of the age range that the response"
          },
          {
            "key": "C",
            "text": "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for"
          },
          {
            "key": "D",
            "text": "Summarize the response text depending on the age of the user so that younger users receive shorter"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Adding a role description to the prompt is the simplest and most effective way to adjust the model's response style based on the user's age range. It requires minimal implementation effort and effectively tailors the output. The other options involve more complex processes, such as fine-tuning or additional reasoning steps."
      },
      {
        "id": 20,
        "text": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
        "options": [
          {
            "key": "A",
            "text": "Calculate the total cost of resources used by the model."
          },
          {
            "key": "B",
            "text": "Measure the model's accuracy against a predefined benchmark dataset."
          },
          {
            "key": "C",
            "text": "Count the number of layers in the neural network."
          },
          {
            "key": "D",
            "text": "Assess the color accuracy of images processed by the model."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Evaluating a foundation model's accuracy by measuring its performance against a predefined benchmark dataset is the standard approach for assessing accuracy in image classification tasks. The other options do not provide an appropriate measure of classification accuracy."
      },
      {
        "id": 21,
        "text": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Include fairness metrics for model evaluation."
          },
          {
            "key": "B",
            "text": "Adjust the temperature parameter of the model."
          },
          {
            "key": "C",
            "text": "Modify the training data to mitigate bias."
          },
          {
            "key": "D",
            "text": "Avoid overfitting on the training data."
          },
          {
            "key": "E",
            "text": "Apply prompt engineering techniques."
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Include fairness metrics for model evaluation: Fairness metrics help ensure that the LLM is unbiased and treats all cases equitably, which is essential for responsible AI use. Modify the training data to mitigate bias: Adjusting the training data helps reduce any inherent bias that might exist, contributing to a more fair and responsible LLM. The other options are related to general model optimization but do not directly address responsible AI practices regarding potential harms like bias and fairness."
      },
      {
        "id": 22,
        "text": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
        "options": [
          {
            "key": "A",
            "text": "Data pre-processing"
          },
          {
            "key": "B",
            "text": "Feature engineering"
          },
          {
            "key": "C",
            "text": "Exploratory data analysis"
          },
          {
            "key": "D",
            "text": "Hyperparameter tuning"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The company is currently in the exploratory data analysis (EDA) stage, which involves summarizing data through statistics, visualizations, and correlation matrices to understand the dataset before moving on to modeling. The other options are subsequent steps in the ML pipeline."
      },
      {
        "id": 23,
        "text": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Topic modeling"
          },
          {
            "key": "B",
            "text": "Clustering models"
          },
          {
            "key": "C",
            "text": "Prescriptive ML models"
          },
          {
            "key": "D",
            "text": "BERT-based models"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "BERT-based models are well-suited for natural language understanding tasks, including filling in missing words, because they use contextual information to predict missing tokens in a text. The other types of models are not designed for this type of text completion task."
      },
      {
        "id": 24,
        "text": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months. Which AWS solution should the company use to automate the generation of graphs?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Q in Amazon EC2"
          },
          {
            "key": "B",
            "text": "Amazon Q Developer"
          },
          {
            "key": "C",
            "text": "Amazon Q in Amazon QuickSight"
          },
          {
            "key": "D",
            "text": "Amazon Q in AWS Chatbot"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Q in Amazon QuickSight allows users to ask questions in natural language and automatically generate graphs and visualizations to display insights, such as total sales for top-selling products. The other options do not provide the same functionality for generating visual analytics."
      },
      {
        "id": 25,
        "text": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Pairs of chatbot responses and correct user intents"
          },
          {
            "key": "B",
            "text": "Pairs of user messages and correct chatbot responses"
          },
          {
            "key": "C",
            "text": "Pairs of user messages and correct user intents"
          },
          {
            "key": "D",
            "text": "Pairs of user intents and correct chatbot responses"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Few-shot learning involves providing the model with a few examples to help it understand how to perform the task. For intent detection, the company needs pairs of user messages and the correct user intents, which will help the LLM improve its accuracy in detecting user intents. The other options do not provide the necessary pairing for improving intent detection."
      },
      {
        "id": 26,
        "text": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Customize the model by using fine-tuning."
          },
          {
            "key": "B",
            "text": "Decrease the number of tokens in the prompt."
          },
          {
            "key": "C",
            "text": "Increase the number of tokens in the prompt."
          },
          {
            "key": "D",
            "text": "Use Provisioned Throughput."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Decreasing the number of tokens in the prompt reduces the amount of data being processed, thereby lowering the cost of using the model. Since the model is performing well, reducing the prompt size is a costeffective way to maintain performance while lowering expenses. The other options either increase costs or are unrelated to prompt size."
      },
      {
        "id": 27,
        "text": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
        "options": [
          {
            "key": "A",
            "text": "Data leakage"
          },
          {
            "key": "B",
            "text": "Hallucination"
          },
          {
            "key": "C",
            "text": "Overfitting"
          },
          {
            "key": "D",
            "text": "Underfitting"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Hallucination occurs when a large language model generates content that appears plausible and factual but is incorrect or fabricated. This is a common issue with LLMs. The other options do not describe this particular behavior."
      },
      {
        "id": 28,
        "text": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
        "options": [
          {
            "key": "A",
            "text": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom"
          },
          {
            "key": "B",
            "text": "Mask the confidential data in the inference responses by using dynamic data masking."
          },
          {
            "key": "C",
            "text": "Encrypt the confidential data in the inference responses by using Amazon SageMaker."
          },
          {
            "key": "D",
            "text": "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "To ensure that the custom model does not generate responses based on confidential data, the best approach is to retrain the model without including the confidential data. This prevents the model from learning patterns associated with that sensitive information, thereby avoiding its use in inference. The other options do not address the root cause of the issue—removing confidential data from the training process."
      },
      {
        "id": 29,
        "text": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Bilingual Evaluation Understudy (BLEU)"
          },
          {
            "key": "B",
            "text": "Root mean squared error (RMSE)"
          },
          {
            "key": "C",
            "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
          },
          {
            "key": "D",
            "text": "F1 score"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The BLEU (Bilingual Evaluation Understudy) score is a common metric used to evaluate the accuracy of machine translation by comparing the generated translation with reference translations. It is specifically designed for translation tasks, whereas the other metrics are not suitable for evaluating translation quality."
      },
      {
        "id": 30,
        "text": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
        "options": [
          {
            "key": "A",
            "text": "Generation of custom foundation models (FMs) to predict customer needs"
          },
          {
            "key": "B",
            "text": "Automation of repetitive tasks and orchestration of complex workflows"
          },
          {
            "key": "C",
            "text": "Automatically calling multiple foundation models (FMs) and consolidating the results"
          },
          {
            "key": "D",
            "text": "Selecting the foundation model (FM) based on predefined criteria and metrics"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock agents help automate repetitive tasks and orchestrate complex workflows, which is ideal for handling thousands of customer support inquiries efficiently. This helps reduce response times and improves productivity. The other options do not directly address automation and orchestration of tasks for customer support."
      },
      {
        "id": 31,
        "text": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
        "options": [
          {
            "key": "A",
            "text": "Helps decrease the model's complexity"
          },
          {
            "key": "B",
            "text": "Improves model performance over time"
          },
          {
            "key": "C",
            "text": "Decreases the training time requirement"
          },
          {
            "key": "D",
            "text": "Optimizes model inference time"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Ongoing pre-training helps enhance a foundation model's performance by continuously updating it with new data, thereby improving its ability to generalize and perform well on different tasks. The other options do not directly relate to the benefits of ongoing pre-training."
      },
      {
        "id": 32,
        "text": "What are tokens in the context of generative AI models?",
        "options": [
          {
            "key": "A",
            "text": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units."
          },
          {
            "key": "B",
            "text": "Tokens are the mathematical representations of words or concepts used in generative AI models."
          },
          {
            "key": "C",
            "text": "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks."
          },
          {
            "key": "D",
            "text": "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Tokens are the smallest units (e.g., words, subwords, or characters) that generative AI models use to process text. They form the basis of both the input given to and the output generated by the model. The other options do not accurately describe tokens in this context."
      },
      {
        "id": 33,
        "text": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
        "options": [
          {
            "key": "A",
            "text": "Number of tokens consumed"
          },
          {
            "key": "B",
            "text": "Temperature value"
          },
          {
            "key": "C",
            "text": "Amount of data used to train the LLM"
          },
          {
            "key": "D",
            "text": "Total training time"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Inference costs for large language models are typically driven by the number of tokens processed during input and output, as each token incurs computational resources. The other factors (temperature value, training data, and training time) do not directly impact inference costs."
      },
      {
        "id": 34,
        "text": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Inspector to monitor SageMaker Studio."
          },
          {
            "key": "B",
            "text": "Use Amazon Macie to monitor SageMaker Studio."
          },
          {
            "key": "C",
            "text": "Configure SageMaker to use a VPC with an S3 endpoint."
          },
          {
            "key": "D",
            "text": "Configure SageMaker to use S3 Glacier Deep Archive."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Configuring Amazon SageMaker to use a VPC with an S3 endpoint ensures secure, direct, and managed data flow between Amazon S3 and SageMaker Studio notebooks. This setup avoids public internet exposure and maintains data integrity during transfers. The other options do not provide a solution for managing the data flow in this context."
      },
      {
        "id": 35,
        "text": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon S3"
          },
          {
            "key": "B",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          },
          {
            "key": "C",
            "text": "Amazon Elastic File System (Amazon EFS)"
          },
          {
            "key": "D",
            "text": "AWS Snowcone"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon S3 is the most suitable AWS service for uploading and storing datasets used for validation purposes. It is highly scalable and integrated with Amazon Bedrock, allowing easy access to data for model validation. The other options do not provide the same level of integration or suitability for managing datasets in this context."
      },
      {
        "id": 36,
        "text": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
        "options": [
          {
            "key": "A",
            "text": "Prompted persona switches"
          },
          {
            "key": "B",
            "text": "Exploiting friendliness and trust"
          },
          {
            "key": "C",
            "text": "Ignoring the prompt template"
          },
          {
            "key": "D",
            "text": "Extracting the prompt template"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "\"Extracting the prompt template\" is a type of prompting attack that involves directly exposing the configured behavior or the underlying system prompt of a large language model (LLM). This attack can reveal sensitive details about how the model operates, including its internal instructions or restrictions, which are typically not intended to be disclosed to the user. Such an exposure can compromise the security and reliability of the LLM by making it vulnerable to further exploitation or misuse."
      },
      {
        "id": 37,
        "text": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock. Which security aspect will the company be responsible for?",
        "options": [
          {
            "key": "A",
            "text": "Patching and updating the versions of Amazon Bedrock"
          },
          {
            "key": "B",
            "text": "Protecting the infrastructure that hosts Amazon Bedrock"
          },
          {
            "key": "C",
            "text": "Securing the company's data in transit and at rest"
          },
          {
            "key": "D",
            "text": "Provisioning Amazon Bedrock within the company network"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "According to the AWS Shared Responsibility Model, AWS manages the security of the cloud, including the infrastructure and services like Amazon Bedrock. Customers are responsible for security in the cloud, which encompasses protecting their data, managing access controls, and configuring security settings for their applications. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/?nc1=h_ls"
      },
      {
        "id": 38,
        "text": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models. Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
        "options": [
          {
            "key": "A",
            "text": "Crowd-sourced evaluation"
          },
          {
            "key": "B",
            "text": "Automatic model evaluation"
          },
          {
            "key": "C",
            "text": "Model evaluation with human workers"
          },
          {
            "key": "D",
            "text": "Reinforcement learning from human feedback (RLHF)"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Automatic model evaluation is the strategy that allows the company to evaluate the LLMs with the least operational overhead. This method leverages automated tools and processes to assess the toxicity or quality of the generated output without the need for manual intervention or crowd-sourced input. By using pre-built evaluation metrics or toxicity detection models, the company can quickly and efficiently evaluate multiple models without the complexity and time required for human evaluations."
      },
      {
        "id": 39,
        "text": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content. Which security technique is this an example of?",
        "options": [
          {
            "key": "A",
            "text": "Fuzzing training data to find vulnerabilities"
          },
          {
            "key": "B",
            "text": "Denial of service (DoS)"
          },
          {
            "key": "C",
            "text": "Penetration testing with authorization"
          },
          {
            "key": "D",
            "text": "Jailbreak"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "\"Jailbreaking\" refers to attempts to bypass or disable the built-in safety features and restrictions of a system, in this case, a foundation model (FM). This technique involves trying to circumvent the safeguards that prevent the model from generating harmful or unsafe content. Jailbreaking is often performed to exploit vulnerabilities in a model’s filtering or safety protocols, making it a direct attempt to undermine its protections."
      },
      {
        "id": 40,
        "text": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Run SageMaker training and inference by using SageMaker Experiments."
          },
          {
            "key": "B",
            "text": "Run SageMaker training and inference by using network isolation."
          },
          {
            "key": "C",
            "text": "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities."
          },
          {
            "key": "D",
            "text": "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Network isolation in Amazon SageMaker allows you to run training and inference jobs in an environment that does not have access to the internet. This helps ensure that the data and the model do not inadvertently access external resources, meeting regulatory compliance requirements for isolated environments."
      },
      {
        "id": 41,
        "text": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
        "options": [
          {
            "key": "A",
            "text": "Create documents with the relevant information. Store the documents in Amazon S3."
          },
          {
            "key": "B",
            "text": "Use AWS AI Service Cards for transparency and understanding models."
          },
          {
            "key": "C",
            "text": "Create Amazon SageMaker Model Cards with intended uses and training and inference details."
          },
          {
            "key": "D",
            "text": "Create model training scripts. Commit the model training scripts to a Git repository."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon SageMaker Model Cards are designed to document the essential details about machine learning models, including their intended uses, training datasets, training parameters, evaluation metrics, and inference environment. This provides a centralized mechanism to store and audit the metadata of the models, which is ideal for the ML team's need to share and audit models effectively. T Key benefits of Amazon Model Cards:  SageMaker Standardized documentation of models' characteristics and intended use cases.  for auditing purposes. Transparency and traceability Integration with other AWS services for lifecycle management."
      },
      {
        "id": 42,
        "text": "A software company builds tools for customers. The company wants to use AI to increase software development productivity. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use a binary classification model to generate code reviews."
          },
          {
            "key": "B",
            "text": "Install code recommendation software in the company's developer tools."
          },
          {
            "key": "C",
            "text": "Install a code forecasting tool to predict potential code issues."
          },
          {
            "key": "D",
            "text": "Use a natural language processing (NLP) tool to generate code."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Natural language processing (NLP) tools can be used to generate code from high-level descriptions or suggestions, which can greatly enhance software development productivity. By leveraging NLP models, developers can automate repetitive coding tasks, generate code snippets, or even complete blocks of code based on natural language inputs. This can speed up development and reduce errors."
      },
      {
        "id": 43,
        "text": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Text data"
          },
          {
            "key": "B",
            "text": "Image data"
          },
          {
            "key": "C",
            "text": "Time series data"
          },
          {
            "key": "D",
            "text": "Binary data"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The Amazon SageMaker DeepAR forecasting algorithm is specifically designed for forecasting scalar (onedimensional) time series data using recurrent neural networks (RNNs). It excels when trained on datasets containing hundreds of related time series, enabling it to learn patterns across multiple series and provide accurate forecasts. Reference:"
      },
      {
        "id": 44,
        "text": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
        "options": [
          {
            "key": "A",
            "text": "Reduce the size of the training dataset."
          },
          {
            "key": "B",
            "text": "Ensure that the ML model predictions are consistent with historical results."
          },
          {
            "key": "C",
            "text": "Create a different ML model for each demographic group."
          },
          {
            "key": "D",
            "text": "Measure class imbalance on the training dataset. Adapt the training process accordingly."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "In machine learning, class imbalance occurs when certain classes are underrepresented in the training dataset, leading to biased model predictions. To develop an unbiased model, it's crucial to assess the class distribution and adjust the training process to address any imbalances. This can be achieved through techniques such as oversampling the minority class, undersampling the majority class, or applying class weights to ensure the model treats all classes equitably."
      },
      {
        "id": 45,
        "text": "Which prompting technique can protect against prompt injection attacks?",
        "options": [
          {
            "key": "A",
            "text": "Adversarial prompting"
          },
          {
            "key": "B",
            "text": "Zero-shot prompting"
          },
          {
            "key": "C",
            "text": "Least-to-most prompting"
          },
          {
            "key": "D",
            "text": "Chain-of-thought prompting"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Adversarial prompting is a technique used to defend against prompt injection attacks by crafting inputs that are specifically designed to identify and neutralize malicious prompts. This approach involves generating prompts that can detect and mitigate adversarial inputs, thereby enhancing the robustness of language models against such attacks."
      },
      {
        "id": 46,
        "text": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model's accuracy. Which metric should the company use for the evaluation?",
        "options": [
          {
            "key": "A",
            "text": "Precision"
          },
          {
            "key": "B",
            "text": "Time to first token"
          },
          {
            "key": "C",
            "text": "F1 score"
          },
          {
            "key": "D",
            "text": "Word error rate"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The F1 score is a metric that combines precision and recall into a single value, providing a balance between the two. It is particularly useful in evaluating models where there is an uneven class distribution, as it considers both false positives and false negatives. The F1 score is calculated as the harmonic mean of precision and recall: This metric ranges from 0 to 1, with 1 indicating perfect precision and recall. In the context of evaluating a fine-tuned large language model (LLM) for a help desk application, the F1 score is appropriate because it assesses the model's ability to provide accurate and relevant responses, balancing the trade-off between precision (correctness of responses) and recall (completeness of relevant responses). Reference:"
      },
      {
        "id": 47,
        "text": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images.     Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Increase the number of generation steps."
          },
          {
            "key": "B",
            "text": "Use the MASK_IMAGE_BLACK mask source option."
          },
          {
            "key": "C",
            "text": "Increase the classifier-free guidance (CFG) scale."
          },
          {
            "key": "D",
            "text": "Increase the prompt strength."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "In Stable Diffusion, the classifier-free guidance (CFG) scale parameter controls how closely the generated image adheres to the provided text prompt. By increasing the CFG scale, the model places more emphasis on the prompt, leading to images that more accurately reflect the specified details. However, it's important to balance this setting, as excessively high values can result in less diverse and potentially lowerquality images."
      },
      {
        "id": 48,
        "text": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers' inquiries. The company will use the company's policies as the knowledge base. Which solution will meet these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Retrain the LLM on the company policy data."
          },
          {
            "key": "B",
            "text": "Fine-tune the LLM on the company policy data."
          },
          {
            "key": "C",
            "text": "Implement Retrieval Augmented Generation (RAG) for in-context responses."
          },
          {
            "key": "D",
            "text": "Use pre-training and data augmentation on the company policy data."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Retrieval Augmented Generation (RAG) integrates external data sources with LLMs to produce accurate and contextually relevant outputs without the need for extensive retraining. By connecting the chatbot to the company's policy documents, RAG enables the model to retrieve pertinent information in real-time, ensuring responses are both accurate and up-to-date. This approach is cost-effective as it leverages existing data without the computational expenses associated with retraining or fine-tuning large models. Reference:"
      },
      {
        "id": 49,
        "text": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Q Developer"
          },
          {
            "key": "B",
            "text": "AWS Config"
          },
          {
            "key": "C",
            "text": "Amazon Personalize"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Q Developer is a tool designed to help users with minimal programming experience to work with AWS Glue. It provides a graphical user interface and simplifies the creation of data transformation and extraction workflows, allowing users to perform tasks like querying and working with data without needing deep coding skills."
      },
      {
        "id": 50,
        "text": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible AI does the company demonstrate in this scenario?",
        "options": [
          {
            "key": "A",
            "text": "Fairness"
          },
          {
            "key": "B",
            "text": "Explainability"
          },
          {
            "key": "C",
            "text": "Governance"
          },
          {
            "key": "D",
            "text": "Transparency"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The company is actively seeking to ensure that the image classification model is trained on a diverse dataset that includes insect bite photos from various genders, ethnicities, and geographic locations. This reflects the fairness principle of responsible AI, which emphasizes creating models that make unbiased decisions across all demographic groups. By including a diverse range of data, the company is aiming to prevent biases that could lead to inaccurate diagnoses or treatments for certain groups of people. Fairness ensures that AI systems do not discriminate based on race, gender, geography, or other characteristics."
      }
    ]
  },
  {
    "file": "practice-test-3.md",
    "title": "Practice Test 3",
    "questions": [
      {
        "id": 1,
        "text": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Clarify"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Data Wrangler"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Model Cards"
          },
          {
            "key": "D",
            "text": "AWS AI Service Cards"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Clarify is a tool that helps detect bias in machine learning models and provides explainability for model predictions. It allows users to understand the factors influencing a model's predictions and assess whether the model is fair across different demographic groups. This is exactly what the company needs for detecting bias and explaining model decisions, especially for high-stakes applications like loan approvals. Bias detection: SageMaker Clarify can analyze the training data and the model's predictions to identify and mitigate bias. Explainability: It provides features for explaining the predictions made by the model, which helps users understand the reasons behind the model's decisions."
      },
      {
        "id": 2,
        "text": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities.   Which metric should the company use to evaluate the accuracy of the model?",
        "options": [
          {
            "key": "A",
            "text": "Area Under the ROC Curve (AUC) score"
          },
          {
            "key": "B",
            "text": "F1 score"
          },
          {
            "key": "C",
            "text": "BERTScore"
          },
          {
            "key": "D",
            "text": "Real world knowledge (RWK) score"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "BERTScore is a metric specifically designed for evaluating the quality of text generated by models, particularly in tasks like text summarization and machine translation. It uses contextual embeddings from a pre-trained BERT model to compare generated text with reference text at the word level, making it wellsuited for evaluating the accuracy of generative text summarization models. BERTScore assesses the semantic similarity between the generated text and the reference text, providing a more nuanced evaluation compared to traditional methods that focus on exact matches."
      },
      {
        "id": 3,
        "text": "An AI practitioner wants to predict the classification of flowers based on petal length, petal width, sepal length, and sepal width. Which algorithm meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "K-nearest neighbors (k-NN)"
          },
          {
            "key": "B",
            "text": "K-mean"
          },
          {
            "key": "C",
            "text": "Autoregressive Integrated Moving Average (ARIMA)"
          },
          {
            "key": "D",
            "text": "Linear regression"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "K-nearest neighbors (k-NN) is a supervised learning algorithm used for classification tasks. It works by classifying a data point based on how its features (such as petal length, petal width, sepal length, and sepal width in this case) are similar to the data points in the training set. For this problem, where the task is to classify flowers based on their features, k-NN is an appropriate choice. k-NN is simple and effective for classification problems where the decision boundary is not necessarily linear, as it looks at the closest neighbors to make predictions."
      },
      {
        "id": 4,
        "text": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "key": "B",
            "text": "Amazon Inspector"
          },
          {
            "key": "C",
            "text": "Amazon Macie"
          },
          {
            "key": "D",
            "text": "AWS Secrets Manager"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "AWS Key Management Service (AWS KMS) is a fully managed service that allows you to create and control encryption keys used to encrypt your data. It is ideal for scenarios like this, where a company wants to use a custom, company-managed encryption key to protect model artifacts. AWS KMS allows you to securely manage keys for encrypting and decrypting data, and it integrates with various AWS services, including Amazon Bedrock. AWS KMS provides centralized key management, and it is designed for use cases that involve encrypting both data and artifacts, such as model customization jobs."
      },
      {
        "id": 5,
        "text": "A company wants to use large language models (LLMs) to produce code from natural language code comments. Which LLM feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Text summarization"
          },
          {
            "key": "B",
            "text": "Text generation"
          },
          {
            "key": "C",
            "text": "Text completion"
          },
          {
            "key": "D",
            "text": "Text classification"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Text generation is the feature of large language models (LLMs) that enables them to produce text based on a given prompt or input. In this scenario, the input would be natural language code comments, and the LLM would generate code based on those comments. This process involves understanding the context of the comment and generating corresponding code, which is the core functionality of text generation."
      },
      {
        "id": 6,
        "text": "A company is introducing a mobile app that helps users learn foreign languages. The app makes text more coherent by calling a large language model (LLM). The company collected a diverse dataset of text and supplemented the dataset with examples of more readable versions. The company wants the LLM output to resemble the provided examples. Which metric should the company use to assess whether the LLM meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Value of the loss function"
          },
          {
            "key": "B",
            "text": "Semantic robustness"
          },
          {
            "key": "C",
            "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score"
          },
          {
            "key": "D",
            "text": "Latency of the text generation"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "ROUGE is a set of metrics that evaluates the quality of summaries by comparing the overlap of n-grams, word sequences, and word pairs between the model output and reference examples. Since the company is working on a language model that improves the coherence of text and wants the output to resemble the provided examples (which are more readable versions of the original text), ROUGE is the most appropriate metric. It assesses how closely the generated text matches the reference text in terms of content and readability. ROUGE score is commonly used to evaluate the performance of models in tasks like summarization, where the goal is to ensure the generated text aligns closely with human-provided examples."
      },
      {
        "id": 7,
        "text": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts. The company wants to modify the prompt techniques to decrease unrelated images.     Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use zero-shot prompts."
          },
          {
            "key": "B",
            "text": "Use negative prompts."
          },
          {
            "key": "C",
            "text": "Use positive prompts."
          },
          {
            "key": "D",
            "text": "Use ambiguous prompts."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Negative prompts are used to explicitly instruct the model about what to avoid or not generate. By providing the model with specific guidance on what is not desired (e.g., by including terms or concepts that should not appear in the image), the model can better focus on generating relevant and related content. This technique can help reduce unrelated or irrelevant images by constraining the model's creative generation process."
      },
      {
        "id": 8,
        "text": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company’s products. Which prompt engineering technique meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product."
          },
          {
            "key": "B",
            "text": "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response."
          },
          {
            "key": "C",
            "text": "Include a diverse range of product features in each prompt to generate creative and unique descriptions."
          },
          {
            "key": "D",
            "text": "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "To generate concise, feature-specific descriptions for each product, the company should create prompts tailored to specific product categories. By highlighting the key features of each product category in the prompt, the model can focus on generating descriptions that are relevant and aligned with the unique attributes of each product. Additionally, specifying the desired output format and length ensures that the responses meet the company's requirements for conciseness and clarity. Tailored prompts help ensure the model generates relevant and accurate descriptions by focusing on the most important features of each product category. Desired output format and length ensure the responses are consistent and concise, as required."
      },
      {
        "id": 9,
        "text": "A company is developing an ML model to predict customer churn. The model performs well on the training dataset but does not accurately predict churn for new data. Which solution will resolve this issue?",
        "options": [
          {
            "key": "A",
            "text": "Decrease the regularization parameter to increase model complexity."
          },
          {
            "key": "B",
            "text": "Increase the regularization parameter to decrease model complexity."
          },
          {
            "key": "C",
            "text": "Add more features to the input data."
          },
          {
            "key": "D",
            "text": "Train the model for more epochs."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "The issue described is a common case of overfitting, where the model performs well on the training data but fails to generalize to new, unseen data. This suggests that the model is too complex and has learned to memorize the training data rather than identifying generalizable patterns. Increasing the regularization parameter helps to reduce model complexity by penalizing large weights, thereby encouraging simpler models that are less likely to overfit. This will improve the model's ability to generalize to new data, potentially improving performance on unseen customer data."
      },
      {
        "id": 10,
        "text": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database. Which AWS service will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Athena"
          },
          {
            "key": "B",
            "text": "Amazon Aurora PostgreSQL"
          },
          {
            "key": "C",
            "text": "Amazon Redshift"
          },
          {
            "key": "D",
            "text": "Amazon EMR"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Aurora PostgreSQL is a relational database service that supports a wide range of applications, including those that require vector-based operations. Specifically, Aurora PostgreSQL can be extended with vector search capabilities using extensions like pgvector. This extension allows you to store, index, and query vector embeddings from generative AI models, making it well-suited for the company's needs to store and query embeddings as vectors. pgvector is an extension for PostgreSQL that provides efficient similarity search for vector data, which is ideal for storing and querying embeddings."
      },
      {
        "id": 11,
        "text": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution's decisions to be explainable. Which factor relates to the explainability of the AI solution's decisions?",
        "options": [
          {
            "key": "A",
            "text": "Model complexity"
          },
          {
            "key": "B",
            "text": "Training time"
          },
          {
            "key": "C",
            "text": "Number of hyperparameters"
          },
          {
            "key": "D",
            "text": "Deployment time"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Model complexity plays a significant role in the explainability of an AI solution. Simpler models tend to be more explainable because it is easier to understand how they make decisions. For example, linear regression or decision trees are generally easier to interpret compared to more complex models like deep neural networks. In contrast, highly complex models, such as deep learning models, may provide very accurate results but are often considered \"black boxes,\" meaning their decision-making process is not easily interpretable. This lack of transparency makes it difficult to explain their decisions in a way that satisfies regulatory requirements or customer understanding."
      },
      {
        "id": 12,
        "text": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize."
          },
          {
            "key": "B",
            "text": "Create medication review summaries by using Amazon Bedrock large language models (LLMs)."
          },
          {
            "key": "C",
            "text": "Create a classification model that categorizes medications into different groups by using Amazon"
          },
          {
            "key": "D",
            "text": "Create medication review summaries by using Amazon Rekognition."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock provides access to a variety of large language models (LLMs), which are well-suited for tasks such as text summarization. By using LLMs, the pharmaceutical company can automatically generate concise and coherent summaries of user reviews for each medication. These models are designed to understand and process large amounts of text, making them ideal for summarizing user reviews in a clear and efficient manner. Amazon Bedrock allows the company to utilize LLMs that can generate summaries, which is exactly what is needed in this case."
      },
      {
        "id": 13,
        "text": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise. Which ML model type meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Logistic regression model"
          },
          {
            "key": "B",
            "text": "Deep learning model built on principal components"
          },
          {
            "key": "C",
            "text": "K-nearest neighbors (k-NN) model"
          },
          {
            "key": "D",
            "text": "Neural network"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "A logistic regression model is a simple, interpretable machine learning model that allows users to adjust the weights of different variables based on domain knowledge and expertise. Since logistic regression is based on a linear relationship between the input features and the predicted outcome, each feature has a corresponding weight (coefficient) that can be easily viewed and adjusted. This makes it a suitable choice for a lead prioritization application where domain experts need the ability to modify the model based on their knowledge."
      },
      {
        "id": 14,
        "text": "A company wants to build an ML application. ML workload. Each Select and order the correct steps from the following list to develop a well-architected step should be selected one time.\n\n    1. Deploy model\n    2. Develop model\n    3. Monitor model\n    4. Define business goal and frame ML problem",
        "options": [],
        "answer_str": "4 → 2 → 1 → 3",
        "answers": [
          "4 → 2 → 1 → 3"
        ],
        "explanation": "The typical sequence of steps in building an ML application involves: 1. Defining the business goal and framing the ML problem - This step involves understanding the business need and determining how ML can address it. 2. Developing the model - This involves selecting the appropriate algorithm, training the model, and evaluating it. 3. Deploying the model - Once the model is trained, it is deployed to production to serve predictions. 4. Monitoring the model - After deployment, the model is monitored to ensure it performs well over time and to detect any issues like model drift."
      },
      {
        "id": 15,
        "text": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
        "options": [
          {
            "key": "A",
            "text": "Evaluate the model's performance on benchmark datasets."
          },
          {
            "key": "B",
            "text": "Analyze the model's architecture and hyperparameters."
          },
          {
            "key": "C",
            "text": "Assess the model's alignment with specific use cases."
          },
          {
            "key": "D",
            "text": "Measure the computational resources required for model deployment."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "To determine if a foundation model (FM) effectively meets business objectives, the key is to assess how well the model aligns with the specific use cases or business goals it is intended to address. This involves evaluating whether the model can provide meaningful and accurate outputs relevant to the business’s needs, ensuring that it solves the real-world problems the company aims to tackle. Aligning with specific use cases ensures that the model’s capabilities are tailored to the tasks at hand, such as improving customer support, enhancing decision-making, or automating certain processes."
      },
      {
        "id": 16,
        "text": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning"
          },
          {
            "key": "B",
            "text": "Unsupervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Active learning"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "In supervised learning, the model is trained using a labeled dataset, where each image (input) has a corresponding label (the type of animal, in this case). Since the company already has a large dataset of labeled images, supervised learning is the most appropriate approach. The model learns to classify the images based on the features and labels in the training data."
      },
      {
        "id": 17,
        "text": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
        "options": [
          {
            "key": "A",
            "text": "Feature engineering"
          },
          {
            "key": "B",
            "text": "Model training"
          },
          {
            "key": "C",
            "text": "Data collection"
          },
          {
            "key": "D",
            "text": "Business goal identification"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The data collection phase of the ML lifecycle is the most relevant for determining compliance and regulatory requirements. During this phase, organizations must ensure that the data being collected and used for training the model complies with legal and regulatory standards, such as data privacy laws (e.g., GDPR, HIPAA), industry-specific regulations, and ethical considerations. The organization must also verify that they have the proper consent to use the data and that the data does not contain any biases or violate any regulations."
      },
      {
        "id": 18,
        "text": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model's accuracy. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon SageMaker and iterate with newer data."
          },
          {
            "key": "B",
            "text": "Use Amazon Personalize and iterate with historical data."
          },
          {
            "key": "C",
            "text": "Use Amazon CloudWatch to analyze customer orders."
          },
          {
            "key": "D",
            "text": "Use Amazon Rekognition to optimize the model."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "To continuously improve the accuracy of the machine learning model, Amazon SageMaker is the appropriate solution. SageMaker allows for efficient model training, deployment, and iteration. The company can use SageMaker to retrain the model regularly with newer data to account for changes in customer behavior, market trends, and other dynamic factors that may affect food waste and sales revenue. Iterating with newer data helps improve the model's performance over time, ensuring it remains accurate and relevant."
      },
      {
        "id": 19,
        "text": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Deploy the model on an Amazon EC2 instance."
          },
          {
            "key": "B",
            "text": "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster."
          },
          {
            "key": "C",
            "text": "Deploy the model by using Amazon CloudFront with an Amazon S3 integration."
          },
          {
            "key": "D",
            "text": "Deploy the model by using an Amazon SageMaker endpoint."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon SageMaker provides a fully managed service for deploying machine learning models at scale without needing to manage servers or infrastructure. When you deploy a model using Amazon SageMaker endpoints, it handles all the infrastructure, scaling, and maintenance aspects. This allows the company to focus solely on making predictions and integrating the model into their application, without worrying about managing servers or clusters. Amazon SageMaker simplifies the deployment of ML models by providing scalable, secure, and serverless endpoints, which are ideal for serving predictions in real-time."
      },
      {
        "id": 20,
        "text": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application."
          },
          {
            "key": "B",
            "text": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application."
          },
          {
            "key": "C",
            "text": "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application."
          },
          {
            "key": "D",
            "text": "Use Amazon SageMaker to build the application by training a new ML model."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock is a service that allows you to build AI-powered applications using foundation models (FMs) without managing infrastructure. Agents for Amazon Bedrock allows you to create intelligent agents that can help users interact with data and perform tasks such as checking open customer claims, identifying claim details, and accessing relevant documents. By using Amazon Bedrock knowledge bases, the AI agent can access relevant information (e.g., details about claims, documents, or customer data) in real time, and provide precise, context-driven answers based on the claim-related data stored in the knowledge base. Agents for Amazon Bedrock can help automate interactions by understanding and responding to natural language queries, making it a good fit for this use case. Amazon Bedrock knowledge bases enable the system to access stored information, documents, and details for specific claims efficiently."
      },
      {
        "id": 21,
        "text": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
        "options": [
          {
            "key": "A",
            "text": "Recommendation system"
          },
          {
            "key": "B",
            "text": "Natural language processing (NLP)"
          },
          {
            "key": "C",
            "text": "Computer vision"
          },
          {
            "key": "D",
            "text": "Image processing"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Computer vision is a field of AI that enables machines to interpret and understand visual information from the world, such as images and videos. In the case of the manufacturing company, the AI is used to inspect products for damages or defects, which involves analyzing visual data (e.g., product images or videos). This is a classic application of computer vision, where the AI system identifies and classifies objects or defects within images."
      },
      {
        "id": 22,
        "text": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning. IT meets these requirements? Which AWS service",
        "options": [
          {
            "key": "A",
            "text": "Amazon Personalize"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker"
          },
          {
            "key": "C",
            "text": "Amazon Athena"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker provides a fully managed environment for building, training, and deploying machine learning models, including automatic model tuning. Specifically, SageMaker includes a feature called Automatic Model Tuning (or Hyperparameter Optimization), which automates the process of finding the best hyperparameters for your machine learning model. This is essential when you want to optimize the model’s performance without manual intervention. Amazon SageMaker allows you to automate the training process and hyperparameter tuning, which aligns perfectly with the company's need for fully automated model tuning."
      },
      {
        "id": 23,
        "text": "Which technique can a company use to lower bias and toxicity in generative AI applications during the postprocessing ML lifecycle?",
        "options": [
          {
            "key": "A",
            "text": "Human-in-the-loop"
          },
          {
            "key": "B",
            "text": "Data augmentation"
          },
          {
            "key": "C",
            "text": "Feature engineering"
          },
          {
            "key": "D",
            "text": "Adversarial training"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Human-in-the-loop (HITL) is a technique where human oversight is involved in the decision-making process of AI systems. In the context of generative AI applications, HITL can be used during the postprocessing phase to identify and mitigate biases or toxic outputs. Humans can review and intervene when the model generates inappropriate or biased content, providing corrections or adjustments that help reduce the likelihood of toxicity and bias. This feedback loop helps refine and improve the model’s outputs over time."
      },
      {
        "id": 24,
        "text": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix this issue MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Include more diverse training data. Fine-tune the model again by using the new data."
          },
          {
            "key": "B",
            "text": "Use Retrieval Augmented Generation (RAG) with the fine-tuned model."
          },
          {
            "key": "C",
            "text": "Use AWS Trusted Advisor checks to eliminate bias."
          },
          {
            "key": "D",
            "text": "Pre-train a new LLM with more diverse training data."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The issue described is a case of bias in the model’s decision-making process, where the model is showing a preference for a specific demographic. The most cost-effective way to address this is to include more diverse training data that better represents all demographics. By fine-tuning the model with this more diverse data, you can help ensure that the model treats all demographic groups fairly and does not exhibit biased behavior. Fine-tuning the model with updated data ensures that the model learns from a more representative sample, improving fairness in its predictions without needing to completely retrain the model from scratch."
      },
      {
        "id": 25,
        "text": "A company has developed a large language model (LLM) and wants to make the LLM available to multiple internal teams. The company needs to select the appropriate inference mode for each team. <br/> Select the correct inference mode from the following list for each use case. Each inference mode should be selected one or more times.\n    - The company's chatbot needs predictions from the LLM to understand users' intent with minimal latency: (Batch transform or Real-time inference)\n    - A data processing job needs to query the LLM to process gigabytes of text files on weekends: (Batch transform or Real-time inference)\n    - The company's engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions: (Batch transform or Real-time inference)",
        "options": [],
        "answer_str": "Real-time inference | Batch transform | Real-time inference",
        "answers": [
          "Real-time inference | Batch transform | Real-time inference"
        ],
        "explanation": "The company’s chatbot needs predictions from the LLM to understand users’ intent with minimal latency - Real-time inference This scenario requires Real-time inference, as chatbots typically need immediate responses with low latency to provide an interactive user experience. A data processing job needs to query the LLM to process gigabytes of text files on weekends Batch transform This use case is best suited for Batch transform. Since the data processing job involves handling large amounts of data, and it is scheduled for weekends, batch processing can handle these large volumes efficiently. The company’s engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions - Real-time inference Real-time inference is the correct choice here, as the API needs to process text quickly and provide immediate responses, making real-time inference appropriate."
      },
      {
        "id": 26,
        "text": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost. Which combination of AWS service and storage class meets these requirements? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "AWS CloudTrail"
          },
          {
            "key": "B",
            "text": "Amazon CloudWatch"
          },
          {
            "key": "C",
            "text": "AWS Audit Manager"
          },
          {
            "key": "D",
            "text": "Amazon S3 Intelligent-Tiering"
          },
          {
            "key": "E",
            "text": "Amazon S3 Standard"
          }
        ],
        "answer_str": "A, D",
        "answers": [
          "A",
          "D"
        ],
        "explanation": "AWS CloudTrail is the AWS service designed for logging and monitoring API calls made to AWS services, including Amazon Bedrock. CloudTrail records detailed information about the API requests, including the identity of the requester, the time of the request, and the source IP address. This service is ideal for logging all requests made to the Amazon Bedrock API and meets the logging requirement. Amazon S3 Intelligent-Tiering is a storage class designed for storing data that has unpredictable access patterns. It automatically moves data between two access tiers (frequent and infrequent) based on usage, which helps reduce costs while ensuring data is still available when needed. For retaining logs securely over 5 years at the lowest possible cost, this storage class provides an efficient way to handle long-term storage requirements without incurring unnecessary costs."
      },
      {
        "id": 27,
        "text": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company’s ecommerce platform. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Personalize"
          },
          {
            "key": "B",
            "text": "Amazon Kendra"
          },
          {
            "key": "C",
            "text": "Amazon Rekognition"
          },
          {
            "key": "D",
            "text": "Amazon Transcribe"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Personalize is an AWS service specifically designed to build and deploy personalized recommendations for users. It allows you to create custom machine learning models for personalized user experiences, such as product recommendations, search results, or content suggestions. For an ecommerce company aiming to improve search engine recommendations tailored to each user, Amazon Personalize is the ideal choice as it leverages user behavior data and machine learning to deliver highly relevant recommendations."
      },
      {
        "id": 28,
        "text": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
        "options": [
          {
            "key": "A",
            "text": "Data residency"
          },
          {
            "key": "B",
            "text": "Data quality"
          },
          {
            "key": "C",
            "text": "Data discoverability"
          },
          {
            "key": "D",
            "text": "Data enrichment"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Data residency refers to the practice of ensuring that data is stored and processed within a specific geographical location to comply with regulations or policies. In this scenario, where sensitive patient data must not leave the country it originates from, implementing a data residency strategy ensures compliance with legal and regulatory requirements while protecting patient privacy. This approach is crucial for organizations like hospitals operating under strict data governance frameworks such as HIPAA or GDPR."
      },
      {
        "id": 29,
        "text": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "key": "B",
            "text": "AWS CloudTrail"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "AWS Config"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon CloudWatch is a highly scalable AWS service designed for monitoring and observability. It provides real-time monitoring of system metrics, including performance data for ML systems, such as resource utilization (CPU, memory, etc.), model inference latency, request counts, and errors. CloudWatch enables users to set up alarms, visualize metrics, and automate actions based on performance thresholds, making it ideal for monitoring the performance of ML systems."
      },
      {
        "id": 30,
        "text": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: “Ask the model to show its work by explaining its reasoning step by step.” Which prompt engineering technique is the AI practitioner using?",
        "options": [
          {
            "key": "A",
            "text": "Chain-of-thought prompting"
          },
          {
            "key": "B",
            "text": "Prompt injection"
          },
          {
            "key": "C",
            "text": "Few-shot prompting"
          },
          {
            "key": "D",
            "text": "Prompt templating"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Chain-of-thought prompting is a technique in prompt engineering where the AI model is encouraged to break down its reasoning process step by step to solve a problem, such as numerical reasoning challenges. By explicitly instructing the model to \"show its work by explaining its reasoning step by step,\" the practitioner ensures the model provides a logical sequence of intermediate steps leading to the solution. This improves the accuracy and transparency of the model's outputs, particularly for complex reasoning tasks."
      },
      {
        "id": 31,
        "text": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Q Developer"
          },
          {
            "key": "B",
            "text": "Amazon Bedrock"
          },
          {
            "key": "C",
            "text": "Amazon Kendra"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock is an AWS service that allows users to build and scale generative AI applications using foundation models (FMs) without the need to manage infrastructure. It provides access to pre-trained models from AWS and third-party providers, enabling developers to integrate generative AI capabilities like text generation, summarization, and question-answering into their applications. This makes Amazon Bedrock the ideal choice for building and scaling generative AI solutions."
      },
      {
        "id": 32,
        "text": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use a deep learning neural network to perform speech recognition."
          },
          {
            "key": "B",
            "text": "Build ML models to search for patterns in numeric data."
          },
          {
            "key": "C",
            "text": "Use generative AI summarization to generate human-like text."
          },
          {
            "key": "D",
            "text": "Build custom models for image classification and recognition."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "To meet the requirements of enabling the app to \"hear what users say and provide voice responses,\" the solution must include speech recognition and text-to-speech capabilities. Using a deep learning neural network for speech recognition allows the app to convert spoken words into text. Once the input is understood, text-to-speech systems can provide voice responses back to users. This approach is fundamental in applications that assist users with visual impairments by enabling interaction through spoken language."
      },
      {
        "id": 33,
        "text": "A company wants to enhance response quality for a large language model (LLM) for complex problemsolving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Few-shot prompting"
          },
          {
            "key": "B",
            "text": "Zero-shot prompting"
          },
          {
            "key": "C",
            "text": "Directional stimulus prompting"
          },
          {
            "key": "D",
            "text": "Chain-of-thought prompting"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Chain-of-thought prompting is specifically designed to enhance the reasoning capabilities of a large language model (LLM) by encouraging it to provide step-by-step explanations for complex problem-solving tasks. This approach helps the model break down a problem into smaller, logical steps, ensuring that the response is detailed, accurate, and easy to follow."
      },
      {
        "id": 34,
        "text": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Batch learning"
          },
          {
            "key": "B",
            "text": "Continuous pre-training"
          },
          {
            "key": "C",
            "text": "Static training"
          },
          {
            "key": "D",
            "text": "Latent training"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Continuous pre-training keeps a foundation model “always learning” by periodically (or even continuously) ingesting the latest data and updating its weights. This approach ensures the model stays current without having to start training from scratch every time new data arrives, unlike static or strictly batch-oriented methods."
      },
      {
        "id": 35,
        "text": "A company wants to develop ML applications to improve business operations and efficiency. Select the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.\n\n    - Binary classification: (Supervised learning or Unsupervised learning)\n    - Multi-class classification: (Supervised learning or Unsupervised learning)\n    - K-means clustering: (Supervised learning or Unsupervised learning)\n    - Dimensionality reduction: (Supervised learning or Unsupervised learning)",
        "options": [],
        "answer_str": "Supervised learning | Supervised learning | Unsupervised learning | Unsupervised learning",
        "answers": [
          "Supervised learning | Supervised learning | Unsupervised learning | Unsupervised learning"
        ],
        "explanation": "Binary classification: Supervised learning Binary classification involves predicting one of two possible outcomes, requiring labeled training data. Multi-class classification: Supervised learning Multi-class classification extends binary classification to predict one of several classes, also requiring labeled data. K-means clustering: Unsupervised learning K-means clustering is used to group data points into clusters without requiring labeled data. Dimensionality reduction: Unsupervised learning Dimensionality reduction techniques, like PCA, reduce the number of features in the dataset without needing labeled data."
      },
      {
        "id": 36,
        "text": "Which option is a characteristic of AI governance frameworks for building trust and deploying humancentered AI technologies?",
        "options": [
          {
            "key": "A",
            "text": "Expanding initiatives across business units to create long-term business value"
          },
          {
            "key": "B",
            "text": "Ensuring alignment with business standards, revenue goals, and stakeholder expectations"
          },
          {
            "key": "C",
            "text": "Overcoming challenges to drive business transformation and growth"
          },
          {
            "key": "D",
            "text": "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "AI governance frameworks focus on building trust and ensuring the responsible deployment of AI technologies. They establish clear policies and guidelines to address critical aspects such as data management, transparency, ethical considerations, responsible AI practices, and regulatory compliance. These frameworks help organizations mitigate risks, promote fairness, and foster public trust in AI systems, making them essential for creating human-centered AI technologies."
      },
      {
        "id": 37,
        "text": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company’s operations. Which metric should the company use?",
        "options": [
          {
            "key": "A",
            "text": "Number of customer inquiries handled"
          },
          {
            "key": "B",
            "text": "Cost of training AI models"
          },
          {
            "key": "C",
            "text": "Cost for each customer conversation"
          },
          {
            "key": "D",
            "text": "Average handled time (AHT)"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "To measure the financial effect of a generative AI chatbot on the company's operations, the cost for each customer conversation is the most relevant metric. It directly quantifies the operational expense associated with using the chatbot to handle customer inquiries. By analyzing this metric, the company can evaluate how much it spends per conversation and compare it to the cost of alternative methods (e.g., human agents), providing insight into the chatbot's financial efficiency and ROI."
      },
      {
        "id": 38,
        "text": "A company wants to find groups for its customers based on the customers’ demographics and buying patterns. Which algorithm should the company use to meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "K-nearest neighbors (k-NN)"
          },
          {
            "key": "B",
            "text": "K-means"
          },
          {
            "key": "C",
            "text": "Decision tree"
          },
          {
            "key": "D",
            "text": "Support vector machine"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "K-means is a clustering algorithm used in unsupervised learning to group data points into clusters based on their similarities. It is well-suited for finding patterns in customer demographics and buying behavior. The algorithm identifies groups (clusters) of customers with similar characteristics, which can then be used for targeted marketing, personalized recommendations, or segmentation."
      },
      {
        "id": 39,
        "text": "A company’s large language model (LLM) is experiencing hallucinations. How can the company decrease hallucinations?",
        "options": [
          {
            "key": "A",
            "text": "Set up Agents for Amazon Bedrock to supervise the model training."
          },
          {
            "key": "B",
            "text": "Use data pre-processing and remove any data that causes hallucinations."
          },
          {
            "key": "C",
            "text": "Decrease the temperature inference parameter for the model."
          },
          {
            "key": "D",
            "text": "Use a foundation model (FM) that is trained to not hallucinate."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "In the context of large language models (LLMs), the temperature inference parameter controls the randomness of the model's output. Lowering the temperature reduces randomness and makes the model's responses more deterministic and focused on the most likely predictions. By decreasing the temperature, the likelihood of hallucinations (when the model generates incorrect or nonsensical information) is reduced, as the model relies more on high-probability outputs rather than exploring less likely possibilities."
      },
      {
        "id": 40,
        "text": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times.     Which solution gives the LLM the ability to use content from previous customer messages?",
        "options": [
          {
            "key": "A",
            "text": "Turn on model invocation logging to collect messages."
          },
          {
            "key": "B",
            "text": "Add messages to the model prompt."
          },
          {
            "key": "C",
            "text": "Use Amazon Personalize to save conversation history."
          },
          {
            "key": "D",
            "text": "Use Provisioned Throughput for the LLM."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "To give a large language model (LLM) the ability to use content from previous customer messages in a conversation, the previous messages must be included in the model prompt. This technique is known as prompt engineering and allows the LLM to retain context by incorporating a history of the interaction within the prompt. By appending prior exchanges to the prompt, the model can generate contextually relevant and coherent responses throughout the multi-turn conversation."
      },
      {
        "id": 41,
        "text": "A company’s employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Macie"
          },
          {
            "key": "B",
            "text": "Amazon Transcribe"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock"
          },
          {
            "key": "D",
            "text": "Amazon Textract"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Bedrock enables companies to use foundation models (FMs) to build and automate tasks like generating product descriptions and recommendations. It allows the integration of pre-trained FMs into applications without managing infrastructure, making it an ideal choice for automating customer service tasks. With Amazon Bedrock, the company can leverage FMs to generate tailored recommendations based on customer locations, enabling dynamic and efficient customer interactions."
      },
      {
        "id": 42,
        "text": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found. Which solution fully automates the sensitive information detection process with the LEAST development effort?",
        "options": [
          {
            "key": "A",
            "text": "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon"
          },
          {
            "key": "B",
            "text": "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data."
          },
          {
            "key": "C",
            "text": "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon"
          },
          {
            "key": "D",
            "text": "Ask the customers to avoid sharing sensitive information in their email messages."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Macie is a fully managed data security and privacy service that uses machine learning to discover and protect sensitive data in Amazon S3. It can automatically detect sensitive information, such as personally identifiable information (PII) or financial data, and send alerts when such data is found. This approach minimizes development effort, as it does not require custom regex patterns or model development, and it is specifically designed to handle the scenario described."
      },
      {
        "id": 43,
        "text": "A company is training its employees on how to structure prompts for foundation models. Select the correct prompt engineering technique from the following list for each prompt template. Each prompt engineering technique should be selected one time.\n\n    - Prompt Template 1: \"Classify the following text as either sports, politics, or entertainment: [input text].\"\n    - Prompt Template 2: \"A [image 1], [image 2], and [image 3] are examples of [target class]. Classify the following image as [target class].\"\n    - Prompt Template 3: \"[Question.] [Instructions to follow.] Think step by step and walk me through your thinking.\"",
        "options": [],
        "answer_str": "Zero-shot learning | Few-shot learning | Chain-of-thought reasoning",
        "answers": [
          "Zero-shot learning | Few-shot learning | Chain-of-thought reasoning"
        ],
        "explanation": "\"Classify the following text as either sports, politics, or entertainment: [input text].\" Zero-shot learning involves providing the model with a task and no prior examples, relying entirely on the model's pre-trained knowledge to perform the classification. \"A [image 1], [image 2], and [image 3] are examples of [target class]. Classify the following image as [target class].\" Few-shot learning provides the model with a few examples (image 1, image 2, and image 3) before asking it to classify a new instance, helping it generalize to the task with minimal examples. \"[Question.] [Instructions to follow.] Think step by step and walk me through your thinking.\" Chain-of-thought reasoning encourages the model to break down its reasoning process step by step, enhancing its ability to solve complex tasks logically."
      },
      {
        "id": 44,
        "text": "How does top-p (nucleus) sampling differ from traditional temperature-based sampling?",
        "options": [
          {
            "key": "A",
            "text": "It samples from the smallest possible token set"
          },
          {
            "key": "B",
            "text": "It selectively samples from tokens that sum to probability p"
          },
          {
            "key": "C",
            "text": "It always produces deterministic output"
          },
          {
            "key": "D",
            "text": "It only works with specific model architectures"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Top-p (nucleus) sampling:\n      - Dynamically selects tokens based on cumulative probability\n      - More adaptive than fixed temperature or top-k approaches\n      - Balances quality and diversity\n      - Helps prevent unlikely token combinations\n\n      **Task Reference**: This relates to Task Statement 3.1 regarding inference parameters and their effects on model outputs."
      },
      {
        "id": 45,
        "text": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
        "options": [
          {
            "key": "A",
            "text": "Providing a visually appealing summary of a model’s capabilities."
          },
          {
            "key": "B",
            "text": "Standardizing information about a model’s purpose, performance, and limitations."
          },
          {
            "key": "C",
            "text": "Reducing the overall computational requirements of a model."
          },
          {
            "key": "D",
            "text": "Physically storing models for archival purposes."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Model Cards provide a structured way to document key details about AI models, including their intended use, performance metrics, and limitations. This helps organizations maintain transparency, compliance, and governance in AI model development, making it easier to track and manage models over time."
      },
      {
        "id": 46,
        "text": "What does an F1 score measure in the context of foundation model (FM) performance?",
        "options": [
          {
            "key": "A",
            "text": "Model precision and recall"
          },
          {
            "key": "B",
            "text": "Model speed in generating responses"
          },
          {
            "key": "C",
            "text": "Financial cost of operating the model"
          },
          {
            "key": "D",
            "text": "Energy efficiency of the model’s computations"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The F1 score is a metric used to evaluate the performance of a classification model by considering both precision (the proportion of correctly predicted positive cases out of all predicted positives) and recall (the proportion of correctly predicted positive cases out of all actual positives). It is the harmonic mean of precision and recall, ensuring a balance between them, especially when dealing with imbalanced datasets."
      },
      {
        "id": 47,
        "text": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions.  Which strategy will meet these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tune the model regularly."
          },
          {
            "key": "B",
            "text": "Train the model by using context data."
          },
          {
            "key": "C",
            "text": "Pre-train and benchmark the model by using context data."
          },
          {
            "key": "D",
            "text": "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Retrieval Augmented Generation (RAG) is a cost-effective approach that enhances AI-generated responses by retrieving relevant information from external knowledge sources. Instead of fine-tuning or re-training a model, RAG dynamically pulls the most recent and relevant data at query time. This is particularly useful in scenarios where questions change over time, ensuring that the AI/ML solution provides accurate and up-todate responses without requiring expensive and time-consuming model retraining. Prompt engineering techniques further optimize how the model processes and generates responses, improving accuracy and relevance."
      },
      {
        "id": 48,
        "text": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics. Which core dimension of responsible AI does this scenario present?",
        "options": [
          {
            "key": "A",
            "text": "Fairness"
          },
          {
            "key": "B",
            "text": "Explainability"
          },
          {
            "key": "C",
            "text": "Privacy and security"
          },
          {
            "key": "D",
            "text": "Transparency"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The scenario describes a dataset that is not representative of all demographics, which can lead to biased model predictions. This directly relates to fairness, a core dimension of responsible AI that ensures AI systems make unbiased and equitable decisions across different demographic groups. Addressing fairness involves techniques such as balanced dataset curation, bias detection, and mitigation strategies to ensure that the AI system does not discriminate against any group."
      },
      {
        "id": 49,
        "text": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed. Which AWS services will help the company assess compliance requirements? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "AWS Audit Manager"
          },
          {
            "key": "B",
            "text": "AWS Config"
          },
          {
            "key": "C",
            "text": "Amazon Inspector"
          },
          {
            "key": "D",
            "text": "Amazon CloudWatch"
          },
          {
            "key": "E",
            "text": "AWS CloudTrail"
          }
        ],
        "answer_str": "A, B",
        "answers": [
          "A",
          "B"
        ],
        "explanation": "AWS Audit Manager helps organizations continuously assess and audit compliance with industry regulations and internal policies by automating evidence collection and generating audit reports. This is essential for ensuring that the ML application meets regulatory requirements. AWS Config enables continuous monitoring and compliance checks by tracking configuration changes in AWS resources. It helps the company ensure that infrastructure settings align with security policies and industry standards."
      },
      {
        "id": 50,
        "text": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock. Which solution meets these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tune the FM."
          },
          {
            "key": "B",
            "text": "Retrain the FM."
          },
          {
            "key": "C",
            "text": "Train a new FM."
          },
          {
            "key": "D",
            "text": "Use prompt engineering."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Using prompt engineering is the most cost-effective way to improve the accuracy of responses from a generative AI application without retraining or fine-tuning the foundation model (FM). Prompt engineering involves carefully designing the input prompts to guide the model toward producing better responses, improving relevance and accuracy."
      }
    ]
  },
  {
    "file": "practice-test-4.md",
    "title": "Practice Test 4",
    "questions": [
      {
        "id": 1,
        "text": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Rekognition moderation."
          },
          {
            "key": "B",
            "text": "Use Amazon Comprehend toxicity detection."
          },
          {
            "key": "C",
            "text": "Use Amazon SageMaker built-in algorithms to train the model."
          },
          {
            "key": "D",
            "text": "Use Amazon Polly to monitor comments."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Comprehend provides pre-trained NLP models, including toxicity detection, to analyze text for harmful language. Since the company does not plan to use labeled data for training, Amazon Comprehend is a suitable choice because it does not require custom training and can automatically detect toxic or harmful content in comments."
      },
      {
        "id": 2,
        "text": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Rekognition"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Clarify"
          },
          {
            "key": "C",
            "text": "Amazon Comprehend"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Model Monitor"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon SageMaker Model Monitor continuously tracks deployed ML models in production to detect data drift, model drift, and quality degradation over time. This is essential for ensuring that the recommendation model remains accurate as viewer behavior and demographics change. Model Monitor helps detect anomalies and provides alerts when model performance deviates from expected trends, allowing the company to take corrective action."
      },
      {
        "id": 3,
        "text": "A company is deploying AI/ML models by using AWS services. The company wants to offer transparency into the models’ decision-making processes and provide explanations for the model outputs. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Model Cards"
          },
          {
            "key": "B",
            "text": "Amazon Rekognition"
          },
          {
            "key": "C",
            "text": "Amazon Comprehend"
          },
          {
            "key": "D",
            "text": "Amazon Lex"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Model Cards help provide transparency into AI/ML models by documenting key details such as model purpose, training data, performance metrics, and limitations. This documentation enables organizations to explain model outputs and decision-making processes, ensuring accountability and compliance with responsible AI principles."
      },
      {
        "id": 4,
        "text": "A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Translate"
          },
          {
            "key": "B",
            "text": "Amazon Transcribe"
          },
          {
            "key": "C",
            "text": "Amazon Kendra"
          },
          {
            "key": "D",
            "text": "Amazon Polly"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Translate is an AWS service that automates language translation using neural machine translation (NMT). It enables businesses to generate product descriptions in multiple languages quickly and accurately, making it the best choice for this task."
      },
      {
        "id": 5,
        "text": "Which AWS feature records details about ML instance data for governance and reporting?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Model Cards"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Debugger"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Model Monitor"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker JumpStart"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Model Cards record key details about machine learning models, including intended use, training data, evaluation metrics, and compliance information. They support governance and reporting by providing a standardized way to document model information throughout its lifecycle."
      },
      {
        "id": 6,
        "text": "A financial company is using ML to help with some of the company’s tasks. Which option is a use of generative AI models?",
        "options": [
          {
            "key": "A",
            "text": "Summarizing customer complaints"
          },
          {
            "key": "B",
            "text": "Classifying customers based on product usage"
          },
          {
            "key": "C",
            "text": "Segmenting customers based on type of investments"
          },
          {
            "key": "D",
            "text": "Forecasting revenue for certain products"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Generative AI models are designed to generate new content such as text, images, or audio. Summarizing customer complaints involves generating concise versions of longer texts, which is a task well-suited for generative AI models like large language models."
      },
      {
        "id": 7,
        "text": "A medical company wants to develop an AI application that can access structured patient records, extract relevant information, and generate concise summaries. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rulebased logic to structure and format summaries."
          },
          {
            "key": "B",
            "text": "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general"
          },
          {
            "key": "C",
            "text": "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction"
          },
          {
            "key": "D",
            "text": "Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Comprehend Medical is specifically designed to extract structured medical information (such as medication, condition, test results) from unstructured text. By applying rule-based logic afterward, relevant data can be formatted into concise summaries, meeting both the extraction and summarization needs."
      },
      {
        "id": 8,
        "text": "Which option describes embeddings in the context of AI?",
        "options": [
          {
            "key": "A",
            "text": "A method for compressing large datasets"
          },
          {
            "key": "B",
            "text": "An encryption method for securing sensitive data"
          },
          {
            "key": "C",
            "text": "A method for visualizing high-dimensional data"
          },
          {
            "key": "D",
            "text": "A numerical method for data representation in a reduced dimensionality space"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Embeddings are numerical representations of data, such as words, images, or items, in a lowerdimensional vector space. They capture semantic relationships and patterns in the data, enabling models to process and compare inputs efficiently."
      },
      {
        "id": 9,
        "text": "A company is building an AI application to summarize books of varying lengths. During testing, the application fails to summarize some books. Why does the application fail to summarize some books?",
        "options": [
          {
            "key": "A",
            "text": "The temperature is set too high."
          },
          {
            "key": "B",
            "text": "The selected model does not support fine-tuning."
          },
          {
            "key": "C",
            "text": "The Top P value is too high."
          },
          {
            "key": "D",
            "text": "The input tokens exceed the model’s context size."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Language models have a maximum context size, which limits the number of input tokens they can process at once. If a book's length exceeds this limit, the model cannot handle the full input, leading to failure in summarization."
      },
      {
        "id": 10,
        "text": "An airline company wants to build a conversational AI assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface. Which solution will meet these requirements with the LEAST development effort?",
        "options": [
          {
            "key": "A",
            "text": "Train models on Amazon SageMaker Autopilot."
          },
          {
            "key": "B",
            "text": "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock."
          },
          {
            "key": "C",
            "text": "Create a Python application by using Amazon Q Developer."
          },
          {
            "key": "D",
            "text": "Fine-tune models on Amazon SageMaker Jumpstart."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock allows quick integration of large language models with a knowledge base using RAG architecture, enabling accurate and dynamic responses based on up-to-date information. This approach requires minimal development effort while leveraging powerful generative capabilities."
      },
      {
        "id": 11,
        "text": "What is tokenization used for in natural language processing (NLP)?",
        "options": [
          {
            "key": "A",
            "text": "To encrypt text data"
          },
          {
            "key": "B",
            "text": "To compress text files"
          },
          {
            "key": "C",
            "text": "To break text into smaller units for processing"
          },
          {
            "key": "D",
            "text": "To translate text between languages"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Tokenization is the process of dividing text into smaller units, such as words, subwords, or characters, which can then be analyzed or processed by NLP models. It is a foundational step in preparing text data for machine learning."
      },
      {
        "id": 12,
        "text": "Which option is a characteristic of transformer-based language models?",
        "options": [
          {
            "key": "A",
            "text": "Transformer-based language models use convolutional layers to apply filters across an input to capture local patterns through filtered views."
          },
          {
            "key": "B",
            "text": "Transformer-based language models can process only text data."
          },
          {
            "key": "C",
            "text": "Transformer-based language models use self-attention mechanisms to capture contextual relationships."
          },
          {
            "key": "D",
            "text": "Transformer-based language models process data sequences one element at a time in cyclic iterations."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "A key characteristic of transformer models is their use of self-attention mechanisms, which allow the model to weigh the importance of different words in a sequence relative to each other, enabling a deep understanding of context and meaning across the entire input."
      },
      {
        "id": 13,
        "text": "A financial company is using AI systems to obtain customer credit scores as part of the loan application process. The company wants to expand to a new market in a different geographic area. The company must ensure that it can operate in that geographic area. Which compliance laws should the company review?",
        "options": [
          {
            "key": "A",
            "text": "Local health data protection laws"
          },
          {
            "key": "B",
            "text": "Local payment card data protection laws"
          },
          {
            "key": "C",
            "text": "Local education privacy laws"
          },
          {
            "key": "D",
            "text": "Local algorithm accountability laws"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "When deploying AI systems that affect individuals, such as credit scoring, companies must comply with local algorithm accountability laws. These laws regulate the fairness, transparency, and impact of automated decision-making, ensuring ethical use of AI in new geographic regions."
      },
      {
        "id": 14,
        "text": "A company uses Amazon Bedrock for its generative AI application. The company wants to use Amazon Bedrock Guardrails to detect and filter harmful user inputs and model-generated outputs. Which content categories can the guardrails filter? (Choose two.)",
        "options": [
          {
            "key": "A",
            "text": "Hate"
          },
          {
            "key": "B",
            "text": "Politics"
          },
          {
            "key": "C",
            "text": "Violence"
          },
          {
            "key": "D",
            "text": "Gambling"
          }
        ],
        "answer_str": "AC",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Amazon Bedrock Guardrails provide configurable content filters to detect and block harmful content in generative AI applications. Specifically, they include filters for categories such as Hate and Violence, among others. These filters can be applied to both user inputs and model-generated outputs to ensure that the AI application adheres to responsible AI practices and organizational policies."
      },
      {
        "id": 15,
        "text": "Which scenario describes a potential risk and limitation of prompt engineering in the context of a generative AI model?",
        "options": [
          {
            "key": "A",
            "text": "Prompt engineering does not ensure that the model always produces consistent and deterministic outputs, eliminating the need for validation."
          },
          {
            "key": "B",
            "text": "Prompt engineering could expose the model to vulnerabilities such as prompt injection attacks."
          },
          {
            "key": "C",
            "text": "Properly designed prompts reduce but do not eliminate the risk of data poisoning or model hijacking."
          },
          {
            "key": "D",
            "text": "Prompt engineering does not ensure that the model will consistently generate highly reliable outputs when working with real-world data."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "A key risk in prompt engineering is prompt injection, where attackers manipulate input prompts to alter a model's behavior or produce unintended outputs. This vulnerability arises from the model's sensitivity to input structure and content, making it a critical limitation in secure prompt design."
      },
      {
        "id": 16,
        "text": "A publishing company built a Retrieval Augmented Generation (RAG) based solution to give its users the ability to interact with published content. New content is published daily. The company wants to provide a near real-time experience to users. Which steps in the RAG pipeline should the company implement by using offline batch processing to meet these requirements? (Choose two.)",
        "options": [
          {
            "key": "A",
            "text": "Generation of content embeddings"
          },
          {
            "key": "B",
            "text": "Generation of embeddings for user queries"
          },
          {
            "key": "C",
            "text": "Creation of the search index"
          },
          {
            "key": "D",
            "text": "Retrieval of relevant content"
          }
        ],
        "answer_str": "AC",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Generation of content embeddings New or updated documents can be converted to vector representations in periodic batches (e.g., hourly, nightly). Because a document’s embedding remains fixed until the document itself changes, this step does not have to run for every user query, making it ideal for offline processing. Creation of the search index After new embeddings are produced, the vector (or hybrid) index can be rebuilt or incrementally updated in batch mode. Index construction is computationally intensive but happens infrequently relative to user requests, so running it offline avoids adding latency to real-time interactions."
      },
      {
        "id": 17,
        "text": "Which technique breaks a complex task into smaller subtasks that are sent sequentially to a large language model (LLM)?",
        "options": [
          {
            "key": "A",
            "text": "One-shot prompting"
          },
          {
            "key": "B",
            "text": "Prompt chaining"
          },
          {
            "key": "C",
            "text": "Tree of thoughts"
          },
          {
            "key": "D",
            "text": "Retrieval Augmented Generation (RAG)"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Prompt chaining involves breaking a complex task into smaller, manageable subtasks and passing them sequentially to a large language model. Each step builds upon the previous one, enabling more structured reasoning and improved task execution."
      },
      {
        "id": 18,
        "text": "An AI practitioner needs to improve the accuracy of a natural language generation model. The model uses rapidly changing inventory data. Which technique will improve the model's accuracy?",
        "options": [
          {
            "key": "A",
            "text": "Transfer learning"
          },
          {
            "key": "B",
            "text": "Federated learning"
          },
          {
            "key": "C",
            "text": "Retrieval Augmented Generation (RAG)"
          },
          {
            "key": "D",
            "text": "One-shot prompting"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "RAG enhances a language model by fetching up-to-date, domain-specific data (e.g., current inventory) at inference time and conditioning the generation on those facts, ensuring the output reflects the latest information and improving accuracy without retraining the core model."
      },
      {
        "id": 19,
        "text": "A company wants to collaborate with several research institutes to develop an AI model. The company needs standardized documentation of model version tracking and a record of model development. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Track the model changes by using Git."
          },
          {
            "key": "B",
            "text": "Track the model changes by using Amazon Fraud Detector."
          },
          {
            "key": "C",
            "text": "Track the model changes by using Amazon SageMaker Model Cards."
          },
          {
            "key": "D",
            "text": "Track the model changes by using Amazon Comprehend."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "SageMaker Model Cards provide a built-in framework for capturing and versioning key metadata, such as training data details, performance metrics, lineage, and intended use, for each model iteration. This standardized documentation and history of development fulfills requirements for model version tracking and auditable records."
      },
      {
        "id": 20,
        "text": "A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker JumpStart"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker HyperPod"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Data Wrangler"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Model Monitor"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "SageMaker Model Monitor continuously measures data and prediction quality in production, detects deviations from your model’s baseline (such as data drift or accuracy degradation), and alerts you so you can investigate and resolve issues promptly."
      },
      {
        "id": 21,
        "text": "What is the purpose of chunking in Retrieval Augmented Generation (RAG)?",
        "options": [
          {
            "key": "A",
            "text": "To avoid database storage limitations for large text documents by storing parts or chunks of the text"
          },
          {
            "key": "B",
            "text": "To improve efficiency by avoiding the need to convert large text into vector embeddings"
          },
          {
            "key": "C",
            "text": "To improve the contextual relevancy of results retrieved from the vector index"
          },
          {
            "key": "D",
            "text": "To decrease the cost of storage by storing parts or chunks of the text"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "By splitting large documents into smaller, semantically coherent chunks, the retrieval system can match and return only the most context-relevant segments for a given query, enhancing the precision and accuracy of the generated responses."
      },
      {
        "id": 22,
        "text": "A company is developing an editorial assistant application that uses generative AI. During the pilot phase, usage is low and application performance is not a concern. The company cannot predict application usage after the application is fully deployed and wants to minimize application costs. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use GPU-powered Amazon EC2 instances."
          },
          {
            "key": "B",
            "text": "Use Amazon Bedrock with Provisioned Throughput."
          },
          {
            "key": "C",
            "text": "Use Amazon Bedrock with On-Demand Throughput."
          },
          {
            "key": "D",
            "text": "Use Amazon SageMaker JumpStart."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "On-Demand Throughput in Bedrock charges only for the inference calls you actually make, with no upfront capacity commitment. This lets you start with minimal pilot usage and elastically handle unpredictable future load while keeping costs as low as possible."
      },
      {
        "id": 23,
        "text": "A company deployed a Retrieval Augmented Generation (RAG) application on Amazon Bedrock that gathers financial news to distribute in daily newsletters. Users have recently reported politically influenced ideas in the newsletters.   Which Amazon Bedrock guardrail can identify and filter this content?",
        "options": [
          {
            "key": "A",
            "text": "Word filters"
          },
          {
            "key": "B",
            "text": "Denied topics"
          },
          {
            "key": "C",
            "text": "Sensitive information filters"
          },
          {
            "key": "D",
            "text": "Content filters"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "The Denied topics guardrail lets you define high-level categories (such as politics) that the model must avoid. Bedrock enforces these rules during generation, filtering out any content related to politically influenced ideas."
      },
      {
        "id": 24,
        "text": "A financial company is developing a fraud detection system that flags potential fraud cases in credit card transactions. Employees will evaluate the flagged fraud cases. The company wants to minimize the amount of time the employees spend reviewing flagged fraud cases that are not actually fraudulent. Which evaluation metric meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Recall"
          },
          {
            "key": "B",
            "text": "Accuracy"
          },
          {
            "key": "C",
            "text": "Precision"
          },
          {
            "key": "D",
            "text": "Lift chart"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Precision measures the proportion of flagged cases that are truly fraudulent (TP / [TP + FP]). Maximizing precision reduces the number of false positives employees must review, cutting down wasted effort on nonfraudulent cases."
      },
      {
        "id": 25,
        "text": "A company designed an AI-powered agent to answer customer inquiries based on product manuals. Which strategy can improve customer confidence levels in the AI-powered agent's responses?",
        "options": [
          {
            "key": "A",
            "text": "Writing the confidence level in the response"
          },
          {
            "key": "B",
            "text": "Including referenced product manual links in the response"
          },
          {
            "key": "C",
            "text": "Designing an agent avatar that looks like a computer"
          },
          {
            "key": "D",
            "text": "Training the agent to respond in the company's language style"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Providing direct links to the exact sections of the product manual that support each answer lets customers verify and trust the information, boosting confidence in the AI agent’s responses."
      },
      {
        "id": 26,
        "text": "A hospital developed an AI system to provide personalized treatment recommendations for patients. The AI system must provide the rationale behind the recommendations and make the insights accessible to doctors and patients.     Which human-centered design principle does this scenario present?",
        "options": [
          {
            "key": "A",
            "text": "Explainability"
          },
          {
            "key": "B",
            "text": "Privacy and security"
          },
          {
            "key": "C",
            "text": "Fairness"
          },
          {
            "key": "D",
            "text": "Data governance"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Explainability ensures that the AI system reveals the reasoning behind its recommendations in an understandable way, making insights transparent and accessible to both doctors and patients."
      },
      {
        "id": 27,
        "text": "Which statement presents an advantage of using Retrieval Augmented Generation (RAG) for natural language processing (NLP) tasks?",
        "options": [
          {
            "key": "A",
            "text": "RAG can use external knowledge sources to generate more accurate and informative responses."
          },
          {
            "key": "B",
            "text": "RAG is designed to improve the speed of language model training."
          },
          {
            "key": "C",
            "text": "RAG is primarily used for speech recognition tasks."
          },
          {
            "key": "D",
            "text": "RAG is a technique for data augmentation in computer vision tasks."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "By retrieving relevant documents or data at inference time and conditioning the generation on that external knowledge, RAG enriches model outputs with up-to-date, domain-specific information, boosting accuracy and informativeness without retraining the core model."
      },
      {
        "id": 28,
        "text": "A company has created a custom model by fine-tuning an existing large language model (LLM) from Amazon Bedrock. The company wants to deploy the model to production and use the model to handle a steady rate of requests each minute. Which solution meets these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Deploy the model by using an Amazon EC2 compute optimized instance."
          },
          {
            "key": "B",
            "text": "Use the model with on-demand throughput on Amazon Bedrock."
          },
          {
            "key": "C",
            "text": "Store the model in Amazon S3 and host the model by using AWS Lambda."
          },
          {
            "key": "D",
            "text": "Purchase Provisioned Throughput for the model on Amazon Bedrock."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Provisioned Throughput is priced lower per request when you have a predictable, steady volume of calls. By committing to a fixed throughput level, you secure the necessary capacity at a reduced unit cost compared to on-demand, making it the most cost-effective choice for steady-minute usage."
      },
      {
        "id": 29,
        "text": "Which technique involves training AI models on labeled datasets to adapt the models to specific industry terminology and requirements?",
        "options": [
          {
            "key": "A",
            "text": "Data augmentation"
          },
          {
            "key": "B",
            "text": "Fine-tuning"
          },
          {
            "key": "C",
            "text": "Model quantization"
          },
          {
            "key": "D",
            "text": "Continuous pre-training"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Fine-tuning takes a pre-trained model and continues training it on a labeled, domain-specific dataset so the model learns industry terminology and task nuances directly from that specialized data."
      },
      {
        "id": 30,
        "text": "A company is creating an agent for its application by using Amazon Bedrock Agents. The agent is performing well, but the company wants to improve the agent’s accuracy by providing some specific examples. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Modify the advanced prompts for the agent to include the examples."
          },
          {
            "key": "B",
            "text": "Create a guardrail for the agent that includes the examples."
          },
          {
            "key": "C",
            "text": "Use Amazon SageMaker Ground Truth to label the examples."
          },
          {
            "key": "D",
            "text": "Run a script in AWS Lambda that adds the examples to the training dataset."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Embedding specific input–output examples directly into the agent’s advanced prompt (few-shot prompting) guides the model toward more accurate behavior without retraining or additional tooling."
      },
      {
        "id": 31,
        "text": "Which option is a benefit of using infrastructure as code (IaC) in machine learning operations (MLOps)?",
        "options": [
          {
            "key": "A",
            "text": "IaC eliminates the need for hyperparameter tuning."
          },
          {
            "key": "B",
            "text": "IaC always provisions powerful compute instances, contributing to the training of more accurate models."
          },
          {
            "key": "C",
            "text": "IaC streamlines the deployment of scalable and consistent ML workloads in cloud environments."
          },
          {
            "key": "D",
            "text": "IaC minimizes overall expenses by deploying only low-cost instances."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "By describing infrastructure in code, teams can version, automate, and repeatably provision resources, ensuring that ML training and inference environments are consistent, scalable, and easy to reproduce across development, testing, and production."
      },
      {
        "id": 32,
        "text": "A company wants to fine-tune a foundation model (FM) to answer questions for a specific domain. The company wants to use instruction-based fine-tuning. How should the company prepare the training data?",
        "options": [
          {
            "key": "A",
            "text": "Gather company internal documents and industry-specific materials. Merge the documents and"
          },
          {
            "key": "B",
            "text": "Collect external company reviews from various online sources. Manually label each review as either"
          },
          {
            "key": "C",
            "text": "Create pairs of questions and answers that specifically address topics related to the company's industry"
          },
          {
            "key": "D",
            "text": "Create few-shot prompts to instruct the model to answer only domain knowledge."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Instruction-based fine-tuning requires a dataset of instruction–response examples. By curating question– answer pairs focused on the company’s domain, you teach the model exactly how to interpret domainspecific queries and generate the correct responses during inference."
      },
      {
        "id": 33,
        "text": "Which ML technique ensures data compliance and privacy when training AI models on AWS?",
        "options": [
          {
            "key": "A",
            "text": "Reinforcement learning"
          },
          {
            "key": "B",
            "text": "Transfer learning"
          },
          {
            "key": "C",
            "text": "Federated learning"
          },
          {
            "key": "D",
            "text": "Unsupervised learning"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Federated learning lets you train a global model across multiple data holders (for example, different AWS accounts or edge devices) without moving raw data to a central location. Each participant trains locally on its own private dataset and only shares model updates, preserving data privacy and ensuring compliance."
      },
      {
        "id": 34,
        "text": "A manufacturing company has an application that ingests consumer complaints from publicly available sources. The application uses complex hard-coded logic to process the complaints. The company wants to scale this logic across markets and product lines. Which advantage do generative AI models offer for this scenario?",
        "options": [
          {
            "key": "A",
            "text": "Predictability of outputs"
          },
          {
            "key": "B",
            "text": "Adaptability"
          },
          {
            "key": "C",
            "text": "Less sensitivity to changes in inputs"
          },
          {
            "key": "D",
            "text": "Explainability"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Generative AI models can generalize learned patterns to new domains and formats with minimal manual reconfiguration. This adaptability lets you extend complaint-processing logic across different markets and product lines without rewriting complex hard-coded rules."
      },
      {
        "id": 35,
        "text": "A financial company wants to flag all credit card activity as possibly fraudulent or non-fraudulent based on transaction data. Which type of ML model meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Regression"
          },
          {
            "key": "B",
            "text": "Diffusion"
          },
          {
            "key": "C",
            "text": "Binary classification"
          },
          {
            "key": "D",
            "text": "Multi-class classification"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Binary classification models are designed to distinguish between two classes - fraudulent versus nonfraudulent transactions - making them the appropriate choice for this use case."
      },
      {
        "id": 36,
        "text": "A hospital wants to use a generative AI solution with speech-to-text functionality to help improve employee skills in dictating clinical notes. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Q Developer"
          },
          {
            "key": "B",
            "text": "Amazon Polly"
          },
          {
            "key": "C",
            "text": "Amazon Rekognition"
          },
          {
            "key": "D",
            "text": "AWS HealthScribe"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "AWS HealthScribe is specifically designed for healthcare workflows, providing accurate speech-to-text transcription of clinical conversations and generating structured clinical notes, meeting the hospital’s need to improve employee dictation of clinical documentation."
      },
      {
        "id": 37,
        "text": "Which type of AI model makes numeric predictions?",
        "options": [
          {
            "key": "A",
            "text": "Diffusion"
          },
          {
            "key": "B",
            "text": "Regression"
          },
          {
            "key": "C",
            "text": "Transformer"
          },
          {
            "key": "D",
            "text": "Multi-modal"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Regression models are designed to predict continuous numerical values (for example, forecasting sales figures or estimating house prices), making them the appropriate choice for numeric predictions."
      },
      {
        "id": 38,
        "text": "What is the purpose of vector embeddings in a large language model (LLM)?",
        "options": [
          {
            "key": "A",
            "text": "Splitting text into manageable pieces of data"
          },
          {
            "key": "B",
            "text": "Grouping a set of characters to be treated as a single unit"
          },
          {
            "key": "C",
            "text": "Providing the ability to mathematically compare texts"
          },
          {
            "key": "D",
            "text": "Providing the count of every word in the input"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Embeddings convert text into high-dimensional vectors that capture semantic relationships, allowing you to compute distances or similarities between pieces of text for tasks like retrieval or clustering."
      },
      {
        "id": 39,
        "text": "A company wants to fine-tune a foundation model (FM) by using AWS services. The company needs to ensure that its data stays private, safe, and secure in the source AWS Region where the data is stored. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
        "options": [
          {
            "key": "A",
            "text": "Host the model on premises by using AWS Outposts."
          },
          {
            "key": "B",
            "text": "Use the Amazon Bedrock API."
          },
          {
            "key": "C",
            "text": "Use AWS PrivateLink and a VPC."
          },
          {
            "key": "D",
            "text": "Host the Amazon Bedrock API on premises."
          }
        ],
        "answer_str": "BC",
        "answers": [
          "B",
          "C"
        ],
        "explanation": "Use the Amazon Bedrock API: You’ll call Bedrock’s managed fine-tuning endpoints directly in your AWS Region, so your data never leaves that region. Use AWS PrivateLink and a VPC: Front Bedrock API traffic through a VPC endpoint via PrivateLink to keep all network traffic on the AWS backbone and within your account’s private network."
      },
      {
        "id": 40,
        "text": "A financial company uses AWS to host its generative AI models. The company must generate reports to show adherence to international regulations for handling sensitive customer data. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Macie"
          },
          {
            "key": "B",
            "text": "AWS Artifact"
          },
          {
            "key": "C",
            "text": "AWS Secrets Manager"
          },
          {
            "key": "D",
            "text": "AWS Config"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "AWS Artifact provides on-demand access to AWS’s compliance reports and certifications (for example, ISO, SOC, GDPR), enabling the company to demonstrate its generative AI workloads and data handling practices adhere to international regulatory requirements."
      },
      {
        "id": 41,
        "text": "A medical company wants to modernize its onsite information processing application. The company wants to use generative AI to respond to medical questions from patients.     Which AWS service should the company use to ensure responsible AI for the application?",
        "options": [
          {
            "key": "A",
            "text": "Guardrails for Amazon Bedrock"
          },
          {
            "key": "B",
            "text": "Amazon Inspector"
          },
          {
            "key": "C",
            "text": "Amazon Rekognition"
          },
          {
            "key": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Guardrails for Amazon Bedrock let you define and enforce safety, compliance, and bias controls on generative AI workloads. By embedding these guardrails into your application, you can ensure that patientfacing responses meet medical accuracy, privacy, and regulatory requirements without having to build custom monitoring or filtering pipelines yourself."
      },
      {
        "id": 42,
        "text": "Which metric is used to evaluate the performance of foundation models (FMs) for text summarization tasks?",
        "options": [
          {
            "key": "A",
            "text": "F1 score"
          },
          {
            "key": "B",
            "text": "Bilingual Evaluation Understudy (BLEU) score"
          },
          {
            "key": "C",
            "text": "Accuracy"
          },
          {
            "key": "D",
            "text": "Mean squared error (MSE)"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Text summarization quality is most commonly assessed using ROUGE metrics, which report recall, precision, and an F1-score that balances the two. The ROUGE-F1 (often simply called the F1 score in this context) measures how well the model’s summary overlaps with reference summaries, making it the standard choice for evaluating foundation models on summarization tasks."
      },
      {
        "id": 43,
        "text": "What is the benefit of fine-tuning a foundation model (FM)?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tuning reduces the FM's size and complexity and enables slower inference."
          },
          {
            "key": "B",
            "text": "Fine-tuning uses specific training data to retrain the FM from scratch to adapt to a specific use case."
          },
          {
            "key": "C",
            "text": "Fine-tuning keeps the FM's knowledge up to date by pre-training the FM on more recent data."
          },
          {
            "key": "D",
            "text": "Fine-tuning improves the performance of the FM on a specific task by further training the FM on new"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "By updating the model’s weights with task-relevant examples, fine-tuning sharpens its understanding of domain-specific language and objectives, yielding higher accuracy and relevance on that particular task."
      },
      {
        "id": 44,
        "text": "A company wants to improve its chatbot's responses to match the company's desired tone. The company has 100 examples of high-quality conversations between customer service agents and customers. The company wants to use this data to incorporate company tone into the chatbot's responses.  Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Personalize to generate responses."
          },
          {
            "key": "B",
            "text": "Create an Amazon SageMaker HyperPod pre-training job."
          },
          {
            "key": "C",
            "text": "Host the model by using Amazon SageMaker. Use TensorRT for large language model (LLM)"
          },
          {
            "key": "D",
            "text": "Create an Amazon Bedrock fine-tuning job."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Bedrock’s fine-tuning lets you adapt a foundation model on your own conversation examples—in this case, the 100 high-quality transcripts to instill your company’s tone directly into the model’s response generation."
      },
      {
        "id": 45,
        "text": "An ecommerce company is using a chatbot to automate the customer order submission process. The chatbot is powered by AI and is available to customers directly from the company's website 24 hours a day, 7 days a week. Which option is an AI system input vulnerability that the company needs to resolve before the chatbot is made available?",
        "options": [
          {
            "key": "A",
            "text": "Data leakage"
          },
          {
            "key": "B",
            "text": "Prompt injection"
          },
          {
            "key": "C",
            "text": "Large language model (LLM) hallucinations"
          },
          {
            "key": "D",
            "text": "Concept drift"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Prompt injection is an input-level attack where a user crafts malicious input to override or manipulate the chatbot’s instructions or behavior. Addressing this vulnerability by sanitizing and constraining user prompts ensures the chatbot won’t execute unintended or harmful instructions when it goes live."
      },
      {
        "id": 46,
        "text": "A social media company wants to prevent users from posting discriminatory content on the company's application. The company wants to use Amazon Bedrock as part of the solution. How can the company use Amazon Bedrock to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Give users the ability to interact based on user preferences."
          },
          {
            "key": "B",
            "text": "Block interactions related to predefined topics."
          },
          {
            "key": "C",
            "text": "Restrict user conversations to predefined topics."
          },
          {
            "key": "D",
            "text": "Provide a variety of responses to select from for user engagement."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock’s built-in content moderation lets you define categories or keywords (e.g., hate speech, discriminatory language) and automatically block or filter any user inputs or outputs that fall under those topics. By configuring Bedrock’s safety filters with your predefined “disallowed” categories, the application will prevent discriminatory content from ever being posted."
      },
      {
        "id": 47,
        "text": "Which statements about model latent space are correct? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "It represents the model's internal understanding of relationships"
          },
          {
            "key": "B",
            "text": "It is only used for image processing"
          },
          {
            "key": "C",
            "text": "It enables semantic similarities between different inputs"
          },
          {
            "key": "D",
            "text": "It requires human supervision to maintain"
          },
          {
            "key": "E",
            "text": "It must be stored in a specific database type"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Model latent space:\n      - Represents the model's internal understanding and organization of concepts\n      - Enables computation of semantic similarities between different inputs\n      - Facilitates transfer learning and generalization\n      - Supports various types of data representations\n\n      **Task Reference**: This concept is referenced in Task Statement 3.2 under concepts of prompt engineering and model architecture."
      },
      {
        "id": 48,
        "text": "What are the primary use cases for storing embeddings in a vector database like Amazon OpenSearch Service? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Semantic search implementation"
          },
          {
            "key": "B",
            "text": "Website content management"
          },
          {
            "key": "C",
            "text": "Similarity-based recommendations"
          },
          {
            "key": "D",
            "text": "Email routing"
          },
          {
            "key": "E",
            "text": "Network traffic analysis"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Vector databases are essential for:\n      - Implementing semantic search by finding similar vectors\n      - Building recommendation systems based on content similarity\n      - Supporting RAG (Retrieval Augmented Generation)\n      - Enabling efficient nearest neighbor search at scale\n\n      **Task Reference**: This aligns with Task Statement 3.1 regarding vector database applications and RAG implementations."
      },
      {
        "id": 49,
        "text": "How does top-p (nucleus) sampling differ from traditional temperature-based sampling?",
        "options": [
          {
            "key": "A",
            "text": "It samples from the smallest possible token set"
          },
          {
            "key": "B",
            "text": "It selectively samples from tokens that sum to probability p"
          },
          {
            "key": "C",
            "text": "It always produces deterministic output"
          },
          {
            "key": "D",
            "text": "It only works with specific model architectures"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Top-p (nucleus) sampling:\n      - Dynamically selects tokens based on cumulative probability\n      - More adaptive than fixed temperature or top-k approaches\n      - Balances quality and diversity\n      - Helps prevent unlikely token combinations\n\n      **Task Reference**: This relates to Task Statement 3.1 regarding inference parameters and their effects on model outputs."
      },
      {
        "id": 50,
        "text": "Which features of Amazon Aurora with pgvector are most important for AI applications? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Vector similarity search capabilities"
          },
          {
            "key": "B",
            "text": "Traditional SQL operations"
          },
          {
            "key": "C",
            "text": "Integration with structured data"
          },
          {
            "key": "D",
            "text": "Web hosting features"
          },
          {
            "key": "E",
            "text": "Email processing"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Key features include:\n      - Vector similarity search for finding related content\n      - Ability to combine traditional structured data with vector operations\n      - SQL interface for vector operations\n      - Scalable vector storage and querying\n\n      **Task Reference**: This relates to Task Statement 3.1 regarding storage and querying of embeddings in databases."
      }
    ]
  },
  {
    "file": "practice-test-5.md",
    "title": "Practice Test 5",
    "questions": [
      {
        "id": 1,
        "text": "An education company wants to build an application. The application will give users the ability to enter text or provide a picture of a question. The application will respond with a written answer and an explanation of the written answer.",
        "options": [
          {
            "key": "A",
            "text": "Computer vision model"
          },
          {
            "key": "B",
            "text": "Large multi-modal language model"
          },
          {
            "key": "C",
            "text": "Diffusion model"
          },
          {
            "key": "D",
            "text": "Text-to-speech model"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "A large multi-modal language model can natively ingest both text and images as inputs and generate text outputs, making it ideal for a system that accepts typed questions or photos of questions and returns written answers with explanations."
      },
      {
        "id": 2,
        "text": "In which stage of the generative AI model lifecycle are tests performed to examine the model's accuracy?",
        "options": [
          {
            "key": "A",
            "text": "Deployment"
          },
          {
            "key": "B",
            "text": "Data selection"
          },
          {
            "key": "C",
            "text": "Fine-tuning"
          },
          {
            "key": "D",
            "text": "Evaluation"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "The evaluation stage is when you run tests and benchmarks, such as accuracy, precision, and other performance metrics, to measure how well the generative AI model performs on hold-out or validation data before moving on to deployment."
      },
      {
        "id": 3,
        "text": "Which statement correctly describes embeddings in generative AI?",
        "options": [
          {
            "key": "A",
            "text": "Embeddings represent data as high-dimensional vectors that capture semantic relationships."
          },
          {
            "key": "B",
            "text": "Embeddings is a technique that searches data to find the most helpful information to answer natural language questions."
          },
          {
            "key": "C",
            "text": "Embeddings reduce the hardware requirements of a model by using a less precise data type for the weights and activations."
          },
          {
            "key": "D",
            "text": "Embeddings provide the ability to store and retrieve data for generative AI applications."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Embeddings map inputs like words, sentences, or documents into continuous vector spaces where semantic similarity corresponds to geometric proximity, enabling models to reason about meaning and relationships mathematically."
      },
      {
        "id": 4,
        "text": "A company wants to add generative AI functionality to its application by integrating a large language model (LLM). The responses from the LLM must be as deterministic and as stable as possible. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM."
          },
          {
            "key": "B",
            "text": "Configure the application to automatically add \"make your response deterministic\" at the end of the prompt before submitting the prompt to the LLM."
          },
          {
            "key": "C",
            "text": "Configure the application to automatically add \"make your response deterministic\" at the beginning of the prompt before submitting the prompt to the LLM."
          },
          {
            "key": "D",
            "text": "Configure the application to automatically set the temperature parameter to 1 when submitting the prompt to the LLM."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "The temperature hyperparameter directly controls the randomness of the LLM’s token sampling: setting it to 0 forces greedy decoding, yielding the most likely next token every time and thus fully deterministic, stable outputs."
      },
      {
        "id": 5,
        "text": "A company needs to select a generative AI model to build an application. The application must provide responses to users in real time. Which model characteristic should the company consider to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Model complexity"
          },
          {
            "key": "B",
            "text": "Innovation speed"
          },
          {
            "key": "C",
            "text": "Inference speed"
          },
          {
            "key": "D",
            "text": "Training time"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "For real-time applications, the model’s inference speed - ability to generate responses with low latency - is the critical characteristic to ensure users receive answers promptly."
      },
      {
        "id": 6,
        "text": "Which term refers to the instructions given to foundation models (FMs) so that the FMs provide a more accurate response to a question?",
        "options": [
          {
            "key": "A",
            "text": "Prompt"
          },
          {
            "key": "B",
            "text": "Direction"
          },
          {
            "key": "C",
            "text": "Dialog"
          },
          {
            "key": "D",
            "text": "Translation"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "A prompt is the input instruction or query you provide to a foundation model to guide its response, ensuring the model understands the task and delivers a more accurate answer."
      },
      {
        "id": 7,
        "text": "A retail company wants to build an ML model to recommend products to customers. The company wants to build the model based on responsible practices. Which practice should the company apply when collecting data to decrease model bias?",
        "options": [
          {
            "key": "A",
            "text": "Use data from a single geographic region."
          },
          {
            "key": "B",
            "text": "Collect data from customers who make only high-value purchases."
          },
          {
            "key": "C",
            "text": "Ensure that the data is representative of the diverse customer population."
          },
          {
            "key": "D",
            "text": "Ensure that the data is from a subset of customers who have been with the company the longest."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Collecting training data that is representative of the diverse customer population helps reduce bias, ensuring the model generalizes well to all user demographics. Gathering data from narrow subsets increases bias."
      },
      {
        "id": 8,
        "text": "A company is developing an ML model to predict customer churn. Which evaluation metric will assess the model's performance on a binary classification task such as predicting churn?",
        "options": [
          {
            "key": "A",
            "text": "F1 score"
          },
          {
            "key": "B",
            "text": "Mean squared error (MSE)"
          },
          {
            "key": "C",
            "text": "R-squared"
          },
          {
            "key": "D",
            "text": "Time used to train the model"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "For binary classification tasks like churn prediction, the F1 score balances precision and recall into a single metric, making it ideal for evaluating how well the model identifies churners without over- or under-predicting."
      },
      {
        "id": 9,
        "text": "An AI practitioner is evaluating the performance of an Amazon SageMaker model. The AI practitioner must choose a performance metric. The metric must show the ratio of the number of correctly classified items to the total number of correctly and incorrectly classified items. Which metric meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Accuracy"
          },
          {
            "key": "B",
            "text": "Precision"
          },
          {
            "key": "C",
            "text": "F1 score"
          },
          {
            "key": "D",
            "text": "Recall"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Accuracy is defined as the number of correctly classified items (both true positives and true negatives) divided by the total number of items evaluated (the sum of true positives, true negatives, false positives, and false negatives), matching exactly the ratio described."
      },
      {
        "id": 10,
        "text": "An ecommerce company receives multiple gigabytes of customer data daily. The company uses the data to train an ML model to forecast future product demand. The company needs a solution to perform inferences once each day. Which inference type meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Batch inference"
          },
          {
            "key": "B",
            "text": "Asynchronous inference"
          },
          {
            "key": "C",
            "text": "Real-time inference"
          },
          {
            "key": "D",
            "text": "Serverless inference"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Batch inference is designed for high-volume, scheduled predictions: you can point it at the day’s gigabytes of data, run a job once daily, and generate all forecasts in one go without needing a persistent endpoint."
      },
      {
        "id": 11,
        "text": "A company has developed a generative AI model for customer segmentation. The model has been deployed in the company's production environment for a long time. The company recently noticed some inconsistency in the model's responses. The company wants to evaluate model bias and drift. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Model Monitor"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Clarify"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Model Cards"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Feature Store"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "SageMaker Model Monitor continuously collects inference and ground-truth data to automatically detect data drift, concept drift, and bias shifts in production models. By configuring baseline metrics and thresholds, the company can track inconsistencies in responses over time and receive alerts whenever bias or drift exceed acceptable limits."
      },
      {
        "id": 12,
        "text": "A company has signed up for Amazon Bedrock access to build applications. The company wants to restrict employee access to specific models available on Amazon Bedrock. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use AWS Identity and Access Management (IAM) policies to restrict model access."
          },
          {
            "key": "B",
            "text": "Use AWS Security Token Service (AWS STS) to generate temporary credentials for model use."
          },
          {
            "key": "C",
            "text": "Use AWS Identity and Access Management (IAM) service roles to restrict model subscription."
          },
          {
            "key": "D",
            "text": "Use Amazon Inspector to monitor model access."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "With IAM policies you can grant or deny Bedrock API actions scoped to specific model ARNs, ensuring employees can only invoke the exact models you authorize."
      },
      {
        "id": 13,
        "text": "Which ML technique uses training data that is labeled with the correct output values?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning"
          },
          {
            "key": "B",
            "text": "Unsupervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Transfer learning"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Supervised learning trains models on datasets where each example includes both input features and the correct output label, allowing the algorithm to learn the mapping from inputs to known targets."
      },
      {
        "id": 14,
        "text": "Which large language model (LLM) parameter controls the number of possible next words or tokens considered at each step of the text generation process?",
        "options": [
          {
            "key": "A",
            "text": "Maximum tokens"
          },
          {
            "key": "B",
            "text": "Top K"
          },
          {
            "key": "C",
            "text": "Temperature"
          },
          {
            "key": "D",
            "text": "Batch size"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "The Top K parameter limits token sampling at each generation step to the K most probable next tokens. By choosing how many of the highest-probability candidates to consider, Top K directly controls the breadth of options the model evaluates when generating each token."
      },
      {
        "id": 15,
        "text": "A company is making a chatbot. The chatbot uses Amazon Lex and Amazon OpenSearch Service. The chatbot uses the company's private data to answer questions. The company needs to convert the data into a vector representation before storing the data in a database. Which type of foundation model (FM) meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Text completion model"
          },
          {
            "key": "B",
            "text": "Instruction following model"
          },
          {
            "key": "C",
            "text": "Text embeddings model"
          },
          {
            "key": "D",
            "text": "Image generation model"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Text embeddings models transform input text into high-dimensional vector representations, making them ideal for storing and retrieving your private data in a vector database for the chatbot."
      },
      {
        "id": 16,
        "text": "A company wants to use a large language model (LLM) to generate product descriptions. The company wants to give the model example descriptions that follow a format. Which prompt engineering technique will generate descriptions that match the format?",
        "options": [
          {
            "key": "A",
            "text": "Zero-shot prompting"
          },
          {
            "key": "B",
            "text": "Chain-of-thought prompting"
          },
          {
            "key": "C",
            "text": "One-shot prompting"
          },
          {
            "key": "D",
            "text": "Few-shot prompting"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Few-shot prompting provides the model with several example product descriptions that follow your desired format, enabling it to learn the pattern and generate new descriptions in the same style without further training."
      },
      {
        "id": 17,
        "text": "A bank is fine-tuning a large language model (LLM) on Amazon Bedrock to assist customers with questions about their loans. The bank wants to ensure that the model does not reveal any private customer data. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Bedrock Guardrails."
          },
          {
            "key": "B",
            "text": "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM."
          },
          {
            "key": "C",
            "text": "Increase the Top-K parameter of the LLM."
          },
          {
            "key": "D",
            "text": "Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Preprocessing your fine-tuning dataset to strip out names, account numbers, and other PII prevents the model from ever ingesting - or later regurgitating - private customer information. This data sanitization step is the most reliable way to guarantee that sensitive details aren’t embedded into the model."
      },
      {
        "id": 18,
        "text": "A grocery store wants to create a chatbot to help customers find products in the store. The chatbot must check the inventory in real time and provide the product location in the store. Which prompt engineering technique should the store use to build the chatbot?",
        "options": [
          {
            "key": "A",
            "text": "Zero-shot prompting"
          },
          {
            "key": "B",
            "text": "Few-shot prompting"
          },
          {
            "key": "C",
            "text": "Least-to-most prompting"
          },
          {
            "key": "D",
            "text": "Reasoning and acting (ReAct) prompting"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "ReAct prompting interleaves the model’s chain-of-thought reasoning with explicit “actions” (such as calling your real-time inventory API), then uses the API response to inform its final answer. By structuring your prompts to have the LLM think, choose the “CheckInventory” action with the product name, receive the live location data, and then respond to the user, you seamlessly integrate real-time lookups and precise product locations into the chatbot’s replies."
      },
      {
        "id": 19,
        "text": "A company uses a third-party model on Amazon Bedrock to analyze confidential documents. The company is concerned about data privacy. Which statement describes how Amazon Bedrock protects data privacy?",
        "options": [
          {
            "key": "A",
            "text": "User inputs and model outputs are anonymized and shared with third-party model providers."
          },
          {
            "key": "B",
            "text": "User inputs and model outputs are not shared with any third-party model providers."
          },
          {
            "key": "C",
            "text": "User inputs are kept confidential, but model outputs are shared with third-party model providers."
          },
          {
            "key": "D",
            "text": "User inputs and model outputs are redacted before the inputs and outputs are shared with third-party"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock processes your data entirely within AWS’s secure environment and does not forward your inputs or the generated outputs back to the model vendor, ensuring that your confidential documents remain private."
      },
      {
        "id": 20,
        "text": "An animation company wants to provide subtitles for its content. Which AWS service meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Comprehend"
          },
          {
            "key": "B",
            "text": "Amazon Polly"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Translate"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Transcribe converts spoken audio into accurate, time-stamped text transcripts, making it the ideal service for generating subtitles from your animation audio tracks."
      },
      {
        "id": 21,
        "text": "An ecommerce company wants to group customers based on their purchase history and preferences to personalize the user experience of the company's application. Which ML technique should the company use?",
        "options": [
          {
            "key": "A",
            "text": "Classification"
          },
          {
            "key": "B",
            "text": "Clustering"
          },
          {
            "key": "C",
            "text": "Regression"
          },
          {
            "key": "D",
            "text": "Content generation"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Clustering is an unsupervised learning technique that automatically groups data points - in this case, customers with similar purchase histories and preferences - into segments without needing predefined labels, enabling personalized experiences."
      },
      {
        "id": 22,
        "text": "A company wants to control employee access to publicly available foundation models (FMs). Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Analyze cost and usage reports in AWS Cost Explorer."
          },
          {
            "key": "B",
            "text": "Download AWS security and compliance documents from AWS Artifact."
          },
          {
            "key": "C",
            "text": "Configure Amazon SageMaker JumpStart to restrict discoverable FMs."
          },
          {
            "key": "D",
            "text": "Build a hybrid search solution by using Amazon OpenSearch Service."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "SageMaker JumpStart lets you curate which publicly available foundation models appear in your account's model catalog. By using JumpStart's private model hub, you can prevent employees from discovering or deploying any FMs you haven't explicitly allowed."
      },
      {
        "id": 23,
        "text": "A company has set up a translation tool to help its customer service team handle issues from customers around the world. The company wants to evaluate the performance of the translation tool. The company sets up a parallel data process that compares the responses from the tool to responses from actual humans. Both sets of responses are generated on the same set of documents. Which strategy should the company use to evaluate the translation tool?",
        "options": [
          {
            "key": "A",
            "text": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the absolute translation quality of the two methods."
          },
          {
            "key": "B",
            "text": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the relative translation quality of the two methods."
          },
          {
            "key": "C",
            "text": "Use the BERTScore to estimate the absolute translation quality of the two methods."
          },
          {
            "key": "D",
            "text": "Use the BERTScore to estimate the relative translation quality of the two methods."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "BLEU measures n-gram overlap between a candidate translation and one or more reference translations. When you apply it to both the tool’s outputs and the human outputs on the same source documents, you get comparable scores that let you directly assess which approach yields better translations."
      },
      {
        "id": 24,
        "text": "An AI practitioner wants to generate more diverse and more creative outputs from a large language model (LLM). How should the AI practitioner adjust the inference parameter?",
        "options": [
          {
            "key": "A",
            "text": "Increase the temperature value."
          },
          {
            "key": "B",
            "text": "Decrease the Top K value."
          },
          {
            "key": "C",
            "text": "Increase the response length."
          },
          {
            "key": "D",
            "text": "Decrease the prompt length."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Raising the temperature softens the model’s probability distribution, increasing the chance of sampling lesslikely tokens and thus producing more varied and creative responses."
      },
      {
        "id": 25,
        "text": "A company has developed custom computer vision models. The company needs a user-friendly interface for data labeling to minimize model mistakes on new real-world data. Which AWS service, feature, or tool meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Ground Truth"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Canvas"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock playground"
          },
          {
            "key": "D",
            "text": "Amazon Bedrock Agents"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "SageMaker Ground Truth provides a built-in, easy-to-use labeling console with workflows and quality controls specifically for computer vision tasks, enabling you to efficiently generate high-quality labeled data and reduce model errors on real-world images."
      },
      {
        "id": 26,
        "text": "A company is integrating AI into its employee recruitment and hiring solution. The company wants to mitigate bias risks and ensure responsible AI practices while prioritizing equitable hiring decisions. Which core dimensions of responsible AI should the company consider? (Choose two.)",
        "options": [
          {
            "key": "A",
            "text": "Fairness"
          },
          {
            "key": "B",
            "text": "Tolerance"
          },
          {
            "key": "C",
            "text": "Flexibility"
          },
          {
            "key": "D",
            "text": "Open source"
          },
          {
            "key": "E",
            "text": "Transparency"
          }
        ],
        "answer_str": "AE",
        "answers": [
          "A",
          "E"
        ],
        "explanation": "Fairness - Ensuring equitable outcomes across all demographic groups helps mitigate bias risks in hiring decisions. Transparency - Providing clear explanations of how the AI makes decisions builds trust and allows auditing for bias."
      },
      {
        "id": 27,
        "text": "A financial company has deployed an ML model to predict customer churn. The model has been running in production for 1 week. The company wants to evaluate how accurately the model predicts churn compared to actual customer behavior. Which metric meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Root mean squared error (RMSE)"
          },
          {
            "key": "B",
            "text": "Return on investment (ROI)"
          },
          {
            "key": "C",
            "text": "F1 score"
          },
          {
            "key": "D",
            "text": "Bilingual Evaluation Understudy (BLEU) score"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The F1 score combines precision (how many predicted churners actually churned) and recall (how many actual churners were correctly identified) into a single metric, making it ideal for measuring your model’s accuracy on the binary churn‐ prediction task."
      },
      {
        "id": 28,
        "text": "A company has a generative AI application that uses a pre-trained foundation model (FM) on Amazon Bedrock. The company wants the FM to include more context by using company information. Which solution meets these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Bedrock Knowledge Bases."
          },
          {
            "key": "B",
            "text": "Choose a different FM on Amazon Bedrock."
          },
          {
            "key": "C",
            "text": "Use Amazon Bedrock Agents."
          },
          {
            "key": "D",
            "text": "Deploy a custom model on Amazon Bedrock."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Bedrock Knowledge Bases let you index and retrieve your company’s documents at inference time, injecting relevant context into the pre-trained FM’s prompts without the cost or complexity of re-training or fine-tuning a custom model. This retrieval-augmented approach delivers up-to-date, domain-specific information in responses while keeping costs low."
      },
      {
        "id": 29,
        "text": "A food service company wants to collect a dataset to predict customer food preferences. The company wants to ensure that the food preferences of all demographics are included in the data. Which dataset characteristic does this scenario present?",
        "options": [
          {
            "key": "A",
            "text": "Accuracy"
          },
          {
            "key": "B",
            "text": "Diversity"
          },
          {
            "key": "C",
            "text": "Recency bias"
          },
          {
            "key": "D",
            "text": "Reliability"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Ensuring representation of all demographic groups addresses the dataset’s diversity, so the model learns from a wide range of customer preferences."
      },
      {
        "id": 30,
        "text": "A company wants to create a chatbot that answers questions about human resources policies. The company is using a large language model (LLM) and has a large digital documentation base. Which technique should the company use to optimize the generated responses?",
        "options": [
          {
            "key": "A",
            "text": "Use Retrieval Augmented Generation (RAG)."
          },
          {
            "key": "B",
            "text": "Use few-shot prompting."
          },
          {
            "key": "C",
            "text": "Set the temperature to 1."
          },
          {
            "key": "D",
            "text": "Decrease the token size."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "RAG lets the chatbot pull in precise, up-to-date passages from your HR documentation at inference time, grounding its answers in the actual policy text and ensuring accuracy without overloading the LLM’s context window."
      },
      {
        "id": 31,
        "text": "An education company is building a chatbot whose target audience is teenagers. The company is training a custom large language model (LLM). The company wants the chatbot to speak in the target audience's language style by using creative spelling and shortened words. Which metric will assess the LLM's performance?",
        "options": [
          {
            "key": "A",
            "text": "F1 score"
          },
          {
            "key": "B",
            "text": "BERTScore"
          },
          {
            "key": "C",
            "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
          },
          {
            "key": "D",
            "text": "Bilingual Evaluation Understudy (BLEU) score"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "BLEU evaluates surface-level n-gram overlap between the LLM’s outputs and reference examples—in this case, targets written in creative spelling and shorthand, making it well suited to measure how closely the model’s style matches the teenager-oriented language."
      },
      {
        "id": 32,
        "text": "A customer service team is developing an application to analyze customer feedback and automatically classify the feedback into different categories. The categories include product quality, customer service, and delivery experience. Which AI concept does this scenario present?",
        "options": [
          {
            "key": "A",
            "text": "Computer vision"
          },
          {
            "key": "B",
            "text": "Natural language processing (NLP)"
          },
          {
            "key": "C",
            "text": "Recommendation systems"
          },
          {
            "key": "D",
            "text": "Fraud detection"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Automatically analyzing and classifying free-text feedback into thematic categories is a core NLP task (text classification)."
      },
      {
        "id": 33,
        "text": "A financial services company must ensure that its generative AI-powered chatbot provides factual responses for regulatory compliance. Which solution prevents the underlying foundation model (FM) from hallucinating?",
        "options": [
          {
            "key": "A",
            "text": "Use AWS Config to query compliance metadata by using natural language."
          },
          {
            "key": "B",
            "text": "Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses."
          },
          {
            "key": "C",
            "text": "Use Amazon Fraud Detector to detect potentially fraudulent online activities."
          },
          {
            "key": "D",
            "text": "Use AWS Audit Manager to prepare IT audit and compliance reports."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Bedrock Guardrails allows you to define rules and policies that evaluate and constrain both user inputs and model responses. By configuring guardrails, you can prevent the generative AI model from producing hallucinated or non-factual outputs, ensuring the chatbot adheres to compliance requirements and provides factual responses. This directly addresses the need to control hallucinations in generative AI systems for regulatory compliance."
      },
      {
        "id": 34,
        "text": "A company has created multiple ML models. The company needs a solution for storing, managing, and versioning the models. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "AWS Audit Manager"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Model Monitor"
          },
          {
            "key": "C",
            "text": "Amazon SageMaker Model Registry"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Canvas"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon SageMaker Model Registry is the AWS service designed to store, manage, and version machine learning models. It provides a central repository for tracking model versions and managing their deployment status throughout the ML lifecycle."
      },
      {
        "id": 35,
        "text": "An AI practitioner is building an ML model. The AI practitioner wants to provide model transparency and explainability to stakeholders. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Present the model Shapley values."
          },
          {
            "key": "B",
            "text": "Provide the model accuracy measure."
          },
          {
            "key": "C",
            "text": "Provide the model confusion matrix."
          },
          {
            "key": "D",
            "text": "Provide a secure model inference endpoint."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Presenting the model Shapley values provides transparency and explainability by showing how each feature contributes to individual predictions, helping stakeholders understand the reasoning behind the model’s outputs."
      },
      {
        "id": 36,
        "text": "A company is developing an ML application. The application must automatically group similar customers and products based on their characteristics. Which ML strategy should the company use to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Unsupervised learning"
          },
          {
            "key": "B",
            "text": "Supervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Semi-supervised learning"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Unsupervised learning is used to automatically group or cluster similar customers and products based on their characteristics without the need for labeled data. This strategy fits scenarios where the goal is to discover patterns or groupings in the data."
      },
      {
        "id": 37,
        "text": "A news agency publishes articles in English. The agency wants to make articles available in other languages.   Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Add Amazon Transcribe to the company’s website."
          },
          {
            "key": "B",
            "text": "Use the Amazon Translate real-time translation feature."
          },
          {
            "key": "C",
            "text": "Add Amazon Personalize to the company’s website."
          },
          {
            "key": "D",
            "text": "Use the Amazon Textract real-time document processing feature."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Translate provides real-time translation of text, making it suitable for automatically translating articles from English into other languages for publication."
      },
      {
        "id": 38,
        "text": "A bank is building a chatbot to answer customer questions about opening a bank account. The chatbot will use public bank documents to generate responses. The company will use Amazon Bedrock and prompt engineering to improve the chatbot’s responses. Which prompt engineering technique meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Complexity-based prompting"
          },
          {
            "key": "B",
            "text": "Zero-shot prompting"
          },
          {
            "key": "C",
            "text": "Few-shot prompting"
          },
          {
            "key": "D",
            "text": "Directional stimulus prompting"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Few-shot prompting involves providing the generative AI model with several examples (drawn from public bank documents) to guide it in generating more accurate and relevant responses. This technique helps the chatbot better align its answers with the desired content and format."
      },
      {
        "id": 39,
        "text": "A company wants to fine-tune an ML model that is hosted on Amazon Bedrock. The company wants to use its own sensitive data that is stored in private databases in a VPC. The data needs to stay within the company’s private network. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service"
          },
          {
            "key": "B",
            "text": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource"
          },
          {
            "key": "C",
            "text": "Use AWS PrivateLink to connect the VPC and Amazon Bedrock."
          },
          {
            "key": "D",
            "text": "Use AWS Key Management Service (AWS KMS) keys to encrypt the data."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "AWS PrivateLink enables secure, private connectivity between your VPC and Amazon Bedrock without exposing data to the public internet, ensuring that sensitive data stays within your private network during fine-tuning."
      },
      {
        "id": 40,
        "text": "A documentary filmmaker wants to reach more viewers. The filmmaker wants to automatically add subtitles and voice-overs in multiple languages to their films. Which combination of steps will meet these requirements? (Choose two.)",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages."
          },
          {
            "key": "B",
            "text": "Use Amazon Textract and Amazon Translate to generate subtitles in other languages."
          },
          {
            "key": "C",
            "text": "Use Amazon Polly to generate voice-overs in other languages."
          },
          {
            "key": "D",
            "text": "Use Amazon Translate to generate voice-overs in other languages."
          }
        ],
        "answer_str": "AC",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages: Amazon Transcribe converts spoken dialogue to text (subtitles), and Amazon Translate can then translate these subtitles into multiple languages. Use Amazon Polly to generate voice-overs in other languages: Amazon Polly converts translated text into lifelike speech, enabling the creation of multilingual voice-overs."
      },
      {
        "id": 41,
        "text": "A company wants to create a chatbot to answer employee questions about company policies. Company policies are updated frequently. The chatbot must reflect the changes in near real time. The company wants to choose a large language model (LLM). Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tune an LLM on the company policy text by using Amazon SageMaker."
          },
          {
            "key": "B",
            "text": "Select a foundation model (FM) from Amazon Bedrock to build an application."
          },
          {
            "key": "C",
            "text": "Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge Bases."
          },
          {
            "key": "D",
            "text": "Use Amazon Q Business to build a custom Q App."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "A RAG workflow with Amazon Bedrock Knowledge Bases allows the chatbot to access the most recent company policy documents dynamically, ensuring responses reflect policy updates in near real time without the need to retrain or fine-tune the LLM each time content changes."
      },
      {
        "id": 42,
        "text": "A company is using supervised learning to train an AI model on a small labeled dataset that is specific to a target task. Which step of the foundation model (FM) lifecycle does this describe?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tuning"
          },
          {
            "key": "B",
            "text": "Data selection"
          },
          {
            "key": "C",
            "text": "Pre-training"
          },
          {
            "key": "D",
            "text": "Evaluation"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Fine-tuning is the process of training a pre-existing foundation model on a smaller, labeled dataset that is specific to a target task, allowing the model to adapt to the company's requirements."
      },
      {
        "id": 43,
        "text": "A company is introducing a new feature for its application. The feature will refine the style of output messages. The company will fine-tune a large language model (LLM) on Amazon Bedrock to implement the feature. Which type of data does the company need to meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Samples of only input messages"
          },
          {
            "key": "B",
            "text": "Samples of only output messages"
          },
          {
            "key": "C",
            "text": "Samples of pairs of input and output messages"
          },
          {
            "key": "D",
            "text": "Separate samples of input and output messages"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Fine-tuning a large language model to refine the style of output messages requires training data consisting of paired input and output messages. These pairs allow the model to learn the relationship between the input provided and the desired styled output, ensuring the fine-tuned model produces responses with the intended style."
      },
      {
        "id": 44,
        "text": "A healthcare company is building an AI solution to predict patient readmission within 30 days of patient discharge. The company has trained a model on historical patient data including medical history, demographics, and treatment specifications, to provide readmission predictions in real time. Which task describes AI model inference in this scenario?",
        "options": [
          {
            "key": "A",
            "text": "Gather historical patient readmission data."
          },
          {
            "key": "B",
            "text": "Use appropriate metrics and assess model performance."
          },
          {
            "key": "C",
            "text": "Use data to identify patient patterns and correlations."
          },
          {
            "key": "D",
            "text": "Use a trained model to predict patient readmission."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Model inference refers to the process of applying a trained model to new data—in this case, using the trained model to make real-time predictions about whether a patient will be readmitted within 30 days of discharge."
      },
      {
        "id": 45,
        "text": "A financial company wants to build workflows for human review of ML predictions. The company wants to define confidence thresholds for its use case and adjust the thresholds over time. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Personalize"
          },
          {
            "key": "B",
            "text": "Amazon Augmented AI (Amazon A2I)"
          },
          {
            "key": "C",
            "text": "Amazon Inspector"
          },
          {
            "key": "D",
            "text": "AWS Audit Manager"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Augmented AI (Amazon A2I) enables you to build workflows for human review of machine learning predictions, allowing you to define and adjust confidence thresholds for when human intervention is required."
      },
      {
        "id": 46,
        "text": "A company wants to develop an AI assistant for employees to query internal data. Which AWS service will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Rekognition"
          },
          {
            "key": "B",
            "text": "Amazon Textract"
          },
          {
            "key": "C",
            "text": "Amazon Lex"
          },
          {
            "key": "D",
            "text": "Amazon Q Business"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon Q Business is designed to build generative AI assistants for querying and interacting with internal organizational data, making it the ideal service for creating an AI assistant for employees to access company information."
      },
      {
        "id": 47,
        "text": "A company wants to build and deploy ML models on AWS without writing any code. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Canvas"
          },
          {
            "key": "B",
            "text": "Amazon Rekognition"
          },
          {
            "key": "C",
            "text": "AWS DeepRacer"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Canvas allows users to build, train, and deploy machine learning models using a nocode visual interface, meeting the requirement to create ML solutions without writing any code."
      },
      {
        "id": 48,
        "text": "What is the primary advantage of using Amazon Aurora with pgvector for AI applications?",
        "options": [
          {
            "key": "A",
            "text": "It provides serverless computing capabilities"
          },
          {
            "key": "B",
            "text": "It enables vector similarity search within a relational database"
          },
          {
            "key": "C",
            "text": "It automatically generates AI models"
          },
          {
            "key": "D",
            "text": "It provides pre-trained language models"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Aurora with pgvector enables vector similarity search operations within a relational database, allowing organizations to:\n      - Store embeddings alongside structured data\n      - Perform vector similarity searches using SQL\n      - Maintain ACID compliance while working with vector data\n      - Scale vector operations efficiently\n\n      **Task Reference**: Referenced in Task Statement 3.1 as one of the AWS services that help store embeddings within databases."
      },
      {
        "id": 49,
        "text": "Which features make Amazon Kendra most valuable for enterprise search applications? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Natural language understanding"
          },
          {
            "key": "B",
            "text": "Website hosting capabilities"
          },
          {
            "key": "C",
            "text": "Semantic search functionality"
          },
          {
            "key": "D",
            "text": "Email server functionality"
          },
          {
            "key": "E",
            "text": "Network monitoring"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Amazon Kendra provides advanced search capabilities through:\n      - Natural language understanding that interprets user intent\n      - Semantic search that understands context and meaning\n      - Integration with enterprise data sources\n      - Learning from user interactions and feedback\n\n      **Task Reference**: This service is mentioned in Task Statement 1.2 under AWS managed AI services, particularly for intelligent search applications."
      },
      {
        "id": 50,
        "text": "Which parameters are commonly used for controlling the output diversity in generative AI models? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Top-k sampling"
          },
          {
            "key": "B",
            "text": "Model size"
          },
          {
            "key": "C",
            "text": "Top-p (nucleus) sampling"
          },
          {
            "key": "D",
            "text": "Training dataset size"
          },
          {
            "key": "E",
            "text": "Hardware configuration"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Top-k and Top-p sampling are key parameters for controlling output generation:\n      - Top-k limits token selection to the k most likely next tokens\n      - Top-p (nucleus) sampling selects from tokens that sum to probability p\n      Both help balance between diversity and quality of generated content.\n\n      **Task Reference**: These concepts relate to Task Statement 3.1 regarding inference parameters' effects on model responses."
      }
    ]
  },
  {
    "file": "practice-test-6.md",
    "title": "Practice Test 6",
    "questions": [
      {
        "id": 1,
        "text": "A design company is using a foundation model (FM) on Amazon Bedrock to generate images for various projects. The company wants to have control over how detailed or abstract each generated image appears Which model parameter should the company modify?",
        "options": [
          {
            "key": "A",
            "text": "Model checkpoint"
          },
          {
            "key": "B",
            "text": "Batch size"
          },
          {
            "key": "C",
            "text": "Generation step"
          },
          {
            "key": "D",
            "text": "Token length"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The “generation step” parameter controls how detailed or abstract an image appears during generation. By adjusting the number of generation steps, you can influence the level of refinement and detail in the output more steps yield more detailed images, while fewer steps result in more abstract images."
      },
      {
        "id": 2,
        "text": "A financial company has offices in different countries worldwide. The company requires that all API calls between generative AI applications and foundation models (FM) must not travel across the public internet. Which AWS service should the company use?",
        "options": [
          {
            "key": "A",
            "text": "AWS PrivateLink"
          },
          {
            "key": "B",
            "text": "Amazon Q"
          },
          {
            "key": "C",
            "text": "Amazon CloudFront"
          },
          {
            "key": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "AWS PrivateLink provides secure, private connectivity between VPCs and AWS services, ensuring that API calls do not traverse the public internet. This meets the requirement for private communication between generative AI applications and foundation models across global offices."
      },
      {
        "id": 3,
        "text": "An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company’s products and receive details on users’ orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses. Which AWS feature or resource meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Bedrock Guardrails"
          },
          {
            "key": "B",
            "text": "Amazon Bedrock Agents"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock inference APIs"
          },
          {
            "key": "D",
            "text": "Amazon Bedrock custom models"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Bedrock Guardrails enable you to implement safeguards that filter out harmful or inappropriate content in both user input prompts and chatbot responses, ensuring safe and compliant chatbot interactions."
      },
      {
        "id": 4,
        "text": "A company wants to learn about generative AI applications in an experimental environment.   Which solution will meet this requirement MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Q Developer"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker JumpStart"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock PartyRock"
          },
          {
            "key": "D",
            "text": "Amazon Q Business"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Bedrock PartyRock provides a highly cost-effective and experimental environment for learning about generative AI applications, allowing users to quickly build, test, and iterate on AI apps without incurring significant costs."
      },
      {
        "id": 5,
        "text": "A company needs to collect a large dataset to train an AI assistant in a specific content area. Which dataset will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Diverse conversations that use relevant terminology"
          },
          {
            "key": "B",
            "text": "Time series data of general purpose historical sales"
          },
          {
            "key": "C",
            "text": "Sentiment analysis of news articles"
          },
          {
            "key": "D",
            "text": "Unique product IDs and corresponding user IDs"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "To train an AI assistant for a specific content area, you need a large dataset of diverse conversations that incorporate the relevant terminology and context for that area. This enables the assistant to learn how to respond accurately and appropriately within the targeted subject."
      },
      {
        "id": 6,
        "text": "A financial company is developing a generative AI application for loan approval decisions. The company needs the application output to be responsible and fair. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Review the training data to check for biases. Include data from all demographics in the training data."
          },
          {
            "key": "B",
            "text": "Use a deep learning model with many hidden layers."
          },
          {
            "key": "C",
            "text": "Keep the model’s decision-making process a secret to protect proprietary algorithms."
          },
          {
            "key": "D",
            "text": "Continuously monitor the model’s performance on a static test dataset"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Reviewing the training data for biases and ensuring representation from all demographics is essential for developing a responsible and fair generative AI application, especially in sensitive domains like loan approval decisions. This approach helps reduce bias and supports ethical AI practices."
      },
      {
        "id": 7,
        "text": "An AI practitioner who has minimal ML knowledge wants to predict employee attrition without writing code. Which Amazon SageMaker feature meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "SageMaker Canvas"
          },
          {
            "key": "B",
            "text": "SageMaker Clarify"
          },
          {
            "key": "C",
            "text": "SageMaker Model Monitor"
          },
          {
            "key": "D",
            "text": "SageMaker Data Wrangler"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "SageMaker Canvas provides a no-code visual interface that allows users with minimal ML knowledge to build, train, and deploy models for predictions, such as employee attrition, without writing any code."
      },
      {
        "id": 8,
        "text": "A company is using AI to improve its services. The company needs to ensure that the AI system is fair and explainable. The company wants to require training for members of the AI system development team. Which training will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Training on advanced coding skills"
          },
          {
            "key": "B",
            "text": "Training on data privacy and encryption protocols"
          },
          {
            "key": "C",
            "text": "Training on bias awareness and responsible AI"
          },
          {
            "key": "D",
            "text": "Training on advanced ML algorithms"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Training on bias awareness and responsible AI equips the development team with the knowledge and practices necessary to ensure that AI systems are fair, unbiased, and explainable, which aligns with the company’s requirements."
      },
      {
        "id": 9,
        "text": "A company has an ML model. The company wants to know how the model makes predictions. Which term refers to understanding model predictions?",
        "options": [
          {
            "key": "A",
            "text": "Model interpretability"
          },
          {
            "key": "B",
            "text": "Model training"
          },
          {
            "key": "C",
            "text": "Model interoperability"
          },
          {
            "key": "D",
            "text": "Model performance"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Model interpretability refers to understanding how a model makes its predictions, providing insights into the reasoning behind the model’s outputs."
      },
      {
        "id": 10,
        "text": "A company wants to identify groups for its customers based on the customers’ demographics and buying patterns. Which algorithm should the company use to meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "K-nearest neighbors (k-NN)"
          },
          {
            "key": "B",
            "text": "K-means"
          },
          {
            "key": "C",
            "text": "Decision tree"
          },
          {
            "key": "D",
            "text": "Support vector machine"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "K-means is a clustering algorithm commonly used to identify and group customers based on shared characteristics such as demographics and buying patterns, making it suitable for customer segmentation tasks."
      },
      {
        "id": 11,
        "text": "A company is using an Amazon Nova Canvas model to generate images. The model generates images successfully. The company needs to prevent the model from including specific items in the generated images. Which solution will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Use a higher temperature value."
          },
          {
            "key": "B",
            "text": "Use a more detailed prompt."
          },
          {
            "key": "C",
            "text": "Use a negative prompt."
          },
          {
            "key": "D",
            "text": "Use another foundation model (FM)."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "A negative prompt is used to specify items or characteristics that you want the image generation model to avoid including in the output, ensuring that specific items are excluded from generated images."
      },
      {
        "id": 12,
        "text": "A company wants to label training datasets by using human feedback to fine-tune a foundation model (FM). The company does not want to develop labeling applications or manage a labeling workforce. Which AWS service or feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Data Wrangler"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Ground Truth Plus"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Macie"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Ground Truth Plus provides managed data labeling services, allowing you to label datasets using human feedback without developing labeling applications or managing a labeling workforce."
      },
      {
        "id": 13,
        "text": "An online media streaming company wants to give its customers the ability to perform natural languagebased image search and filtering. The company needs a vector database that can help with similarity searches and nearest neighbor queries. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Comprehend"
          },
          {
            "key": "B",
            "text": "Amazon Personalize"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon OpenSearch Service"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon OpenSearch Service supports vector search capabilities, allowing you to perform similarity searches and nearest neighbor queries - key requirements for natural language-based image search and filtering."
      },
      {
        "id": 14,
        "text": "A company is building a generative AI tool. The company will use internal documents to customize a foundation model (FM). Which approach will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Classification"
          },
          {
            "key": "B",
            "text": "Continued pre-training"
          },
          {
            "key": "C",
            "text": "Distillation"
          },
          {
            "key": "D",
            "text": "Regression"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Continued pre-training involves further training a foundation model (FM) on internal documents, allowing the model to better understand and generate content specific to the company's context and requirements. This approach customizes the FM using the company’s own data."
      },
      {
        "id": 15,
        "text": "A company is monitoring a predictive model by using Amazon SageMaker Model Monitor. The company notices data drift beyond a defined threshold. The company wants to mitigate a potentially adverse impact on the predictive model. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Restart the SageMaker AI endpoint."
          },
          {
            "key": "B",
            "text": "Adjust the monitoring sensitivity."
          },
          {
            "key": "C",
            "text": "Re-train the model with fresh data."
          },
          {
            "key": "D",
            "text": "Set up experiments tracking."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "When Amazon SageMaker Model Monitor detects data drift beyond a defined threshold, it indicates that the current data differs from what the model was trained on. Retraining the model with recent data ensures it adapts to new patterns and maintains predictive accuracy."
      },
      {
        "id": 16,
        "text": "A financial company uses a generative AI model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use a rule-based system instead of an ML model."
          },
          {
            "key": "B",
            "text": "Apply explainable AI techniques to show customers which factors influenced the model’s decision."
          },
          {
            "key": "C",
            "text": "Develop an interactive UI for customers and provide clear technical explanations about the system."
          },
          {
            "key": "D",
            "text": "Increase the accuracy of the model to reduce the need for transparency."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Explainable AI techniques provide transparency by identifying and displaying the specific factors that influenced the generative AI model’s credit limit decisions, making the decision-making process understandable to customers."
      },
      {
        "id": 17,
        "text": "A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Retrain the model. Monitor model drift by using Amazon SageMaker Clarify."
          },
          {
            "key": "B",
            "text": "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor."
          },
          {
            "key": "C",
            "text": "Build a new model. Monitor model drift by using Amazon SageMaker Feature Store."
          },
          {
            "key": "D",
            "text": "Build a new model. Monitor model drift by using Amazon SageMaker JumpStart."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Model Monitor enables continuous monitoring of model inference quality and detects data/model drift in production. Setting up notifications ensures the company is alerted if quality degrades again, allowing timely intervention and retraining as needed."
      },
      {
        "id": 18,
        "text": "Which option is an example of unsupervised learning?",
        "options": [
          {
            "key": "A",
            "text": "A model that groups customers based on their purchase history"
          },
          {
            "key": "B",
            "text": "A model that classifies images as dogs or cats"
          },
          {
            "key": "C",
            "text": "A model that predicts a house’s price based on various features"
          },
          {
            "key": "D",
            "text": "A model that learns to play chess by using trial and error"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Grouping customers based on purchase history is an example of unsupervised learning, where the model discovers patterns or clusters in the data without using labeled outputs."
      },
      {
        "id": 19,
        "text": "A company is evaluating several large language models (LLMs) for a text summarization task. The company needs to select a metric to evaluate the quality of the summaries that the LLMs generate. Which metric will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Recall"
          },
          {
            "key": "B",
            "text": "Area under the ROC curve (AUC)"
          },
          {
            "key": "C",
            "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
          },
          {
            "key": "D",
            "text": "Mean squared error (MSE)"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The ROUGE metric is widely used to evaluate the quality of summaries generated by language models, as it measures the overlap between the generated summary and reference summaries in terms of recall, precision, and F1-score for n-grams and sequences."
      },
      {
        "id": 20,
        "text": "A research group wants to test different generative AI models to create research papers. The research group has defined a prompt and needs a method to assess the models’ output. The research group wants to use a team of scientists to perform the output assessments. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use automatic evaluation on Amazon Personalize."
          },
          {
            "key": "B",
            "text": "Use content moderation on Amazon Rekognition."
          },
          {
            "key": "C",
            "text": "Use model evaluation on Amazon Bedrock."
          },
          {
            "key": "D",
            "text": "Use sentiment analysis on Amazon Comprehend."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Bedrock provides model evaluation capabilities, allowing a team of scientists to manually assess and compare the outputs of different generative AI models based on defined prompts and criteria. This meets the requirement for human-in-the-loop model output evaluation."
      },
      {
        "id": 21,
        "text": "An AI practitioner wants to evaluate ML models. The AI practitioner wants to provide explanations of model predictions to customers and stakeholders. Which AWS service or feature will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon QuickSight"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Clarify"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon SageMaker Clarify provides tools to explain model predictions, allowing practitioners to generate and share interpretability reports with customers and stakeholders, improving transparency and trust in ML models."
      },
      {
        "id": 22,
        "text": "Sentiment analysis is a subset of which broader field of AI?",
        "options": [
          {
            "key": "A",
            "text": "Computer vision"
          },
          {
            "key": "B",
            "text": "Robotics"
          },
          {
            "key": "C",
            "text": "Natural language processing (NLP)"
          },
          {
            "key": "D",
            "text": "Time series forecasting"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Sentiment analysis is a subset of natural language processing (NLP), which focuses on analyzing and interpreting human language, including the detection of sentiment within text."
      },
      {
        "id": 23,
        "text": "A company wants to set up private access to Amazon Bedrock APIs from the company’s AWS account. The company also wants to protect its data from internet exposure. Which solution meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon CloudFront to restrict access to the company’s private content."
          },
          {
            "key": "B",
            "text": "Use AWS Glue to set up data encryption across the company’s data catalog."
          },
          {
            "key": "C",
            "text": "Use AWS Lake Formation to manage centralized data governance and cross-account data sharing."
          },
          {
            "key": "D",
            "text": "Use AWS PrivateLink to configure a private connection between the company’s VPC and Amazon"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "AWS PrivateLink enables private connectivity between your VPC and Amazon Bedrock APIs without exposing data to the public internet, ensuring that all API calls and data transfers remain secure and private within your AWS account."
      },
      {
        "id": 24,
        "text": "A company receives a large amount of unstructured user feedback in text format. The company wants to analyze the sentiment of the user feedback. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis"
          },
          {
            "key": "B",
            "text": "Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment"
          },
          {
            "key": "C",
            "text": "Use a recommendation engine algorithm to detect user sentiment."
          },
          {
            "key": "D",
            "text": "Use a time series algorithm to predict user sentiment based on past feedback."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "A large language model (LLM) can analyze unstructured text using NLP techniques to accurately determine the sentiment (positive, negative, or neutral) of user feedback. This approach is well-suited for handling large volumes of text data."
      },
      {
        "id": 25,
        "text": "RAG improves LLMs by incorporating information from external data sources at query time. A company wants to create an AI solution to generate images and descriptions for a product catalog. The company needs to select a foundation model (FM) for this solution. The company must consider the output types of each FM. Which FM characteristic is the company evaluating?",
        "options": [
          {
            "key": "A",
            "text": "Latency"
          },
          {
            "key": "B",
            "text": "Model size"
          },
          {
            "key": "C",
            "text": "Model customization"
          },
          {
            "key": "D",
            "text": "Modality"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Modality refers to the types of input and output data a foundation model can handle, such as text, images, or both. Evaluating modality ensures the selected FM can generate both images and text descriptions for the product catalog."
      },
      {
        "id": 26,
        "text": "A company wants to use an ML model to analyze customer reviews on social media. The model must determine if each review has a neutral, positive, or negative sentiment. Which model evaluation strategy will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Open-ended generation"
          },
          {
            "key": "B",
            "text": "Text summarization"
          },
          {
            "key": "C",
            "text": "Machine translation"
          },
          {
            "key": "D",
            "text": "Classification"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Classification is the evaluation strategy that assigns input data (such as customer reviews) to predefined categories - in this case, neutral, positive, or negative sentiment. This approach is standard for sentiment analysis tasks."
      },
      {
        "id": 27,
        "text": "Which option is an example of unsupervised learning?",
        "options": [
          {
            "key": "A",
            "text": "Clustering data points into groups based on their similarity"
          },
          {
            "key": "B",
            "text": "Training a model to recognize images of animals"
          },
          {
            "key": "C",
            "text": "Predicting the price of a house based on the house’s features"
          },
          {
            "key": "D",
            "text": "Generating human-like text based on a given prompt"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Clustering data points based on similarity is an example of unsupervised learning, where the algorithm groups data without using labeled examples."
      },
      {
        "id": 28,
        "text": "An online learning company with large volumes of education materials wants to use enterprise search. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Comprehend"
          },
          {
            "key": "B",
            "text": "Amazon Textract"
          },
          {
            "key": "C",
            "text": "Amazon Kendra"
          },
          {
            "key": "D",
            "text": "Amazon Personalize"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Kendra is an intelligent enterprise search service that enables organizations to search large volumes of unstructured data, such as educational materials, making it ideal for enterprise search needs."
      },
      {
        "id": 29,
        "text": "A company creates video content. The company wants to use generative AI to generate new creative content and to reduce video creation time. Which solution will meet these requirements in the MOST operationally efficient way?",
        "options": [
          {
            "key": "A",
            "text": "Use the Amazon Titan Image Generator model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos."
          },
          {
            "key": "B",
            "text": "Use the Amazon Nova Canvas model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos."
          },
          {
            "key": "C",
            "text": "Use the Amazon Nova Reel model on Amazon Bedrock to generate videos."
          },
          {
            "key": "D",
            "text": "Use the Amazon Nova Pro model on Amazon Bedrock to generate videos."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "The Amazon Nova Reel model on Amazon Bedrock is specifically designed for generative video creation, enabling the company to efficiently generate new creative content and significantly reduce video creation time in an operationally efficient manner."
      },
      {
        "id": 30,
        "text": "A company is training ML models on datasets. The datasets contain some classes that have more examples than other classes. The company wants to measure how well the model balances detecting and labeling the classes. Which metric should the company use?",
        "options": [
          {
            "key": "A",
            "text": "Accuracy"
          },
          {
            "key": "B",
            "text": "Recall"
          },
          {
            "key": "C",
            "text": "Precision"
          },
          {
            "key": "D",
            "text": "F1 score"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "The F1 score is the harmonic mean of precision and recall, making it especially useful for evaluating model performance on datasets with class imbalance. It measures how well the model balances detecting (recall) and correctly labeling (precision) all classes."
      },
      {
        "id": 31,
        "text": "A company is analyzing financial transaction records. The company categorizes the records as either personal or business. The company inserts the categories into the transaction records. Which data preparation step does this describe?",
        "options": [
          {
            "key": "A",
            "text": "Data encoding"
          },
          {
            "key": "B",
            "text": "Data labeling"
          },
          {
            "key": "C",
            "text": "Data normalization"
          },
          {
            "key": "D",
            "text": "Data balancing"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Assigning categories such as \"personal\" or \"business\" to financial transaction records is an example of data labeling, where each data point is tagged with a specific label for use in machine learning or data analysis tasks."
      },
      {
        "id": 32,
        "text": "A company wants to extract key insights from large policy documents to increase employee efficiency. Which generative AI strategy meets this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Regression"
          },
          {
            "key": "B",
            "text": "Clustering"
          },
          {
            "key": "C",
            "text": "Summarization"
          },
          {
            "key": "D",
            "text": "Classification"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Summarization is a generative AI strategy that extracts and condenses the key insights from large documents, such as policy documents, making it easier for employees to quickly understand and act on essential information."
      },
      {
        "id": 33,
        "text": "A company is using Amazon SageMaker to deploy a model that identifies if social media posts contain certain topics. The company needs to show how different input features influence model behavior.   Which SageMaker feature meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "SageMaker Canvas"
          },
          {
            "key": "B",
            "text": "SageMaker Clarify"
          },
          {
            "key": "C",
            "text": "SageMaker Feature Store"
          },
          {
            "key": "D",
            "text": "SageMaker Ground Truth"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "SageMaker Clarify provides tools for model interpretability, allowing you to visualize and understand how different input features influence the behavior and predictions of your deployed model."
      },
      {
        "id": 34,
        "text": "A company wants to assess internet quality in remote areas of the world. The company needs to collect internet speed data and store the data in Amazon RDS. The company will analyze internet speed variation throughout each day. The company wants to create an AI model to predict potential internet disruptions. Which type of data should the company collect for this task?",
        "options": [
          {
            "key": "A",
            "text": "Tabular data"
          },
          {
            "key": "B",
            "text": "Text data"
          },
          {
            "key": "C",
            "text": "Time series data"
          },
          {
            "key": "D",
            "text": "Audio data"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Time series data consists of measurements (such as internet speed) collected over time, which is essential for analyzing variations throughout the day and for building predictive models of potential internet disruptions."
      },
      {
        "id": 35,
        "text": "A company wants to build an ML model to detect abnormal patterns in sensor data. The company does not have labeled data for training.     Which ML method will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Linear regression"
          },
          {
            "key": "B",
            "text": "Classification"
          },
          {
            "key": "C",
            "text": "Decision tree"
          },
          {
            "key": "D",
            "text": "Autoencoders"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Autoencoders are a type of unsupervised learning method used to detect abnormal patterns (anomalies) in sensor data when labeled data is not available. They learn to reconstruct normal patterns, making deviations (anomalies) easily detectable."
      },
      {
        "id": 36,
        "text": "A company uses Amazon Bedrock to implement a generative AI assistant on a website. The AI assistant helps customers with product recommendations and purchasing decisions. The company wants to measure the direct impact of the AI assistant on sales performance. Which metric will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "The conversion rate of customers who purchase products after AI assistant interactions."
          },
          {
            "key": "B",
            "text": "The number of customer interactions with the AI assistant"
          },
          {
            "key": "C",
            "text": "Sentiment analysis scores from customer feedback after AI assistant interactions"
          },
          {
            "key": "D",
            "text": "Natural language understanding accuracy rates"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Conversion rate directly measures the impact of the AI assistant on sales performance by quantifying the percentage of customers who make a purchase after interacting with the assistant. This metric links AI engagement to actual sales outcomes."
      },
      {
        "id": 37,
        "text": "Which AWS service or feature stores embeddings in a vector database for use with foundation models (FMs) and Retrieval Augmented Generation (RAG)?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Ground Truth"
          },
          {
            "key": "B",
            "text": "Amazon OpenSearch Service"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Textract"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon OpenSearch Service provides a vector database capability to store and search embeddings, which are essential for powering Retrieval Augmented Generation (RAG) workflows and integrating with foundation models (FMs) in generative AI solutions. T"
      },
      {
        "id": 38,
        "text": "Which scenario represents a practical use case for generative AI?",
        "options": [
          {
            "key": "A",
            "text": "Using an ML model to forecast product demand"
          },
          {
            "key": "B",
            "text": "Employing a chatbot to provide human-like responses to customer queries in real time"
          },
          {
            "key": "C",
            "text": "Using an analytics dashboard to track website traffic and user behavior"
          },
          {
            "key": "D",
            "text": "Implementing a rule-based recommendation engine to suggest products to customers"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "A generative AI use case involves generating new content, such as natural language responses. A chatbot that provides human-like responses to customer queries uses generative AI models (like large language models) to dynamically create relevant answers, making this a practical example."
      },
      {
        "id": 39,
        "text": "A company is using Amazon Bedrock for a generative AI solution. The solution must integrate a service with vector database storage and vector search capabilities. Which AWS service will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "key": "B",
            "text": "Amazon OpenSearch Service"
          },
          {
            "key": "C",
            "text": "Amazon ElastiCache"
          },
          {
            "key": "D",
            "text": "Amazon Redshift"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon OpenSearch Service supports vector database storage and vector search capabilities, which are essential for integrating with generative AI solutions like those on Amazon Bedrock that require efficient similarity search over embeddings."
      },
      {
        "id": 40,
        "text": "A media streaming platform wants to provide movie recommendations to users based on the users’ account history. Which AWS service meets these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Polly"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Personalize"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon Personalize is an AWS service designed to deliver personalized recommendations, such as movie suggestions, to users based on their account history and preferences."
      },
      {
        "id": 41,
        "text": "A company has developed an ML model to approve or reject loan applications. The model's decision-making process must be transparent and explainable to comply with regulatory requirements. The company must document the decision-making process for audit purposes. Which solution will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Textract"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Model Card"
          },
          {
            "key": "C",
            "text": "AWS Cloud Formation"
          },
          {
            "key": "D",
            "text": "Amazon Comprehend"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Model Card enables you to document a model’s decision-making process, including transparency and explainability details, which helps meet regulatory and audit requirements for AI-driven decisions such as loan approvals."
      },
      {
        "id": 42,
        "text": "Which considerations are important when designing prompts for generative AI? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Providing clear context and instructions"
          },
          {
            "key": "B",
            "text": "Using as many words as possible"
          },
          {
            "key": "C",
            "text": "Including relevant examples when helpful"
          },
          {
            "key": "D",
            "text": "Always using technical jargon"
          },
          {
            "key": "E",
            "text": "Making prompts as vague as possible"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Clear context and instructions help the model understand what's expected, while relevant examples (few-shot learning) can guide the model toward the desired output format and style."
      },
      {
        "id": 43,
        "text": "What is the primary benefit of using Amazon SageMaker JumpStart?",
        "options": [
          {
            "key": "A",
            "text": "To reduce inference costs"
          },
          {
            "key": "B",
            "text": "To access pre-trained models and solutions"
          },
          {
            "key": "C",
            "text": "To automatically label data"
          },
          {
            "key": "D",
            "text": "To monitor model performance"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "SageMaker JumpStart provides access to hundreds of pre-trained models, built-in algorithms, and end-to-end ML solutions, enabling faster time-to-market for ML projects."
      },
      {
        "id": 44,
        "text": "Which factors should be considered when implementing MLOps practices? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Model versioning and reproducibility"
          },
          {
            "key": "B",
            "text": "Automated testing and validation"
          },
          {
            "key": "C",
            "text": "Using only cloud-based services"
          },
          {
            "key": "D",
            "text": "Minimizing documentation"
          },
          {
            "key": "E",
            "text": "Avoiding monitoring in production"
          }
        ],
        "answer_str": "A, B",
        "answers": [
          "A",
          "B"
        ],
        "explanation": "Model versioning ensures reproducibility and enables rollbacks, while automated testing validates models before deployment. These are core MLOps practices for reliable ML systems."
      },
      {
        "id": 45,
        "text": "What is the purpose of embeddings in machine learning?",
        "options": [
          {
            "key": "A",
            "text": "To compress images"
          },
          {
            "key": "B",
            "text": "To represent data as dense numerical vectors"
          },
          {
            "key": "C",
            "text": "To encrypt sensitive information"
          },
          {
            "key": "D",
            "text": "To reduce training time"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Embeddings convert discrete data (like words, images, or categorical features) into dense numerical vectors that capture semantic relationships and can be processed by ML algorithms."
      },
      {
        "id": 46,
        "text": "Which Amazon Bedrock features help with content filtering and safety? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Guardrails for content filtering"
          },
          {
            "key": "B",
            "text": "Model customization options"
          },
          {
            "key": "C",
            "text": "Prompt management capabilities"
          },
          {
            "key": "D",
            "text": "Watermark detection for AI-generated content"
          },
          {
            "key": "E",
            "text": "Knowledge base integration"
          }
        ],
        "answer_str": "A, D",
        "answers": [
          "A",
          "D"
        ],
        "explanation": "Guardrails filter harmful, inappropriate, or unwanted content in both inputs and outputs, ensuring that AI-generated responses align with ethical and safety standards. Watermark detection helps identify AI-generated content, which is crucial for maintaining transparency and accountability. By detecting watermarks, organizations can prevent misuse of AI-generated content, such as plagiarism or the spread of misinformation, thereby enhancing trust and safety in AI deployments."
      },
      {
        "id": 47,
        "text": "What is the difference between discriminative and generative AI models?",
        "options": [
          {
            "key": "A",
            "text": "Discriminative models are faster than generative models"
          },
          {
            "key": "B",
            "text": "Discriminative models classify/predict, generative models create new content"
          },
          {
            "key": "C",
            "text": "Discriminative models are more accurate than generative models"
          },
          {
            "key": "D",
            "text": "Discriminative models require more data than generative models"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Discriminative models learn to distinguish between different classes or predict outcomes (classification/regression), while generative models learn to create new content similar to their training data."
      },
      {
        "id": 48,
        "text": "Which metrics are commonly used to evaluate generative AI model performance? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "BLEU score for translation quality"
          },
          {
            "key": "B",
            "text": "CPU utilization"
          },
          {
            "key": "C",
            "text": "ROUGE score for summarization quality"
          },
          {
            "key": "D",
            "text": "Network latency"
          },
          {
            "key": "E",
            "text": "Storage capacity"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "BLEU (Bilingual Evaluation Understudy) score (A) is the standard metric for evaluating machine translation quality. It measures the precision of n-grams (word sequences) in machine translations compared to reference human translations, with scores ranging from 0 to 1 (higher is better). ROUGE (Recall-Oriented Understudy for Gisting Evaluation) (C) evaluates summarization quality by measuring the overlap between generated summaries and reference summaries, focusing on recall (how much of the reference appears in the generated summary). In AWS, you can implement these metrics in custom evaluation tests within Amazon Bedrock Model Evaluation or SageMaker.\n\n      Options B, D, and E are system performance metrics unrelated to output quality."
      },
      {
        "id": 49,
        "text": "What is the primary purpose of Amazon Q for Business?",
        "options": [
          {
            "key": "A",
            "text": "To train custom ML models"
          },
          {
            "key": "B",
            "text": "To provide AI-powered business intelligence and assistance"
          },
          {
            "key": "C",
            "text": "To store large datasets"
          },
          {
            "key": "D",
            "text": "To monitor infrastructure"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Q for Business is an enterprise-grade, generative AI-powered assistant specifically designed for business use. It integrates with enterprise systems, applications, and data repositories to provide contextual assistance to employees. Key capabilities include: answering questions about company data and policies, generating content like emails and documents based on internal knowledge, providing summaries of documents and meetings, troubleshooting issues and offering solutions, assisting with software development tasks, all while respecting company security policies and access controls. Unlike general AI assistants, Q for Business is specifically trained on your organization's internal information and maintains privacy and security requirements, making it different from both standard ML training tools (A) and basic data storage (C) or monitoring (D) solutions."
      },
      {
        "id": 50,
        "text": "Which capabilities of Amazon OpenSearch Service are most relevant for AI/ML workloads? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Vector similarity search with k-NN"
          },
          {
            "key": "B",
            "text": "Website hosting"
          },
          {
            "key": "C",
            "text": "Vector database functionality"
          },
          {
            "key": "D",
            "text": "Email processing"
          },
          {
            "key": "E",
            "text": "Log analysis"
          }
        ],
        "answer_str": "A, C",
        "answers": [
          "A",
          "C"
        ],
        "explanation": "Amazon OpenSearch Service provides essential capabilities for AI/ML workloads through:\n      - Vector similarity search (k-NN) for efficient similarity-based queries\n      - Vector database functionality for storing and querying embeddings\n\n      **Task Reference**: This is covered in Task Statement 3.1 regarding services for storing embeddings within vector databases."
      }
    ]
  },
  {
    "file": "practice-test-7.md",
    "title": "Practice Test 7",
    "questions": [
      {
        "id": 1,
        "text": "A company is using large language models (LLMs) to develop online tutoring applications. The company needs to apply configurable safeguards to the LLMs. These safeguards must ensure that the LLMs follow standard safety rules when creating applications. Which solution will meet these requirements with the LEAST effort?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Bedrock playgrounds"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker Clarify"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock Guardrails"
          },
          {
            "key": "D",
            "text": "Amazon SageMaker Jumpstart"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Bedrock Guardrails provide configurable safeguards that enforce standard safety rules on large language models (LLMs) with minimal effort, making it easy to ensure safe and compliant AI application development."
      },
      {
        "id": 2,
        "text": "A company is exploring Amazon Nova models in Amazon Bedrock. The company needs a multimodal model that supports multiple languages. Which Nova model will meet these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Nova Lite"
          },
          {
            "key": "B",
            "text": "Nova Pro"
          },
          {
            "key": "C",
            "text": "Nova Canvas"
          },
          {
            "key": "D",
            "text": "Nova Reel"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Nova Lite is a multimodal model in Amazon Bedrock that supports multiple languages andis designed the most cost-effective option among the Nova models, making it suitable for organizations seeking efficient, scalable, and economical"
      },
      {
        "id": 3,
        "text": "A company is building a new generative AI chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks. What can the company do to secure the chatbot with the LEAST implementation effort?",
        "options": [
          {
            "key": "A",
            "text": "Fine-tune the FM to avoid harmful responses."
          },
          {
            "key": "B",
            "text": "Use Amazon Bedrock Guardrails content filters and denied topics."
          },
          {
            "key": "C",
            "text": "Change the FM to a more secure FM."
          },
          {
            "key": "D",
            "text": "Use chain-of-thought prompting to produce secure responses."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Using Amazon Bedrock Guardrails' content filters and denied topics is the quickest and least effort solution to mitigate prompt injection attacks. These guardrails can be configured without model retraining, helping to automatically filter or block unsafe prompts and responses."
      },
      {
        "id": 4,
        "text": "What does inference refer to in the context of AI?",
        "options": [
          {
            "key": "A",
            "text": "The process of creating new AI algorithms"
          },
          {
            "key": "B",
            "text": "The use of a trained model to make predictions or decisions on unseen data"
          },
          {
            "key": "C",
            "text": "The process of combining multiple AI models into one model"
          },
          {
            "key": "D",
            "text": "The method of collecting training data for AI systems"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Inference in AI refers to applying a trained model to new, unseen data to generate predictions or decisions, leveraging the patterns learned during training."
      },
      {
        "id": 5,
        "text": "A company wants to build an AI assistant to provide responses to user queries. The AI assistant must evaluate specific data sources, query external APIs, generate response options, and compare and prioritize response options. Which Amazon Bedrock feature or resource will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Prompt Management"
          },
          {
            "key": "B",
            "text": "Response streaming"
          },
          {
            "key": "C",
            "text": "Knowledge Bases"
          },
          {
            "key": "D",
            "text": "Agents"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon Bedrock Agents enable AI assistants to interact with specific data sources, query external APIs, generate and compare response options, and prioritize results, making them the ideal feature for building advanced, task-oriented chatbots with decision-making and orchestration capabilities."
      },
      {
        "id": 6,
        "text": "An AI practitioner notices a large language model (LLM) is generating different responses for the same input across multiple invocations. Which risk of AI does this describe?",
        "options": [
          {
            "key": "A",
            "text": "Hallucinations"
          },
          {
            "key": "B",
            "text": "Nondeterminism"
          },
          {
            "key": "C",
            "text": "Accuracy"
          },
          {
            "key": "D",
            "text": "Multimodality"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Nondeterminism refers to the property where a large language model generates different responses for the same input due to inherent randomness or stochasticity in the generation process. This can lead to varying outputs on multiple invocations with identical inputs."
      },
      {
        "id": 7,
        "text": "A company is building a generative AI application on AWS. The application will help improve reading comprehension for students. The application must give students the ability to add illustrations to stories. Which solution will meet this requirement?",
        "options": [
          {
            "key": "A",
            "text": "Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs."
          },
          {
            "key": "B",
            "text": "Use Amazon Polly to create an audiobook based on story texts."
          },
          {
            "key": "C",
            "text": "Use Amazon Rekognition to analyze image contents and detect text attributes."
          },
          {
            "key": "D",
            "text": "Create a standard prompt template. Use Amazon Q Business to illustrate stories."
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon Bedrock Stable Diffusion 3.5 Large is a generative AI model designed to create high-quality images from text prompts, allowing students to add custom illustrations to their stories and enhancing reading comprehension through visual aids."
      },
      {
        "id": 8,
        "text": "A healthcare company wants to analyze patient data. The data was gathered over the previous year to detect patterns in disease outbreaks. The company needs to create a trend analysis report for each month to present to public health officials. The company must provide insights into patient data from the most recent month of the current year. Which inference method will meet these requirements MOST cost-effectively?",
        "options": [
          {
            "key": "A",
            "text": "Real-time inference"
          },
          {
            "key": "B",
            "text": "Batch transform"
          },
          {
            "key": "C",
            "text": "Serverless inference"
          },
          {
            "key": "D",
            "text": "Asynchronous inference"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Batch transform is the most cost-effective inference method for analyzing large amounts of data collected over a period (such as monthly patient data). It allows you to process and generate reports on all historical data in batches, rather than incurring the higher costs of real-time or serverless inference."
      },
      {
        "id": 9,
        "text": "A company acquires International Organization for Standardization (ISO) accreditation to manage AI risks and to use AI responsibly. What does this accreditation reflect about the company?",
        "options": [
          {
            "key": "A",
            "text": "All members of the company are ISO certified."
          },
          {
            "key": "B",
            "text": "All AI systems that the company uses are ISO certified."
          },
          {
            "key": "C",
            "text": "All AI application team members are ISO certified."
          },
          {
            "key": "D",
            "text": "The company’s development framework is ISO certified."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "ISO accreditation for managing AI risks means that the company’s development processes, controls, and frameworks for AI are certified to meet ISO standards. It does not certify individual employees or AI systems, but rather the organizational framework and practices."
      },
      {
        "id": 10,
        "text": "A company is developing an ML model to predict heart disease risk. The model uses patient data, such as age, cholesterol, blood pressure, smoking status, and exercise habits. The dataset includes a target value that indicates whether a patient has heart disease. Which ML technique will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "Unsupervised learning"
          },
          {
            "key": "B",
            "text": "Supervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Semi-supervised learning"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Supervised learning is used when the dataset includes both input features (like age, cholesterol, blood pressure, etc.) and a target value indicating the presence of heart disease. The model learns to predict the target value from labeled examples."
      },
      {
        "id": 11,
        "text": "A company has guidelines for data storage and deletion.  Which data governance strategy does this describe?",
        "options": [
          {
            "key": "A",
            "text": "Data de-identification"
          },
          {
            "key": "B",
            "text": "Data quality standards"
          },
          {
            "key": "C",
            "text": "Data retention"
          },
          {
            "key": "D",
            "text": "Log storage"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Data retention refers to the policies and practices that define how long data is stored and when it should be deleted, ensuring compliance with organizational guidelines and regulatory requirements."
      },
      {
        "id": 12,
        "text": "A company needs to apply numerical transformations to a set of images to transpose and rotate the images. Which solution will meet these requirements in the MOST operationally efficient way?",
        "options": [
          {
            "key": "A",
            "text": "Create a deep neural network by using the images as input."
          },
          {
            "key": "B",
            "text": "Create an AWS Lambda function to perform the transformations."
          },
          {
            "key": "C",
            "text": "Use an Amazon Bedrock large language model (LLM) with a high temperature."
          },
          {
            "key": "D",
            "text": "Use AWS Glue Data Quality to make corrections to each image."
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "An AWS Lambda function can efficiently perform numerical image transformations such as transposing and rotating images at scale without the need to build or train a neural network, making it the most operationally efficient solution."
      },
      {
        "id": 13,
        "text": "An AI practitioner is writing software code. The AI practitioner wants to quickly develop a test case and create documentation for the code. Which solution will meet these requirements with the LEAST effort?",
        "options": [
          {
            "key": "A",
            "text": "Upload the code to an online coding assistant."
          },
          {
            "key": "B",
            "text": "Develop an application to use foundation models (FMs)."
          },
          {
            "key": "C",
            "text": "Use Amazon Q Developer in an integrated development environment (IDE)."
          },
          {
            "key": "D",
            "text": "Research and write test cases. Then, create test cases and add documentation."
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Q Developer integrated with an IDE can automatically generate test cases and create documentation for code, minimizing manual effort and accelerating development compared with building custom solutions or manual research."
      },
      {
        "id": 14,
        "text": "A company is developing a generative AI application to automatically generate product descriptions for an ecommerce website. The product descriptions must consist of paragraphs of text that are consistent in style and tone. The application must generate thousands of unique descriptions each day. Which type of generative model will meet these requirements?",
        "options": [
          {
            "key": "A",
            "text": "A variational autoencoder (VAE) model"
          },
          {
            "key": "B",
            "text": "A transformer-based model"
          },
          {
            "key": "C",
            "text": "A diffusion model"
          },
          {
            "key": "D",
            "text": "A generative adversarial network (GAN) model"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Transformer-based models, such as large language models, are designed to generate coherent and contextually consistent text at scale. They are well-suited for creating thousands of unique, styled product descriptions daily."
      },
      {
        "id": 15,
        "text": "An AI practitioner has trained a model on a training dataset. The model performs well on the training data. However, the model does not perform well on evaluation data. What is the MOST likely cause of this issue?",
        "options": [
          {
            "key": "A",
            "text": "The model is underfit."
          },
          {
            "key": "B",
            "text": "The model requires prompt engineering."
          },
          {
            "key": "C",
            "text": "The model is biased."
          },
          {
            "key": "D",
            "text": "The model is overfit."
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Overfitting occurs when a model learns the training data too well, including noise and details that do not generalize. As a result, it performs well on training data but poorly on unseen evaluation data."
      },
      {
        "id": 16,
        "text": "What is the primary difference between AI and ML?",
        "options": [
          {
            "key": "A",
            "text": "AI is a subset of ML"
          },
          {
            "key": "B",
            "text": "ML is a subset of AI"
          },
          {
            "key": "C",
            "text": "They are completely unrelated fields"
          },
          {
            "key": "D",
            "text": "AI and ML are the same thing"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "ML is a subset of AI. The study guide mentions that understanding the similarities and differences between AI, ML, and deep learning is important.\n\n      The main difference is that Artificial Intelligence (AI) is the broad concept of machines mimicking human intelligence, while Machine Learning (ML) is a subset of AI that specifically enables systems to learn from data and improve without explicit programming, acting as a core tool within the larger AI field. Think of AI as the whole universe of smart systems, and ML as one powerful way (using algorithms to find patterns) to build those systems, alongside other AI approaches like expert systems or rule-based logi"
      },
      {
        "id": 17,
        "text": "Which of the following is NOT a type of machine learning?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning"
          },
          {
            "key": "B",
            "text": "Unsupervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Diagnostic learning"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "The study guide mentions supervised, unsupervised, and reinforcement learning as types of machine learning. Diagnostic learning is not a standard type of ML."
      },
      {
        "id": 18,
        "text": "What type of data is most suitable for training a computer vision model?",
        "options": [
          {
            "key": "A",
            "text": "Tabular data"
          },
          {
            "key": "B",
            "text": "Time-series data"
          },
          {
            "key": "C",
            "text": "Image data"
          },
          {
            "key": "D",
            "text": "Text data"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Image data is most suitable for computer vision models. The study guide mentions different types of data used in AI models, including image data"
      },
      {
        "id": 19,
        "text": "Which AWS service is best suited for natural language processing tasks?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Transcribe"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon Comprehend is specifically designed for natural language processing tasks. The study guide lists various AWS managed AI/ML services and their capabilities."
      },
      {
        "id": 20,
        "text": "What is the primary purpose of exploratory data analysis (EDA) in the ML development lifecycle?",
        "options": [
          {
            "key": "A",
            "text": "To train the model"
          },
          {
            "key": "B",
            "text": "To deploy the model"
          },
          {
            "key": "C",
            "text": "To understand the characteristics of the data"
          },
          {
            "key": "D",
            "text": "To monitor the model in production"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "EDA is used to understand the characteristics of the data before model training. The study guide mentions EDA as a component of an ML pipeline."
      },
      {
        "id": 21,
        "text": "Which of the following is NOT a typical stage in an ML pipeline?",
        "options": [
          {
            "key": "A",
            "text": "Data collection"
          },
          {
            "key": "B",
            "text": "Feature engineering"
          },
          {
            "key": "C",
            "text": "Model training"
          },
          {
            "key": "D",
            "text": "Customer acquisition"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Customer acquisition is not a typical stage in an ML pipeline. The study guide lists the components of an ML pipeline, which do not include customer acquisition."
      },
      {
        "id": 22,
        "text": "What does AUC stand for in the context of model performance metrics?",
        "options": [
          {
            "key": "A",
            "text": "Average User Cost"
          },
          {
            "key": "B",
            "text": "Area Under the Curve"
          },
          {
            "key": "C",
            "text": "Automated Universal Calculation"
          },
          {
            "key": "D",
            "text": "Augmented Use Case"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "AUC stands for Area Under the Curve (specifically, the ROC curve). The study guide mentions AUC as one of the model performance metrics.\n\n      AUC (Area Under the Curve) is a performance metric that measures the area under the ROC (Receiver Operating Characteristic) curve. It indicates how well a model can distinguish between classes, with values ranging from 0 to 1, where:\n      - 1.0 represents perfect classification\n      - 0.5 represents random chance\n      - < 0.5 represents worse than random\n\n      basically you are maximizing the area under the curve. if its a flat line at 0.5, you are doing no better than random guessing."
      },
      {
        "id": 23,
        "text": "Which type of learning is most appropriate when you have a large dataset of labeled examples?",
        "options": [
          {
            "key": "A",
            "text": "Unsupervised learning"
          },
          {
            "key": "B",
            "text": "Reinforcement learning"
          },
          {
            "key": "C",
            "text": "Supervised learning"
          },
          {
            "key": "D",
            "text": "Semi-supervised learning"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Supervised learning is most appropriate when you have labeled data. The study guide describes supervised learning as one of the types of machine learning."
      },
      {
        "id": 24,
        "text": "What is the main advantage of using pre-trained models?",
        "options": [
          {
            "key": "A",
            "text": "They always perform better than custom models"
          },
          {
            "key": "B",
            "text": "They require less computational resources to train"
          },
          {
            "key": "C",
            "text": "They are always more accurate"
          },
          {
            "key": "D",
            "text": "They can be used immediately without any training data"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Pre-trained models can be used immediately without training data, which is their main advantage. The study guide mentions pre-trained models as a source of ML models."
      },
      {
        "id": 25,
        "text": "Which AWS service is best suited for automating the process of identifying the best hyperparameters for a model?",
        "options": [
          {
            "key": "A",
            "text": "Amazon SageMaker Autopilot"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Transcribe"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "Amazon SageMaker Autopilot is designed for automating the process of finding the best hyperparameters. While not explicitly mentioned in the study guide, it falls under the SageMaker suite of tools."
      },
      {
        "id": 26,
        "text": "What does MLOps stand for?",
        "options": [
          {
            "key": "A",
            "text": "Machine Learning Operations"
          },
          {
            "key": "B",
            "text": "Multiple Learning Optimizations"
          },
          {
            "key": "C",
            "text": "Model Learning Objectives"
          },
          {
            "key": "D",
            "text": "Managed Learning Outputs"
          }
        ],
        "answer_str": "A",
        "answers": [
          "A"
        ],
        "explanation": "MLOps stands for Machine Learning Operations. The study guide mentions MLOps and its fundamental concepts"
      },
      {
        "id": 27,
        "text": "Which of the following is NOT a typical business metric for evaluating ML models?",
        "options": [
          {
            "key": "A",
            "text": "Cost per user"
          },
          {
            "key": "B",
            "text": "Development costs"
          },
          {
            "key": "C",
            "text": "Customer feedback"
          },
          {
            "key": "D",
            "text": "F1 score"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "F1 score is a **model performance metric**, not a business metric. Typical business metrics include Cost per user, Development costs, and Customer feedback, which relate to real-world impact rather than prediction quality."
      },
      {
        "id": 28,
        "text": "Which of the following are considered business metrics for AI model evaluation? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Precision score"
          },
          {
            "key": "B",
            "text": "Customer satisfaction score"
          },
          {
            "key": "C",
            "text": "Mean Average Precision"
          },
          {
            "key": "D",
            "text": "Time-to-value"
          },
          {
            "key": "E",
            "text": "Root Mean Square Error"
          }
        ],
        "answer_str": "B and D",
        "answers": [
          "B",
          "D"
        ],
        "explanation": "Customer satisfaction score and Time-to-value focus on real-world impact and business value delivery, whereas precision, MAP, and RMSE are technical performance metrics."
      },
      {
        "id": 29,
        "text": "When evaluating an AI solution's success, what types of metrics should be considered? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Only technical performance metrics"
          },
          {
            "key": "B",
            "text": "Return on Investment (ROI)"
          },
          {
            "key": "C",
            "text": "Only user feedback"
          },
          {
            "key": "D",
            "text": "Model inference latency"
          },
          {
            "key": "E",
            "text": "Impact on business processes"
          }
        ],
        "answer_str": "B and E",
        "answers": [
          "B",
          "E"
        ],
        "explanation": "Both financial return (ROI) and impact on business processes measure actual business value and operational improvements, complementing technical evaluation."
      },
      {
        "id": 30,
        "text": "What type of learning is most appropriate when you want an agent to learn from its interactions with an environment?",
        "options": [
          {
            "key": "A",
            "text": "Supervised learning"
          },
          {
            "key": "B",
            "text": "Unsupervised learning"
          },
          {
            "key": "C",
            "text": "Reinforcement learning"
          },
          {
            "key": "D",
            "text": "Transfer learning"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Reinforcement learning involves learning through interaction with an environment via rewards and penalties."
      },
      {
        "id": 31,
        "text": "Which AWS service is best suited for converting text to speech?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Comprehend"
          },
          {
            "key": "B",
            "text": "Amazon Translate"
          },
          {
            "key": "C",
            "text": "Amazon Transcribe"
          },
          {
            "key": "D",
            "text": "Amazon Polly"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "Amazon Polly is a text-to-speech service that converts written text into spoken audio."
      },
      {
        "id": 32,
        "text": "What is the primary purpose of feature engineering in the ML development lifecycle?",
        "options": [
          {
            "key": "A",
            "text": "To collect more data"
          },
          {
            "key": "B",
            "text": "To create new features or transform existing ones to improve model performance"
          },
          {
            "key": "C",
            "text": "To evaluate the model’s performance"
          },
          {
            "key": "D",
            "text": "To deploy the model to production"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Feature engineering involves creating and transforming input features to improve accuracy and model performance."
      },
      {
        "id": 33,
        "text": "Which of the following is an example of unsupervised learning?",
        "options": [
          {
            "key": "A",
            "text": "Spam detection"
          },
          {
            "key": "B",
            "text": "Image classification"
          },
          {
            "key": "C",
            "text": "Clustering customer segments"
          },
          {
            "key": "D",
            "text": "Predicting house prices"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Clustering is unsupervised learning because no labels guide the grouping process."
      },
      {
        "id": 34,
        "text": "What is the main difference between batch inferencing and real-time inferencing?",
        "options": [
          {
            "key": "A",
            "text": "Batch inferencing is always more accurate"
          },
          {
            "key": "B",
            "text": "Real-time inferencing can only be done on small datasets"
          },
          {
            "key": "C",
            "text": "Batch inferencing processes multiple inputs at once, while real-time inferencing processes individual inputs as they arrive"
          },
          {
            "key": "D",
            "text": "Real-time inferencing is always faster than batch inferencing"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Batch inferencing processes groups of data at once, whereas real-time inferencing handles single inputs immediately."
      },
      {
        "id": 35,
        "text": "Which AWS service is best suited for managing the entire machine learning lifecycle?",
        "options": [
          {
            "key": "A",
            "text": "Amazon Comprehend"
          },
          {
            "key": "B",
            "text": "Amazon SageMaker"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Translate"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker supports data preparation, training, tuning, deployment, and monitoring across the ML lifecycle."
      },
      {
        "id": 36,
        "text": "What is the primary purpose of model monitoring in production?",
        "options": [
          {
            "key": "A",
            "text": "To train new models"
          },
          {
            "key": "B",
            "text": "To collect more data"
          },
          {
            "key": "C",
            "text": "To detect issues like model drift or data drift"
          },
          {
            "key": "D",
            "text": "To perform feature engineering"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Model monitoring detects shifts in data or model performance after deployment."
      },
      {
        "id": 37,
        "text": "Which of the following is NOT a typical use case for AI/ML?",
        "options": [
          {
            "key": "A",
            "text": "Fraud detection"
          },
          {
            "key": "B",
            "text": "Recommendation systems"
          },
          {
            "key": "C",
            "text": "Manual data entry"
          },
          {
            "key": "D",
            "text": "Speech recognition"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Manual data entry is not an AI use case, as AI aims to automate or assist tasks."
      },
      {
        "id": 38,
        "text": "What is a token in the context of generative AI?",
        "options": [
          {
            "key": "A",
            "text": "A security feature"
          },
          {
            "key": "B",
            "text": "A unit of text processed by the model"
          },
          {
            "key": "C",
            "text": "A type of neural network"
          },
          {
            "key": "D",
            "text": "A model evaluation metric"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "A token is the basic unit of text (like a word or subword) processed and generated by the model."
      },
      {
        "id": 39,
        "text": "Which of the following is NOT a typical use case for generative AI models?",
        "options": [
          {
            "key": "A",
            "text": "Image generation"
          },
          {
            "key": "B",
            "text": "Summarization"
          },
          {
            "key": "C",
            "text": "Data encryption"
          },
          {
            "key": "D",
            "text": "Code generation"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Data encryption is not a generative task, whereas summarization and generation tasks are typical examples."
      },
      {
        "id": 40,
        "text": "What is the primary advantage of generative AI’s adaptability?",
        "options": [
          {
            "key": "A",
            "text": "It can only work with structured data"
          },
          {
            "key": "B",
            "text": "It can handle a wide range of tasks and domains"
          },
          {
            "key": "C",
            "text": "It always produces perfect results"
          },
          {
            "key": "D",
            "text": "It eliminates the need for human oversight"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Adaptability refers to the ability of generative models to tackle diverse tasks across domains."
      },
      {
        "id": 41,
        "text": "What is a hallucination in the context of generative AI?",
        "options": [
          {
            "key": "A",
            "text": "A visual output produced by the model"
          },
          {
            "key": "B",
            "text": "A type of model architecture"
          },
          {
            "key": "C",
            "text": "An incorrect or fabricated output presented as fact"
          },
          {
            "key": "D",
            "text": "A method of model training"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "A hallucination is an output that is incorrect but presented as factual by the generative model."
      },
      {
        "id": 42,
        "text": "Which AWS service is designed specifically for developing generative AI applications?",
        "options": [
          {
            "key": "A",
            "text": "Amazon EC2"
          },
          {
            "key": "B",
            "text": "Amazon S3"
          },
          {
            "key": "C",
            "text": "Amazon Bedrock"
          },
          {
            "key": "D",
            "text": "Amazon RDS"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Amazon Bedrock provides access to foundation models and tools for building generative AI applications."
      },
      {
        "id": 43,
        "text": "What is a foundation model in generative AI?",
        "options": [
          {
            "key": "A",
            "text": "A model that can only generate text"
          },
          {
            "key": "B",
            "text": "A large, pre-trained model that can be adapted for various tasks"
          },
          {
            "key": "C",
            "text": "A model specifically designed for image generation"
          },
          {
            "key": "D",
            "text": "A model that requires no training data"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "A foundation model is a large-scale, pre-trained model trained on vast amounts of data. It can be adapted or fine-tuned for many different downstream tasks such as text generation, summarization, question answering, or image generation. These models serve as a base upon which specialized AI applications are built."
      },
      {
        "id": 44,
        "text": "Which of the following is NOT a stage in the foundation model lifecycle?",
        "options": [
          {
            "key": "A",
            "text": "Data selection"
          },
          {
            "key": "B",
            "text": "Pre-training"
          },
          {
            "key": "C",
            "text": "Deployment"
          },
          {
            "key": "D",
            "text": "Marketing"
          }
        ],
        "answer_str": "D",
        "answers": [
          "D"
        ],
        "explanation": "The foundation model lifecycle typically includes data selection, pre-training, fine-tuning or customization, evaluation, and deployment. Marketing is a business activity and not part of the technical lifecycle of developing and managing a foundation model."
      },
      {
        "id": 45,
        "text": "What is the primary advantage of using AWS generative AI services for building applications?",
        "options": [
          {
            "key": "A",
            "text": "They are always free"
          },
          {
            "key": "B",
            "text": "They provide a lower barrier to entry"
          },
          {
            "key": "C",
            "text": "They guarantee 100% accuracy"
          },
          {
            "key": "D",
            "text": "They eliminate the need for any coding"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "AWS generative AI services reduce the complexity of building AI solutions by providing managed infrastructure, pre-trained foundation models, and APIs. This lowers the barrier to entry by removing the need to build and train large models from scratch while still allowing customization and scalability."
      },
      {
        "id": 46,
        "text": "What is prompt engineering in the context of generative AI?",
        "options": [
          {
            "key": "A",
            "text": "A method of hardware optimization"
          },
          {
            "key": "B",
            "text": "A technique for designing the physical structure of AI models"
          },
          {
            "key": "C",
            "text": "The process of crafting effective input prompts to guide model outputs"
          },
          {
            "key": "D",
            "text": "A way to reduce energy consumption in AI systems"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Prompt engineering is the practice of carefully designing and refining input instructions (prompts) to guide a generative model toward producing accurate, relevant, and structured outputs. It can involve adding context, constraints, examples, or formatting instructions."
      },
      {
        "id": 47,
        "text": "Which of the following is a potential disadvantage of generative AI solutions?",
        "options": [
          {
            "key": "A",
            "text": "Adaptability"
          },
          {
            "key": "B",
            "text": "Responsiveness"
          },
          {
            "key": "C",
            "text": "Inaccuracy"
          },
          {
            "key": "D",
            "text": "Simplicity"
          }
        ],
        "answer_str": "C",
        "answers": [
          "C"
        ],
        "explanation": "Generative AI models can sometimes produce inaccurate, biased, or fabricated information (hallucinations). This inaccuracy is a known limitation and requires validation, monitoring, and human oversight in production systems."
      },
      {
        "id": 48,
        "text": "What is the difference between zero-shot, one-shot, and few-shot learning in generative AI?",
        "options": [
          {
            "key": "A",
            "text": "They refer to different model architectures"
          },
          {
            "key": "B",
            "text": "They refer to the number of examples provided in the prompt"
          },
          {
            "key": "C",
            "text": "They refer to different training datasets"
          },
          {
            "key": "D",
            "text": "They refer to different inference speeds"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "These terms describe how many examples are included in the prompt:\n      - Zero-shot learning: No examples are provided, only instructions.\n      - One-shot learning: One example is provided to guide the model.\n      - Few-shot learning: A small number of examples (typically 2–5) are provided to establish a pattern for the model to follow.\n      These techniques help influence output behavior without retraining the model."
      },
      {
        "id": 49,
        "text": "Which AWS services can be used for document analysis and information extraction? (Choose 2)",
        "options": [
          {
            "key": "A",
            "text": "Amazon Textract"
          },
          {
            "key": "B",
            "text": "Amazon Comprehend"
          },
          {
            "key": "C",
            "text": "Amazon Polly"
          },
          {
            "key": "D",
            "text": "Amazon Translate"
          },
          {
            "key": "E",
            "text": "Amazon Transcribe"
          }
        ],
        "answer_str": "A, B",
        "answers": [
          "A",
          "B"
        ],
        "explanation": "Amazon Textract extracts text, forms, and structured data from scanned documents using OCR and document analysis capabilities. Amazon Comprehend analyzes text to identify entities, sentiment, key phrases, and other linguistic insights. Together, these services enable end-to-end document understanding and information extraction."
      },
      {
        "id": 50,
        "text": "What is the purpose of Amazon SageMaker Model Monitor?",
        "options": [
          {
            "key": "A",
            "text": "To train models faster"
          },
          {
            "key": "B",
            "text": "To detect data drift and model performance degradation"
          },
          {
            "key": "C",
            "text": "To serve models for inference"
          },
          {
            "key": "D",
            "text": "To create training datasets"
          }
        ],
        "answer_str": "B",
        "answers": [
          "B"
        ],
        "explanation": "Amazon SageMaker Model Monitor continuously monitors deployed machine learning models in production. It detects data drift, model drift, bias drift, and feature distribution changes. This helps ensure that model performance remains reliable over time and alerts teams when retraining or investigation is needed."
      }
    ]
  }
];
