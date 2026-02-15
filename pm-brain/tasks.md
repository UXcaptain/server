# Product Repo Tasks

## P0: Core Workflows

**Write PRD for [feature]**
Prompt: "Create PRD for [feature] using template. Reference research-summary.md and product-goals.md - Do not generate user stories"
Output: docs/prds/[feature].md

**Analyze user research**
Prompt: "Summarize key findings from the indicated file and create a new file  new file should have a similar name and be located in the same directory as the original input."
Output: user-research/[directory]/[output].md - Update research-summary.md exclusively with relevant information to the product

## P1: Supporting Tasks

**Generate user stories from PRD**
Prompt: "Convert product.md into 10-15 user stories with acceptance criteria."
Output: docs/user-stories/[feature].md

## P2: Documentation & Framework Tasks

**Create product templates**

- PRD template for standard feature documentation
- Opportunity assessment template for strategic analysis
- Location: docs/prds/PRD-template.md, docs/opportunities/opportunity-assesment-template.md

**Create startup playbook**

- 10-step playbook for product development and market launch
- Location: docs/playbook/10-step-playbook.md

**Document tools and utilities**

- Document AskUserQuestion tool functionality
- Location: tools/askUserQuestionTool.md

## Usage Notes

- Always reference relevant .md files (product.md, research-summary.md)
- Output to docs/ folder with clear naming
- Use comprehensive templates to ensure consistent documentation quality
- Track completed tasks in memory bank context.md
