import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a18'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '18c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '98c'),
            routes: [
              {
                path: '/docs/inventor-reference/',
                component: ComponentCreator('/docs/inventor-reference/', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/',
                component: ComponentCreator('/docs/inventor-reference/blocks/', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/create-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/create-channel', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/delete-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/delete-channel', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/delete-channel-permission',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/delete-channel-permission', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/edit-channel-permissions',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/edit-channel-permissions', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/get-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/get-channel', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/get-channels',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/get-channels', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/modify-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/modify-channel', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/move-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/move-channel', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/move-member-to-voice-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/move-member-to-voice-channel', '895'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/channels/trigger-typing-indicator',
                component: ComponentCreator('/docs/inventor-reference/blocks/channels/trigger-typing-indicator', '96a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/custom-block',
                component: ComponentCreator('/docs/inventor-reference/blocks/custom-block', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/create-row',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/create-row', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/delete-row',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/delete-row', '64d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/delete-rows-by-value',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/delete-rows-by-value', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-random-row',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-random-row', '5eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-random-row-by-value',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-random-row-by-value', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-random-rows',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-random-rows', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-random-rows-by-value',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-random-rows-by-value', '4bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-row-by-values',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-row-by-values', '5f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-row-count',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-row-count', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-rows',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-rows', '4b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-rows-by-values',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-rows-by-values', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/get-rows-sorted-by-column',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/get-rows-sorted-by-column', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/lookup-by-id',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/lookup-by-id', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/lookup-by-value-or-create',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/lookup-by-value-or-create', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/update-by-value-or-create',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/update-by-value-or-create', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/databases/update-row',
                component: ComponentCreator('/docs/inventor-reference/blocks/databases/update-row', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/emoji/create-emoji',
                component: ComponentCreator('/docs/inventor-reference/blocks/emoji/create-emoji', 'd73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/emoji/delete-emoji',
                component: ComponentCreator('/docs/inventor-reference/blocks/emoji/delete-emoji', '902'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/emoji/get-emoji',
                component: ComponentCreator('/docs/inventor-reference/blocks/emoji/get-emoji', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/emoji/get-emojis',
                component: ComponentCreator('/docs/inventor-reference/blocks/emoji/get-emojis', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/emoji/modify-emoji',
                component: ComponentCreator('/docs/inventor-reference/blocks/emoji/modify-emoji', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/advanced-conditional',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/advanced-conditional', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/async-folder',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/async-folder', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/break',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/break', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/continue',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/continue', 'fdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/exit-flow',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/exit-flow', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/folder',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/folder', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/if-statement',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/if-statement', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/is-user-collaborator',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/is-user-collaborator', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/flow-control/sleep',
                component: ComponentCreator('/docs/inventor-reference/blocks/flow-control/sleep', '2dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/create-or-update-global-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/create-or-update-global-variable', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/delete-global-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/delete-global-variable', 'c5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/get-global-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/get-global-variable', '8cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/get-global-variables',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/get-global-variables', 'a25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/global-variable-search',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/global-variable-search', 'd8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/global-variables/increment-or-decrement-global-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/global-variables/increment-or-decrement-global-variable', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/ifttt-trigger',
                component: ComponentCreator('/docs/inventor-reference/blocks/ifttt-trigger', '230'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/add-option-to-autocomplete-response-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/add-option-to-autocomplete-response-builder', '703'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/autocomplete-response-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/autocomplete-response-builder', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/autocomplete-response-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/autocomplete-response-interaction', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/defer-component-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/defer-component-interaction', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/defer-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/defer-interaction', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/embed-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/embed-reply-to-interaction', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/get-interaction-message-data',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/get-interaction-message-data', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/modal-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/modal-reply-to-interaction', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/interactions/text-reply-to-interaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/interactions/text-reply-to-interaction', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/invites/create-invite',
                component: ComponentCreator('/docs/inventor-reference/blocks/invites/create-invite', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/invites/delete-invite',
                component: ComponentCreator('/docs/inventor-reference/blocks/invites/delete-invite', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/invites/get-invite',
                component: ComponentCreator('/docs/inventor-reference/blocks/invites/get-invite', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/invites/get-invites',
                component: ComponentCreator('/docs/inventor-reference/blocks/invites/get-invites', '42c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/local-variables/append-new-line-to-local-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/local-variables/append-new-line-to-local-variable', '4a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/local-variables/create-local-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/local-variables/create-local-variable', 'a7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/local-variables/increment-or-decrement-local-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/local-variables/increment-or-decrement-local-variable', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/local-variables/update-local-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/local-variables/update-local-variable', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/absolute-value',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/absolute-value', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/factorial',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/factorial', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/format-number',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/format-number', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/if-number-is-close-to-other-number',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/if-number-is-close-to-other-number', 'c48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/logarithm',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/logarithm', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/math-operations',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/math-operations', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/math-operations-(float)',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/math-operations-(float)', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/random-number-generator',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/random-number-generator', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/rounding-(ceil)',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/rounding-(ceil)', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/rounding-(floor)',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/rounding-(floor)', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/rounding-(round)',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/rounding-(round)', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/square-root',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/square-root', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/math/truncate-float',
                component: ComponentCreator('/docs/inventor-reference/blocks/math/truncate-float', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/add-button-to-embed-button-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/add-button-to-embed-button-builder', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/add-field-to-embed-field-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/add-field-to-embed-field-builder', '8af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/add-option-to-dropdown-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/add-option-to-dropdown-builder', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/bulk-purge-messages',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/bulk-purge-messages', 'eca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/delete-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/delete-message', 'b44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/embed-button-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/embed-button-builder', 'a21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/embed-dropdown-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/embed-dropdown-builder', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/embed-field-builder',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/embed-field-builder', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/get-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/get-message', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/get-messages',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/get-messages', '5fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/get-pinned-messages',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/get-pinned-messages', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/pin-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/pin-message', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/publish-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/publish-message', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/send-or-edit-embed-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/send-or-edit-embed-message', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/send-or-edit-text-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/send-or-edit-text-message', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/send-tts-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/send-tts-message', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/messages/unpin-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/messages/unpin-message', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/escape-json-field',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/escape-json-field', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/format-json',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/format-json', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/generate-form-body',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/generate-form-body', '7b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/if-number-is-in-range',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/if-number-is-in-range', '6bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/if-value-is-number',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/if-value-is-number', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/parse-json',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/parse-json', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/network/send-network-request',
                component: ComponentCreator('/docs/inventor-reference/blocks/network/send-network-request', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/add-reaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/add-reaction', '63c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/get-reactions',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/get-reactions', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/get-reactions-count',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/get-reactions-count', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/remove-all-reactions',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/remove-all-reactions', 'e13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/remove-reaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/remove-reaction', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/reactions/remove-user-reaction',
                component: ComponentCreator('/docs/inventor-reference/blocks/reactions/remove-user-reaction', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/regex/regex-find-matches-iterator',
                component: ComponentCreator('/docs/inventor-reference/blocks/regex/regex-find-matches-iterator', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/regex/regex-find-matches-list',
                component: ComponentCreator('/docs/inventor-reference/blocks/regex/regex-find-matches-list', '6f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/regex/regex-match',
                component: ComponentCreator('/docs/inventor-reference/blocks/regex/regex-match', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/regex/regex-replace',
                component: ComponentCreator('/docs/inventor-reference/blocks/regex/regex-replace', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/assign-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/assign-role', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/create-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/create-role', '7db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/delete-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/delete-role', '69e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/get-@everyone-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/get-@everyone-role', '23b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/get-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/get-role', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/get-roles',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/get-roles', 'f3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/remove-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/remove-role', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/roles/update-role',
                component: ComponentCreator('/docs/inventor-reference/blocks/roles/update-role', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/scheduled-events/create-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/blocks/scheduled-events/create-scheduled-event', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/scheduled-events/delete-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/blocks/scheduled-events/delete-scheduled-event', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/scheduled-events/get-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/blocks/scheduled-events/get-scheduled-event', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/scheduled-events/get-scheduled-events',
                component: ComponentCreator('/docs/inventor-reference/blocks/scheduled-events/get-scheduled-events', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/scheduled-events/modify-scheduled-event',
                component: ComponentCreator('/docs/inventor-reference/blocks/scheduled-events/modify-scheduled-event', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/get-server',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/get-server', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/get-server-bans',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/get-server-bans', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/get-server-count',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/get-server-count', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/get-server-members',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/get-server-members', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/get-servers',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/get-servers', '565'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/leave-server',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/leave-server', 'dab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/servers/update-server',
                component: ComponentCreator('/docs/inventor-reference/blocks/servers/update-server', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/base64-decode',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/base64-decode', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/base64-encode',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/base64-encode', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/bcrypt-compare-hash',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/bcrypt-compare-hash', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/bcrypt-hash-string',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/bcrypt-hash-string', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/convert-html-to-markdown',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/convert-html-to-markdown', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/generate-uuidv7',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/generate-uuidv7', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/hex-to-int',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/hex-to-int', '862'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/int-to-hex',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/int-to-hex', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/md5-hash',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/md5-hash', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/parse-color',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/parse-color', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/passphrase-generator',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/passphrase-generator', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/remove-line-from-local-variable',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/remove-line-from-local-variable', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/sort-lines-by-number-prefix-or-suffix',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/sort-lines-by-number-prefix-or-suffix', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/split-string-iterator',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/split-string-iterator', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/split-string-iterator-(randomized)',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/split-string-iterator-(randomized)', '727'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-contains-count',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-contains-count', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-length',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-length', '1f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-replace',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-replace', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-split-list',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-split-list', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-to-lowercase',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-to-lowercase', 'a76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-to-uppercase',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-to-uppercase', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-trim-prefix',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-trim-prefix', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/string-trim-suffix',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/string-trim-suffix', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/truncate-split-string-iterator',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/truncate-split-string-iterator', 'be5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/truncate-split-string-list',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/truncate-split-string-list', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/truncate-string',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/truncate-string', 'd5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/url-query-escape',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/url-query-escape', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/url-query-unescape',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/url-query-unescape', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/strings/verify-hmac',
                component: ComponentCreator('/docs/inventor-reference/blocks/strings/verify-hmac', 'd4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/add-thread-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/add-thread-member', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/archive-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/archive-thread', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/create-forum-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/create-forum-thread', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/get-forum-thread-tags',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/get-forum-thread-tags', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/join-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/join-thread', 'd99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/leave-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/leave-thread', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/lock-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/lock-thread', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/pin-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/pin-thread', '39d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/remove-thread-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/remove-thread-member', '8e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/start-thread-from-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/start-thread-from-channel', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/start-thread-from-message',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/start-thread-from-message', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/unarchive-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/unarchive-thread', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/unlock-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/unlock-thread', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/unpin-thread',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/unpin-thread', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/threads/update-forum-thread-tags',
                component: ComponentCreator('/docs/inventor-reference/blocks/threads/update-forum-thread-tags', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/get-current-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/get-current-date-and-time', '8f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/get-snowflake-timestamp',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/get-snowflake-timestamp', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/get-specific-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/get-specific-time', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/modify-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/modify-time', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/parse-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/parse-date-and-time', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/parse-month-name',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/parse-month-name', '691'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/parse-relative-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/parse-relative-time', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/parse-unix-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/parse-unix-time', '2a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/standard-format-date-and-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/standard-format-date-and-time', '8d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/time/truncate-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/time/truncate-time', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/ban-server-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/ban-server-member', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/change-member-nickname',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/change-member-nickname', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/create-dm-channel',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/create-dm-channel', '2db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/get-highest-role-position-of-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/get-highest-role-position-of-member', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/get-server-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/get-server-member', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/get-user',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/get-user', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/kick-server-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/kick-server-member', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/timeout-server-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/timeout-server-member', '1a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/users/unban-server-member',
                component: ComponentCreator('/docs/inventor-reference/blocks/users/unban-server-member', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/change-bot-status',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/change-bot-status', 'bd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/discord-api-ping',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/discord-api-ping', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/exclude-from-analytics',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/exclude-from-analytics', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/generate-uuidv4',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/generate-uuidv4', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/get-error-details',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/get-error-details', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/get-token',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/get-token', 'a40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/get-uuidv7-creation-time',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/get-uuidv7-creation-time', '595'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/hex-to-int',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/hex-to-int', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/log-error',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/log-error', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/loop',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/loop', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/realtime-log',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/realtime-log', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/utilities/redact-secrets',
                component: ComponentCreator('/docs/inventor-reference/blocks/utilities/redact-secrets', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/webhooks/create-webhook',
                component: ComponentCreator('/docs/inventor-reference/blocks/webhooks/create-webhook', '629'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/webhooks/delete-webhook',
                component: ComponentCreator('/docs/inventor-reference/blocks/webhooks/delete-webhook', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/webhooks/execute-webhook',
                component: ComponentCreator('/docs/inventor-reference/blocks/webhooks/execute-webhook', 'ee7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/webhooks/get-webhooks',
                component: ComponentCreator('/docs/inventor-reference/blocks/webhooks/get-webhooks', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/blocks/webhooks/modify-webhook',
                component: ComponentCreator('/docs/inventor-reference/blocks/webhooks/modify-webhook', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/formatting/',
                component: ComponentCreator('/docs/inventor-reference/formatting/', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/formatting/mention',
                component: ComponentCreator('/docs/inventor-reference/formatting/mention', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/',
                component: ComponentCreator('/docs/inventor-reference/triggers/', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/botdash/botdash-dashboard-data',
                component: ComponentCreator('/docs/inventor-reference/triggers/botdash/botdash-dashboard-data', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/botdash/botdash-form-submission',
                component: ComponentCreator('/docs/inventor-reference/triggers/botdash/botdash-form-submission', 'bb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/channel-created',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/channel-created', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/channel-delete',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/channel-delete', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/channel-pins-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/channel-pins-update', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/channel-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/channel-update', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/typing-start',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/typing-start', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/channels/voice-state-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/channels/voice-state-update', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/external-services/ifttt',
                component: ComponentCreator('/docs/inventor-reference/triggers/external-services/ifttt', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/external-services/incoming-webhook',
                component: ComponentCreator('/docs/inventor-reference/triggers/external-services/incoming-webhook', 'c4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/external-services/new-rss-item',
                component: ComponentCreator('/docs/inventor-reference/triggers/external-services/new-rss-item', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/button-click',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/button-click', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/context-menu',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/context-menu', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/dropdown-select',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/dropdown-select', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/modal-submit',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/modal-submit', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/slash-command',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/slash-command', '4d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/slash-command copy',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/slash-command copy', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/interactions/slash-command-autocomplete',
                component: ComponentCreator('/docs/inventor-reference/triggers/interactions/slash-command-autocomplete', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/invites/invite-created',
                component: ComponentCreator('/docs/inventor-reference/triggers/invites/invite-created', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/invites/invite-deleted',
                component: ComponentCreator('/docs/inventor-reference/triggers/invites/invite-deleted', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/members/member-ban',
                component: ComponentCreator('/docs/inventor-reference/triggers/members/member-ban', '955'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/members/member-join',
                component: ComponentCreator('/docs/inventor-reference/triggers/members/member-join', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/members/member-leave',
                component: ComponentCreator('/docs/inventor-reference/triggers/members/member-leave', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/members/member-unban',
                component: ComponentCreator('/docs/inventor-reference/triggers/members/member-unban', '2a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/members/member-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/members/member-update', '166'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-delete-bulk',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-delete-bulk', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-deleted',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-deleted', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-edited',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-edited', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-edited-by-bot',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-edited-by-bot', 'e7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-sent',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-sent', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/messages/message-sent-by-bot',
                component: ComponentCreator('/docs/inventor-reference/triggers/messages/message-sent-by-bot', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/reactions/reaction-add',
                component: ComponentCreator('/docs/inventor-reference/triggers/reactions/reaction-add', 'e39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/reactions/reaction-remove',
                component: ComponentCreator('/docs/inventor-reference/triggers/reactions/reaction-remove', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/reactions/reaction-remove-all',
                component: ComponentCreator('/docs/inventor-reference/triggers/reactions/reaction-remove-all', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/roles/role-created',
                component: ComponentCreator('/docs/inventor-reference/triggers/roles/role-created', '633'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/roles/role-delete',
                component: ComponentCreator('/docs/inventor-reference/triggers/roles/role-delete', '7a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/roles/role-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/roles/role-update', 'ba6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-create',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-create', '068'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-delete',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-delete', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-update', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-user-add',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-user-add', '462'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-user-remove',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-events/guild-scheduled-event-user-remove', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-15-minutes',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-15-minutes', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-30-minutes',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-30-minutes', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-day',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-day', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-hour',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-hour', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-minute',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-minute', '2cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-month',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-month', '509'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/scheduled-triggers/every-week',
                component: ComponentCreator('/docs/inventor-reference/triggers/scheduled-triggers/every-week', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/servers/audit-log-entry-created',
                component: ComponentCreator('/docs/inventor-reference/triggers/servers/audit-log-entry-created', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/servers/server-joined',
                component: ComponentCreator('/docs/inventor-reference/triggers/servers/server-joined', 'bba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/servers/server-left',
                component: ComponentCreator('/docs/inventor-reference/triggers/servers/server-left', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/servers/server-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/servers/server-update', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/servers/webhook-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/servers/webhook-update', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/stage-instance/stage-instance-create',
                component: ComponentCreator('/docs/inventor-reference/triggers/stage-instance/stage-instance-create', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/stage-instance/stage-instance-delete',
                component: ComponentCreator('/docs/inventor-reference/triggers/stage-instance/stage-instance-delete', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/stage-instance/stage-instance-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/stage-instance/stage-instance-update', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/threads/thread-created',
                component: ComponentCreator('/docs/inventor-reference/triggers/threads/thread-created', 'aec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/threads/thread-delete',
                component: ComponentCreator('/docs/inventor-reference/triggers/threads/thread-delete', '4be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/threads/thread-update',
                component: ComponentCreator('/docs/inventor-reference/triggers/threads/thread-update', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/triggers/utilities/empty-trigger',
                component: ComponentCreator('/docs/inventor-reference/triggers/utilities/empty-trigger', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/',
                component: ComponentCreator('/docs/inventor-reference/types/', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/number/',
                component: ComponentCreator('/docs/inventor-reference/types/number/', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/number/float',
                component: ComponentCreator('/docs/inventor-reference/types/number/float', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/number/unix',
                component: ComponentCreator('/docs/inventor-reference/types/number/unix', '8ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/',
                component: ComponentCreator('/docs/inventor-reference/types/string/', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/boolean',
                component: ComponentCreator('/docs/inventor-reference/types/string/boolean', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/json',
                component: ComponentCreator('/docs/inventor-reference/types/string/json', '57f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/list',
                component: ComponentCreator('/docs/inventor-reference/types/string/list', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/mention',
                component: ComponentCreator('/docs/inventor-reference/types/string/mention', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/snowflake',
                component: ComponentCreator('/docs/inventor-reference/types/string/snowflake', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventor-reference/types/string/uuid',
                component: ComponentCreator('/docs/inventor-reference/types/string/uuid', '8e6'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
