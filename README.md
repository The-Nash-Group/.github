# The Nash Group .github Repository

This repository contains organization-wide community health files, templates, and configurations for The Nash Group.

## 📁 Structure

```
.github/
├── profile/                     # Organization profile (visible on GitHub org page)
│   └── README.md                # The Nash Group public profile
├── ISSUE_TEMPLATE/              # Issue templates shared across all repos
│   ├── bug_report.md
│   ├── feature_request.md
│   └── config.yml
├── workflow-templates/          # Reusable workflow templates
│   ├── ci.yml                  # Continuous Integration template
│   ├── release.yml             # Release automation template
│   └── *.properties.json       # Template metadata files
├── .github/                    # Organization-wide GitHub configs
│   ├── dependabot.yml         # Default Dependabot configuration
│   ├── labeler.yml            # Label automation config
│   └── settings.yml           # Probot settings
├── docs/                       # Additional documentation
├── CODE_OF_CONDUCT.md         # Community code of conduct
├── CONTRIBUTING.md            # Default contribution guidelines
├── SECURITY.md                # Security policy and reporting
├── SUPPORT.md                 # Support resources
├── FUNDING.yml                # Sponsorship configuration
├── LICENSE                    # Default license (MIT)
└── pull_request_template.md  # Default PR template
```

## 🎯 Purpose

This repository serves as the central location for:

1. **Community Health Files**: Default files that appear in all repositories that don't have their own
2. **Organization Profile**: The public-facing README shown on our GitHub organization page
3. **Workflow Templates**: Reusable GitHub Actions workflows that can be used across all repositories
4. **Issue/PR Templates**: Standardized templates for issues and pull requests

## 📋 How It Works

### Community Health Files
Files like `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, and `SECURITY.md` in this repository will be used as defaults for any repository in the organization that doesn't have its own copy.

### Organization Profile
The `profile/README.md` file is displayed on the organization's main GitHub page at https://github.com/The-Nash-Group

### Workflow Templates
Workflow templates in the `workflow-templates/` directory can be used when creating new workflows in any repository. Each workflow template requires a corresponding `.properties.json` file with metadata.

### Using Templates
1. Go to any repository in the organization
2. Navigate to Actions → New workflow
3. Find "Workflows created by The Nash Group"
4. Select and customize the template for your needs

## 🔒 Security

For security concerns, please refer to our [Security Policy](SECURITY.md).

## 📜 The Covenant

This repository operates under the principles of [The Covenant](https://github.com/The-Nash-Group/the-covenant), our organizational governance framework.

## 🛠️ Maintenance

This repository is maintained by the @the-nash-group/mentors team. All changes should go through pull request review.

---

*"In the end, there can be only one... platform."*