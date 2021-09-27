---
sidebar_position: 2
---

# 参与贡献

👍🎉 首先, 感谢您花时间来贡献! 🎉👍

Xplorer目前正在开发中。 我们欢迎您参与 Xplorer 的开发。

## 参与

您有诸多方式可以为 Xplorer 做出贡献，其中大多数无需您撰写甚至一行代码。 您可以从这些想法开始：

-   开始使用 Xplorer ！ 请转到入门指南。 每一步都如教程所写的能正常工作吗？ 如果没有，我们总是在寻求改进。 通过提出一个 Issues，让我们了解情况。
-   查看 [Xplorer Issues](https://github.com/kimlimjustin/xplorer/issues)。 若您有想修复的Issues，请[提交合并请求](#your-first-pull-request)。 标记为 [_头号好议题 (Good first issue)_](https://github.com/facebook/docusaurus/labels/Good%20first%20issue) 的都是好出发点。
-   帮助我们改进文档。 如果您发现任何令人困惑的语文，或者任何语法错误，或者可以改进，请提交问题。
-   Take a look at the [GitHub Discussion](https://github.com/kimlimjustin/xplorer/discussions) and give your opinion into a discussion or consider opening a pull request if you see something you want to work on.

Contributions are very welcome!

## Our development process

Xplorer uses [GitHub](https://github.com/kimlimjustin/xplorer) as its source of truth. The core team will be working directly there. All changes will be public from the beginning.

### Reporting new issues/bugs. {#issues}

When [opening a new issue](https://github.com/kimlimjustin/xplorer/issues), always make sure to fill out the issue template. We use GitHub issues to track public bugs. Please ensure your description is clear and has sufficient instructions to be able to reproduce the issue.

-   _One issue, one bug_: Please report a single bug per issue.
-   _Provide reproduction steps_: List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

### Feature Request {#feat}

We use [GitHub Discussion](https://github.com/kimlimjustin/xplorer/discussions) to track ideas from users. Suggest a new feature [here](https://github.com/kimlimjustin/xplorer/discussions)! Great Feature Requests tend to have:

-   A quick idea summary.
-   What & why you wanted to add the specific feature.
-   Additional references like images, links of resources about the feature, etc.

## Working on Xplorer code

### Prerequisite

-   [node js](https://nodejs.org/en/)
-   [git](https://git-scm.com/)
-   [yarn](https://yarnpkg.com/)
-   [gcc compiler](https://gcc.gnu.org/)
-   Code Editor, recommended [vscode](https://code.visualstudio.com/)

### Installation

1. After cloning the repository, run `yarn` in the root of the repository and run `yarn` in the `docs` folder (if you want to working on Xplorer Docs).
2. To start Xplorer locally, run `yarn start` in the root of the repository.

    To start a local development server serving the Docusaurus docs, go into `docs` directory and run `yarn start`

### Semantic commit messages {#commit-msg}

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

#### Example

```
feat: allow overriding of webpack config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

the various types of commits:

-   `feat`: new feature for the user
-   `fix`: bug fix for the user
-   `docs`: changes to the documentation
-   `style`: formatting, missing semi colons, etc.
-   `refactor`: refactoring production code, eg. renaming a variable
-   `test`: adding missing tests, refactoring tests.
-   `chore`: updating grunt tasks etc

Use lower case not title case!

## Working on Xplorer docs

Xplorer documentation website is built using [Docusaurus 2](https://docusaurus.io/), and its code is located is located at [`docs`](https://github.com/kimlimjustin/xplorer/tree/master/docs) folder.

### Prerequisite

-   [node js](https://nodejs.org/en/)
-   [git](https://git-scm.com/downloads)
-   [yarn](https://yarnpkg.com/getting-started/install#about-global-installs)
-   Code Editor, recommended [vscode](https://code.visualstudio.com/)

### Installation

After cloning the repository, run `yarn` in the `docs` folder (you can go into the `docs` folder by running `cd docs` command).

### Local development

1. Run `yarn start` command in the `docs` folder.
2. Edit some markdown texts in the `docs` folder and the website will be hot reloaded.

## Pull requests

### Your first pull request. {#first-pull-request}

So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

Working on your first Pull Request? You can learn how from this free video series:

How to Contribute to an Open Source Project on GitHub

We have a list of [beginner friendly issues](https://github.com/kimlimjustin/xplorer/labels/good%20first%20issue) to help you get your feet wet in the DXplorer codebase and familiar with our contribution process. This is a great place to get started.

### Proposing a change

If you would like to request a new feature or enchancement but are not yet thninking about opening a pull request, you can also [open an discussion](#feat) and others will code it!

If you intend to fixing a bug, please discuss it through [Issues](#issues) before submitting a pull request.

If you intend to add a new feature, please discuss it through [GitHub Discussion](#feat) to avoid multiple people working on a same feature request.

### Sending a Pull Request

make sure the PR does only one thing, otherwise please split it. It is recommended to follow this [commit message style](#commit-msg).

1. Fork [the repository](https://github.com/kimlimjustin/xplorer) and create your branch from `master`.
2. Make changes and ensure your commit message is understandable.
3. Open a [PR](https://github.com/kimlimjustin/xplorer/pulls) and ensure to describe your pull request clearly.

## Working on Xplorer resources

### Locales

We host our locales on the [crowdin](https://crwd.in/xplorer). To translate it, please follow these steps:

-   SIgn up on [Crowdin](https://crowdin.com) and Join our project [here](https://crwd.in/xplorer).
-   Make sure your locale exists there, if it does not exist, leave a comment in [this discussion](https://github.com/kimlimjustin/xplorer/discussions/30) and I'll add the language option :)
-   Get familiar with the Crowdin translation UI, as you will need to use it to translate JSON and Markdown files
-   Translate the content!

#### Priority Files to translate on Crowdin

1. `src/Locales` files
2. `docs/docs` files
3. `docs/i18n/en` files
4. `docs/community` files

#### Production

Once the files on `src/Locales` have been translated for more than 80%, we will add it into Xplorer app, and for the docs, we will add it into production once the translation looks good!

Please comment [here](https://github.com/kimlimjustin/xplorer/discussions/30) if you have any questions!

### Files Icon

Files icons are available on [`src/icon`](https://github.com/kimlimjustin/xplorer/tree/master/src/icon). You can add an icon by doing these steps:

-   Paste the new icon in `src/icon`
-   Edit value of [`src/config/icon.json`](https://github.com/kimlimjustin/xplorer/tree/master/src/config/icon.json)

### File Type library

Files type library is available on [`src/config/type.json`](https://github.com/kimlimjustin/xplorer/tree/master/src/config/type.json).

You can add type of a file extension by adding value on the file.
