import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e99'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '873'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '099'),
            routes: [
              {
                path: '/docs/inventor-reference/',
                component: ComponentCreator('/docs/inventor-reference/', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/create-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/create-channel', '5e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/delete-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/delete-channel', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/delete-channel-permission',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/delete-channel-permission', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/edit-channel-permissions',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/edit-channel-permissions', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/get-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/get-channel', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/get-channels',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/get-channels', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/modify-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/modify-channel', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/move-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/move-channel', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/move-member-to-voice-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/move-member-to-voice-channel', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/channels/trigger-typing-indicator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/channels/trigger-typing-indicator', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/custom-block',
                component: ComponentCreator('/docs/inventor-reference/Blocks/custom-block', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/create-row',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/create-row', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/delete-row',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/delete-row', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/delete-rows-by-value',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/delete-rows-by-value', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-random-row',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-random-row', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-random-row-by-value',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-random-row-by-value', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-random-rows',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-random-rows', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-random-rows-by-value',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-random-rows-by-value', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-row-by-values',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-row-by-values', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-row-count',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-row-count', '0c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-rows',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-rows', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-rows-by-values',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-rows-by-values', '42a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/get-rows-sorted-by-column',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/get-rows-sorted-by-column', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/lookup-by-id',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/lookup-by-id', '908'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/lookup-by-value-or-create',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/lookup-by-value-or-create', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/update-by-value-or-create',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/update-by-value-or-create', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/databases/update-row',
                component: ComponentCreator('/docs/inventor-reference/Blocks/databases/update-row', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/emoji/create-emoji',
                component: ComponentCreator('/docs/inventor-reference/Blocks/emoji/create-emoji', '4b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/emoji/delete-emoji',
                component: ComponentCreator('/docs/inventor-reference/Blocks/emoji/delete-emoji', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/emoji/get-emoji',
                component: ComponentCreator('/docs/inventor-reference/Blocks/emoji/get-emoji', '3e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/emoji/get-emojis',
                component: ComponentCreator('/docs/inventor-reference/Blocks/emoji/get-emojis', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/emoji/modify-emoji',
                component: ComponentCreator('/docs/inventor-reference/Blocks/emoji/modify-emoji', '2ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/advanced-conditional',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/advanced-conditional', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/async-folder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/async-folder', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/break',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/break', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/continue',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/continue', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/exit-flow',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/exit-flow', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/folder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/folder', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/if-statement',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/if-statement', '433'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/is-user-collaborator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/is-user-collaborator', '5c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/flow-control/sleep',
                component: ComponentCreator('/docs/inventor-reference/Blocks/flow-control/sleep', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/create-or-update-global-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/create-or-update-global-variable', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/delete-global-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/delete-global-variable', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/get-global-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/get-global-variable', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/get-global-variables',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/get-global-variables', '665'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/global-variable-search',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/global-variable-search', '84d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/global-variables/increment-or-decrement-global-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/global-variables/increment-or-decrement-global-variable', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/ifttt-trigger',
                component: ComponentCreator('/docs/inventor-reference/Blocks/ifttt-trigger', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/add-option-to-autocomplete-response-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/add-option-to-autocomplete-response-builder', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/autocomplete-response-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/autocomplete-response-builder', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/autocomplete-response-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/autocomplete-response-interaction', '712'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/defer-component-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/defer-component-interaction', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/defer-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/defer-interaction', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/embed-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/embed-reply-to-interaction', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/get-interaction-message-data',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/get-interaction-message-data', '471'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/modal-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/modal-reply-to-interaction', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/interactions/text-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/interactions/text-reply-to-interaction', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/invites/create-invite',
                component: ComponentCreator('/docs/inventor-reference/Blocks/invites/create-invite', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/invites/delete-invite',
                component: ComponentCreator('/docs/inventor-reference/Blocks/invites/delete-invite', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/invites/get-invite',
                component: ComponentCreator('/docs/inventor-reference/Blocks/invites/get-invite', '34c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/invites/get-invites',
                component: ComponentCreator('/docs/inventor-reference/Blocks/invites/get-invites', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/local-variables/append-new-line-to-local-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/local-variables/append-new-line-to-local-variable', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/local-variables/create-local-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/local-variables/create-local-variable', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/local-variables/increment-or-decrement-local-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/local-variables/increment-or-decrement-local-variable', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/local-variables/update-local-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/local-variables/update-local-variable', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/absolute-value',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/absolute-value', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/factorial',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/factorial', '5bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/format-number',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/format-number', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/if-number-is-close-to-other-number',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/if-number-is-close-to-other-number', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/logarithm',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/logarithm', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/math-operations',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/math-operations', 'de8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/math-operations-(float)',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/math-operations-(float)', '2d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/random-number-generator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/random-number-generator', 'dda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/rounding-(ceil)',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/rounding-(ceil)', '5f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/rounding-(floor)',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/rounding-(floor)', '465'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/rounding-(round)',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/rounding-(round)', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/square-root',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/square-root', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/math/truncate-float',
                component: ComponentCreator('/docs/inventor-reference/Blocks/math/truncate-float', '76f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/add-button-to-embed-button-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/add-button-to-embed-button-builder', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/add-field-to-embed-field-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/add-field-to-embed-field-builder', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/add-option-to-dropdown-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/add-option-to-dropdown-builder', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/bulk-purge-messages',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/bulk-purge-messages', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/delete-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/delete-message', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/embed-button-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/embed-button-builder', 'e2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/embed-dropdown-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/embed-dropdown-builder', '9ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/embed-field-builder',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/embed-field-builder', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/get-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/get-message', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/get-messages',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/get-messages', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/get-pinned-messages',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/get-pinned-messages', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/pin-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/pin-message', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/publish-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/publish-message', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/send-or-edit-embed-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/send-or-edit-embed-message', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/send-or-edit-text-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/send-or-edit-text-message', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/send-tts-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/send-tts-message', '803'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/messages/unpin-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/messages/unpin-message', '443'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/escape-json-field',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/escape-json-field', '925'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/format-json',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/format-json', 'b3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/generate-form-body',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/generate-form-body', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/if-number-is-in-range',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/if-number-is-in-range', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/if-value-is-number',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/if-value-is-number', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/parse-json',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/parse-json', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/network/send-network-request',
                component: ComponentCreator('/docs/inventor-reference/Blocks/network/send-network-request', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/add-reaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/add-reaction', 'e13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/get-reactions',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/get-reactions', '90d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/get-reactions-count',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/get-reactions-count', '4d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/remove-all-reactions',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/remove-all-reactions', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/remove-reaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/remove-reaction', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/reactions/remove-user-reaction',
                component: ComponentCreator('/docs/inventor-reference/Blocks/reactions/remove-user-reaction', '075'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/regex/regex-find-matches-iterator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/regex/regex-find-matches-iterator', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/regex/regex-find-matches-list',
                component: ComponentCreator('/docs/inventor-reference/Blocks/regex/regex-find-matches-list', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/regex/regex-match',
                component: ComponentCreator('/docs/inventor-reference/Blocks/regex/regex-match', '339'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/regex/regex-replace',
                component: ComponentCreator('/docs/inventor-reference/Blocks/regex/regex-replace', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/assign-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/assign-role', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/create-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/create-role', '455'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/delete-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/delete-role', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/get-@everyone-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/get-@everyone-role', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/get-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/get-role', '589'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/get-roles',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/get-roles', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/remove-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/remove-role', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/roles/update-role',
                component: ComponentCreator('/docs/inventor-reference/Blocks/roles/update-role', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/scheduled-events/create-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/Blocks/scheduled-events/create-scheduled-event', '61c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/scheduled-events/delete-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/Blocks/scheduled-events/delete-scheduled-event', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/scheduled-events/get-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/Blocks/scheduled-events/get-scheduled-event', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/scheduled-events/get-scheduled-events',
                component: ComponentCreator('/docs/inventor-reference/Blocks/scheduled-events/get-scheduled-events', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/scheduled-events/modify-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/Blocks/scheduled-events/modify-scheduled-event', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/get-server',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/get-server', 'afb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/get-server-bans',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/get-server-bans', 'be1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/get-server-count',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/get-server-count', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/get-server-members',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/get-server-members', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/get-servers',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/get-servers', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/leave-server',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/leave-server', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/servers/update-server',
                component: ComponentCreator('/docs/inventor-reference/Blocks/servers/update-server', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/base64-decode',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/base64-decode', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/base64-encode',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/base64-encode', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/bcrypt-compare-hash',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/bcrypt-compare-hash', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/bcrypt-hash-string',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/bcrypt-hash-string', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/convert-html-to-markdown',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/convert-html-to-markdown', '040'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/generate-uuidv7',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/generate-uuidv7', '672'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/hex-to-int',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/hex-to-int', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/int-to-hex',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/int-to-hex', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/md5-hash',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/md5-hash', 'b17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/parse-color',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/parse-color', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/passphrase-generator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/passphrase-generator', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/remove-line-from-local-variable',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/remove-line-from-local-variable', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/sort-lines-by-number-prefix-or-suffix',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/sort-lines-by-number-prefix-or-suffix', '6a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/split-string-iterator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/split-string-iterator', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/split-string-iterator-(randomized)',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/split-string-iterator-(randomized)', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-contains-count',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-contains-count', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-length',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-length', '0ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-replace',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-replace', '0fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-split-list',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-split-list', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-to-lowercase',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-to-lowercase', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-to-uppercase',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-to-uppercase', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-trim-prefix',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-trim-prefix', 'bc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/string-trim-suffix',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/string-trim-suffix', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/truncate-split-string-iterator',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/truncate-split-string-iterator', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/truncate-split-string-list',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/truncate-split-string-list', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/truncate-string',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/truncate-string', '6f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/url-query-escape',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/url-query-escape', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/url-query-unescape',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/url-query-unescape', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/strings/verify-hmac',
                component: ComponentCreator('/docs/inventor-reference/Blocks/strings/verify-hmac', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/add-thread-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/add-thread-member', '8b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/archive-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/archive-thread', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/create-forum-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/create-forum-thread', '065'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/get-forum-thread-tags',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/get-forum-thread-tags', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/join-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/join-thread', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/leave-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/leave-thread', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/lock-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/lock-thread', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/pin-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/pin-thread', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/remove-thread-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/remove-thread-member', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/start-thread-from-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/start-thread-from-channel', '863'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/start-thread-from-message',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/start-thread-from-message', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/unarchive-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/unarchive-thread', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/unlock-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/unlock-thread', '4a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/unpin-thread',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/unpin-thread', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/threads/update-forum-thread-tags',
                component: ComponentCreator('/docs/inventor-reference/Blocks/threads/update-forum-thread-tags', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/get-current-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/get-current-date-and-time', '790'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/get-snowflake-timestamp',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/get-snowflake-timestamp', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/get-specific-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/get-specific-time', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/modify-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/modify-time', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/parse-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/parse-date-and-time', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/parse-month-name',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/parse-month-name', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/parse-relative-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/parse-relative-time', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/parse-unix-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/parse-unix-time', '98f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/standard-format-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/standard-format-date-and-time', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/time/truncate-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/time/truncate-time', '893'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/ban-server-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/ban-server-member', '1c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/change-member-nickname',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/change-member-nickname', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/create-dm-channel',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/create-dm-channel', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/get-highest-role-position-of-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/get-highest-role-position-of-member', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/get-server-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/get-server-member', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/get-user',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/get-user', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/kick-server-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/kick-server-member', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/timeout-server-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/timeout-server-member', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/users/unban-server-member',
                component: ComponentCreator('/docs/inventor-reference/Blocks/users/unban-server-member', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/change-bot-status',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/change-bot-status', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/discord-api-ping',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/discord-api-ping', 'f89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/exclude-from-analytics',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/exclude-from-analytics', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/generate-uuidv4',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/generate-uuidv4', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/get-error-details',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/get-error-details', '4d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/get-token',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/get-token', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/get-uuidv7-creation-time',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/get-uuidv7-creation-time', '401'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/hex-to-int',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/hex-to-int', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/log-error',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/log-error', 'a66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/loop',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/loop', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/realtime-log',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/realtime-log', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/utilities/redact-secrets',
                component: ComponentCreator('/docs/inventor-reference/Blocks/utilities/redact-secrets', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/webhooks/create-webhook',
                component: ComponentCreator('/docs/inventor-reference/Blocks/webhooks/create-webhook', 'f56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/webhooks/delete-webhook',
                component: ComponentCreator('/docs/inventor-reference/Blocks/webhooks/delete-webhook', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/webhooks/execute-webhook',
                component: ComponentCreator('/docs/inventor-reference/Blocks/webhooks/execute-webhook', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/webhooks/get-webhooks',
                component: ComponentCreator('/docs/inventor-reference/Blocks/webhooks/get-webhooks', '4de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Blocks/webhooks/modify-webhook',
                component: ComponentCreator('/docs/inventor-reference/Blocks/webhooks/modify-webhook', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Formatting/',
                component: ComponentCreator('/docs/inventor-reference/Formatting/', 'f40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Formatting/mention',
                component: ComponentCreator('/docs/inventor-reference/Formatting/mention', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/botdash/botdash-dashboard-data',
                component: ComponentCreator('/docs/inventor-reference/Triggers/botdash/botdash-dashboard-data', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/botdash/botdash-form-submission',
                component: ComponentCreator('/docs/inventor-reference/Triggers/botdash/botdash-form-submission', '4c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/channel-created',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/channel-created', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/channel-delete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/channel-delete', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/channel-pins-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/channel-pins-update', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/channel-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/channel-update', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/typing-start',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/typing-start', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/channels/voice-state-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/channels/voice-state-update', '158'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/external-services/ifttt',
                component: ComponentCreator('/docs/inventor-reference/Triggers/external-services/ifttt', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/external-services/incoming-webhook',
                component: ComponentCreator('/docs/inventor-reference/Triggers/external-services/incoming-webhook', '2d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/external-services/new-rss-item',
                component: ComponentCreator('/docs/inventor-reference/Triggers/external-services/new-rss-item', '13f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/button-click',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/button-click', '931'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/context-menu',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/context-menu', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/dropdown-select',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/dropdown-select', 'a89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/modal-submit',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/modal-submit', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/slash-command',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/slash-command', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/interactions/slash-command-autocomplete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/interactions/slash-command-autocomplete', '290'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/invites/invite-created',
                component: ComponentCreator('/docs/inventor-reference/Triggers/invites/invite-created', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/invites/invite-deleted',
                component: ComponentCreator('/docs/inventor-reference/Triggers/invites/invite-deleted', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/members/member-ban',
                component: ComponentCreator('/docs/inventor-reference/Triggers/members/member-ban', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/members/member-join',
                component: ComponentCreator('/docs/inventor-reference/Triggers/members/member-join', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/members/member-leave',
                component: ComponentCreator('/docs/inventor-reference/Triggers/members/member-leave', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/members/member-unban',
                component: ComponentCreator('/docs/inventor-reference/Triggers/members/member-unban', 'b9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/members/member-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/members/member-update', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-delete-bulk',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-delete-bulk', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-deleted',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-deleted', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-edited',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-edited', '9e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-edited-by-bot',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-edited-by-bot', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-sent',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-sent', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/messages/message-sent-by-bot',
                component: ComponentCreator('/docs/inventor-reference/Triggers/messages/message-sent-by-bot', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/reactions/reaction-add',
                component: ComponentCreator('/docs/inventor-reference/Triggers/reactions/reaction-add', '434'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/reactions/reaction-remove',
                component: ComponentCreator('/docs/inventor-reference/Triggers/reactions/reaction-remove', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/reactions/reaction-remove-all',
                component: ComponentCreator('/docs/inventor-reference/Triggers/reactions/reaction-remove-all', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/roles/role-created',
                component: ComponentCreator('/docs/inventor-reference/Triggers/roles/role-created', 'bc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/roles/role-delete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/roles/role-delete', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/roles/role-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/roles/role-update', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-create',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-create', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-delete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-delete', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-update', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-user-add',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-user-add', '682'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-user-remove',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-events/guild-scheduled-event-user-remove', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-15-minutes',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-15-minutes', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-30-minutes',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-30-minutes', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-day',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-day', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-hour',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-hour', '5ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-minute',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-minute', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-month',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-month', '8bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/scheduled-triggers/every-week',
                component: ComponentCreator('/docs/inventor-reference/Triggers/scheduled-triggers/every-week', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/servers/audit-log-entry-created',
                component: ComponentCreator('/docs/inventor-reference/Triggers/servers/audit-log-entry-created', '520'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/servers/server-joined',
                component: ComponentCreator('/docs/inventor-reference/Triggers/servers/server-joined', '11d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/servers/server-left',
                component: ComponentCreator('/docs/inventor-reference/Triggers/servers/server-left', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/servers/server-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/servers/server-update', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/servers/webhook-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/servers/webhook-update', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/stage-instance/stage-instance-create',
                component: ComponentCreator('/docs/inventor-reference/Triggers/stage-instance/stage-instance-create', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/stage-instance/stage-instance-delete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/stage-instance/stage-instance-delete', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/stage-instance/stage-instance-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/stage-instance/stage-instance-update', '368'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/threads/thread-created',
                component: ComponentCreator('/docs/inventor-reference/Triggers/threads/thread-created', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/threads/thread-delete',
                component: ComponentCreator('/docs/inventor-reference/Triggers/threads/thread-delete', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/threads/thread-update',
                component: ComponentCreator('/docs/inventor-reference/Triggers/threads/thread-update', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Triggers/utilities/empty-trigger',
                component: ComponentCreator('/docs/inventor-reference/Triggers/utilities/empty-trigger', '570'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/number/',
                component: ComponentCreator('/docs/inventor-reference/Types/number/', 'a7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/number/float',
                component: ComponentCreator('/docs/inventor-reference/Types/number/float', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/number/unix',
                component: ComponentCreator('/docs/inventor-reference/Types/number/unix', 'ab1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/',
                component: ComponentCreator('/docs/inventor-reference/Types/string/', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/boolean',
                component: ComponentCreator('/docs/inventor-reference/Types/string/boolean', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/json',
                component: ComponentCreator('/docs/inventor-reference/Types/string/json', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/list',
                component: ComponentCreator('/docs/inventor-reference/Types/string/list', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/mention',
                component: ComponentCreator('/docs/inventor-reference/Types/string/mention', '7d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/snowflake',
                component: ComponentCreator('/docs/inventor-reference/Types/string/snowflake', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/Types/string/uuid',
                component: ComponentCreator('/docs/inventor-reference/Types/string/uuid', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
