# Contributing to The Nash Group

> *"Every Immortal was once mortal. Every master was once a student."*

Welcome, future Immortal! We're thrilled that you're interested in contributing to The Nash Group. This document will guide you through the process of joining our eternal quest for software excellence.

## 🗡️ The Immortal's Journey

Your path to becoming a contributor follows these stages:

1. **The Awakening** - Your first contribution
2. **The Training** - Learning our ways
3. **The Trials** - Proving your worth
4. **The Ascension** - Becoming a regular contributor
5. **The Mentorship** - Teaching others

## 📜 Before You Begin

### Prerequisites

- Read our [Code of Conduct](CODE_OF_CONDUCT.md)
- Review [The Chronicles](https://github.com/the-nash-group/docs-chronicles) for system architecture
- Set up your development environment using [The Katana](https://github.com/the-nash-group/tool-katana)

### Required Tools

```bash
# The essential arsenal
- Git (2.40+)
- Node.js (20+ LTS)
- Docker (24+)
- Your preferred editor configured with our standards
```

## 🎯 What Can You Contribute?

### For New Immortals (First-Time Contributors)

Look for issues tagged with:
- `good first issue` - Simple tasks to get you started
- `help wanted` - We actively need help here
- `documentation` - Help improve The Chronicles

### Types of Contributions

#### ⚔️ Code Contributions
- Bug fixes (battle scars that need healing)
- New features (forging new weapons)
- Performance improvements (The Quickening optimization)
- Security enhancements (fortifying Holy Ground)

#### 📚 Documentation
- Improving clarity in The Chronicles
- Adding examples and tutorials
- Translating documentation
- Creating architectural diagrams

#### 🧪 Testing
- Writing unit tests
- Creating integration tests
- Performance benchmarking
- Security testing

#### 🎨 Design
- UI/UX improvements
- Logo and branding assets
- Architecture proposals
- API design

## 🔄 The Contribution Workflow

### 1. Fork & Clone

```bash
# Fork via GitHub UI, then:
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
git remote add upstream https://github.com/the-nash-group/REPO_NAME.git
```

### 2. Create Your Branch

```bash
# Branch naming convention:
# feature/description - for new features
# fix/description - for bug fixes  
# docs/description - for documentation
# refactor/description - for refactoring

git checkout -b feature/add-quickening-metrics
```

### 3. Set Up Your Environment

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Run local development
npm run dev
```

### 4. Make Your Changes

Follow our coding standards:

#### JavaScript/TypeScript
```javascript
// Good: Clear, purposeful, tested
export const calculateQuickening = (power: number): number => {
  if (power < 0) throw new Error('Power cannot be negative');
  return Math.pow(power, 2) * QUICKENING_MULTIPLIER;
};

// Bad: Unclear, untested, no error handling
export const calc = (p) => p * p * 1.5;
```

#### Commit Messages
```bash
# Format: <type>(<scope>): <subject>
#
# Types: feat, fix, docs, style, refactor, test, chore
# Scope: component or service name
# Subject: imperative mood, lowercase, no period

# Good examples:
git commit -m "feat(gathering): add rate limiting to gateway"
git commit -m "fix(watcher): resolve memory leak in service discovery"
git commit -m "docs(chronicles): update API authentication guide"

# Bad examples:
git commit -m "Fixed stuff"
git commit -m "WIP"
git commit -m "Update file.js"
```

### 5. Test Your Changes

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:unit
npm run test:integration

# Check code quality
npm run lint
npm run typecheck

# Security scan
npm run security:check
```

### 6. Push Your Changes

```bash
git push origin feature/add-quickening-metrics
```

### 7. Create Pull Request

Use our [PR template](pull_request_template.md) and ensure:

- ✅ Clear description of changes
- ✅ Links to related issues
- ✅ Tests pass
- ✅ Documentation updated
- ✅ No merge conflicts

## 🏗️ Development Guidelines

### Code Style

We use automated formatting, but keep these principles in mind:

- **Clarity > Cleverness**: Write code for humans to read
- **Explicit > Implicit**: Be clear about intentions
- **Consistency > Personal Preference**: Follow existing patterns
- **Tested > "It Works on My Machine"**: Always include tests

### Testing Requirements

- Minimum 80% code coverage for new code
- All edge cases considered
- Integration tests for API changes
- Performance benchmarks for critical paths

### Documentation Standards

Every public API must include:

```typescript
/**
 * Calculates the power transfer during a Quickening event
 * 
 * @param {number} victorPower - Current power of the victor
 * @param {number} defeatedPower - Power of the defeated Immortal
 * @returns {number} The new power level after Quickening
 * @throws {QuickeningError} If power levels are invalid
 * 
 * @example
 * const newPower = calculateQuickening(100, 50);
 * console.log(newPower); // 150
 */
```

## 🚀 Advanced Contributions

### Becoming a Mentor

After consistent quality contributions, you may be invited to become a Mentor:

- Review and merge PRs
- Guide new contributors  
- Participate in architecture decisions
- Represent The Nash Group at events

### Architecture Proposals

For significant changes, create an ADR (Architectural Decision Record):

1. Create issue with `[ADR]` prefix
2. Use our ADR template
3. Gather feedback for 1 week minimum
4. Implement after approval

## 🆘 Getting Help

### Resources

- **Discord**: [Join our community](https://discord.gg/thenashgroup)
- **Discussions**: [GitHub Discussions](https://github.com/orgs/the-nash-group/discussions)
- **Office Hours**: Thursdays 3PM UTC (public video call)
- **Mentor Program**: Request a mentor for your first contribution

### Common Issues

<details>
<summary>Tests failing locally but not in CI?</summary>

Check your Node version matches CI:
```bash
node --version  # Should match .nvmrc
nvm use         # If using nvm
```
</details>

<details>
<summary>Permission denied errors?</summary>

You might need to configure your SSH key:
```bash
ssh-add ~/.ssh/id_rsa
ssh -T git@github.com
```
</details>

<details>
<summary>Can't find the issue to work on?</summary>

Check our [issue board](https://github.com/orgs/the-nash-group/projects) or ask in Discord!
</details>

## 📊 Recognition

### The Hall of Contributors

All contributors are immortalized in:
- Our [Contributors Page](https://thenashgroup.dev/contributors)
- The repository's contributors list
- Special recognition for significant contributions

### Rewards

- **Nash Group Contributor Badge** (digital certificate)
- **Swag** for 3+ merged PRs
- **Conference Tickets** for top contributors
- **Mentorship Opportunities**

## 📋 Checklist for Contributors

Before submitting your PR, ensure:

- [ ] Code follows our style guide
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] PR description complete
- [ ] No conflicts with main branch
- [ ] Security considerations addressed
- [ ] Performance impact assessed

## 🎭 The Immortal's Wisdom

> *"The code you write today will outlive you. Make it worthy of eternity."*

Remember:
- **Quality over quantity** - One excellent PR is worth ten mediocre ones
- **Communication is key** - Ask questions, seek feedback
- **Learn from reviews** - Every comment is a learning opportunity
- **Pay it forward** - Help others as you were helped

## 📞 Contact

- **General Questions**: hello@thenashgroup.dev
- **Security Issues**: security@thenashgroup.dev (see [SECURITY.md](SECURITY.md))
- **Community**: Discord, GitHub Discussions
- **Twitter**: @TheNashGroup

---

*"Welcome to The Game. May your code be eternal."*

**The Nash Group Team**