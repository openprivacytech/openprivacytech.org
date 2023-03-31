# Types of (PET) Privacy Enhancing Technologies 

PETs are a group of technologies that aim to enhance data privacy, confidentiality, and security, while maintaining usability and functionality. Privacy enhancing technologies, both software and hardware-based, are designed to enable computation of sensitive data without disclosing the underlying information. Each technique employed to achieve this differs depending on the technology and intended use.

In this document, we will explore some of the most common types of PETs used by several organizations.


# Types of Privacy Enhancing Technologies

In the realm of privacy, there are a variety of tools and techniques that have been developed to allow sensitive data to be used without being compromised. These tools, known as Privacy Enhancing Technologies (PETs), come in many different forms, and each has its own unique strengths and weaknesses.

### Differential Privacy:

Differential privacy is a method of data aggregation that involves adding randomized "noise" to the data to prevent reverse engineering of the original inputs. This technique enables privacy-preserving analysis of sensitive data. 

Differential privacy can be used to provide directionally correct statistical analysis without disclosing accurate or precise information. However, there are limits to the number and type of computations that can be performed, which can result in a reduction in data utility.


### Federated Learning:

Federated learning is a machine learning technique that enables statistical analysis or model training on decentralized data sets by employing a "traveling algorithm" where the model gets smarter with every new analysis of the data. Federated learning can be used to train a model based on user inputs on mobile devices, such as spelling errors and auto-completing words. 

This technique enables privacy-preserving analysis of decentralized data sets and facilitates machine learning on sensitive data. However, the privacy benefits of federated learning are debatable, a large volume of data is required to gain insights, and it requires a high maintenance time investment.


### Homomorphic Encryption

Homomorphic encryption is a cryptographic technique that allows computations to be performed on encrypted data without the need for decryption. This technique ensures that the data remains secure at all stages of its lifecycle, including rest, transit, and use. 

Homomorphic encryption is particularly useful in the medical field where it can be used to perform computations on sensitive medical data without compromising the privacy of patients. It is also useful for deploying encrypted models. However, homomorphic encryption works best on structured data, requires customization of analytics, and is computationally expensive.


### Multiparty Computation:

Multiparty computation is a cryptographic technique that enables multiple parties to perform joint computations on individual inputs without revealing the underlying data. This technique allows for secure computations on sensitive data across multiple parties. Multiparty computation can be used in benchmarking on different datasets to produce an aggregated result. 

Multiparty Computation enables secure computations on sensitive data while preserving the privacy of individual inputs. However, parties can infer sensitive data from the output, each deployment requires a completely custom setup, and costs are often high due to communication requirements.


### Secure Enclave/Trusted Execution Environment:

A secure enclave or trusted execution environment is a physically isolated execution environment, typically a secure area of a main processor, that ensures code and data loaded inside is protected. Secure enclave can be used for computations on sensitive financial data. 

This technique ensures data privacy and security, and enables computations on sensitive data. However, secure enclave is hardware-dependent, meaning trust is placed in the specific chip rather than the math used to encrypt and decrypt the data. Data is not encrypted while in the trusted execution environment.


### Zero-Knowledge Proofs:

Zero-knowledge proofs are a cryptographic method by which one party can prove to another party that a given statement is true without conveying any additional information apart from the fact that the statement is indeed true. Zero-knowledge proofs are useful for providing privacy to public blockchains. 

This technique provides privacy-preserving authentication and verification. However, there is no exact guarantee of 100% truth in the claim, computations may require a lot of power to perform, and high costs may be incurred.

##  Summary

|Name|Definition|Use Case|
|:----|:----|:----|
|Homomorphic Encryption|Cryptographic technique allowing computations on encrypted data without decryption|Medical data analysis|
|Multiparty Computation|Cryptographic technique enabling secure computations on sensitive data among multiple parties|Benchmarking on different datasets|
|Differential Privacy|Method of data aggregation involving adding randomized “noise” to the data|Providing directionally correct statistical analysis|
|Federated Learning|Machine learning technique enabling statistical analysis or model training on decentralized data sets|Training a model based on user inputs on mobile devices|
|Secure Enclave/Trusted Execution Environment|Physically isolated execution environment ensuring code and data loaded inside is protected|Computations on sensitive financial data|
|Zero-Knowledge Proofs|Cryptographic method for proving a given statement is true without conveying additional information|Providing privacy to public blockchains|


> Note : The above are just a few examples of the many types of Privacy Enhancing Technologies available, and there are many other options to consider depending on the specific needs of an individual or organization.


We will be discussing all of the above types in much detail later in the documentation along wiht their use cases and intorduce many new Privacy Enahncing Technologies along the way.
