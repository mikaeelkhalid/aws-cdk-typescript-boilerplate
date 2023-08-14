# AWS CDK TypeScript Boilerplate

[![Mikaeel Khalid](https://badgen.now.sh/badge/by/mikaeelkhalid/purple)](https://github.com/mikaeelkhalid)

This repository contains a boilerplate to quickly get started with AWS CDK projects using TypeScript. Designed to streamline your CDK app development, this boilerplate provides the essentials to launch your infrastructure-as-code (IAC) projects.

## Features

- **TypeScript**: Strongly typed code for AWS CDK, which ensures code quality and ease of refactoring.
- **Sample Constructs**: Basic constructs included to showcase how to define AWS resources.
- **Sample Stacks**: Basic stack included to showcase how to define AWS resources.
- **Modularity**: Organized codebase to promote modular development of infrastructure components.

## Prerequisites

- Node.js
- AWS CDK CLI

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mikaeelkhalid/aws-cdk-typescript-boilerplate.git
   ```

2. **Navigate to the Directory**

   ```bash
   cd aws-cdk-typescript-boilerplate
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Deploy to AWS**

   ```bash
   cdk deploy
   ```

## Structure

- `app/`: Contains the entry point for the AWS CDK app.
- `config/`: Contains the configurations for stacks and constructs.
- `constructs/`: Houses the constructs definitions [AWS resources].
- `stacks/`: Houses the stack definitions and AWS resources constructs.

## Customization

To add your own constructs [resources] or stacks:

1. Navigate to the `constructs/` directory.
2. Create your new CDK construct or modify existing ones.
3. Import the construct to `stacks/` to use it one of stack.
4. Ensure you've added your stack or resources to the app initialization in the `app/` directory.

## Contributing

Pull requests are welcome!

---

Note: The above is just a sample based on typical structures of AWS CDK projects. You might need to adjust or expand based on the specific contents of the repository.

