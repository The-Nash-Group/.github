module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type rules
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that don't affect meaning (white-space, formatting, etc)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf',     // Performance improvement
        'test',     // Adding missing tests or correcting existing tests
        'build',    // Changes that affect build system or external dependencies
        'ci',       // Changes to CI configuration files and scripts
        'chore',    // Other changes that don't modify src or test files
        'revert',   // Reverts a previous commit
        'security', // Security fixes (custom for The Nash Group)
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    
    // Scope rules
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-enum': [
      1,
      'always',
      [
        // Services
        'gathering',
        'prize',
        'watcher',
        'holy-ground',
        'methos',
        'antique-shop',
        
        // Tools
        'sword',
        'katana',
        
        // Infrastructure
        'quickening',
        'ci',
        'docker',
        'k8s',
        
        // General
        'deps',
        'config',
        'release',
        'security',
        'docs',
        'tests',
      ],
    ],
    
    // Subject rules
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 3],
    
    // Header rules
    'header-max-length': [2, 'always', 100],
    'header-min-length': [2, 'always', 10],
    
    // Body rules
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'body-min-length': [0, 'always', 0], // Body is optional
    
    // Footer rules
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    
    // References rules (for issue linking)
    'references-empty': [1, 'never'], // Warn if no issue reference
  },
  
  // Custom parser options
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(?:\(([^)]+)\))?: (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      noteKeywords: ['BREAKING CHANGE', 'BREAKING-CHANGE', 'SECURITY'],
      revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
    },
  },
  
  // Custom rules for The Nash Group
  plugins: [
    {
      rules: {
        'immortal-format': ({ subject }) => {
          // Custom rule: Ensure immortal references are properly formatted
          const immortalPattern = /\b(The Gathering|The Prize|The Watcher|Holy Ground|The Quickening|The Sword|The Katana)\b/g;
          const matches = subject.match(immortalPattern);
          if (matches) {
            const validServices = [
              'The Gathering',
              'The Prize',
              'The Watcher',
              'Holy Ground',
              'The Quickening',
              'The Sword',
              'The Katana',
            ];
            const invalidMatches = matches.filter(m => !validServices.includes(m));
            return [
              invalidMatches.length === 0,
              `Service names must be properly capitalized: ${validServices.join(', ')}`,
            ];
          }
          return [true];
        },
      },
    },
  ],
  
  // Help message
  helpUrl: 'https://github.com/the-nash-group/.github/blob/main/CONTRIBUTING.md#commit-messages',
};